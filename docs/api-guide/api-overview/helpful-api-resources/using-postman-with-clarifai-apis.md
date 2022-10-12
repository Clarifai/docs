---
description: Pre-configured API calls with Postman.
sidebar_position: 1
---

# Using Postman with Clarifai APIs

**Pre-configured API calls with Postman**
<hr />

### **Overview**

This page explains how to use [Postman](https://www.postman.com/) to perform API calls to Clarifai by showing the actions available within the Clarifai platform. You can use Postman to make wide variety of `GET`, `POST`, `PATCH`, and `DELETE` calls.

With Postman, you can use, hit, or test the Clarifai API without the need to use the Portal or call the endpoints programmatically. 

Postman also allows you to make API calls and get code snippets in your favourite programming language. You can use the snippets to make REST requests to the Clarifai API. 

### Prerequisites

You need to have:

* Postman
* An active Clarifai account
* Access to your [Clarifai API key](https://docs.clarifai.com/clarifai-basics/authentication/app-specific-api-keys) (or [Personal Access Token](https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens)) and user login credentials
* Basic knowledge of an API structure and JSON formatting

### Get Started 

#### Use the following Run in Postman button to import the Clarifai collection into Postman: 

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/8c7850b96f74d0fc03c0)

This collection works in Postman for Web or in your local Postman application. It may take several seconds to load.

After importing the Clarifai Postman collection, a full list of the available Clarifai API endpoints will be structured by folder in the left pane of Postman.

![Clarifai Postman API collection](/img/postman/clarifai_postman_api_collection.png)

### Setting Up Postman Environment 

Setting up a Postman environment allows you to define the variables you can use in your Postman requests. After defining an [environment variable](https://learning.postman.com/docs/sending-requests/managing-environments/), you can use it throughout your Clarifai collection—instead of having to provide it each time you make a call. 

To set any environment variable, select the **Environments** option on the left sidebar. Then, click **Create Environment**. 

![Create environment variable](/img/postman/create_environment_variable.png)

On the ensuing page, enter a name for your environment, add `base_url` as a new variable and `https://api.clarifai.com` as its value. 

Click **Save**. 

![Set up Clarifai environment](/img/postman/clarifai_environment_base_url.png)

Set the environment as active.

![Set as active environment](/img/postman/set_as_active_environment.png)

You are now ready to start making calls to the Clarifai API!

:::tip

Setting the initial environment should be a one-time exercise. After that, you can add new variables (such as user ids, API keys, app ids, etc) to the environment by opening it from the sidebar and editing it in the tab that opens. Also, as you run some endpoints, the variables generated will be automatically saved to the environment and overwritten as your new variables. 

:::

### Authentication

While logging in and accessing an app through the UI seems like a seamless process, under the hood, it's actually going through a variety of steps. Unfortunately with Postman, you'll need to manually make those calls.

#### Logging In

To log in, use the **Login V2** endpoint. In the **Body** section, provide the email and password you use to access the Clarifai platform. 

Press **Send** to get a response.

![Postman Log in](/img/postman/postman_login.png)

If successful, the bottom half of the **Login V2** window shows a response with an **OK** status.

![Session key](/img/postman/postman_session_key.png)

Notice that the response includes a `session_token`, which will be automatically assigned to the environment to allow you to make subsequent calls to the Clarifai platform. 

The response also includes your `user_id`, which will also be automatically assigned to the Postman environment.

You are now logged in! 

After that, you can make various calls to the Clarifai platform. 

#### Make a test call

You should be ready now to make a test call. An easy first call is to get your user details using the **Get User** endpoint. Ideally, you can just click **Send** and get a response without making any adjustments in the request. 

![Get user](/img/postman/get_user.png)

Notice that if you hover your mouse over `{{base_url}}` or `{{session_token}}`, their already set environment variable values will pop up. 

Also, notice that the variables are displayed in orange—implying that their values have already been provided. Otherwise, if a variable is displayed in red, it means that its value has not been set yet. 

If everything is set up properly, you'll get a user object as the response to the call. 

### Working with the Collection 

After setup is complete, you are ready to begin making API calls. In the Postman -&gt; Clarifai folder, there are subfolders for each type of API category listed in the Clarifai API Reference. You can expand the subfolders to see the HTTP methods and API call names.

#### Builder 

When you click any API endpoint in the collection, it loads in the Builder pane on the right. On this pane, you can send an API request and see the returned status, response time, and API response code.

#### Description 

When you click an endpoint name, a description of the endpoint and all required/optional parameters is displayed to help you build your requests.

#### Params 

The **Params** tab shows all parameters and values that are currently on the selected API endpoint. Here, you are able to add parameters and values.

This tab is an alternative to viewing the `param1:value1¶m2:value2` structure of the API call. The ampersand \(&\) and colon \(:\) are not needed in the params table. Postman inserts these for you.

You can view all the available arguments in the corresponding section of the [Clarifai API documentation](https://docs.clarifai.com/api-guide/api-overview).