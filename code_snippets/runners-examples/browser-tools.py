from typing import Annotated
from urllib.parse import urljoin, urlparse

from fastmcp import FastMCP  # use fastmcp v2 not the built in mcp
from pydantic import Field

server = FastMCP(
    "browser-tools-mcp-server",
    instructions="Web browsing, scraping, and search tools for gathering information from the internet",
    stateless_http=True,
)


def make_http_request(
    url: str, method: str = "GET", headers: dict = None, timeout: int = 30
) -> tuple[bool, dict]:
    """Make an HTTP request with proper error handling."""
    import requests
    from requests.adapters import HTTPAdapter
    from urllib3.util.retry import Retry

    try:
        # Setup session with retries
        session = requests.Session()
        retry_strategy = Retry(
            total=3,
            backoff_factor=1,
            status_forcelist=[429, 500, 502, 503, 504],
        )
        adapter = HTTPAdapter(max_retries=retry_strategy)
        session.mount("http://", adapter)
        session.mount("https://", adapter)

        # Default headers
        default_headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
        }
        if headers:
            default_headers.update(headers)

        response = session.request(method, url, headers=default_headers, timeout=timeout)

        return True, {
            "status_code": response.status_code,
            "headers": dict(response.headers),
            "text": response.text,
            "url": response.url,
        }
    except Exception as e:
        return False, {"error": str(e)}


@server.tool("fetch_webpage", description="Fetch and return the content of a webpage")
def fetch_webpage(
    url: Annotated[str, Field(description="URL of the webpage to fetch")],
    include_headers: Annotated[
        bool, Field(description="Include HTTP headers in response")
    ] = False,
    max_length: Annotated[
        int, Field(description="Maximum content length to return", ge=100, le=50000)
    ] = 10000,
) -> str:
    """Fetch the content of a webpage and return the text."""
    success, response = make_http_request(url)

    if not success:
        return f"Error fetching webpage: {response.get('error', 'Unknown error')}"

    content = response.get('text', '')

    # Truncate if too long
    if len(content) > max_length:
        content = (
            content[:max_length]
            + f"\n\n... (content truncated, showing first {max_length} characters)"
        )

    result = f"URL: {response.get('url', url)}\n"
    result += f"Status Code: {response.get('status_code')}\n\n"

    if include_headers:
        headers = response.get('headers', {})
        result += "Headers:\n"
        for key, value in headers.items():
            result += f"  {key}: {value}\n"
        result += "\n"

    result += "Content:\n"
    result += content

    return result


@server.tool("extract_text", description="Extract clean text from HTML content")
def extract_text(
    url: Annotated[str, Field(description="URL of the webpage")],
    remove_scripts: Annotated[bool, Field(description="Remove script and style tags")] = True,
    max_length: Annotated[
        int, Field(description="Maximum text length to return", ge=100, le=50000)
    ] = 5000,
) -> str:
    """Extract clean text from a webpage by removing HTML tags."""
    success, response = make_http_request(url)

    if not success:
        return f"Error fetching webpage: {response.get('error', 'Unknown error')}"

    try:
        from bs4 import BeautifulSoup

        soup = BeautifulSoup(response.get('text', ''), 'html.parser')

        # Remove script and style elements if requested
        if remove_scripts:
            for script in soup(["script", "style"]):
                script.decompose()

        # Extract text
        text = soup.get_text()

        # Clean up whitespace
        lines = (line.strip() for line in text.splitlines())
        chunks = (phrase.strip() for line in lines for phrase in line.split("  "))
        text = ' '.join(chunk for chunk in chunks if chunk)

        # Truncate if too long
        if len(text) > max_length:
            text = (
                text[:max_length]
                + f"\n\n... (text truncated, showing first {max_length} characters)"
            )

        return f"URL: {response.get('url', url)}\nExtracted Text:\n\n{text}"

    except ImportError:
        return "Error: BeautifulSoup4 not available for HTML parsing"
    except Exception as e:
        return f"Error extracting text: {str(e)}"


