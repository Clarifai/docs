---
description: Learn how to make API calls with Postman
sidebar_position: 1
---

# Using Postman with Clarifai APIs

**Learn how to make API calls with Postman**
<hr />

## **Overview**

This page explains how to use [Postman](https://www.postman.com/) to perform API calls to Clarifai by showing the actions available within the Clarifai platform. You can use Postman to make wide variety of `GET`, `POST`, `PATCH`, and `DELETE` calls.

With Postman, you can use, hit, or test the Clarifai API without the need to use the Portal or call the endpoints programmatically. 

Postman also allows you to make API calls and get code snippets in your favourite programming language. You can use the snippets to make REST requests to the Clarifai API. 

## Prerequisites

You need to have:

* Postman
* An active Clarifai account
* Access to your [Personal Access Token (PAT)](https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens) (or [API key](https://docs.clarifai.com/clarifai-basics/authentication/app-specific-api-keys))
* Basic knowledge of an API structure and JSON formatting

## Setting Up Postman Environment

Setting up a Postman environment allows you to define the variables you can use in your Postman requests. After defining an [environment variable](https://learning.postman.com/docs/sending-requests/managing-environments/), you can use it in making API requests—instead of having to provide it each time you make a call.

To set any environment variable, select the **Environments** option on the left sidebar. Then, click **Create Environment**.

![Create a Postman environment](/img/postman/create_environment_variable.png)
 
On the ensuing page, enter a name for your environment and add the following variables:

* `base_url` — `https://api.clarifai.com`
* `key` — `ADD_YOUR_PAT`
* `user_id` — `ADD_YOUR_USER_ID`

Click **Save**.

![Set a Postman environment](/img/postman/set_environment_variable.png)

Set the environment as active.

![Set as active environment](/img/postman/set_as_active_environment.png)
 
You are now ready to start making calls to the Clarifai API!

:::tip

Setting the initial environment should be a one-time exercise. After that, you can add new variables (such as app ids, model ids, concept ids, etc) to the environment by opening it from the sidebar and editing it in the tab that opens. 

:::

## Applications

Applications are the basic building blocks for creating projects on the Clarifai platform. Your data, annotations, models, predictions, and searches are contained within applications.

### Create Application

To create a new application, do the following:

* Open a new tab on the Postman workbench.
* Select **POST** as the request method.
* Enter `{{base_url}}/v2/users/{{user_id}}/apps/` for the request URL. Note that we already provided the `base_url` and `user_id` variables in the Postman environment. 
* Under the **Headers** tab, add the authorization details required for the request. 

![Create new application](/img/postman/create_application_1.png)

* Under the **Body** tab, select **raw** and add the details of the application you want to create.

![Create application body details](/img/postman/create_application_2.png)

* Click **Send** to create the application.

Postman displays the response data of creating the application in the lower pane.

![Create application response](/img/postman/create_application_3.png)

Note that the response includes the id of the application, which you can set to the Postman environment as `app_id`.