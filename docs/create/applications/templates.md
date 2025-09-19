---
description: Create applications faster with pre-built blueprints
pagination_next: null
pagination_prev: null
sidebar_position: 5
---

# App Templates

**Create applications faster with pre-built blueprints**
<hr />

Clarifai app templates are pre-built blueprints that provide a starting point for creating your own applications. They are apps with their contents grouped by some use case — enabling you to easily get started building your applications. 

When you choose a template to create an app, the configurations and resources available in the template will be preemptively applied to your new application. You can use the pre-built components to quickly apply AI to your specific use case. 

:::info

Apps on the Clarifai platform are like self-contained projects. They store and handle your data, annotations, [models](https://docs.clarifai.com/portal-guide/model/), [workflows](https://docs.clarifai.com/portal-guide/workflows/working-with-workflows), [modules](https://docs.clarifai.com/portal-guide/modules/), and other resources. 

:::

## Why Use an App Template?

You might choose an app template over building a custom application from scratch for several reasons.

- **Time efficiency** — App templates provide a head start in your AI development journey. They offer a ready-made foundation to launch your application much faster than starting from scratch. 

- **Leverage pre-existing resources** — App templates empower you to leverage pre-existing resources, such as models, workflows, or modules. Instead of starting from scratch, you can begin with a fully equipped application that addresses a particular use case. 

- **Ease of customization** — While app templates provide a foundation for AI development, they are often highly customizable. You can easily modify the template to suit your preferences. 

## App Templates Examples

We provide a variety of application templates in various categories to help you hit the ground running. 

:::note on rapid expansion

- We're constantly expanding our library of templates, with new additions released on a regular basis. You can check [here](https://clarifai.com/explore/apps?activeToggle=Templates&page=1&perPage=24) for them. 
- We'll also introduce the ability to build your own app templates soon. 

:::

Here are some examples:

- **[Chatbot Template](https://clarifai.com/clarifai/chatbot-template)** — It serves as an extensive guide for building AI chatbot assistants swiftly and effectively, utilizing the capabilities of Clarifai's Large Language Models (LLMs). 
- **[Content Generation](https://clarifai.com/clarifai/content-generation-template)** — It empowers you to effortlessly craft a variety of high-quality textual content, from compelling emails and blog posts to engaging social media content and captivating stories. This helps boost your communication skills and spark your creativity.
- **[Document Summarization](https://clarifai.com/clarifai/document-summarization)** — It lets you condense a longer text document into a shorter version that captures the most important points or information. This template provides different methods for summarization that cater to different lengths and complexities of text. 
- **[Image Moderation](https://clarifai.com/clarifai/image-moderation)** — It provides diverse AI-powered workflows for automatically filtering and categorizing inappropriate or harmful images based on various criteria.
- **[RAG Template](https://clarifai.com/clarifai/rag-template)** — It streamlines the creation of Retrieval-Augmented Generation (RAG) applications with Clarifai. This lets you enhance LLMs with external knowledge for accurate, up-to-date information generation. 
- **[Text Moderation](https://clarifai.com/clarifai/text-moderation)** — It explores various text moderation use cases and provides several ready-to-use workflows and models. It leverages different NLP models and LLMs to address diverse scenarios.
- **[Coding Template](https://clarifai.com/clarifai/coding-template)** — It explores a variety of coding scenarios and includes pre-built workflows tailored to address specific use cases, utilizing specialized models for each unique situation.

## How to Create an App Using a Template

There are two ways to create an application using a template. 

- Via the create-an-app modal
- Via an app’s template page

### Via the create-an-app modal

To create an app using a template, start by [logging in to](https://clarifai.com/login) to your account.

Next, click the plus (**+**) button in the upper-right corner of the Clarifai platform dashboard. A dropdown menu will appear with several options. From the list, select **New Application**.

![](/img/others/app-template-9.png)

> **Alternatively:** _Open the collapsible left sidebar and select **Projects**. From the dropdown that appears, choose **Select Application** to open a panel displaying a searchable list of your existing applications. Scroll to the bottom of this list and click the **Create new Application** option, marked with a **+** icon._
> _![](/img/others/app-template-10.png)_

Next, on the window that pops up, select the **Use an App Template** option to create a new application using a template.

![](/img/others/app-template-2.png)

> **Tip:** You can also select the **Start with a Blank App** option to start [creating a new application](https://docs.clarifai.com/create/applications/create#create-via-the-ui) from scratch. 

The ensuing page lets you select a template for creating your application. You can opt for a template provided by the community or select one of your own creations.

For this illustration, let’s select the **text-moderation** template, which is provided by the community. 

![](/img/others/app-template-3.png)

On the template’s individual page, you'll find an overview of its available resources as well as a description of its functionality. 

![](/img/others/app-template-3-1.png)

When you click the view link of a resource, a modal will pop up, allowing you to easily view the available resources in the template, including inputs, datasets, models, workflows, and modules.

For example, if you click the **View models** link, a modal will appear displaying the models included in the template. You can also browse through the other tabs to explore additional resources present in the template.

![](/img/others/app-template-3-2.png)

Next, click the **Select Template** button in the upper-right corner of the page. 

![](/img/others/app-template-4.png)

Next, specify the setup of your new application. 

- Provide an app ID, which serves as a unique identifier for your application. It’s important to choose a unique and memorable ID as it will be used for URLs and redirections. 
- Optionally, provide a brief description that outlines the purpose or features of your app. 

Lastly, click the **Create App** button in the upper-right corner of the page. 

![](/img/others/app-template-5.png)

Once the app has been created, you can begin using it immediately. For example, you can use one of its workflows for text moderation tasks. 

![](/img/others/app-template-5-1.png)

### Via an app’s template page

You can also create an app from the page of an existing template.

To do so, open the collapsible left sidebar, select **Projects**, and choose **All Resources** from the dropdown list.

This will open a page showing all the resources you own, with the **Apps / Templates** tab selected by default. From there, select the **Templates** tab in the right side of the page.

A list of the available templates  will be populated on that page. Select the template you want to use. 

![](/img/others/app-template-6.png)

You’ll be directed to the template’s individual page. 

![](/img/others/app-template-7.png)

Next, click the **Use Template** button in the upper-right corner of the page. And in the window that pops up, provide the details for creating your new application. The pop-up window also displays the types of resources included within the template.

Lastly, click the **Create App** button to finalize the creation of your app. 
