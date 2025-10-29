import os
from typing import Annotated, Any

from clarifai.utils.logging import logger
from fastmcp import FastMCP  # use fastmcp v2 not the built in mcp
from pydantic import Field

server = FastMCP(
    "postgres-mcp-server",
    instructions="PostgreSQL database operations and management",
    stateless_http=True,
)


def get_postgres_connection(host: str, port: int, user: str, password: str, database: str):
    """Create a PostgreSQL connection. Returns connection object or None if failed."""
    try:
        import psycopg2

        connection = psycopg2.connect(
            host=host, port=port, user=user, password=password, database=database
        )
        connection.autocommit = True
        return connection
    except Exception as e:
        logger.error(f"PostgreSQL connection failed: {str(e)}")
        return None


def execute_postgres_query(connection, query: str, params: tuple = None) -> tuple[bool, Any]:
    """Execute a PostgreSQL query and return results."""
    try:
        from psycopg2.extras import RealDictCursor

        cursor = connection.cursor(cursor_factory=RealDictCursor)
        cursor.execute(query, params or ())

        # Handle different query types
        if query.strip().upper().startswith(('SELECT', 'WITH', 'SHOW', 'EXPLAIN')):
            results = cursor.fetchall()
            # Convert to list of dicts for JSON serialization
            results = [dict(row) for row in results]
            cursor.close()
            return True, results
        else:
            # For INSERT, UPDATE, DELETE, etc.
            affected_rows = cursor.rowcount
            cursor.close()
            return True, {"affected_rows": affected_rows, "message": "Query executed successfully"}

    except Exception as e:
        return False, {"error": str(e)}


@server.tool("postgres_connect", description="Test PostgreSQL database connection")
def postgres_connect(
    host: Annotated[str, Field(description="PostgreSQL host")] = "localhost",
    port: Annotated[int, Field(description="PostgreSQL port", ge=1, le=65535)] = 5432,
    user: Annotated[str, Field(description="PostgreSQL username")] = "postgres",
    password: Annotated[str, Field(description="PostgreSQL password")] = "",
    database: Annotated[str, Field(description="Database name")] = "postgres",
) -> str:
    """Test connection to PostgreSQL database."""
    connection = get_postgres_connection(host, port, user, password, database)

    if connection:
        try:
            cursor = connection.cursor()
            cursor.execute("SELECT version();")
            version = cursor.fetchone()[0]
            cursor.close()
            connection.close()
            return f"Successfully connected to PostgreSQL database '{database}' on {host}:{port}\nPostgreSQL Version: {version}"
        except Exception as e:
            connection.close()
            return f"Connected but failed to get version: {str(e)}"
    else:
        return f"Failed to connect to PostgreSQL database '{database}' on {host}:{port}"


@server.tool("postgres_execute_query", description="Execute a PostgreSQL query")
def postgres_execute_query(
    query: Annotated[str, Field(description="SQL query to execute")],
    host: Annotated[str, Field(description="PostgreSQL host")] = "localhost",
    port: Annotated[int, Field(description="PostgreSQL port", ge=1, le=65535)] = 5432,
    user: Annotated[str, Field(description="PostgreSQL username")] = "postgres",
    password: Annotated[str, Field(description="PostgreSQL password")] = "",
    database: Annotated[str, Field(description="Database name")] = "postgres",
    limit: Annotated[
        int, Field(description="Limit results for SELECT queries", ge=1, le=1000)
    ] = 100,
) -> str:
    """Execute a SQL query on PostgreSQL database."""
    connection = get_postgres_connection(host, port, user, password, database)

    if not connection:
        return f"Failed to connect to PostgreSQL database '{database}' on {host}:{port}"

    try:
        # Add LIMIT to SELECT queries if not already present
        print("QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ")
        print(query)

        if query.strip().upper().startswith('SELECT') and 'LIMIT' not in query.upper():
            l = limit
            query = f"{query.strip().rstrip(';')} LIMIT {l};"

        print(query)

        success, result = execute_postgres_query(connection, query)
        connection.close()

        if not success:
            return f"Query failed: {result.get('error', 'Unknown error')}"

        if isinstance(result, list):
            # Format SELECT results
            if not result:
                return "Query executed successfully. No rows returned."

            # Create a formatted table
            output = f"Query results ({len(result)} rows):\n\n"

            if result:
                # Get column names
                columns = list(result[0].keys())

                # Calculate column widths
                col_widths = {}
                for col in columns:
                    col_widths[col] = max(
                        len(col), max(len(str(row.get(col, ''))) for row in result)
                    )

                # Create header
                header = " | ".join(col.ljust(col_widths[col]) for col in columns)
                separator = " | ".join("-" * col_widths[col] for col in columns)

                output += header + "\n"
                output += separator + "\n"

                # Add data rows
                for row in result:
                    row_str = " | ".join(
                        str(row.get(col, '')).ljust(col_widths[col]) for col in columns
                    )
                    output += row_str + "\n"

            return output
        else:
            # Non-SELECT query result
            return f"Query executed successfully. {result.get('message', '')} Affected rows: {result.get('affected_rows', 0)}"

    except Exception as e:
        if connection:
            connection.close()
        return f"Error executing query: {str(e)}"


