import os
from typing import Annotated

from clarifai.utils.logging import logger
from fastmcp import FastMCP  # use fastmcp v2 not the built in mcp
from pydantic import Field

server = FastMCP(
    "google-drive-mcp-server",
    instructions="Google Drive operations for file storage, sharing, and collaboration",
    stateless_http=True,
)


def get_drive_service():
    """Create and return a Google Drive service object."""
    try:
        from google.auth.transport.requests import Request
        from google.oauth2.credentials import Credentials
        from google_auth_oauthlib.flow import InstalledAppFlow
        from googleapiclient.discovery import build

        # Define the scope
        SCOPES = ['https://www.googleapis.com/auth/drive']

        creds = None
        # Check for existing token
        if os.path.exists('token.json'):
            creds = Credentials.from_authorized_user_file('token.json', SCOPES)

        # If there are no valid credentials, use mock data
        if not creds or not creds.valid:
            logger.warning("Google Drive credentials not available, using mock data")
            return None

        service = build('drive', 'v3', credentials=creds)
        return service
    except ImportError:
        logger.error("Google API client libraries not available")
        return None
    except Exception as e:
        logger.error(f"Failed to create Drive service: {str(e)}")
        return None


def handle_drive_operation(operation_func):
    """Decorator to handle Drive operations with proper error handling."""

    def wrapper(*args, **kwargs):
        try:
            service = get_drive_service()
            if not service:
                # Return mock data if service not available
                return operation_func(None, *args, **kwargs)

            return operation_func(service, *args, **kwargs)
        except Exception as e:
            return f"Google Drive operation failed: {str(e)}"

    return wrapper


@server.tool("drive_list_files", description="List files in Google Drive")
def drive_list_files(
    folder_id: Annotated[str, Field(description="Folder ID to list files from (optional)")] = "",
    file_type: Annotated[
        str,
        Field(
            description="Filter by file type (document, spreadsheet, presentation, folder, etc.)"
        ),
    ] = "",
    max_results: Annotated[
        int, Field(description="Maximum number of files to return", ge=1, le=100)
    ] = 20,
    order_by: Annotated[
        str, Field(description="Order by: name, modifiedTime, createdTime")
    ] = "modifiedTime desc",
) -> str:
    """List files in Google Drive."""

    @handle_drive_operation
    def _list_files(service, folder_id, file_type, max_results, order_by):
        if not service:
            # Mock response
            mock_files = [
                {
                    "id": "1abc123",
                    "name": "Project Document.docx",
                    "mimeType": "application/vnd.google-apps.document",
                    "modifiedTime": "2024-01-15T10:30:00Z",
                    "size": "2048576",
                    "owners": [{"displayName": "John Doe"}],
                },
                {
                    "id": "2def456",
                    "name": "Budget Spreadsheet.xlsx",
                    "mimeType": "application/vnd.google-apps.spreadsheet",
                    "modifiedTime": "2024-01-14T14:22:00Z",
                    "size": "1048576",
                    "owners": [{"displayName": "Jane Smith"}],
                },
                {
                    "id": "3ghi789",
                    "name": "Presentation.pptx",
                    "mimeType": "application/vnd.google-apps.presentation",
                    "modifiedTime": "2024-01-13T09:15:00Z",
                    "size": "5242880",
                    "owners": [{"displayName": "Bob Johnson"}],
                },
            ]

            output = f"Google Drive Files (showing {len(mock_files)} files):\n\n"
            for file in mock_files:
                file_size_mb = int(file.get('size', 0)) / (1024 * 1024)
                output += f"• {file['name']}\n"
                output += f"  ID: {file['id']}\n"
                output += f"  Type: {file['mimeType'].split('.')[-1] if '.' in file['mimeType'] else 'Google App'}\n"
                output += f"  Size: {file_size_mb:.2f} MB\n"
                output += f"  Modified: {file['modifiedTime']}\n"
                output += f"  Owner: {file['owners'][0]['displayName']}\n\n"

            return output

        # Real implementation would use service.files().list()
        query_parts = []

        if folder_id:
            query_parts.append(f"'{folder_id}' in parents")

        if file_type:
            mime_type_map = {
                "document": "application/vnd.google-apps.document",
                "spreadsheet": "application/vnd.google-apps.spreadsheet",
                "presentation": "application/vnd.google-apps.presentation",
                "folder": "application/vnd.google-apps.folder",
                "pdf": "application/pdf",
            }
            if file_type in mime_type_map:
                query_parts.append(f"mimeType='{mime_type_map[file_type]}'")

        query = " and ".join(query_parts) if query_parts else None

        results = (
            service.files()
            .list(
                q=query,
                pageSize=max_results,
                orderBy=order_by,
                fields="files(id,name,mimeType,size,modifiedTime,owners)",
            )
            .execute()
        )

        files = results.get('files', [])

        if not files:
            return "No files found in Google Drive"

        output = f"Google Drive Files ({len(files)} files):\n\n"
        for file in files:
            file_size = int(file.get('size', 0))
            file_size_mb = file_size / (1024 * 1024) if file_size > 0 else 0

            output += f"• {file['name']}\n"
            output += f"  ID: {file['id']}\n"
            output += f"  Type: {file['mimeType'].split('.')[-1] if '.' in file['mimeType'] else 'Google App'}\n"
            output += f"  Size: {file_size_mb:.2f} MB\n"
            output += f"  Modified: {file['modifiedTime']}\n"
            if file.get('owners'):
                output += f"  Owner: {file['owners'][0]['displayName']}\n"
            output += "\n"

        return output

    return _list_files(folder_id, file_type, max_results, order_by)