@server.tool("search_google", description="Search Google and return results")
def search_google(
    query: Annotated[str, Field(description="Search query")],
    num_results: Annotated[int, Field(description="Number of results to return", ge=1, le=20)] = 5,
    safe_search: Annotated[bool, Field(description="Enable safe search")] = True,
) -> str:
    """Search Google and return search results. Note: This is a mock implementation."""
    # This is a simplified mock implementation
    # In production, you'd use Google Custom Search API or similar service

    # Mock search results based on common queries
    mock_results = {
        "python": [
            {
                "title": "Welcome to Python.org",
                "url": "https://www.python.org/",
                "snippet": "The official home of the Python Programming Language",
            },
            {
                "title": "Python Tutorial",
                "url": "https://docs.python.org/3/tutorial/",
                "snippet": "Python is an easy to learn, powerful programming language",
            },
            {
                "title": "Learn Python",
                "url": "https://www.learnpython.org/",
                "snippet": "Learn Python programming with interactive tutorials",
            },
        ],
        "machine learning": [
            {
                "title": "Machine Learning | Coursera",
                "url": "https://www.coursera.org/learn/machine-learning",
                "snippet": "Learn Machine Learning online with courses from top universities",
            },
            {
                "title": "Machine Learning - Wikipedia",
                "url": "https://en.wikipedia.org/wiki/Machine_learning",
                "snippet": "Machine learning is a method of data analysis that automates analytical model building",
            },
            {
                "title": "Introduction to Machine Learning",
                "url": "https://scikit-learn.org/",
                "snippet": "Simple and efficient tools for predictive data analysis",
            },
        ],
    }

    # Find relevant results
    results = []
    query_lower = query.lower()

    for key, search_results in mock_results.items():
        if any(word in query_lower for word in key.split()):
            results.extend(search_results)

    if not results:
        # Generic results for unknown queries
        results = [
            {
                "title": f"Search results for: {query}",
                "url": "https://www.google.com/search?q=" + query.replace(" ", "+"),
                "snippet": f"Various results related to {query}",
            },
            {
                "title": f"Wikipedia: {query}",
                "url": f"https://en.wikipedia.org/wiki/{query.replace(' ', '_')}",
                "snippet": f"Wikipedia article about {query}",
            },
        ]

    # Limit results
    results = results[:num_results]

    # Format output
    output = f"Google Search Results for '{query}':\n\n"
    for i, result in enumerate(results, 1):
        output += f"{i}. {result['title']}\n"
        output += f"   URL: {result['url']}\n"
        output += f"   {result['snippet']}\n\n"

    return output


@server.tool("extract_links", description="Extract all links from a webpage")
def extract_links(
    url: Annotated[str, Field(description="URL of the webpage")],
    filter_domain: Annotated[
        bool, Field(description="Only return links from the same domain")
    ] = False,
    max_links: Annotated[
        int, Field(description="Maximum number of links to return", ge=1, le=100)
    ] = 20,
) -> str:
    """Extract all links from a webpage."""
    success, response = make_http_request(url)

    if not success:
        return f"Error fetching webpage: {response.get('error', 'Unknown error')}"

    try:
        from bs4 import BeautifulSoup

        soup = BeautifulSoup(response.get('text', ''), 'html.parser')

        # Find all links
        links = []
        base_domain = urlparse(url).netloc

        for link in soup.find_all('a', href=True):
            href = link['href']
            text = link.get_text(strip=True)

            # Convert relative URLs to absolute
            if href.startswith('/'):
                href = urljoin(url, href)
            elif not href.startswith(('http://', 'https://')):
                href = urljoin(url, href)

            # Filter by domain if requested
            if filter_domain:
                link_domain = urlparse(href).netloc
                if link_domain != base_domain:
                    continue

            links.append({"url": href, "text": text or "No text"})

        # Remove duplicates and limit
        unique_links = []
        seen_urls = set()
        for link in links:
            if link["url"] not in seen_urls:
                unique_links.append(link)
                seen_urls.add(link["url"])
                if len(unique_links) >= max_links:
                    break

        # Format output
        output = f"Links extracted from {url} ({len(unique_links)} unique links):\n\n"
        for i, link in enumerate(unique_links, 1):
            output += f"{i}. {link['text']}\n"
            output += f"   URL: {link['url']}\n\n"

        return output

    except ImportError:
        return "Error: BeautifulSoup4 not available for HTML parsing"
    except Exception as e:
        return f"Error extracting links: {str(e)}"


@server.tool("take_screenshot", description="Take a screenshot of a webpage")
def take_screenshot(
    url: Annotated[str, Field(description="URL of the webpage")],
    width: Annotated[int, Field(description="Screenshot width", ge=100, le=3840)] = 1280,
    height: Annotated[int, Field(description="Screenshot height", ge=100, le=2160)] = 720,
    full_page: Annotated[bool, Field(description="Capture full page")] = False,
) -> str:
    """Take a screenshot of a webpage using headless browser (mock implementation)."""
    # This is a mock implementation
    # In production, you'd use Selenium, Playwright, or similar

    try:
        # Mock screenshot functionality
        screenshot_path = f"/tmp/screenshot_{url.replace('://', '_').replace('/', '_')}.png"

        # Simulate screenshot creation
        return (
            f"Screenshot would be saved to: {screenshot_path}\n"
            f"URL: {url}\n"
            f"Dimensions: {width}x{height}\n"
            f"Full page: {full_page}\n\n"
            f"Note: This is a mock implementation. In production, this would use:\n"
            f"- Selenium WebDriver\n"
            f"- Playwright\n"
            f"- Puppeteer\n"
            f"- Or similar headless browser automation tools"
        )

    except Exception as e:
        return f"Error taking screenshot: {str(e)}"