@server.tool("postgres_list_tables", description="List all tables in the database")
def postgres_list_tables(
    host: Annotated[str, Field(description="PostgreSQL host")] = "localhost",
    port: Annotated[int, Field(description="PostgreSQL port", ge=1, le=65535)] = 5432,
    user: Annotated[str, Field(description="PostgreSQL username")] = "postgres",
    password: Annotated[str, Field(description="PostgreSQL password")] = "",
    database: Annotated[str, Field(description="Database name")] = "postgres",
    schema: Annotated[str, Field(description="Schema name")] = "public",
) -> str:
    """List all tables in the PostgreSQL database."""
    query = f"""
    SELECT table_name, table_type
    FROM information_schema.tables
    WHERE table_schema = '{schema}'
    ORDER BY table_name;
    """
    return postgres_execute_query(query, host, port, user, password, database)


@server.tool("postgres_describe_table", description="Describe the structure of a table")
def postgres_describe_table(
    table_name: Annotated[str, Field(description="Table name to describe")],
    host: Annotated[str, Field(description="PostgreSQL host")] = "localhost",
    port: Annotated[int, Field(description="PostgreSQL port", ge=1, le=65535)] = 5432,
    user: Annotated[str, Field(description="PostgreSQL username")] = "postgres",
    password: Annotated[str, Field(description="PostgreSQL password")] = "",
    database: Annotated[str, Field(description="Database name")] = "postgres",
    schema: Annotated[str, Field(description="Schema name")] = "public",
) -> str:
    """Describe the structure of a PostgreSQL table."""
    query = f"""
    SELECT
        column_name,
        data_type,
        character_maximum_length,
        is_nullable,
        column_default
    FROM information_schema.columns
    WHERE table_schema = '{schema}' AND table_name = '{table_name}'
    ORDER BY ordinal_position;
    """
    return postgres_execute_query(query, host, port, user, password, database)


@server.tool("postgres_list_databases", description="List all databases")
def postgres_list_databases(
    host: Annotated[str, Field(description="PostgreSQL host")] = "localhost",
    port: Annotated[int, Field(description="PostgreSQL port", ge=1, le=65535)] = 5432,
    user: Annotated[str, Field(description="PostgreSQL username")] = "postgres",
    password: Annotated[str, Field(description="PostgreSQL password")] = "",
) -> str:
    """List all databases on the PostgreSQL server."""
    # Use postgres database as default for this query
    query = "SELECT datname as database_name FROM pg_database WHERE datistemplate = false ORDER BY datname;"
    return postgres_execute_query(query, host, port, user, password, "postgres")


@server.tool("postgres_table_stats", description="Get statistics for a table")
def postgres_table_stats(
    table_name: Annotated[str, Field(description="Table name")],
    host: Annotated[str, Field(description="PostgreSQL host")] = "localhost",
    port: Annotated[int, Field(description="PostgreSQL port", ge=1, le=65535)] = 5432,
    user: Annotated[str, Field(description="PostgreSQL username")] = "postgres",
    password: Annotated[str, Field(description="PostgreSQL password")] = "",
    database: Annotated[str, Field(description="Database name")] = "postgres",
    schema: Annotated[str, Field(description="Schema name")] = "public",
) -> str:
    """Get statistics for a PostgreSQL table."""
    query = f"""
    SELECT
        schemaname,
        tablename,
        attname as column_name,
        n_distinct,
        correlation
    FROM pg_stats
    WHERE schemaname = '{schema}' AND tablename = '{table_name}'
    ORDER BY attname;
    """
    return postgres_execute_query(query, host, port, user, password, database)


@server.tool("postgres_table_size", description="Get size information for tables")
def postgres_table_size(
    host: Annotated[str, Field(description="PostgreSQL host")] = "localhost",
    port: Annotated[int, Field(description="PostgreSQL port", ge=1, le=65535)] = 5432,
    user: Annotated[str, Field(description="PostgreSQL username")] = "postgres",
    password: Annotated[str, Field(description="PostgreSQL password")] = "",
    database: Annotated[str, Field(description="Database name")] = "postgres",
    schema: Annotated[str, Field(description="Schema name")] = "public",
) -> str:
    """Get size information for all tables in the schema."""
    query = f"""
    SELECT
        table_name,
        pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) AS size,
        pg_size_pretty(pg_relation_size(schemaname||'.'||tablename)) AS table_size,
        pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename) - pg_relation_size(schemaname||'.'||tablename)) AS index_size
    FROM pg_tables
    WHERE schemaname = '{schema}'
    ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;
    """
    return postgres_execute_query(query, host, port, user, password, database)


