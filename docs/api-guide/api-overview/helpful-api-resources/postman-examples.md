---
description: Clarifai Postman examples.
sidebar_position: 2
---

# Clarifai Postman Examples

**Learn how to make API calls with Postman**
<hr />

After learning [how to use Postman with Clarifai APIs](https://docs.clarifai.com/api-guide/api-overview/helpful-api-resources/using-postman-with-clarifai-apis), let's now delve into more examples that will help you to confidently use Postman to call our services. 

If you have not imported the Clarifai collection into Postman yet, use the following Run in Postman button to import it: 

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/8c7850b96f74d0fc03c0)

## Applications

Applications are the basic building blocks for creating projects on the Clarifai platform. Your data, annotations, models, predictions, and searches are contained within applications.

After importing the Clarifai collection into Postman, inside the **Applications** folder in the sidebar, you should generally see four types of items/actions:

![Clarifai applications](/img/postman/clarifai_applications.png)

- **Create Application** (with numerous variants)—As one could guess, any of these creates a new application within your current account (signified by your `session_token`).

- **Get Application(s)**—It is used to find and set an `app_id` to the Postman environment.

- **Patch Application**—It is used to edit parts of an existing application, such as its display name, language, or base workflow.

- **Delete Application**—It deletes the selected application.

### a) Create Application

To create an application, select any of the **Create Application** actions. The respective tab will then open in the main window. 

Within **Create Application**, select the **Headers** tab. You can now see all the environment variables required for this action—`{{base_url}}`, `{{user_id}}`, and `{{session_token}}`.

![Create app variables](/img/postman/create_app_variables.png)

:::tip

