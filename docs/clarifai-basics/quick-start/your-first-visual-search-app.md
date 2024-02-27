---
description: >-
  Perform your first visual search in approximately 1 minute
sidebar_position: 2
---

# Your First Visual Search App (~1 min)

**Perform your first visual search in approximately 1 minute**
<hr />

Visual search is a versatile and useful capability when working with visual data. It helps you compare images based on their visual similarity.

In this example, we want to perform a visual similarity search on people's faces. 

## Step 1: Set up your account or login

Just [click here](https://clarifai.com/signup) if you need to set up your account for the first time. 

Or, [click here](https://clarifai.com/login) to log in.‌

![Create account login](/img/create_acct_login.png)

## Step 2: Verify your email address

If you created a new account, check your email. We will send you a link that enables you to automatically verify your address.‌

![verify email](/img/verify_email.png)

## Step 3: Create an application

Log in to your account and click the **Create** button at the upper-right section of the navigation bar.

On the window that pops up, provide a unique and descriptive ID for your app. 

Optionally, you could provide a short description of your app. Also, you could leave the other default settings unchanged — **Image/Video** selected as the primary input type and the [base workflow](https://docs.clarifai.com/portal-guide/workflows/base-workflows) selected as **Universal** within the collapsible **Advanced Settings** field.

![create application](/img/create-application.png)

Click the **Create App** button. 

On the ensuing page, click the **Cancel** button within the **Add a model** window that pops up. We're not creating a model for this example.

![Add a model window](/img/face_search_app.png)

## Step 4: Upload sample images

On the application's individual page, select the **Inputs** option on the collapsible left sidebar.

Next, click the **Upload inputs** button.

![Upload inputs](/img/data_mode_search_app.png)

The window that pops up allows you to upload inputs — either by uploading them directly from your local device or by providing a publicly accessible URL. 

For this example, we'll provide the following images as URLs. You can copy and paste them in the URL area. 

import CodeOutputExample1 from "!!raw-loader!../../../code_snippets/api-guide/others/visual-search.txt";
import CodeBlock from "@theme/CodeBlock";

<details>
  <summary>Sample Images</summary>
    <CodeBlock className="language-text">{CodeOutputExample1}</CodeBlock>
</details>

![upload files](/img/browse_files_search_app.png)

Finally, click the **Upload inputs** button at the bottom of the pop-up window to complete uploading your images.

## Step 5: Search for similar faces

Your uploaded images will appear on the Inputs-Manager page. 

You can begin the search by clicking the spyglass icon next to the image you want to see its similar faces. 

![search by face](/img/search-by-face.png)

Clarifai will sort your images by visual similarity. In this example, the results are ranked based on their resemblance to the image used for the search. 

![view search results](/img/view-search-results.png)

That's it!
​
