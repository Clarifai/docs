---
description: Learn how to make API calls with Postman
sidebar_position: 1
---

# Using Postman with Clarifai APIs

**Learn how to make API calls with Postman**
<hr />

## **Overview**

This page explains how to use [Postman](https://www.postman.com/) to perform some API calls to Clarifai by showing the actions available within the Clarifai platform. You can use Postman to make a wide variety of `GET`, `POST`, `PATCH`, and `DELETE` calls.

With Postman, you can use, hit, or test the Clarifai API without the need to use the Portal or call the endpoints programmatically. 

Postman also allows you to make API calls and generate code snippets in your favorite programming language. You can use the snippets to make REST requests to the Clarifai API.

This page will hopefully get you set up and somewhat familiar with using Postman to make requests to the Clarifai platform. After learning how to use Postman to make calls to Clarifai, you can make other requests by referring to the REST examples throughout this documentation. 

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
* `key` — `ADD_YOUR_PAT` (this is what is used for [authorization](https://docs.clarifai.com/clarifai-basics/authentication/authorize/))
* `user_id` — `ADD_YOUR_USER_ID`

Click **Save**.

![Set a Postman environment](/img/postman/set_environment_variable.png)

Set the environment as active. This allows Postman to treat it as the active environment and run all requests against that environment (if your API calls reference environment variables).

![Set as active environment](/img/postman/set_as_active_environment.png)

To use a Postman environment variable value in an API request, you need to reference it by name, surrounded with double curly braces.

Here is an example:

`{{base_url}}`
 
You are now ready to start making calls to the Clarifai API!

:::tip

Setting the initial environment should be a one-time exercise. After that, you can add new variables (such as app ids, model ids, concept ids, etc) to the environment by opening it from the sidebar and editing it in the tab that opens. 

:::

## Applications

Applications are the basic building blocks for creating projects on the Clarifai platform. Your data, annotations, models, predictions, and searches are contained within applications.

### a) Create Application

To create a new application, do the following:

* Open a new tab on the Postman workbench.
* Select **POST** as the request method.
* Enter `{{base_url}}/v2/users/{{user_id}}/apps` for the request URL. Note that we already provided the `base_url` and `user_id` variables in the Postman environment. 
* Under the **Headers** tab, add the authorization details required for the request.

```json
Authorization — Key {{key}}
Content-Type — application/json

```

![Create new application](/img/postman/create_application_1.png)

* Under the **Body** tab, select **raw** and add the details of the application you want to create in JSON format.

```json
{
  "apps": [
    {
      "id": "test-application"      
    }
  ]
}

```
* Click **Send** to create the application.

Postman displays the response data of creating the application in the lower pane.

![Create application response](/img/postman/create_application_3.png)

Note that the response includes the id of the application, which you can set on the Postman environment as `app_id`.

### b) Get Application(s)

To get the details of a specific app, make a `GET` request to this URL: `{{base_url}}/v2/users/{{user_id}}/apps/{{app_id}}`. Also, add the authorization information under the **Headers** tab.

The request will return the details of the `app_id` already set in the Postman environment. If you want to get the details of another app, you can set its value in the environment or directly in the URL field.

![Get application](/img/postman/get_application_1.png)

You can also list all the applications in your instance of the Clarifai platform by making a `GET` request to this URL: `{{base_url}}/v2/users/{{user_id}}/apps`. 
 
After running the request, it will return a list of all your applications, their ids, and other information.

![Get applications](/img/postman/get_application_2.png)


### c) Patch Application

You can use Postman to patch or edit the details of an existing application by making a `PATCH` request to this URL: `{{base_url}}/v2/users/{{user_id}}/apps`. 

You can change an app's name, default language, default workflow, and more.

Under the **Body** tab, select **raw** and add the editing instructions. In our example below, we want to rename our app and also change its default workflow. 

The `{{app_id}}` refers to the app id of the application that we want to edit. It is set in the Postman environment.

```json
{
    "apps": [
        {
            "id": "{{app_id}}",
            "name": "my-first-app",
            "default_workflow_id": "Food"
        }
    ],
    "action": "overwrite"
}

```

![Patch application](/img/postman/patch_application.png)

### d) Delete Application

You can use Postman to delete an existing application by making a `DELETE` request to this URL: `{{base_url}}/v2/users/{{user_id}}/apps/{{app_id}}`. 

Running the request will delete the app with the `app_id` already set in the Postman environment. If you want to delete another app, you can set its value in the Postman environment or directly in the URL field.

![Delete application](/img/postman/delete_application.png)

## Inputs

An input is any data you provide into the Clarifai platform. It could be in the form of an image, video, text, or audio.

Let's illustrate how to add inputs, get inputs, search inputs, and delete inputs using Postman. 

### a) Add Inputs

For example, if you want to add an image input to the Clarifai platform, you can make a `POST` request to this URL: `{{base_url}}/v2/users/{{user_id}}/apps/{{app_id}}/inputs`. 

And under the **Body** tab, select **raw** and add the details of the image you want to add. You need to use the `url` parameter to provide a publicly accessible URL of the image you want to add.

```json
  {
    "inputs": [
        {
            "data": {
                "image": {
                    "url": "https://samples.clarifai.com/metro-north.jpg",
                    "allow_duplicate_url": true
                }
            }
        }
    ]
}
```
![Add image](/img/postman/add_image_1.png)

After running the request, you'll get a response that contains the id of the image you added:

![Add image](/img/postman/add_image_2.png)
 
Each input has a unique id associated with only itself. Even if you upload the same image multiple times to an application, each one will be assigned its own unique id. 

#### Add Input with Metadata

You can also add an input alongside other metadata, such as concepts.

Here is an example:

```json
{
    "inputs": [
        {
            "data": {
                "image": {
                    "url": "https://samples.clarifai.com/dog.tiff",
                    "allow_duplicate_url": true
                },
                "concepts": [
                    {
                        "id": "cat",
                        "value": true
                    }
                ],
                "metadata": {
                    "split": "train"
                }
            }
        }
    ]
}

```
![Add input with metadata](/img/postman/add_input_with_metadata.png)

### b) Get Inputs

#### List All Inputs

To list all the inputs associated with your application, make a `GET` request to this URL: `{{base_url}}/v2/users/{{user_id}}/apps/{{app_id}}/inputs/?per_page=1000&page=1`. 
 
Notice the `page` and `per_page` query string parameters added to the request. These parameters allow you to split your results into [pages](https://docs.clarifai.com/api-guide/advanced-topics/pagination).

The `page` params indicates the page number⁠—defaults to 1. The `per_page` params indicates the number of results that will be contained in each page⁠—defaults to 128. You can get up to 1,000 results per page.

In the above example, we are getting all inputs and specifying to start at page 1 and retrieve 1,000 results per page.

Here is how the results of running the request look like:

![List all inputs](/img/postman/list_all_inputs.png)

#### Get Input by Id

To get the details of a specific input by its ID, make a `GET` request to this URL: `{{base_url}}/v2/users/{{user_id}}/apps/{{app_id}}/inputs/{{input_id}}`. 

Running the request will get the details of the input with its `input_id` already set in the Postman environment. If you want to get the details of another input, you can set its value in the Postman environment or directly in the URL field.

![Get input by id](/img/postman/get_input_by_id.png)

### c) Search Inputs

Our API automatically indexes your inputs so that they are ready for search from the moment they are uploaded. Once indexed, you can search inputs by concept, visual similarity, or other search parameters.

You need to make a `POST` request to this URL: `{{base_url}}/v2/users/{{user_id}}/apps/{{app_id}}/searches`.

For example, here is how you can search your inputs for the presence of a defined search term:

```json
{
    "pagination":{
        "page": 1,
        "per_page":1000
    },
    "query": {
        "ands": [
            {
                "output": {
                    "data": {
                        "concepts": [
                            {
                                "name": "charlie"
                            }
                        ]
                    }
                }
            }
        ]
    }
}
```
As you can see above, we've added an extra segment into the top line of the JSON content in the body tab: `"pagination":{"page":1, "per_page":1000}`.
As explained previously, this extra code allows the API to return up to 1,000 results per page.

Here is how the results of running the request look like:

![Search inputs](/img/postman/search_inputs.png)
 
As you can see on the screenshot above, the results show the first input (of several inputs), along with a "score", which is the percentage that the model believes this image contains our search term `charlie`.

### d) Delete Inputs

#### Delete by ID

To delete an input by its id, make a `DELETE` request to this URL: `{{base_url}}/v2/users/{{user_id}}/apps/{{app_id}}/inputs/{{input_id}}`. 

Running the request will delete the input with its `input_id` already set in the environment. If you want to delete another input, you can set its value in the Postman environment or directly in the URL field.

![Delete input](/img/postman/delete_input.png)

#### Delete Batch by IDs

You can also delete multiple inputs associated with your application in one API call by making a `DELETE` request to this URL: `{{base_url}}/v2/users/{{user_id}}/apps/{{app_id}}/inputs`. It will happen asynchronously.

You need to add a list of your input ids using the `ids` parameter in the body of the request. 

```json
{
    "ids": ["c13b453fb806476cb00b25f29ae0c2ce", "235975f6115b4bf8b5b66e9a4d15e2b6", "d53d947baed14a6099d5f2b74a88b12c", "ae2ccd88d32d4c6089cd8770dbd8115b"]
}
```
Here is an example:

![Delete batch by ids](/img/postman/delete_batch_ids.png)

## Make Predictions

You can use Postman to [make predictions](https://docs.clarifai.com/api-guide/predict/) on your image, video, and text inputs. The Clarifai API will analyze and tell you what's inside them.

The API will return a list of [concepts](https://docs.clarifai.com/api-guide/concepts/) with corresponding probabilities of how likely it is these concepts are contained within the provided input.

For example, if you want to make predictions on image inputs, you need to make a `POST` request to this URL: `{{base_url}}/v2/users/{{user_id}}/apps/{{app_id}}/models/{{model_id}}/versions/{{model_version}}/outputs`. 

Note that you need to specify the model you'd like to use with the `model_id` parameter. In this example, we'll use Clarifai's `general-image-recognition` model.

Specifying the model's version id, using the `version_id` parameter, is optional. If  you do not specify the `version_id`, predictions will occur on the most recent version of the model.

You also need to provide a publicly-accessible URL of the image you want to make predictions from using the `url` parameter in the body of the request.

```json
{
    "inputs": [
        {
          "data": {
            "image": {
              "url": "https://samples.clarifai.com/metro-north.jpg"
            }
          }
        }
      ]
}
```

Here is an example of how you would send an image URL and receive predictions from Clarifai's `general-image-recognition` model:

![Make predictions](/img/postman/make_predictions.png)