You may visit the [previous section](https://docs.clarifai.com/api-guide/api-overview/helpful-api-resources/using-postman-with-clarifai-apis#setting-up-postman-environment) and learn how to create environment variables in Postman. 

:::

If you click the **Body** tab, you can customize the details of the application you want to create. 

In this example, let's create an application called "app-food". We also specify its default base workflow as "Food". 

![Create a food application](/img/postman/create_food_application.png)

:::info

The base workflow is a prebuilt Clarifai model that you choose to be the default knowledge base for your application. In this case, choosing a "Food" model would allow you to optimize the performance of a custom model that is trained around food. 

:::

The app's language will default to English. 

Click **Send** to create the application. 

You can also experiment with the other provided **Create Application** actions. 

### b) Get Applications

The **Get Applications** endpoint allows you to list all the applications in your instance of the Clarifai platform. 

![Get applications](/img/postman/get_applications.png)

After running the endpoint, it will return a list of your applications, their ids, and other information. 

The id of the topmost application—in our example above, that is the application named "app-food" with an id of "app-food"—is automatically set into the environment as the `app_id`. If you need to set a different one, you can do so manually.

#### Get Application

The **Get Application** endpoint allows you to get the details of a specific app.

![Get application](/img/postman/get_application.png)

If you run the **Get Application** endpoint as-is, you'll get the details of the `app_id` already set in the environment. 

If you want to get the details of another app, you can set its value in the Postman environment or directly in the URL field.

### c) Patch Application

The **Patch Application** endpoint allows you to patch or edit an existing application. You can use it to change an app's name, default language, default workflow, and more.

If you click the **Body** tab, you can edit the details of the application. 

![Patch application](/img/postman/patch_application.png)

The `{{app_id}}` inside the input window refers to the `app_id `of the application that you want to edit.

In our example above, running this request will rename our example app from "app-food" to "food-app".

You can also experiment with the other provided **Patch Application** actions. 

### d) Delete Application

The **Delete Application** endpoint allows you to delete an existing application.

![Delete application](/img/postman/delete_application.png)

If you run the endpoint as-is, it will delete the app with the `app_id` already set in the environment. 

If you want to delete another app, you can set its value in the Postman environment or directly in the URL field. 

## API Keys

API keys are used to authorize access to your Clarifai applications. 

API keys go hand-in-hand with application ids, except whereas app ids allow you to create/edit/delete application-level details, API keys are required to create/edit/delete the things within the application itself, such as models, concepts, and inputs.

Inside the **Keys** folder in the sidebar, you should generally see the following items/actions:

![Postman keys](/img/postman/postman_keys.png)

You can experiment with any of the actions within the  **Keys** folder. 

Let's illustrate how to use some of them. 

### a) Create Keys

#### Create Key (All Permissions)

The **Create Key (All Permissions)** endpoint allows you to create a new [app-specific API key](https://docs.clarifai.com/clarifai-basics/authentication/app-specific-api-keys) for your current model. Running this request will create a key with all permissions and automatically store the newly created key in the Postman environment.

![Create key](/img/postman/create_key.png)

#### Create PAT

The **Create PAT** endpoint allows you to create a [PAT](https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens) (Personal Access Token). 

![Create PAT](/img/postman/create_pat.png)

:::info

Unlike API keys, PATs are not linked to any specific application. With a PAT, you can access multiple apps with a single key. 
It's a powerful way of accessing your resources within the Clarifai platform.

:::

### b) Get Keys

#### Get Keys by Application ID

If you don't know the keys for an application, running the **Get Keys by Application ID** endpoint allows you to list all the API keys for your stipulated application. This request also automatically assigns the topmost key in the response to the Postman environment.

![Get keys](/img/postman/get_keys.png)

#### Get Key by Value

If you already know the API key and just want to load that key into the Postman environment, or get its details, you can run the **Get Key by Value** endpoint. You need to replace the `{{key}}` variable in the URL with the relevant API key for the application you want to manipulate.

![Get key by value](/img/postman/get_key_by_value.png)

### c) Delete Key

The **Delete Key by Value** endpoint allows you to delete an API key.

![Delete key](/img/postman/delete_key.png)

If you run the endpoint as-is, it will delete the key with the `key` already set in the environment. 

If you want to delete another key, you can set its value in the Postman environment or directly in the URL field. 

## Inputs

An input is any data you provide into the Clarifai platform. It could be in the form of an image, video, text, or audio.

Inside the **Inputs** folder in the sidebar, you should generally see the following items/actions:

![Inputs](/img/postman/inputs_sidebar.png)

You can experiment with any of the actions within the  **Inputs** folder. 

Let's illustrate how to use some of them. 

### a) Add Inputs

#### Add Image

The **Add Image** endpoint allows you to add an image input to the Clarifai Platform.

![Add image](/img/postman/add_image.png)

In the body of the request, you need to use the `url` parameter to provide a publicly accessible URL of the image you want to add. 

After running the request, you'll get a response that contains the id of the image you added:

![Add image response](/img/postman/add_image_response.png)

Each input has a unique id associated with only itself. Even if you upload the same image multiple times to an application, each one will be assigned its own unique id. This is the `asset_id`, which will be automatically stored in the Postman environment after adding the image. 

#### Add Input with Metadata

The **Add Input with Metadata** endpoint allows you to add an input alongside other metadata, including concepts.

![Add input with metadata](/img/postman/add_input_with_metadata.png)

### b) Get Inputs

#### List All Inputs

The **List All Inputs** endpoint allows you to list all the inputs associated with your application. 

![List all inputs](/img/postman/list_all_inputs.png)

Notice the `page` and `per_page` query string parameters added to the request. These parameters allow you to split your results into pages. 

The `page` params indicates the page number⁠—defaults to 1. The `per_page` params indicates the number of results that will be contained in each page⁠—defaults to 128. You can get up to 1,000 results per page.

In the above example, we are getting all inputs and specifying to start at page 1 and retrieve 1,000 results per page.

Here is how the results of running the request look like:

![List all inputs results](/img/postman/list_all_inputs_results.png)

#### Get Input by Id

You can get the details of an input by its id. 

![Get input by id](/img/postman/get_input_by_id.png)

If you run the endpoint as-is, it will get the details of the input with its `asset_id` already set in the environment.

If you want to get the details of another input, you can set its value in the Postman environment or directly in the URL field.

### c) Search Inputs

Our API automatically indexes your inputs so that they are ready for search from the moment they are uploaded. Once indexed, you can search for inputs by concept, visual similarity, or other search parameters.

#### Search by tag

The **Search by tag** endpoint, which is found inside the **Search** folder in the Postman sidebar, allows you to search your inputs for the presence of the defined search term. 

![Search by tag](/img/postman/search_by_tag.png)

As you can see on the screenshot above, we've added an extra segment into the top line of the JSON content in the body tab: `"pagination":{"page":1, "per_page":1000}`.

As explained previously, this extra code allows the API to return up to 1,000 results per page.

Here is how the results of running the request look like:

![Search by tag results](/img/postman/search_by_tag_results.png)

As you can see on the screenshot above, the results show the first input (of several inputs), along with a "score", which is the percentage that the model believes this image contains our search term "charlie". 

### d) Delete Inputs

#### Delete by ID

The **Delete by ID** endpoint allows you to delete an input by its id.

![Delete input by id](/img/postman/delete_input_by_id.png)

If you run the endpoint as-is, it will delete the input with its `asset_id` already set in the environment.

If you want to delete another input, you can set its value in the Postman environment or directly in the URL field.

#### Delete Batch by IDs

The **Delete Batch by IDs (async)** endpoint allows you to delete multiple inputs associated with your application in one API call. It will happen asynchronously.

You need to add a list of your input ids using the `ids` parameter in the body of the request. You can run the [List All Inputs](#list-all-inputs) endpoint to get your input ids. 

![Delete batch by ids](/img/postman/delete_batch_by_ids.png)

 