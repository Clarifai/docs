import subprocess
import tempfile
import os
from typing import Annotated, Any, Dict

from clarifai.runners.models.mcp_class import MCPModelClass
from fastmcp import FastMCP
from pydantic import Field

server = FastMCP(
    "python-execution-server",
    instructions="Execute Python code using local Python environment",
    stateless_http=True,
)


def execute_python_code_fresh_container(code: str) -> Dict[str, Any]:
    """
    Execute Python code using local Python environment.
    Each execution gets a clean temporary file.
    """
    try:
        # Create a temporary file for the code
        with tempfile.NamedTemporaryFile(mode='w', suffix='.py', delete=False) as temp_file:
            temp_file.write(code)
            temp_path = temp_file.name

        try:
            # Execute the script using subprocess
            result = subprocess.run(
                ["python", temp_path],
                capture_output=True,
                text=True,
                check=False
            )

            return {
                "stdout": result.stdout,
                "stderr": result.stderr,
                "status": result.returncode,
            }
        finally:
            # Clean up temp file
            try:
                os.unlink(temp_path)
            except Exception:
                pass

    except Exception as e:
        return {"stdout": "", "stderr": f"Execution error: {str(e)}", "status": 1}


def execute_with_packages(code: str, packages: list = None) -> Dict[str, Any]:
    """
    Execute Python code with pre-installed packages.
    This is the key enhancement over #1 - allows package installation.
    """
    if packages:
        # Prepend package installation to the code
        install_code = "\n".join(
            [
                f"import subprocess; subprocess.run(['pip', 'install', '{pkg}'], check=True)"
                for pkg in packages
            ]
        )
        full_code = f"{install_code}\n\n{code}"
    else:
        full_code = code

    return execute_python_code_fresh_container(full_code)


@server.tool(
    "execute_with_packages", description="Execute Python code with packages pre-installed"
)
def execute_with_packages_tool(
    code: Annotated[str, Field(description="Python code to execute")],
    packages: Annotated[
        list[str], Field(description="List of packages to install before execution")
    ] = None,
) -> str:
    """
    Execute Python code with specified packages installed on top of the base Python image.
    This enables users to work with the full Python ecosystem.
    Example: execute_with_packages("import requests; print(requests.get('https://httpbin.org/json').json())", ["requests"])
    """
    if not code.strip():
        return "Error: No code provided"

    result = execute_with_packages(code, packages or [])

    if result["status"] == 0:
        output = "--- Execution Successful ---\n"
        if packages:
            output += f"Packages installed: {', '.join(packages)}\n\n"
        if result["stdout"].strip():
            output += result["stdout"]
        else:
            output += "(No output - use print() to see results)"
    else:
        output = f"--- Execution Error (status: {result['status']}) ---\n"
        if result["stderr"].strip():
            output += result["stderr"]
        if result["stdout"].strip():
            output += "\n--- Output ---\n" + result["stdout"]

    return output


class MyModel(MCPModelClass):
    def get_server(self) -> FastMCP:
        """Return the FastMCP server instance."""
        return server