---
description: Your platform for the entire AI lifecycle
sidebar_position: 1
---

# Clarifai Portal Basics

**Your full-stack platform for the entire AI lifecycle**
<hr />

The Clarifai's full-stack portal is the fastest and easiest AI workspace for any skill level. It has everything you need to build reliable AI-powered apps. With the low-code, no-code solution, you can discover, build, and share futuristic AI models, workflows, and app components.

It gives you the power to search, sort, and organize your AI projects right out of the box. Its intuitive, feature-rich, drag-and-drop user interface makes the world’s most advanced computer vision AI technology accessible to anyone.

:::info

Anything that you can do on the platform, you can also do directly with our API. If you want to build powerful UIs, you can do so with our [API](https://docs.clarifai.com/api-guide/api-overview/).

:::

Our platform offers powerful tools for the full AI lifecycle. It provides a seamless, end-to-end AI workspace that you can use to manage your data, annotate your inputs, and build custom AI models.

![](/img/community_2/general_image_recognition_model.png)

The Clarifai Community platform provides the following:

- Access to a massive collection of user-contributed state-of-the-art models, workflows, datasets, and custom UI for a variety of tasks. This lets you avoid reinventing the wheel by ensuring you have world-class AI in one place. You can easily customize your needs on the same platform.  
- Ability to manage your AI resources within your organization and the general public audience with notes, metadata, and model cards.
- Ability to view predictions of any model or workflow as you browse to test your data. 
- Ability to easily filter and sort resources by name, type, license, data, and more as an extensible model, data, workflow, and UI catalog. 
- Ability to collaborate with AI experts from all over the world. You'll get the right tools to collaborate in the public community and within your organization. This lets you accelerate your AI adoption efforts. 

## Search

![](/img/community_2/search_community_resources.png)

<br />

You can effortlessly find what you need by searching through your own and Community resources — apps, models, workflows, and modules. This is how we treat searches:

- Multiple-word queries function as an "OR" (e.g., "face detection" yields results with both "face" and "detection"). 
- Dashes (-) are treated as spaces since spaces aren't allowed in resource IDs. 
- Dashes are added to search queries between texts and numbers. For instance, if the search query is "llama70b" or "gpt4," we also consider "llama-70-b" or "gpt-4" in the search results.
- Partial-word searches, such as "fac," return results containing relevant terms like "face-detection."

All resources are searchable by:

- **Resource ID**—you can provide a unique identifier of a particular resource. 
- **User ID**—you can provide a unique identifier assigned to an individual user. 
- **Short description**—you can provide a brief summary that provides key information about what you're looking for. 
- **Markdown notes**—you can perform text-based searches within the markdown notes of any resource. If you input any text in the search field, the results will include any relevant information where the search phrase is found within the markdown notes. This feature enhances search functionality and allows for more precise and context-aware discovery of resources based on the content within their markdown notes.

## Starring

You can mark any resource — be it your own or publicly accessible in the Community — as a favorite. Simply click the star icon to designate any resource, including apps, models, datasets, workflows, and modules, as your favorite.

You can access your favorite resources by navigating to the top-right menu bar and selecting the "Starred" option. If you choose the "All" option, you'll get a list encompassing both starred and unstarred resources. 

You can also organize your starred resources by sorting them in either descending order (highest number of stars first) or ascending order (lowest number of stars first) according to your preference.

![](/img/community_2/starring_resources.png)

## Markdown Notes

You can add notes in Markdown format that explain what a resource is about, such as its purpose, usage instructions, required configurations, or any other relevant details to provide clarity and guidance for users interacting with it. 

For example, to add descriptive notes for an app, navigate to the app's **Overview** page. From there, click the pencil icon that appears within the **Notes** section to begin adding your notes.

![](/img/community_2/markdown_notes.png)

You can then add your notes in Markdown format.

Note that you can insert custom variables such as `{{user_id}}` and `{{app_id}}` into the Markdown template. These variables are dynamically replaced with the corresponding `user_id` and `app_id` extracted from the URL, allowing you to personalize content within your templates.

Here is an example:

![](/img/community_2/markdown_notes_1.png)

If you click the **Save** button, the corresponding `user_id` and `app_id` will be dynamically displayed. 

![](/img/community_2/markdown_notes_3.png)

## Use Model / Workflow

If you want to use a model or a workflow for making API calls, you need to click the **Use Model / Workflow** button at the upper right corner of the individual page of a model or workflow.

The modal that pops up has snippets in various programming languages, which you can copy and use in your development environment.

![](/img/community_2/use_model_workflow.png)