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

Every member of a Clarifai organization — Administrator, Organization Contributor, Team Contributor, or Organization User — has their own pre-set scopes that determine what actions they can perform and what resources they can access. 

The permissions allowed for each user type help to protect your organization’s resources from unauthorized infiltration, maintain the privacy of your assets, and ensure trackability of resources by knowing who has access to what. 

Here is a summary of the permissions:

- **Administrator** — the user has administrative privileges in the organization. 
- **Organization Contributor** — the user can contribute to all the apps within the organization, but without some admin privileges.
- **Team Contributor** — the user can perform only some selected actions.
- **Organization User** — the user has access privileges similar to those of an Organization Contributor for all apps and scopes. However, the role comes with view-only permissions without ability to perform certain CRUD operations — create, update, or delete resources.

Here is a table detailing the scopes and access levels allowed for each user type within a Clarifai organization:

| <br/>                                       | Administrator<br/>    | Organization Contributor<br/>    | Team Contributor<br/>    | Organization User<br/>  |
|--------------------------------------------|----------------------|---------------------------------|-------------------------|-----------------------------|
| View Sidebar Items<br/>                     | Yes<br/>              | Yes<br/>                         | Yes<br/>                 | Yes<br/> |
| Create Models<br/>                          | Yes<br/>              | Yes<br/>                         | Yes<br/>                 | No<br/> |
| Create Workflows<br/>                       | Yes<br/>              | Yes<br/>                         | Yes<br/>                 | No<br/> |
| Edit App ID<br/>                            | Yes<br/>              | Yes<br/>                         | No<br/>                  | No<br/> |
| Edit App Description<br/>                   | Yes<br/>              | Yes<br/>                         | Yes<br/>                 | No<br/> |
| Edit App Notes<br/>                         | Yes<br/>              | Yes<br/>                         | Yes<br/>                 | No<br/> |
| View Collaborators<br/>                     | Yes<br/>              | Yes<br/>                         | Yes<br/>                 | Yes<br/> |
| Edit Collaborators<br/>                     | Yes<br/>              | Yes<br/>                         | No<br/>                  | No<br/> |
| Base Workflow View<br/>                     | Yes<br/>              | Yes<br/>                         | Yes<br/>                 | Yes<br/> |
| Base Workflow Edit<br/>                     | Yes<br/>              | Yes<br/>                         | No<br/>                  | No<br/> |
| Delete All Models<br/>                      | Yes<br/>              | Yes<br/>                         | Yes<br/>                 | No<br/> |
| Delete App<br/>                             | Yes<br/>              | Yes<br/>                         | No<br/>                  | No<br/> |
| Invite / Modify / Delete Members<br/>       | Yes<br/>              | No<br/>                          | No<br/>                  | No<br/> |
| Create / Edit / Delete Teams<br/>           | Yes<br/>              | Yes<br/>                         | No<br/>                  | No<br/> |
| Add Members to Teams<br/>                   | Yes<br/>              | Yes<br/>                         | No<br/>                  | No<br/> |
| Add Apps to Teams<br/>                      | Yes<br/>              | Yes<br/>                         | No<br/>                  | No<br/> |
| Create Apps<br/>                            | Yes<br/>              | Yes<br/>                         | No<br/>                  | No<br/> |
| Change Visibility of Apps<br/>              | Yes<br/>              | Yes<br/>                         | No<br/>                  | No<br/> |
| Change Visibility of Apps Resources<br/>    | Yes<br/>              | Yes<br/>                         | Yes<br/>                 | No<br/> |
| Use Modules<br/>                            | Yes<br/>              | Yes<br/>                         | Yes<br/>                 | Yes<br/> |
| Create / Delete Modules<br/>                | Yes<br/>              | Yes<br/>                         | Yes<br/>                 | No<br/> |
| Install / Uninstall Modules<br/>            | Yes<br/>              | Yes<br/>                         | Yes<br/>                 | No<br/> |

## How to Enforce the Security of Your Clarifai Organization

You can take some additional actions to augment the security of your organization at Clarifai.

To access the security settings of your organization, start by clicking your organization’s profile icon at the upper-right section of the navigation bar. In the drop-down list that follows, select the **Security** option. 

![Security organization settings](/img/clarifai_orgs/security_option.png)

On the **Security** page, you can view the password policies associated with your organization’s account. You can also create and view identity providers to reinforce the security of your organization. 

For example, if you want to add a security identity provider, such as SAML (Security Assertion Markup Language), click the **Create Identity Provider** button. 

![Security page](/img/clarifai_orgs/security_page.png)

On the next page, provide its details and click the **Create** button to finalize the process. 

![Create identity provider](/img/clarifai_orgs/create_identity_provider.png)

SAML is a reliable mechanism that can add to the security of your organization’s account by ensuring authentication and authorization data are securely transferred between parties. 

