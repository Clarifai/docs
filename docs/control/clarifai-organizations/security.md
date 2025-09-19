---
description: Learn how to enhance the security of your Clarifai organization
pagination_next: null
sidebar_position: 3
---

# Security 

**Learn how to enhance the security of your Clarifai organization**

<hr />

At Clarifai, we understand that the security of your organization is of utmost importance. We are committed to prioritizing security and have designed our platform to cater to the needs of even the most security-conscious companies. 

Our robust security measures ensure the protection and confidentiality of your valuable data. 

## Scopes and Access Levels of Organization Members

Scopes and access levels play a crucial role in defining the boundaries of the components, resources, or data that members of an organization can access or manipulate. 

Every member of a Clarifai organization has their own pre-set scopes that determine what actions they can perform and what resources they can access. 

The permissions allowed for each user type help to protect your organization’s resources from unauthorized infiltration, maintain the privacy of your assets, and ensure trackability of resources by knowing who has access to what. 

[Click here](members-teams.md#roles-for-members) to see a summary of the permissions assigned to each role.

Here is a table detailing the scopes and access levels allowed for each user type within a Clarifai organization.

| Permission                                    | Administrator | Financial Manager | Organization Contributor (all apps) | Team Contributor (select apps) | Organization User (all apps) | Infrastructure Manager |
| --------------------------------------------- | ------------- | ----------------- | ----------------------------------- | ------------------------------ | ---------------------------- | ---------------------- |
| View Sidebar Items                            | Yes           |                   | Yes                                 | Yes                            | Yes                          |                        |
| Create Models                                 | Yes           |                   | Yes                                 | Yes                            | No                           |                        |
| Create Workflows                              | Yes           |                   | Yes                                 | Yes                            | No                           |                        |
| Edit App ID                                   | Yes           |                   | Yes                                 | No                             | No                           |                        |
| Edit App Description                          | Yes           |                   | Yes                                 | Yes                            | No                           |                        |
| Edit App Notes                                | Yes           |                   | Yes                                 | Yes                            | No                           |                        |
| View Collaborators                            | Yes           |                   | Yes                                 | Yes                            | Yes                          |                        |
| Edit Collaborators                            | Yes           |                   | Yes                                 | No                             | No                           |                        |
| Base Workflow View                            | Yes           |                   | Yes                                 | Yes                            | Yes                          |                        |
| Base Workflow Edit                            | Yes           |                   | Yes                                 | No                             | No                           |                        |
| Delete All Models                             | Yes           |                   | Yes                                 | Yes                            | No                           |                        |
| Delete App                                    | Yes           |                   | Yes                                 | No                             | No                           |                        |
| Invite / Modify / Delete Members              | Yes           |                   | No                                  | No                             | No                           |                        |
| Create / Edit / Delete Teams                  | Yes           |                   | Yes                                 | No                             | No                           |                        |
| Add Members to Teams                          | Yes           |                   | Yes                                 | No                             | No                           |                        |
| Add Apps to Teams                             | Yes           |                   | Yes                                 | No                             | No                           |                        |
| Create Apps                                   | Yes           |                   | Yes                                 | No                             | No                           |                        |
| Change Visibility of Apps                     | Yes           |                   | Yes                                 | No                             | No                           |                        |
| Change Visibility of Apps Resources           | Yes           |                   | Yes                                 | Yes                            | No                           |                        |
| Use Modules                                   | Yes           |                   | Yes                                 | Yes                            | Yes                          |                        |
| Create / Delete Modules                       | Yes           |                   | Yes                                 | Yes                            | No                           |                        |
| Install / Uninstall Modules                   | Yes           |                   | Yes                                 | Yes                            | No                           |                        |
| Create / Edit / Delete Clusters and Nodepools | Yes           | No                | No                                  | No                             | No                           | Yes                    |
| Deploy and View Models in Clusters            | Yes           | No                | Yes                                 | No                             | No                           | Yes                    |
| View Clusters and Nodepools                   | Yes           | No                | Yes                                 | No                            | Yes                           | Yes                    |
| View Financial Data                           | Yes           | Yes               | No                                  | No                             | No                           | No                     |



## Enforce Your Clarifai Organization's Security

You can take some additional actions to augment the security of your organization at Clarifai.

To access the security settings of your organization, [log into](README.mdx#how-to-use-an-org) your organization’s account. Then, in the collapsible left sidebar, select **Settings** and choose **Security** from the dropdown list.

![Security organization settings](/img/clarifai_orgs/security_option.png)

On the **Security** page, you can view the password policies associated with your organization’s account. You can also create and view identity providers to reinforce the security of your organization. 

For example, if you want to add a security identity provider, such as SAML (Security Assertion Markup Language), click the **Create Identity Provider** button. 

> **Note:** SAML is a reliable mechanism that can add to the security of your organization’s account by ensuring authentication and authorization data are securely transferred between parties. 

On the next page, provide the required details, toggle the enable button, and click the **Create** button to finalize the process. 

![Create identity provider](/img/clarifai_orgs/create_identity_provider.png)

