---
description: The Clarifai API helps you incorporate powerful AI technology in your application
pagination_next: null
---

# Using Postman with Clarifai APIs

This page explains how to use [Postman](https://www.postman.com/) to perform some API calls to Clarifai by showing the actions available within the Clarifai platform. You can use Postman to make a wide variety of `GET`, `POST`, `PATCH`, and `DELETE` calls.

With Postman, you can use, hit, or test the Clarifai API without the need to use the Portal or call the endpoints programmatically. Postman also allows you to make API calls and generate code snippets in your favorite programming language. You can use the snippets to make REST requests to the Clarifai API.

This page will hopefully get you set up and somewhat familiar with using Postman to make requests to the Clarifai platform. After learning how to use Postman to make calls to Clarifai, you can make other requests by referring to the REST examples throughout this documentation. 

## Prerequisites
-  An active Clarifai account
-  Basic knowledge of an API structure and JSON formatting

## Postman Basics
By clicking the **Send** button , you can receive the response for a particular request you created or selected from the collection. 

![Alt text](/img/postman/image-2.png)

## Getting Started

Follow the steps below to start using Postman with Clarifai APIs.

### Step 1: Fork Your Postman Collection

Click the button below to fork the Clarifai Postman collection to your workspace.
<br/>

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/30622694-ddd58eb6-5c51-42a3-aa0d-97cc0efd546d?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D30622694-ddd58eb6-5c51-42a3-aa0d-97cc0efd546d%26entityType%3Dcollection%26workspaceId%3D00399af6-b92f-47d8-938f-0cacf755c972)

### Step 2: Get Your PAT Token

Obtain your **PAT** by *Logging into Portal → Profile Icon → Security Settings → Create Personal Access Token → Set the scopes → Confirm.*

- Visit [this link](https://clarifai.com/signup) to create Clarifai account.

- Learn how to get your PAT [here](https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens).

### Step 3: Set up Authorization

Postman allows users to setup authorization in a parental level for each collection so that you dont have to add it to the headers of each request individually. To set this feature go to  **Authorization** tab of the collection and set the values as shown below.

![Alt text](/img/postman/image-1.png)

### Step 4: Create Your Postman Environment

Set up environment in your personal workspace.

Click on the eye icon placed on the right panel to view the environment. Click the **Add** button to create a new environment.

![Alt text](/img/postman/image-3.png)

### Step 5: Add Variables to Postman Environment

Add the following variables to the new environment to start making API calls.

![Alt text](/img/postman/image-5.png)

The values for variable can be set as following:
- `base_url`—https://api.clarifai.com
- `key`—Add the PAT (this is what is used for authorization)
- `user_id`—Add the User ID 

### Step 6: Test Clarifai API for SUCCESS!

To test if its working , select **Applications** collection. From that select **Create Application (Universal)** request and hit **Send**. You will get the following response body if all the steps have been done correctly.

![Alt text](/img/postman/image-2.png)

