from __future__ import annotations
import os, re
from dataclasses import dataclass, field
from typing import Dict, List, Optional, Union
from urllib.parse import urlparse, parse_qs, unquote

import httpx  # type: ignore
from bs4 import BeautifulSoup  # type: ignore
from mcp.server.fastmcp import FastMCP, Context  # type: ignore

USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0 Safari/537.36"
)

try:
    # Optional SDK for DuckDuckGo (pip install duckduckgo_search)
   from ddgs import DDGS  # type: ignore
except ImportError:
    DDGS = None

# ---------------- Data Models ----------------
@dataclass
class SearchResult:
    id: int
    title: str
    url: str
    snippet: str

@dataclass
class PageCache:
    url: str
    text_lines: List[str]

@dataclass
class SessionState:
    last_query: Optional[str] = None
    results: List[SearchResult] = field(default_factory=list)
    opened_pages: Dict[str, PageCache] = field(default_factory=dict)
    last_open_url: Optional[str] = None

async def ddg_sdk_search(query: str, topn: int, region: str, safesearch: str) -> List[SearchResult]:
    """
    Use duckduckgo_search AsyncDDGS instead of manual HTML scraping.
    Falls back to manual method if SDK not available.
    """
    if DDGS is None:
        raise RuntimeError("duckduckgo_search not installed")
    # The library expects: region like 'wt-wt', safesearch one of: 'moderate','off','strict'
    safe = safesearch.lower()
    if safe not in {"moderate", "off", "strict"}:
        safe = "moderate"
    results: List[SearchResult] = []
    try:
        results_gen = DDGS().text(query, region=region, safesearch=safe, max_results=topn)
        for r in results_gen:
            # r keys commonly: title, href, body
            title = (r.get("title") or "").strip()
            url = (r.get("href") or "").strip()
            snippet = (r.get("body") or "").strip()
            if title and url.startswith("http"):
                results.append(SearchResult(id=len(results) + 1, title=title, url=url, snippet=snippet))
            if len(results) >= topn:
                break
    except Exception as e:
        print(f"[ddg_sdk_search] Exception: {e}")
        raise
    return results

def _clean_duckduckgo_href(raw: str) -> str:
    print(f"[_clean_duckduckgo_href] raw={raw}")
    if not raw:
        return ""
    if raw.startswith("//"):
        raw = "https:" + raw
    p = urlparse(raw)
    if p.netloc.endswith("duckduckgo.com"):
        if p.path.startswith("/l/"):
            qs = parse_qs(p.query)
            if qs.get("uddg"):
                target = unquote(qs["uddg"][0])
                if "duckduckgo.com" in urlparse(target).netloc:
                    return ""
                return target
        if p.path.endswith(".js") or p.path.startswith("/y.js"):
            return ""
    if not p.scheme:
        return ""
    return raw

def parse_duckduckgo(html: str, topn: int) -> List[SearchResult]:
    print(f"[parse_duckduckgo] Parsing HTML, topn={topn}")
    soup = BeautifulSoup(html, "html.parser")
    results: List[SearchResult] = []
    for block in soup.select("div.result"):
        a = block.select_one("a.result__a")
        if not a:
            continue
        title = a.get_text(" ", strip=True)
        url = _clean_duckduckgo_href(a.get("href") or "")
        if not url or "duckduckgo.com" in urlparse(url).netloc:
            continue
        snip_el = block.select_one(".result__snippet, .snippet")
        snippet = snip_el.get_text(" ", strip=True) if snip_el else ""
        if not title or not url.startswith("http"):
            continue
        results.append(SearchResult(id=len(results) + 1, title=title, url=url, snippet=snippet))
        if len(results) >= topn:
            break
    print(f"[parse_duckduckgo] Found {len(results)} results")
    return results

