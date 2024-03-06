---
description: How to collaborate on the Clarifai platform
sidebar_position: 3
---

# Collaboration

**How to collaborate on the Clarifai platform**
<hr />

Collaboration is a functionality that allows you to share your apps so that you can work with your team members to label data, create models, and more. This feature comes with complete control of the permissions available in your apps, which allows you to manage the capabilities and information available to each user. 

You can give a trusted collaborator full access privileges. You can also invite a worker and grant them limited permissions only to annotate data but not to delete them.

## How to add a collaborator

Go to the application's individual page and select the **Settings** option on the collapsible left sidebar.

When redirected to the **App Settings** page, scroll down to the **Collaborators** section. 

Click the **Add Collaborators** button to add a collaborator to your app. 

![](/img/add_collaborators.jpg)

Then, use the form that pops up to invite a collaborator — provide an email address associated with their Clarifai account and choose the scope of the resources that you would like the collaborator to access.

### Choose scopes

![](/img/collaborator_scopes.jpg)

You have the option to use the **Select All Scopes** button to choose all scopes at once. Alternatively, you can select individual scopes from the listed **BASIC SCOPES**, or click on the **ADVANCED SCOPES** option to access more advanced choices.

Here are the basic scopes you can choose. 

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

:::note

- The collaborator you want to invite must have a registered account on the Clarifai portal.
- You can edit a collaborator's scopes at a later time.

:::

Lastly, click the **Confirm** button. 

:::info

* [Personal Access Tokens (PATs)](https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens) are automatically generated for collaborators, providing them access to the Clarifai API.

* Collaborators can also invite other collaborators.

:::