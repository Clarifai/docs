---
sidebar_position: 1
---

# Personal Access Tokens

**Represent a specific user when accessing the Clarifai API**
<hr />

A Personal Access Token \(usually shortened as PAT\) is a kind of key that authenticates a user across all applications they have access to. It's not linked to a specific application.

A PAT represents you when accessing the Clarifai API. It's a powerful way of accessing your resources within the Clarifai platform. 

You can use PATs to accomplish the following:

- Access multiple apps with a single key. This lets you access your own apps as well as any other apps you have permissions to use, such as public apps, apps you're added as a collaborator, or apps belonging to your organization's team.
- Create apps and app-specific keys programmatically through the API. This is crucial for programs that segregate data of each of their end-users into different apps.


:::important IMPORTANT NOTE

- PAT is the primary authentication mechanism we use. 

:::

## How to Create a New PAT

To create a new PAT, log in to the Portal and navigate to the bottom left-hand corner of the application overview page. Then, click  the initials of your name:

![navigate-authentication](/img/navigate_authentication.jpg)

Select the "Authentication" option and click the "Create Personal Access Token" button:

![authentication-screen](/img/authentication_screen.jpg)

Provide a short token description, set the scopes you want to apply, and click the "Create" button:

![create-pat](/img/create_pat.jpg)

:::caution

- PATs do not expire. In case your PAT gets compromised, you should delete it, and create a new one with the same scopes.

- We recommend that you do **not** share your PAT with other users.

:::
