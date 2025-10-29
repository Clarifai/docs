import io
import tarfile
from typing import Annotated, Any, Dict

import docker
from clarifai.runners.models.mcp_class import MCPModelClass
from fastmcp import FastMCP
from pydantic import Field

server = FastMCP(
    "python-execution-server",
    instructions="Execute Python code securely in Docker containers",
    stateless_http=True,
)

_docker_client = None


def get_docker_client():
    """Get or create Docker client."""
    global _docker_client
    if _docker_client is None:
        try:
            _docker_client = docker.from_env()
            _docker_client.ping()
        except Exception as e:
            # Try alternative connection methods for different Docker setups
            try:
                # TODO: replace base_url with your local machine's docker socket 
                _docker_client = docker.DockerClient(
                    base_url='unix:///Users/YOUR_USER_NAME/.rd/docker.sock'
                )
                _docker_client.ping()
            except:
                try:
                    _docker_client = docker.DockerClient(base_url='unix://var/run/docker.sock')
                    _docker_client.ping()
                except:
                    raise Exception(f"Cannot connect to Docker daemon. Original error: {e}")
    return _docker_client


def execute_python_code_fresh_container(code: str) -> Dict[str, Any]:
    """
    Execute Python code in a fresh Docker container (OpenAI approach).
    Each execution gets a completely clean environment.
    """
    try:
        client = get_docker_client()

        # Pull Python image if not present
        try:
            client.images.get("python:3.11")
        except docker.errors.ImageNotFound:
            client.images.pull("python:3.11")

        # Create a temporary tar archive containing the script (like OpenAI)
        script_name = "script.py"
        tarstream = io.BytesIO()
        with tarfile.open(fileobj=tarstream, mode="w") as tar:
            script_bytes = code.encode("utf-8")
            tarinfo = tarfile.TarInfo(name=script_name)
            tarinfo.size = len(script_bytes)
            tar.addfile(tarinfo, io.BytesIO(script_bytes))
        tarstream.seek(0)

        # Start fresh container
        container = client.containers.create("python:3.11", command="sleep infinity", detach=True)

        try:
            container.start()
            # Put the script into the container
            container.put_archive(path="/tmp", data=tarstream.read())
            # Execute the script
            exec_result = container.exec_run(f"python /tmp/{script_name}")

            return {
                "stdout": exec_result.output.decode("utf-8", errors='replace'),
                "stderr": "",
                "status": exec_result.exit_code,
            }
        finally:
            # Always clean up container
            container.remove(force=True)

    except docker.errors.ContainerError as e:
        return {"stdout": "", "stderr": str(e), "status": 1}
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