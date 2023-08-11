---
description: Use vector search to sort, rank, and retrieve texts
sidebar_position: 3
---

# Smart Text Search

**Use vector search to sort, rank, and retrieve texts**
<hr />

Smart Text Search is our proprietary feature that uses deep learning techniques to sort, rank, and retrieve text data based on their content and semantic similarity. 

It goes beyond traditional text search methods that rely solely on exact keyword matching and incorporates advanced techniques like text embeddings and vector search.

Here's how our Smart Text Search feature works:

- **Vector generation**: We transform each piece of text, such as a sentence or paragraph, into a numerical vector representation known as a text embedding, and store it in our vector database. Text embeddings are learned using natural language processing techniques that capture the semantic meaning and contextual information of the text.

- **Vector search**: When a user performs a text search or provides a query text, we convert that query into a text embedding vector. Then, we perform a similarity search against the text vector store using the query text's embedding vector.

- **Similarity ranking**: We retrieve text data that is most similar to the query text based on their text embeddings. The ranking of the retrieved text documents is typically determined by the similarity scores between the query text and each of the retrieved texts. Our vector search engine ranks texts with higher similarity scores higher and considers them more semantically similar to the query.

Let’s demonstrate how you can carry out different types of Smart Text Search on our Portal. 

Start by going to your app and selecting the **Inputs** option on the collapsible left sidebar. You’ll be redirected to the Inputs Manager page where you can see the text inputs available on your app. 

You can then perform various text search actions on them. 

:::tip

To perform text searches successfully, you should choose a workflow that includes a text embedder and a clusterer, such as the Language-Understanding workflow, as the [base workflow](https://docs.clarifai.com/clarifai-basics/applications/application-settings#base-workflow) for your application.

:::

## Smart Text Search by Semantic Similarity

This feature is also called Semantic Search. It allows you to rank, sort, and retrieve texts based on their semantic similarity to a provided query text. 

If you hover over the text you want to use to perform the semantic similarity search, some icons will appear on the left side of the text. Click the magnifying glass icon. 

![smart image search by visual similarity](/img/smart-search/search_5.png)

The text you selected will be added to the inputs search bar and your search results will be displayed in a ranking fashion—from the most semantically similar to the least semantically similar.

![smart image search by visual similarity](/img/smart-search/search_6.png)

## Smart Text Search by Predicted Concept

You can rank, sort, and retrieve texts based on the [concepts]( https://docs.clarifai.com/portal-guide/concepts/create-get-update-delete) predicted by AI models. Just provide a query concept and the most relevant matches associated with that concept will be displayed. 

Go to the inputs search bar and start typing the concept you want to search for. 

You’ll notice that a small drop-down list will appear having the concepts you’ve trained with your model as well as the concepts present in the base workflow of your app. Your model’s concepts will appear first in the list. 

Choose the concept you want to search for, and your results will be displayed on the page.  The search results will be ranked based on the inputs with the highest predicted values for the given concept.

![smart image search results](/img/smart-search/search_7.png)







