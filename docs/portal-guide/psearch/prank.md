---
description: Use vector search to sort, rank, and retrieve annotated objects within images
sidebar_position: 2
---

# Smart Object Search

**Use vector search to sort, rank, and retrieve annotated objects within images**
<hr />

Smart Object Search, also called localized search, is our proprietary feature that uses deep learning techniques to sort, rank, and retrieve annotated objects (bounding boxes) within images based on their content and similarity. 

It extends the capabilities of traditional object search, which typically relies on object labels or metadata, by leveraging advanced techniques such as object embeddings and vector search.

Here's how our Smart Object Search feature works:

- **Vector generation**: We transform each annotated object (bounding box) within an image into a high-dimensional vector representation known as an object embedding, and store it in our vector database. Object embeddings are learned using deep learning techniques that capture the visual features and characteristics of the objects.

- **Vector search**: When a user performs an object search or provides an example object (bounding box), we convert that object into an object embedding vector. Then, we perform a similarity search in the object vector store using the query object's embedding vector.

- **Similarity ranking**: We retrieve the annotated objects that are most visually similar to the query object based on their object embeddings. The ranking of the retrieved objects is determined by the similarity scores between the query object and each of the retrieved objects. Our vector search engine ranks objects with higher similarity scores higher and considers them more visually similar to the query.