@server.tool("postgres_active_connections", description="Show active database connections")
def postgres_active_connections(
    host: Annotated[str, Field(description="PostgreSQL host")] = "localhost",
    port: Annotated[int, Field(description="PostgreSQL port", ge=1, le=65535)] = 5432,
    user: Annotated[str, Field(description="PostgreSQL username")] = "postgres",
    password: Annotated[str, Field(description="PostgreSQL password")] = "",
    database: Annotated[str, Field(description="Database name")] = "postgres",
) -> str:
    """Show active connections to the PostgreSQL database."""
    query = """
    SELECT
        pid,
        usename,
        datname,
        client_addr,
        application_name,
        state,
        query_start,
        state_change
    FROM pg_stat_activity
    WHERE state = 'active'
    ORDER BY query_start DESC;
    """
    return postgres_execute_query(query, host, port, user, password, database)


@server.tool("postgres_create_backup", description="Create a backup using pg_dump")
def postgres_create_backup(
    backup_type: Annotated[str, Field(description="Backup type: 'database' or 'table'")],
    target_name: Annotated[str, Field(description="Database name or table name")],
    host: Annotated[str, Field(description="PostgreSQL host")] = "localhost",
    port: Annotated[int, Field(description="PostgreSQL port", ge=1, le=65535)] = 5432,
    user: Annotated[str, Field(description="PostgreSQL username")] = "postgres",
    password: Annotated[str, Field(description="PostgreSQL password")] = "",
    database: Annotated[str, Field(description="Database name (for table backup)")] = "postgres",
) -> str:
    """Create a backup using pg_dump."""
    import subprocess

    try:
        env = os.environ.copy()
        env['PGPASSWORD'] = password

        if backup_type == "database":
            cmd = [
                "pg_dump",
                f"--host={host}",
                f"--port={port}",
                f"--username={user}",
                "--format=custom",
                "--no-password",
                target_name,
            ]
            backup_file = f"{target_name}_backup.dump"
        elif backup_type == "table":
            cmd = [
                "pg_dump",
                f"--host={host}",
                f"--port={port}",
                f"--username={user}",
                "--format=custom",
                "--no-password",
                f"--table={target_name}",
                database,
            ]
            backup_file = f"{database}_{target_name}_backup.dump"
        else:
            return "Error: backup_type must be 'database' or 'table'"

        # Execute pg_dump
        with open(backup_file, 'wb') as f:
            result = subprocess.run(
                cmd, stdout=f, stderr=subprocess.PIPE, env=env, timeout=300, check=False
            )

        if result.returncode == 0:
            return f"Backup created successfully: {backup_file}"
        else:
            return f"Backup failed: {result.stderr.decode()}"

    except Exception as e:
        return f"Backup failed: {str(e)}"


@server.tool("postgres_analyze_table", description="Analyze a table to update statistics")
def postgres_analyze_table(
    table_name: Annotated[str, Field(description="Table name to analyze")],
    host: Annotated[str, Field(description="PostgreSQL host")] = "localhost",
    port: Annotated[int, Field(description="PostgreSQL port", ge=1, le=65535)] = 5432,
    user: Annotated[str, Field(description="PostgreSQL username")] = "postgres",
    password: Annotated[str, Field(description="PostgreSQL password")] = "",
    database: Annotated[str, Field(description="Database name")] = "postgres",
) -> str:
    """Analyze a PostgreSQL table to update statistics."""
    return postgres_execute_query(f"ANALYZE {table_name};", host, port, user, password, database)


# Static resource
@server.resource("config://postgres_settings")
def get_postgres_settings():
    return {
        "default_port": 5432,
        "default_host": "localhost",
        "default_schema": "public",
        "max_query_limit": 1000,
        "supported_operations": [
            "SELECT",
            "INSERT",
            "UPDATE",
            "DELETE",
            "CREATE",
            "DROP",
            "ALTER",
        ],
        "backup_formats": ["custom", "plain", "tar"],
    }


# Dynamic resource template
@server.resource("database://{database_name}/schema_info")
def get_database_schema_info(database_name: str):
    return {
        "database": database_name,
        "note": "Use postgres_list_tables and postgres_describe_table tools to get actual schema information",
    }


@server.prompt()
def postgres_query_prompt(query_type: str) -> str:
    """Generate prompts for PostgreSQL query construction."""
    prompts = {
        "select": "To write a SELECT query:\nSELECT column1, column2 FROM schema.table_name WHERE condition ORDER BY column LIMIT n;",
        "insert": "To write an INSERT query:\nINSERT INTO schema.table_name (column1, column2) VALUES (value1, value2);",
        "update": "To write an UPDATE query:\nUPDATE schema.table_name SET column1 = value1 WHERE condition;",
        "delete": "To write a DELETE query:\nDELETE FROM schema.table_name WHERE condition;",
        "create": "To create a table:\nCREATE TABLE schema.table_name (column1 datatype constraints, column2 datatype constraints);",
        "index": "To create an index:\nCREATE INDEX index_name ON schema.table_name (column1, column2);",
        "jsonb": "For JSONB operations:\nSELECT data->>'key' FROM table WHERE data @> '{\"key\": \"value\"}';",
    }

    return prompts.get(query_type, f"PostgreSQL query guidance for: {query_type}")


from clarifai.runners.models.mcp_class import MCPModelClass


class MyModelClass(MCPModelClass):
    def get_server(self) -> FastMCP:
        return server