def format_search_results(results: List[SearchResult]) -> str:
    print(f"[format_search_results] Formatting {len(results)} results")
    if not results:
        return "No results."
    return "\n\n".join(
        f"[{r.id}] {r.title}\nURL: {r.url}\nSnippet: {r.snippet or '(no snippet)'}"
        for r in results
    )

async def fetch_page(url: str, timeout: int = 20) -> PageCache:
    print(f"[fetch_page] Fetching URL: {url} with timeout={timeout}")
    headers = {"User-Agent": USER_AGENT, "Accept-Language": "en-US,en;q=0.9"}
    try:
        async with httpx.AsyncClient(timeout=timeout, follow_redirects=True) as client:
            r = await client.get(url, headers=headers)
            print(f"[fetch_page] HTTP status: {r.status_code}")
            r.raise_for_status()
            html = r.text
    except Exception as e:
        print(f"[fetch_page] Exception: {e}")
        raise
    soup = BeautifulSoup(html, "html.parser")
    for tag in soup(["script", "style", "noscript"]):
        tag.decompose()
    text = soup.get_text("\n")
    lines = [ln.rstrip() for ln in text.splitlines() if ln.strip()]
    print(f"[fetch_page] Extracted {len(lines)} lines")
    return PageCache(url=url, text_lines=lines)

# ---------------- FastMCP Server (in-process) ----------------
mcp = FastMCP(
    name="duckduckgo-browser",
    instructions=r"""
Tool for browsing.
The `cursor` appears in brackets before each browsing display: `[{cursor}]`.
Cite information from the tool using the following format:
`【{cursor}†L{line_start}(-L{line_end})?】`, for example: `【6†L9-L11】` or `【8†L3】`. 
Do not quote more than 10 words directly from the tool output.
sources=web
""".strip(),
    port=8001,
)

@mcp.tool(
    name="search",
    title="Search for information",
    description=
    "Searches for information related to `query` and displays `topn` results.",
)
async def search(query: str, topn: int = 10,
                 region: str = "wt-wt", safesearch: str = "moderate") -> str:
    print(f"[search] Query: {query}, topn={topn}, region={region}, safesearch={safesearch}")
    
    try:
        print("[search] Using DuckDuckGo SDK")
        results = await ddg_sdk_search(query, topn, region, safesearch)
           
    except Exception as e:  # noqa: BLE001
        print(f"[search] Exception: {e}")
        return f"Search error: {e}"
    return format_search_results(results)

@mcp.tool(
    name="open",
    title="Open a link or page",
    description="""
Opens the link `id` from the page indicated by `cursor` starting at line number `loc`, showing `num_lines` lines.
Valid link ids are displayed with the formatting: `【{id}†.*】`.
If `cursor` is not provided, the most recent page is implied.
If `id` is a string, it is treated as a fully qualified URL associated with `source`.
If `loc` is not provided, the viewport will be positioned at the beginning of the document or centered on the most relevant passage, if available.
Use this function without `id` to scroll to a new location of an opened page.
""".strip(),
)
async def open(id: Union[int, str] = -1,
               loc: int = 0, num_lines: int = 60) -> str:
    print(f"[open] id={id}, loc={loc}, num_lines={num_lines}")
    if isinstance(id, int) and id != -1:
        print("[open] Invalid id (int but not -1)")
        return "Result id not found. Run search."
    else:
        if not isinstance(id, str) or not id.startswith("http"):
            print("[open] Invalid id (not a valid URL)")
            return "Provide result id or full http(s) URL."
        url = id
    try:
        page = await fetch_page(url)
    except Exception as e:  # noqa: BLE001
        print(f"[open] Exception: {e}")
        return f"Open failed: {e}"
    total = len(page.text_lines)
    if loc < 0: loc = 0
    if num_lines <= 0: num_lines = 60
    end = min(total, loc + num_lines)
    body = "\n".join(f"L{loc+i+1}: {line}" for i, line in enumerate(page.text_lines[loc:end]))
    print(f"[open] Returning lines {loc+1}-{end} of {total}")
    return f"URL: {url}\nLines {loc+1}-{end} of {total}\n" + "-"*60 + "\n" + body

