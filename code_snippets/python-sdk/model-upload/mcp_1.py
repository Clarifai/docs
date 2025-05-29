from typing import Annotated

from fastmcp import FastMCP  # use fastmcp v2 not the built in mcp
from pydantic import Field

server = FastMCP(
    "perplexity-mcp-server",
    instructions="A Perplexity-style question answering and information service",
    stateless_http=True,
)


@server.tool(
    "ask_question", description="Ask a question and get a comprehensive answer with sources"
)
def ask_question(
    question: Annotated[str, Field(description="The question to ask")],
    search_focus: Annotated[
        str, Field(description="Focus area for search (academic, news, general)")
    ] = "general",
) -> str:
    """
    Simulate asking a question to Perplexity AI for comprehensive answers.
    In a real implementation, this would call the Perplexity API.
    """
    # Mock implementation - replace with actual Perplexity API call
    responses = {
        "what is machine learning": "Machine learning is a subset of artificial intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed. It focuses on the development of computer programs that can access data and use it to learn for themselves.\n\nSources:\n- Stanford CS229 Machine Learning Course\n- MIT Introduction to Machine Learning",
        "latest news on ai": "Recent developments in AI include advances in large language models, breakthrough research in computer vision, and new applications in healthcare and scientific research. Major tech companies continue to invest heavily in AI infrastructure and capabilities.\n\nSources:\n- TechCrunch AI News\n- MIT Technology Review\n- Nature AI Research",
        "python programming": "Python is a high-level, interpreted programming language known for its simple syntax and versatility. It's widely used in web development, data science, artificial intelligence, automation, and scientific computing.\n\nSources:\n- Python.org Official Documentation\n- Real Python Tutorials\n- Stack Overflow Developer Survey",
    }

    # Find best match or provide general response
    question_lower = question.lower()
    for key, response in responses.items():
        if any(word in question_lower for word in key.split()):
            return response

    return f"Based on your question '{question}', here's what I found:\n\nThis appears to be a question about {question}. While I don't have specific information cached for this query, I would typically search across academic papers, recent news articles, and authoritative sources to provide you with a comprehensive answer.\n\nFocus area: {search_focus}\n\nSources would be gathered from:\n- Academic databases\n- News outlets\n- Expert publications\n- Official documentation"


@server.tool("search_sources", description="Search for reliable sources on a topic")
def search_sources(
    topic: Annotated[str, Field(description="The topic to search sources for")],
    source_type: Annotated[
        str, Field(description="Type of sources (academic, news, web, all)")
    ] = "all",
    max_results: Annotated[
        int, Field(description="Maximum number of sources to return", ge=1, le=20)
    ] = 5,
) -> str:
    """
    Search for reliable sources on a given topic.
    In a real implementation, this would query multiple databases and APIs.
    """
    # Mock source data
    mock_sources = {
        "machine learning": [
            {
                "title": "Pattern Recognition and Machine Learning",
                "author": "Christopher Bishop",
                "type": "academic",
                "url": "academic-source.com",
            },
            {
                "title": "The Elements of Statistical Learning",
                "author": "Hastie, Tibshirani, Friedman",
                "type": "academic",
                "url": "academic-source2.com",
            },
            {
                "title": "Google's Latest ML Research",
                "author": "Google AI",
                "type": "news",
                "url": "news-source.com",
            },
        ],
        "python": [
            {
                "title": "Python Documentation",
                "author": "Python Software Foundation",
                "type": "web",
                "url": "python.org",
            },
            {
                "title": "Effective Python",
                "author": "Brett Slatkin",
                "type": "academic",
                "url": "book-source.com",
            },
            {
                "title": "Python 3.12 Release Notes",
                "author": "Python Team",
                "type": "news",
                "url": "python-news.com",
            },
        ],
    }

    # Find relevant sources
    topic_lower = topic.lower()
    found_sources = []

    for key, sources in mock_sources.items():
        if any(word in topic_lower for word in key.split()):
            found_sources.extend(sources)

    if not found_sources:
        found_sources = [
            {
                "title": f"Search Results for {topic}",
                "author": "Various",
                "type": "web",
                "url": "search-engine.com",
            },
            {
                "title": f"Academic Papers on {topic}",
                "author": "Academic Database",
                "type": "academic",
                "url": "academic-db.com",
            },
        ]

    # Filter by source type if specified
    if source_type != "all":
        found_sources = [s for s in found_sources if s["type"] == source_type]

    # Limit results
    found_sources = found_sources[:max_results]

    # Format response
    result = f"Found {len(found_sources)} sources for '{topic}':\n\n"
    for i, source in enumerate(found_sources, 1):
        result += f"{i}. {source['title']} by {source['author']} ({source['type']})\n   URL: {source['url']}\n\n"

    return result