@server.tool("drive_upload_file", description="Upload a file to Google Drive")
def drive_upload_file(
    file_path: Annotated[str, Field(description="Local file path to upload")],
    file_name: Annotated[str, Field(description="Name for the file in Drive (optional)")] = "",
    folder_id: Annotated[str, Field(description="Folder ID to upload to (optional)")] = "",
    description: Annotated[str, Field(description="File description")] = "",
) -> str:
    """Upload a file to Google Drive."""

    @handle_drive_operation
    def _upload_file(service, file_path, file_name, folder_id, description):
        if not os.path.exists(file_path):
            return f"Error: File '{file_path}' does not exist"

        if not service:
            # Mock response
            file_name = file_name or os.path.basename(file_path)
            file_size = os.path.getsize(file_path)
            file_size_mb = file_size / (1024 * 1024)

            return (
                f"Mock upload successful!\n"
                f"File: {file_name}\n"
                f"Size: {file_size_mb:.2f} MB\n"
                f"Drive ID: mock-file-id-{hash(file_path) % 10000}\n"
                f"Note: This is a mock response. Install Google API libraries for actual uploads."
            )

        from googleapiclient.http import MediaFileUpload

        file_name = file_name or os.path.basename(file_path)

        file_metadata = {'name': file_name, 'description': description}

        if folder_id:
            file_metadata['parents'] = [folder_id]

        media = MediaFileUpload(file_path, resumable=True)

        file = (
            service.files()
            .create(body=file_metadata, media_body=media, fields='id,name,size,webViewLink')
            .execute()
        )

        file_size = int(file.get('size', 0))
        file_size_mb = file_size / (1024 * 1024) if file_size > 0 else 0

        return (
            f"Successfully uploaded '{file_name}' to Google Drive\n"
            f"File ID: {file['id']}\n"
            f"Size: {file_size_mb:.2f} MB\n"
            f"View Link: {file.get('webViewLink', 'N/A')}"
        )

    return _upload_file(file_path, file_name, folder_id, description)


