---
description: clarifai Postman examples.
sidebar_position: 2
---

# Clarifai Postman Examples

**Learn how to make API calls with Postman**
<hr />

After learning [how to use Postman with Clarifai APIs](https://docs.clarifai.com/api-guide/api-overview/helpful-api-resources/using-postman-with-clarifai-apis), let's now delve into more examples that will help you to confidently use Postman to call our API. 

If you have not imported the Clarifai collection into Postman yet, use the following Run in Postman button to import it: 

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/8c7850b96f74d0fc03c0)

## Applications

After importing the Clarifai collection into Postman, inside the **Applications** folder in the sidebar, you should generally see four types of items/actions.



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

If you want to get the details of another app, you can set its `app_id` in the Postman environment. 

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

If you want to delete another app, you can set its `app_id` in the Postman environment. 





