---
description: Learn about the different types of our releases
# The position is given a high number of 100 to ensure that it always remains as the first item in the category.  
sidebar_position: -100
---

# Clarifai Releases and Update Types

**Learn about our release types and monthly updates**
<hr />

We continually enhance our platform with regular releases and updates. Understanding the types of updates and their frequency helps users make the most of the platform's capabilities.

Whether you're seeking cutting-edge features, stability improvements, or security enhancements, staying informed about Clarifai's release cycles ensures you can leverage the latest advancements in AI.

## Release Types

Clarifai release editions refer to the different stages or types of releases that our software product can go through — from development to deployment. These options help us manage the introduction of new features, bug fixes, and updates while ensuring quality and stability. 

We can issue a release at any of the following phases, based on the degree of maturity:

:::caution Attention

- Non-GA features are provided primarily for evaluation and feedback purposes and should NEVER be used for production workloads. 

- We could issue a release as an Enterprise-only feature, meaning it will be accessible exclusively to users on the Enterprise [pricing plan](https://www.clarifai.com/pricing).

:::


| Release Type | Description     | Purpose      |  Who can use?   |  For Production/SLA?      |  Interface Stability      |   Support                |
|--------------|----------------|-----------------|--------------------------|---------------------------|---------------------------|---------------------------|
| <b> Private Preview </b> | Available to a select group of design partners, often by invitation. It's of Alpha quality. | Gather feedback from a controlled user base before a wider release. Public documentation may not be available. | Invite only | No |  No | Engineering team | 
| <b> Public Preview </b> | Available to all users, but still considered pre-release. The goal of public preview releases is to provide users with an opportunity to test new features. Public releases may be feature-complete but still have areas of instability. | Gather feedback from a broader user base, ensure compatibility, and identify any integration issues prior to general availability. Documentation is usually available. | Everyone | No | Yes | Support team | 
| <b> General Availability (GA) </b> | The official release of the product to everyone. It is considered stable, feature-complete, and ready for production use. | The final product is available for use by any user based on their pricing plan. | Everyone | Yes | Yes | Support team | 


## Monthly Update Types

Clarifai releases major platform updates monthly on the first Tuesday. The update versioning follows a **Version X.Y.Z** format:

- **X**: Indicates the release year since Clarifai’s founding in 2014. For example, updates in 2024 follow a 10.Y.Z format because 2024 is ten years since 2014.
- **Y**: Represents the month of the major release.
- **Z**: Denotes the minor release within that month's major release.

**Note**:

- Clarifai supports Generally Available (GA) releases of active products for up to two years. 
- Eligible code-fixes and hot-fixes are provided via new minor releases (Z) on top of the latest major release branch, for up to two releases from the most current major release. 
- A major release is identified by a change in the first (X) or second (Y) digit in the versioning nomenclature.

The following table details expectations for each update type:

| Update Type | Description| Can include new GA features? | Can include breaking API changes?|Can include new preview features?|Can include new security and stability fixes?|
|--------------|----------------|-----------------|--------------------------|---------------------------|---------------------------|
|<b>Major Releases</b>|Significant updates that may include new features, major changes, improvements, bug fixes, and breaking changes |  Yes         |       Yes             |      Yes               |         Yes            |
|<b>Minor Releases</b>| Minor updates to customer impacting bugs, security issues, or other critical problems|   No        |        No            |          Yes           |             Yes        |