@server.tool(
    "check_website_status",
    description="Check if a website is accessible and get status information",
)
def check_website_status(
    url: Annotated[str, Field(description="URL to check")],
    check_ssl: Annotated[bool, Field(description="Check SSL certificate validity")] = True,
) -> str:
    """Check website accessibility and status."""
    success, response = make_http_request(url, timeout=10)

    if not success:
        return f"Website is not accessible: {response.get('error', 'Unknown error')}"

    status_code = response.get('status_code')
    headers = response.get('headers', {})

    result = f"Website Status for {url}:\n\n"
    result += f"Status Code: {status_code}\n"
    result += f"Status: {'✓ Accessible' if 200 <= status_code < 400 else '✗ Error'}\n"
    result += f"Server: {headers.get('server', 'Unknown')}\n"
    result += f"Content-Type: {headers.get('content-type', 'Unknown')}\n"
    result += f"Content-Length: {headers.get('content-length', 'Unknown')}\n"
    result += f"Last-Modified: {headers.get('last-modified', 'Unknown')}\n"

    if check_ssl and url.startswith('https://'):
        result += "\nSSL Status: ✓ HTTPS enabled"

    return result


@server.tool("search_webpage_content", description="Search for specific content within a webpage")
def search_webpage_content(
    url: Annotated[str, Field(description="URL of the webpage")],
    search_term: Annotated[str, Field(description="Term to search for")],
    case_sensitive: Annotated[bool, Field(description="Case sensitive search")] = False,
    max_matches: Annotated[
        int, Field(description="Maximum number of matches to return", ge=1, le=50)
    ] = 10,
) -> str:
    """Search for specific content within a webpage."""
    success, response = make_http_request(url)

    if not success:
        return f"Error fetching webpage: {response.get('error', 'Unknown error')}"

    try:
        from bs4 import BeautifulSoup

        soup = BeautifulSoup(response.get('text', ''), 'html.parser')
        text = soup.get_text()

        # Perform search
        if not case_sensitive:
            text = text.lower()
            search_term = search_term.lower()

        matches = []
        lines = text.split('\n')

        for line_num, line in enumerate(lines, 1):
            if search_term in line:
                # Get context around the match
                context_start = max(0, line.find(search_term) - 50)
                context_end = min(len(line), line.find(search_term) + len(search_term) + 50)
                context = line[context_start:context_end]

                matches.append(
                    {"line": line_num, "context": context.strip(), "full_line": line.strip()}
                )

                if len(matches) >= max_matches:
                    break

        if not matches:
            return f"No matches found for '{search_term}' in {url}"

        result = f"Found {len(matches)} matches for '{search_term}' in {url}:\n\n"
        for i, match in enumerate(matches, 1):
            result += f"{i}. Line {match['line']}: ...{match['context']}...\n\n"

        return result

    except ImportError:
        return "Error: BeautifulSoup4 not available for HTML parsing"
    except Exception as e:
        return f"Error searching content: {str(e)}"


# Static resource
@server.resource("config://browser_settings")
def get_browser_settings():
    return {
        "default_timeout": 30,
        "max_content_length": 10000,
        "supported_formats": ["html", "text", "json"],
        "user_agent": "MCP-Browser-Tools/1.0",
        "screenshot_formats": ["png", "jpg"],
    }


# Dynamic resource template
@server.resource("site://{domain}/info")
def get_site_info(domain: str):
    return {
        "domain": domain,
        "note": "Use check_website_status tool to get actual site information",
    }


@server.prompt()
def web_research_prompt(research_type: str) -> str:
    """Generate prompts for web research tasks."""
    prompts = {
        "content": "To research web content:\n1. Use search_google to find relevant pages\n2. Use fetch_webpage to get page content\n3. Use extract_text for clean text extraction\n4. Use search_webpage_content to find specific information",
        "links": "To analyze website links:\n1. Use extract_links to get all links\n2. Filter by domain if needed\n3. Check link status with check_website_status",
        "monitoring": "To monitor websites:\n1. Use check_website_status for availability\n2. Use fetch_webpage to check content changes\n3. Use take_screenshot for visual monitoring",
    }

    return prompts.get(research_type, f"Web research guidance for: {research_type}")


from clarifai.runners.models.mcp_class import MCPModelClass


class MyModelClass(MCPModelClass):
    def get_server(self) -> FastMCP:
        return server