@mcp.tool(
    name="find",
    title="Find pattern in page",
    description=
    "Finds exact matches of `pattern` in the current page, or the page given by `cursor`.",
)
async def find(pattern: str, url: Optional[str] = None, max_matches: int = 50) -> str:
    print(f"[find] pattern={pattern}, url={url}, max_matches={max_matches}")
    if not url:
        print("[find] No URL provided")
        return "No page open."
    try:
        page = await fetch_page(url)
    except Exception as e:
        print(f"[find] Exception: {e}")
        return f"Fetch failed: {e}"
    rx = re.compile(re.escape(pattern), re.IGNORECASE)
    hits: List[str] = []
    for i, line in enumerate(page.text_lines, start=1):
        if rx.search(line):
            hits.append(f"L{i}: {rx.sub(lambda m: '**'+m.group(0)+'**', line)}")
            if len(hits) >= max_matches:
                break
    print(f"[find] Found {len(hits)} matches")
    return "\n".join(hits) if hits else f"No matches for '{pattern}'."

@mcp.resource("config://browser_search_settings")
def get_browser_search_settings() -> Dict[str, str]:
    return {
        "available_tools": ["search", "open", "find"],
    }
    
@mcp.prompt()
def web_browsing_prompt(task_type: str) -> str:
    """
    Generate a usage prompt for web browsing and extraction tasks, tailored to the available tools in this file.
    """
    prompts = {
        "content_research": (
            "To research web content:\n"
            "1. Use the 'search' tool to find relevant pages.\n"
            "2. Use 'open' to read the content of a result or URL.\n"
            "3. Use 'find' to locate specific information within an opened page."
        ),
        "data_extraction": (
            "To extract structured data:\n"
            "1. Use 'search' to find pages with the data you need.\n"
            "2. Use 'open' to load the page content.\n"
            "3. Use 'find' to extract or locate specific patterns or fields."
        ),
        "website_analysis": (
            "To analyze a website:\n"
            "1. Use 'search' to discover relevant pages.\n"
            "2. Use 'open' to inspect the content of those pages.\n"
            "3. Use 'find' to search for keywords, features, or patterns."
        ),
        "competitive_research": (
            "To research competitors:\n"
            "1. Use 'search' to find competitor websites or pages.\n"
            "2. Use 'open' to review their content.\n"
            "3. Use 'find' to compare features, pricing, or other details."
        ),
        "market_research": (
            "To conduct market research:\n"
            "1. Use 'search' for industry trends and news.\n"
            "2. Use 'open' to read relevant articles or reports.\n"
            "3. Use 'find' to extract market insights or statistics."
        ),
        "content_monitoring": (
            "To monitor web content:\n"
            "1. Use 'search' to discover new or updated content.\n"
            "2. Use 'open' to review the latest pages.\n"
            "3. Use 'find' to detect changes or specific updates."
        ),
    }
    # Default fallback if task_type is not recognized
    return prompts.get(
        task_type,
        (
            "Web browsing guidance:\n"
            "• Use 'search' to find information.\n"
            "• Use 'open' to read a page.\n"
            "• Use 'find' to locate details within a page."
        ),
    )


from clarifai.runners.models.mcp_class import MCPModelClass

class MyBrowserSearchToolClass(MCPModelClass):
    def get_server(self) -> FastMCP:
        return mcp

# Main function to run the MCP server
if __name__ == "__main__":
    import asyncio
    import sys
    
    # Simple approach - just run the server
    try:
        asyncio.run(mcp.run())
    except KeyboardInterrupt:
        print("Server stopped by user", file=sys.stderr)
        sys.exit(0)
    except Exception as e:
        print(f"Server error: {e}", file=sys.stderr)
        sys.exit(1)