@server.tool("drive_download_file", description="Download a file from Google Drive")
def drive_download_file(
    file_id: Annotated[str, Field(description="Google Drive file ID")],
    local_path: Annotated[str, Field(description="Local path to save the file")] = "",
    export_format: Annotated[
        str, Field(description="Export format for Google Docs (pdf, docx, etc.)")
    ] = "",
) -> str:
    """Download a file from Google Drive."""

    @handle_drive_operation
    def _download_file(service, file_id, local_path, export_format):
        if not service:
            # Mock response
            local_path = local_path or f"downloaded_file_{file_id}"
            return (
                f"Mock download successful!\n"
                f"File ID: {file_id}\n"
                f"Saved to: {local_path}\n"
                f"Note: This is a mock response. Install Google API libraries for actual downloads."
            )

        # Get file metadata
        file_metadata = service.files().get(fileId=file_id).execute()
        file_name = file_metadata['name']

        if not local_path:
            local_path = file_name

        # Check if it's a Google Workspace file that needs to be exported
        google_mime_types = [
            'application/vnd.google-apps.document',
            'application/vnd.google-apps.spreadsheet',
            'application/vnd.google-apps.presentation',
        ]

        if file_metadata['mimeType'] in google_mime_types:
            if not export_format:
                export_format = 'pdf'  # Default export format

            export_mime_types = {
                'pdf': 'application/pdf',
                'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            }

            request = service.files().export_media(
                fileId=file_id,
                mimeType=export_mime_types.get(export_format, export_mime_types['pdf']),
            )
        else:
            request = service.files().get_media(fileId=file_id)

        # Download the file
        import io

        fh = io.BytesIO()
        downloader = MediaIoBaseDownload(fh, request)
        done = False
        while done is False:
            status, done = downloader.next_chunk()

        # Save to local file
        with open(local_path, 'wb') as f:
            f.write(fh.getvalue())

        file_size = os.path.getsize(local_path)
        file_size_mb = file_size / (1024 * 1024)

        return (
            f"Successfully downloaded '{file_name}' from Google Drive\n"
            f"Saved to: {local_path}\n"
            f"Size: {file_size_mb:.2f} MB"
        )

    return _download_file(file_id, local_path, export_format)


@server.tool("drive_share_file", description="Share a file or folder in Google Drive")
def drive_share_file(
    file_id: Annotated[str, Field(description="Google Drive file or folder ID")],
    email: Annotated[str, Field(description="Email address to share with (optional)")] = "",
    role: Annotated[
        str, Field(description="Permission role: reader, writer, commenter")
    ] = "reader",
    anyone_can_view: Annotated[
        bool, Field(description="Make file viewable by anyone with the link")
    ] = False,
) -> str:
    """Share a file or folder in Google Drive."""

    @handle_drive_operation
    def _share_file(service, file_id, email, role, anyone_can_view):
        if not service:
            # Mock response
            share_url = f"https://drive.google.com/file/d/{file_id}/view"
            return (
                f"Mock sharing successful!\n"
                f"File ID: {file_id}\n"
                f"Share URL: {share_url}\n"
                f"Permissions: {role}\n"
                f"Note: This is a mock response. Install Google API libraries for actual sharing."
            )

        permissions_created = []

        # Share with specific email if provided
        if email:
            permission = {'type': 'user', 'role': role, 'emailAddress': email}

            result = (
                service.permissions()
                .create(fileId=file_id, body=permission, sendNotificationEmail=True)
                .execute()
            )

            permissions_created.append(f"Shared with {email} as {role}")

        # Make viewable by anyone with link if requested
        if anyone_can_view:
            permission = {'type': 'anyone', 'role': 'reader'}

            service.permissions().create(fileId=file_id, body=permission).execute()

            permissions_created.append("Made viewable by anyone with the link")

        # Get the file's web view link
        file_metadata = service.files().get(fileId=file_id, fields='name,webViewLink').execute()

        result = f"Successfully shared '{file_metadata['name']}'\n"
        result += f"File ID: {file_id}\n"
        result += f"Share URL: {file_metadata.get('webViewLink', 'N/A')}\n"

        if permissions_created:
            result += "\nPermissions:\n"
            for perm in permissions_created:
                result += f"  • {perm}\n"

        return result

    return _share_file(file_id, email, role, anyone_can_view)


@server.tool("drive_create_folder", description="Create a new folder in Google Drive")
def drive_create_folder(
    folder_name: Annotated[str, Field(description="Name for the new folder")],
    parent_folder_id: Annotated[str, Field(description="Parent folder ID (optional)")] = "",
    description: Annotated[str, Field(description="Folder description")] = "",
) -> str:
    """Create a new folder in Google Drive."""

    @handle_drive_operation
    def _create_folder(service, folder_name, parent_folder_id, description):
        if not service:
            # Mock response
            return (
                f"Mock folder creation successful!\n"
                f"Folder name: {folder_name}\n"
                f"Folder ID: mock-folder-id-{hash(folder_name) % 10000}\n"
                f"Note: This is a mock response. Install Google API libraries for actual folder creation."
            )

        folder_metadata = {
            'name': folder_name,
            'mimeType': 'application/vnd.google-apps.folder',
            'description': description,
        }

        if parent_folder_id:
            folder_metadata['parents'] = [parent_folder_id]

        folder = (
            service.files().create(body=folder_metadata, fields='id,name,webViewLink').execute()
        )

        return (
            f"Successfully created folder '{folder_name}'\n"
            f"Folder ID: {folder['id']}\n"
            f"View Link: {folder.get('webViewLink', 'N/A')}"
        )

    return _create_folder(folder_name, parent_folder_id, description)


@server.tool("drive_delete_file", description="Delete a file or folder from Google Drive")
def drive_delete_file(
    file_id: Annotated[str, Field(description="Google Drive file or folder ID to delete")],
    permanent: Annotated[bool, Field(description="Permanently delete (bypass trash)")] = False,
) -> str:
    """Delete a file or folder from Google Drive."""

    @handle_drive_operation
    def _delete_file(service, file_id, permanent):
        if not service:
            # Mock response
            return (
                f"Mock deletion successful!\n"
                f"File ID: {file_id}\n"
                f"Permanent: {permanent}\n"
                f"Note: This is a mock response. Install Google API libraries for actual deletion."
            )

        # Get file metadata before deletion
        try:
            file_metadata = service.files().get(fileId=file_id, fields='name').execute()
            file_name = file_metadata['name']
        except:
            return f"Error: File with ID '{file_id}' not found"

        if permanent:
            service.files().delete(fileId=file_id).execute()
            return f"Permanently deleted '{file_name}' (ID: {file_id})"
        else:
            # Move to trash
            service.files().update(fileId=file_id, body={'trashed': True}).execute()
            return f"Moved '{file_name}' to trash (ID: {file_id})"

    return _delete_file(file_id, permanent)


@server.tool("drive_search_files", description="Search for files in Google Drive")
def drive_search_files(
    query: Annotated[str, Field(description="Search query")],
    file_type: Annotated[str, Field(description="File type filter")] = "",
    max_results: Annotated[int, Field(description="Maximum number of results", ge=1, le=100)] = 10,
) -> str:
    """Search for files in Google Drive."""

    @handle_drive_operation
    def _search_files(service, query, file_type, max_results):
        if not service:
            # Mock response
            mock_results = [
                {
                    "id": "search1",
                    "name": f"Document about {query}.docx",
                    "mimeType": "application/vnd.google-apps.document",
                },
                {
                    "id": "search2",
                    "name": f"{query} Spreadsheet.xlsx",
                    "mimeType": "application/vnd.google-apps.spreadsheet",
                },
            ]

            output = f"Search results for '{query}' (mock data):\n\n"
            for i, file in enumerate(mock_results, 1):
                output += f"{i}. {file['name']}\n"
                output += f"   ID: {file['id']}\n"
                output += f"   Type: {file['mimeType'].split('.')[-1]}\n\n"

            return output

        search_query = f"name contains '{query}'"

        if file_type:
            mime_type_map = {
                "document": "application/vnd.google-apps.document",
                "spreadsheet": "application/vnd.google-apps.spreadsheet",
                "presentation": "application/vnd.google-apps.presentation",
            }
            if file_type in mime_type_map:
                search_query += f" and mimeType='{mime_type_map[file_type]}'"

        results = (
            service.files()
            .list(
                q=search_query, pageSize=max_results, fields="files(id,name,mimeType,modifiedTime)"
            )
            .execute()
        )

        files = results.get('files', [])

        if not files:
            return f"No files found matching '{query}'"

        output = f"Search results for '{query}' ({len(files)} files):\n\n"
        for i, file in enumerate(files, 1):
            output += f"{i}. {file['name']}\n"
            output += f"   ID: {file['id']}\n"
            output += f"   Type: {file['mimeType'].split('.')[-1] if '.' in file['mimeType'] else 'Google App'}\n"
            output += f"   Modified: {file['modifiedTime']}\n\n"

        return output

    return _search_files(query, file_type, max_results)


# Static resource
@server.resource("config://drive_settings")
def get_drive_settings():
    return {
        "api_version": "v3",
        "scopes": ["https://www.googleapis.com/auth/drive"],
        "supported_formats": ["pdf", "docx", "xlsx", "pptx"],
        "max_upload_size": "5TB",
        "permission_roles": ["reader", "writer", "commenter", "owner"],
    }


# Dynamic resource template
@server.resource("drive://file/{file_id}/info")
def get_file_info(file_id: str):
    return {
        "file_id": file_id,
        "note": "Use drive_list_files or other tools to get actual file information",
    }


@server.prompt()
def drive_workflow_prompt(workflow_type: str) -> str:
    """Generate prompts for Google Drive workflows."""
    prompts = {
        "collaboration": "For collaboration workflow:\n1. Use drive_upload_file to share documents\n2. Use drive_share_file to set permissions\n3. Use drive_create_folder for organization\n4. Grant appropriate roles (reader, writer, commenter)",
        "backup": "For backup workflow:\n1. Use drive_create_folder for organized storage\n2. Use drive_upload_file to backup important files\n3. Consider using drive_share_file for team access\n4. Regular sync using automated tools",
        "document_management": "For document management:\n1. Create folder structure with drive_create_folder\n2. Upload files with drive_upload_file\n3. Use drive_search_files to find documents\n4. Share selectively with drive_share_file",
    }

    return prompts.get(workflow_type, f"Google Drive workflow guidance for: {workflow_type}")


from clarifai.runners.models.mcp_class import MCPModelClass


class MyModelClass(MCPModelClass):
    def get_server(self) -> FastMCP:
        return server