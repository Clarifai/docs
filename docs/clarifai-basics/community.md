---
description: We make our platform open for community to discover, test, use and share models and workflow (apps and datasets are coming soon) with Clarifai community.
---

# Get Started With Clarifai Community

**A quick-start guide on the Clarifai Community**
<hr />

We make our platform open for anyone to discover, test, use, and share models and workflows (apps and datasets are coming soon) with the Clarifai Community.

You can access our “AI lake” of pre-trained models and workflows, including high-quality models built by Clarifai, Hugging Face, Google, and other top contributors. 

You can use the Community's resources as building blocks for developing amazing products with our no-code/low-code end-to-end AI platform.

Think of the Clarifai Portal as an IDE where you develop your models and the Community as a type of git-like repository where you publish them. Your models and workflows are synced with your Community profile.

<!--
You can still use the current portal as a development GUI-based IDE and use the community as a "GitHub" on top of the IDE (models & workflows are synced with community profile)
-->

## Explore the Community

:::info
No login is required to explore the Community.
:::

You can go to the [Community's main page](https://clarifai.com/explore) and search for what you need to build state-of-the-art AI-powered apps.

You can explore our huge collection of published AI models and workflows and discover the ones best suitable for your use case.

![Explore Clarifai community](/img/community/explore_community.png)

For example, to search for models, click the [Models](https://clarifai.com/explore/models) tab on the top-left corner of the page. Next, use the search box to look for the model you require—by its ID or description. You can also use the various filter options on the right side of the page to search for the specific model you require. 

![Search models](/img/community/search_models.png)


## How to Make Predictions

:::info
You need an account to start making predictions. Just click [here](https://clarifai.com/login) to log in or [here](https://clarifai.com/signup) to set up an account. Remember to give yourself a cool user ID.
:::

In this example, we want to use one of our pre-trained models to detect the location of human faces in images. 

Let's start by using the filtering feature to select the model for making the predictions. 

Click the **Models** tab on the top-left corner of the page. Next, go to the **Filters** section on the right side of the page, and under **INPUT TYPE**, select the **image** checkbox. Under **Model Type**, select **Visual Detector**.  

![make predictions](/img/community/make_predictions.png)

Type "face" in the search box to filter the models for face detection. Next, select the **Clarifai/main/Face** model.

![filter models](/img/community/filter_models.png)

After selecting the model, you'll be redirected to its main page. See that there are some default photos that show how the model works. Also, notice that there are bounding boxes around the detected faces. On the right side of the page, there are previews of the detected faces alongside the probability value of their correctness. 

![Faces bounding boxes](/img/community/faces_bounding_boxes.png)

To make your own predictions, click the **Try Your Own Input** button at the bottom-right section of the page and add your own image. 

Next, upload an image from your local storage or add it via a publicly accessible URL, and click the **Submit** button. In this example, we'll use [this image](https://samples.clarifai.com/demo-004.jpg) of a happy couple. 

![Try your own input button](/img/community/try_your_own_input_button.png)

You'll see the results of all the concepts identified in the photo. 

![Concepts in photo](/img/community/concepts_in_photo.png)

You can also click the **View JSON** button underneath the **Try Your Own Input** button to view the JSON returned by the model for programmatic use.

![View JSON button](/img/community/view_json_button.png)

## How to Use a Model in API or Add it to Workflow

The below video showcases how to create 2 different multimodal workflows in Community.

<iframe width="670" height="380" src="https://www.youtube.com/embed/Me_HmQ6WiJk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br></br> 
<br></br> 

Let's see how you can use a model in an API or add it to a worklow. To do so, you can start by searching for the model you'd like to use. You can follow the steps described previously to select your preferred model.

Then, on the model's main page, click the **Use Model** button at the top-right corner. 

![Use model button](/img/community/use_model_button.png)

A window will pop up having two tabs: **Call by API** and **Use in a Workflow**. 

![Window two tabs](/img/community/windows_two_tabs.png)

If you want to use the model in an API, just copy the code inside the **Call by API** section. You can select the programming language you prefer. 

To add the model to a workflow, select the **Use in a Workflow** tab. On the ensuing window, you can select an existing application and a workflow to use. If you're using a new account, you may only have **my-first-application** to select. In our case, as seen below, there are a number of apps already existing in our account.

![Add model to workflow](/img/community/add_model_to_workflow.png)

Let's select **my-first-application** from the app dropdown list. 

In this example, instead of selecting an existing workflow, we'll create a new one. So, select the **Create new Workflow** checkbox and provide a **Workflow ID**. We've called it **general-test2**, but you can provide whatever name you like. Lastly, click the **Confirm** button. 

![Create new Workflow checkbox](/img/community/create_new_workflow_checkbox.png)

Next, you'll be redirected to the created workflow's page. The page has a visual graph where you can drag and connect components of your workflow. 

![Created workflow visual graph](/img/community/created_workflow_visual_graph.png)

You can access your workflows by clicking on the **Profile** link at the top-left corner of the page. You can also click on the profile icon at the top-right corner of the page. The icon is a small circle that contains either the initials of your name or a photo you've uploaded. 

Once your profile page opens, select **Workflows** and click the workflow you want. 

![Profile page workflows](/img/community/click_profile_page_workflows.png)

You'll then be presented with a page where you can carry out various tasks with the workflow. 

![Workflow tasks page](/img/community/workflow_tasks_page.png)

## Relationship Between Clarifai Portal and Clarifai Community

Let's demonstrate the relationship between the Clarifai Portal and the Clarifai Community. As mentioned earlier, you can think of the Portal as an IDE where you develop your models and the Community as a GitHub-style repository where you expose them to the world. 

:::info
We'll use a custom model to show the relationship between the Clarifai Portal and the Clarifai Community. You can [click here](../api-guide/model/custom-model-walkthrough) to learn how to create models programmatically via an API. You can also [click here](../portal-guide/model/pcustom-model-walkthrough) to learn how to create models directly on the Portal. 
:::

Let's start by [logging in](https://portal.clarifai.com/login) to the Clarifai Portal. If we click the icon composed of small squares on the left sidebar, we can see a list of applications present in our instance of the Portal.

![Clarifai portal log in](/img/community/clarifai_portal_log_in.png)

You can see that there is an application called **text-moderation-test**.

Let's switch to the [Community view](https://clarifai.com/explore) and click the **Profile** link at the top-left corner. Notice that the same  **text-moderation-test** application is listed under **Apps**.

![Application apps](/img/community/application_apps.png)

Let's go back to the Portal and select the **text-moderation-test** application. We'll then be redirected to its individual page.

![Portal application page](/img/community/portal_application_individual_page.png)

As you can see on the image above, the icon composed of four small squares on the left sidebar is the Model Mode. Let's click on it and see a list of models available in the application. 

![Model mode](/img/community/model_mode.png)

Under the **Models** tab, you can use the **User** dropdown to see all the Clarifai’s pre-trained models or those available under your username. In this example, select your username to see the models you've created.

![User dropdown](/img/community/user_dropdown.png)

As you can see on the image below, we have a model called **bert-base-uncased-hatexplain**, which is a BERT-based model for NLP classification. It is inside the **text-moderation-test** application.

![NLP model](/img/community/NLP_model.png)

Let's switch to the Community view and select the **text-moderation-test** application. We'll then be redirected to its individual page.

Next, select the **Models** option on the left sidebar. Notice that the same **bert-base-uncased-hatexplain** model is listed under **Models**.

![Portal models option](/img/community/models_option.png)

Let's click on the **bert-base-uncased-hatexplain** model. We'll then be redirected to its individual page. That is where you can make predictions with the model as we explained earlier.

![Portal model individual page](/img/community/model_individual_page.png)

## How to Publish a Model

Publishing on the Clarifai Community allows you to publicize a model you have created so that other users can incorporate it into their use cases.

Let's start by going to the model's page on the Community and clicking the **Edit Visibility** button at the top-right section.

A dialog box then appears that allows the model's visibility to be changed from PRIVATE to PUBLIC. You also need to use the dropdown option to select the version of the model you want to make public.

Then, click the **Confirm** button to publish the model. 

![Portal publish model](/img/community/confirm_button_publish.png)

:::note
Setting the model visibility to public exposes your user ID and app ID. It also allows anyone to see your app notes, tags, and descriptions.
:::

Additionally, if you scroll downwards on the model's page, you see several options on the right sidebar that let you fine-tune the features of the model according to your preferences. For example, you can edit its ID, add a description, choose a tag (or tags) that represents its use case, select a toolkit, and more.

![Use case toolkit license](/img/community/use_case_toolkit_license.png)

After publishing the model, you can see that it's listed publicly on the Community under the **Models** tab.

![Community public models](/img/community/public_models.png)

That's it!
