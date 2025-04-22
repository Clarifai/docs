---
description: Use vector search to sort, rank, and retrieve annotated objects within images
sidebar_position: 2
---

# Object Search

**Use vector search to sort, rank, and retrieve annotated objects within images**
<hr />

Smart Object Search, also called localized search, is our proprietary feature that uses deep learning techniques to sort, rank, and retrieve annotated objects (bounding boxes) within images based on their content and similarity. 

It extends the capabilities of traditional object search, which typically relies on object labels or metadata, by leveraging advanced techniques such as object embeddings and vector search.

Here's how our Smart Object Search feature works:

- **Vector generation**: We transform each annotated object (bounding box) within an image into a high-dimensional vector representation known as an object embedding, and store it in our vector database. Object embeddings are learned using deep learning techniques that capture the visual features and characteristics of the objects.

- **Vector search**: When a user performs an object search or provides an example object (bounding box), we convert that object into an object embedding vector. Then, we perform a similarity search in the object vector store using the query object's embedding vector.

- **Similarity ranking**: We retrieve the annotated objects that are most visually similar to the query object based on their object embeddings. The ranking of the retrieved objects is determined by the similarity scores between the query object and each of the retrieved objects. Our vector search engine ranks objects with higher similarity scores higher and considers them more visually similar to the query.

Let’s demonstrate how you can carry out different types of Smart Object Searches.

Start by going to your app and selecting the **Inputs** option in the collapsible left sidebar. You’ll be redirected to the Input-Manager page. 

Then, click the **Object Mode** button in the upper-right section of the Input-Manager screen. This will display a gallery of objects that have been labeled on your inputs.

![](/img/smart-search/search_17.png)

You can then perform various object search actions on the screen.

## Smart Object Search by Visual Similarity

This feature is also called Object Similarity Search or Reverse Object Search. It allows you to rank, sort, and retrieve objects based on their visual similarity to a provided query image. 

There are two ways you can use to perform this type of search. 

### Search by Uploading an Image

To upload an image to be used for search, click the **Visual Search** button at the right end of the inputs search bar. In the menu that drops down, upload the image you want to use. You can upload the image from your local storage, drag and drop it, or paste its publicly accessible URL.

> The image should be in one of the following supported formats: SVG, PNG, JPG, or GIF, with a maximum size of 800 pixels by 400 pixels.

![](/img/smart-search/search_18.png)

A pop-up will appear, which allows you to crop the area of interest in the image. The search results will include annotated objects from within images that resemble the cropped area of your provided image.

After cropping the image, select the **Find visually similar Object** option, and click the **Search inputs** button.

![](/img/smart-search/search_19.png)

A thumbnail of the cropped image will be added to the inputs search bar and your search results will be displayed in a ranking fashion — from the most visually similar to the least visually similar.

![](/img/smart-search/search_20.png)

### Search by an Already Annotated Image

If you hover over an already annotated image you want to use to perform the visual similarity search, some icons will appear on the left side of the image. 

Click the magnifying glass icon. 

![smart object search by visual similarity](/img/smart-search/search_21.png)

A thumbnail of the image will be added to the inputs search bar and your annotated search results will be displayed in a ranking fashion — from the most visually similar to the least visually similar.

![smart object search results](/img/smart-search/search_22.png)

## Smart Object Search by Concept

You can rank, sort, and retrieve objects based on the [concepts](https://docs.clarifai.com/portal-guide/concepts/create-get-update-delete) used for annotating them. Just provide a query concept and the most relevant matches associated with that concept will be displayed. 

Go to the inputs search bar, add an hashtag (#), and type the concept you want to search for. After performing the search, the annotated objects will be displayed within the page based on their content and similarity. 

![smart object search results](/img/smart-search/search_23.png)
