---
description: How to collaborate on the Clarifai platform
sidebar_position: 3
pagination_next: null
---

# App Collaboration

**How to collaborate on the Clarifai platform**
<hr />

Collaboration is a functionality that allows you to share your apps so that you can work with your team members to label data, create models, and more. With this feature, you can control the permissions available in your apps and manage the capabilities available to each user. 

For example, you can give a trusted collaborator full access privileges. You can also invite a worker and grant them limited permissions, such as only to annotate data but not to delete them.

## How to Add a Collaborator

### Via App Overview Page

You can easily add a collaborator directly from the **App Overview** page. 

Here’s how:

![](/img/others-2/app-collaboration-1.png)

**1.** Go to the specific application where you want to add a collaborator;

**2.** Select the **Overview** option on the collapsible left sidebar;

**3.** In the upper-right corner of the **App Overview** page, click the add collaborator button;

**4.** A form will appear. Enter the email address associated with the collaborator’s Clarifai account and [specify the scope](#choose-scopes) of resources you want them to access;

**5.** Lastly, click the **Confirm** button. The invited collaborator will receive an email notification informing them that they have been added to the app.

### Via App Settings Page

You can also add a collaborator from the **App Settings** page. 

Here's how: 

![](/img/others-2/app-collaboration-2.png)


**1.** Go to the specific application where you want to add a collaborator;

**2.** Select the **Settings** option on the collapsible left sidebar;

**3.** Once on the **App Settings** page, scroll down to find the **Collaborators** section;

**4.** Click the **Add Collaborators** button;

**5.** A form will appear. Enter the email address associated with the collaborator’s Clarifai account and [specify the scope](#choose-scopes) of resources you want them to access;

**6.** Lastly, click the **Confirm** button. The invited collaborator will receive an email notification informing them that they have been added to the app.

## View Collaborations

You can easily access the apps where you've been added as a collaborator by selecting the **Collaborations** option in the top menu. This will take you to a page that lists all the apps you've been invited to collaborate on.

 ![](/img/others-2/view-collaborations.png)


## Choose Scopes

You can select specific scopes when adding a collaborator. Modifying these scopes provides fine-grained control over the data that users can access, enhancing your app's security and preventing unauthorized intrusions.

In the **Add Collaborator** form, you can click the **Select All Scopes** button to choose all scopes at once. Alternatively, you can select individual scopes from the listed **BASIC SCOPES**, or click on the **ADVANCED SCOPES** option to access more advanced choices.

You can edit a collaborator's scopes at a later time.

These are the basic scopes you can choose:

```text
Annotation: Add and Remove Annotations on Inputs
Collaborator: Add, Remove and Patch Collaborators
Collector: Add, Remove and Patch Input Collectors
Concept: Add, Remove and Patch Concept
Input: Add and Remove Inputs to an App
Model: Add, Remove and Train Custom Models
Predict: Predict on Public and Custom Models
Search: Search over Inputs an App
Task: Add, Remove and Patch Scribe labeling Tasks
Vocab: Add, Remove and Delete lists of Concepts
Workflow: Add, Remove and Delete Workflows of Models
```

[Click here](https://docs.clarifai.com/clarifai-basics/authentication/scopes/) to learn more about scopes.


:::tip Collaboration

* [Personal Access Tokens (PATs)](https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens) are automatically generated for collaborators, providing them access to the Clarifai API.

* Collaborators can also invite other collaborators.

:::