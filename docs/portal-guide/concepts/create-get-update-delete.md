---
description: Manage your concepts
sidebar_position: 1
---

# Create, Get, Update, Delete

**Manage your concepts**
<hr />

A concept, [as previously explained](README.mdx), represents an entity in the physical world, much like a "tag" or "keyword." On the Clarifai platform, you can create and manage these concepts within your app to enhance your model's ability to recognize and categorize data.

:::danger Delete Concepts

We currently do not support deleting concepts unilaterally since they have such an integral tie across almost all other data structures in the platform, like inputs, models, searches, etc.

:::

## Create Concepts

To create a new concept, head to your application's individual page and select the **Inputs** option in the collapsible left sidebar.

You'll be redirected to the Inputs-Manager page, where you can create new concepts and use them to complete various operations. 

![](/img/community_2/inputs_viewer_page.png)

There are several ways to create concepts on the platform. Let's illustrate two of them:

- Via the **Labels** section
- Via the inputs uploader

### Via the **Labels** Section

To create a new concept, go to the **Labels** section on the Inputs-Manager page and click the plus sign (**+**) next to the **Select or add concepts** search box. Then, type the new concept name in the search box.

The new name you've typed will appear underneath the search box. Click the **Add new label** button to create the concept. 

![](/img/community_2/add_concept.png)

The new concept will be successfully added to your app. You can follow the same process to create other concepts for your app.

![](/img/community_2/new_concept_added.png)

### Via the Inputs Uploader

You can also create new concepts when uploading inputs to your app. To do so, click the **Upload Inputs** button at the upper-right corner of the Inputs-Manager page.  

> The window that pops up allows you to upload your inputs — either by uploading them directly from your local device or by providing a publicly accessible URL.

In the **Concepts** section of the pop-up window, click the plus sign (**+**) next to the **Select or add concepts** search box. Then, type the new concept name in the search box.

The new name you've typed will appear underneath the search box. Click the **Add new concept** button to create the concept. 

![](/img/community_2/concepts_upload_inputs_new_concepts.png)

The new concept will be successfully added to your app.

> You can also click the **Upload inputs** button at the bottom of the pop-up window to finalize uploading your input.

![](/img/community_2/concepts_newly_added_concept.png)