@server.tool("get_trending_topics", description="Get currently trending topics and questions")
def get_trending_topics(
    category: Annotated[
        str, Field(description="Category of trends (tech, science, news, all)")
    ] = "all",
) -> str:
    """
    Get trending topics and popular questions.
    In a real implementation, this would pull from Perplexity's trending data.
    """
    trending_data = {
        "tech": [
            "AI model fine-tuning techniques",
            "Quantum computing breakthroughs",
            "Cybersecurity in cloud environments",
            "Web3 and blockchain development",
        ],
        "science": [
            "Climate change mitigation strategies",
            "Gene therapy advances",
            "Space exploration missions",
            "Renewable energy innovations",
        ],
        "news": [
            "Global economic trends",
            "International policy changes",
            "Healthcare system updates",
            "Education technology adoption",
        ],
    }

    if category == "all":
        topics = []
        for cat_topics in trending_data.values():
            topics.extend(cat_topics)
    else:
        topics = trending_data.get(category, ["No trends found for this category"])

    result = f"Trending topics in {category}:\n\n"
    for i, topic in enumerate(topics[:10], 1):  # Limit to 10 topics
        result += f"{i}. {topic}\n"

    return result


@server.tool("fact_check", description="Verify claims and check facts")
def fact_check(
    claim: Annotated[str, Field(description="The claim or statement to fact-check")],
    include_sources: Annotated[
        bool, Field(description="Whether to include verification sources")
    ] = True,
) -> str:
    """
    Fact-check a claim or statement.
    In a real implementation, this would cross-reference multiple authoritative sources.
    """
    # Mock fact-checking responses
    mock_facts = {
        "earth is flat": {
            "verdict": "FALSE",
            "explanation": "The Earth is an oblate spheroid, confirmed by centuries of scientific evidence including satellite imagery, physics, and direct observation.",
            "sources": ["NASA", "International Space Station", "Scientific consensus"],
        },
        "python is open source": {
            "verdict": "TRUE",
            "explanation": "Python is released under an open-source license (Python Software Foundation License) and its source code is freely available.",
            "sources": [
                "Python Software Foundation",
                "GitHub Python repository",
                "Open Source Initiative",
            ],
        },
        "ai will replace all jobs": {
            "verdict": "PARTIALLY FALSE",
            "explanation": "While AI will automate some jobs, it's expected to also create new types of work. The impact will vary significantly across industries and roles.",
            "sources": [
                "McKinsey Global Institute",
                "World Economic Forum",
                "MIT Technology Review",
            ],
        },
    }

    claim_lower = claim.lower()

    # Find matching fact-check
    for key, fact_data in mock_facts.items():
        if any(word in claim_lower for word in key.split()):
            result = f"FACT-CHECK: {claim}\n\n"
            result += f"VERDICT: {fact_data['verdict']}\n\n"
            result += f"EXPLANATION: {fact_data['explanation']}\n"

            if include_sources:
                result += "\nSOURCES:\n"
                for source in fact_data['sources']:
                    result += f"- {source}\n"

            return result

    # Default response for unrecognized claims
    return f"FACT-CHECK: {claim}\n\nVERDICT: NEEDS VERIFICATION\n\nEXPLANATION: This claim requires additional research and verification from authoritative sources. I recommend checking with multiple reliable sources including academic institutions, government agencies, and established news organizations.\n\nSUGGESTED VERIFICATION SOURCES:\n- Academic journals and databases\n- Government and international organization reports\n- Established news outlets with fact-checking departments\n- Expert opinions from relevant fields"


# Static resource
@server.resource("config://search_settings")
def get_search_settings():
    return {
        "default_sources": ["academic", "news", "web"],
        "max_results_per_query": 10,
        "supported_languages": ["en", "es", "fr", "de"],
        "fact_check_enabled": True,
    }


# Dynamic resource template
@server.resource("topic://{topic_name}/summary")
def get_topic_summary(topic_name: str):
    return {
        "topic": topic_name,
        "last_updated": "2024-01-15",
        "summary": f"Comprehensive information about {topic_name}",
        "source_count": 42,
    }


@server.prompt()
def research_prompt(topic: str) -> str:
    """Generate a research prompt for a given topic."""
    return f"Please provide a comprehensive research summary on '{topic}', including:\n\n1. Key concepts and definitions\n2. Current state of knowledge\n3. Recent developments and trends\n4. Credible sources and references\n5. Areas needing further research\n\nFocus on accuracy and cite reliable sources."


from clarifai.runners.models.mcp_class import MCPModelClass


class MyModelClass(MCPModelClass):
    def get_server(self) -> FastMCP:
        return server