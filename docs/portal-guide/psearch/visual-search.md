---
description: Use vector search to sort, rank, and retrieve images
sidebar_position: 1
---

# Smart Image Search

**Use vector search to sort, rank, and retrieve images**
<hr />

Smart Image Search is our proprietary feature that uses deep learning techniques to sort, rank, and retrieve images based on their content and visual similarity. It goes beyond traditional image search methods that rely solely on image metadata or textual annotations.

Here's how our Smart Image Search feature works:

- **Vector generation**: We transform each image in your app into a high-dimensional vector representation known as an image embedding, and store it in our vector database. Image embeddings are learned using deep learning techniques that capture the visual features and patterns present in the images.

- **Vector search**: When a user performs an image search or provides an example image, we convert that image into an image embedding vector. Then, we perform a similarity search against the image vector store using the query image's embedding vector.

- **Similarity ranking**: We retrieve the images that are most similar to the query image based on their image embeddings. The ranking of the retrieved images is typically determined by the similarity scores between the query image and each of the retrieved images. Our vector search engine ranks images with higher similarity scores higher and considers them more visually similar to the query. 

Let’s demonstrate how you can carry out different types of Smart Image Search on our Portal. 

Start by going to your app and selecting the **Inputs** option on the collapsible left sidebar. You’ll be redirected to the Inputs Manager page where you can see the inputs available on your app. 

You can then perform various image search actions on them. 

## Smart Image Search by Visual Similarity

This feature is also called Image Similarity Search or Reverse Image Search. It allows you to rank, sort, and retrieve images based on their visual similarity to a provided query image. 

If you hover over the image you want to use to perform the visual similarity search, some icons will appear on the left side of the image. Click the magnifying glass icon. 

![smart image search by visual similarity](/img/smart-search/search_1.png)

A thumbnail of the image will be added to the inputs search bar and your search results will be displayed in a ranking fashion—from the most visually similar to the least visually similar.

![smart image search results](/img/smart-search/search_2.png)

## Smart Image Search by Predicted Concept

You can rank, sort, and retrieve images based on the [concepts](https://docs.clarifai.com/portal-guide/concepts/create-get-update-delete) predicted by AI models. Just provide a query concept and the most relevant matches associated with that concept will be displayed. 

Go to the inputs search bar, add an hashtag (#), and start typing the concept you want to search for. 

![smart image search results](/img/smart-search/search_3.png)

You’ll notice that a small drop-down list will appear having the concepts you’ve trained with your model as well as the concepts present in the [base workflow](https://docs.clarifai.com/clarifai-basics/applications/application-settings#base-workflow) of your app. Your model’s concepts will appear first in the list. 

Choose the concept you want to search for, and your results will be displayed on the page. The search results will be ranked based on the inputs with the highest predicted values for the given concept.

![smart image search results](/img/smart-search/search_4.png)

## Smart Image Search by Caption

You can rank, sort, and retrieve images based on a predicted match to a query caption text. You just need to provide a caption text that best describes the images you want to search for, and the most relevant matches associated with that query will be displayed.

Performing searches using full texts allow you to provide a much more in-depth context and retrieve more relevant results—as compared to other types of searches. 

:::info

You need to choose the **Universal** [base workflow](https://docs.clarifai.com/clarifai-basics/applications/application-settings#base-workflow) for the Smart Image Search by Caption feature to work on your app.  

:::

Here is an example of how you can use this feature.

![smart image search results](/img/smart-search/search_10.png)
 
You can also get more specific and mention numbers in your query caption text.

![smart image search results](/img/smart-search/search_12.png)

You can even get search results with OCR-like (optical character recognition) capabilities.

![smart image search results](/img/smart-search/search_11.png)

