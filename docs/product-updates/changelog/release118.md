---
description: Changelog for Clarifai Release 11.8
# For versioning, we use a negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1. 
sidebar_position: -71
pagination_next: null
pagination_prev: product-updates/changelog/release117
draft: false
---

# Release 11.8

**Release Date:** September 3rd, 2025

<hr/>

<br />

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) |![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |

## Unified Navigation Experience

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)| Made unified navigation enhancements | <ul> <li>We’ve moved the main navigation elements into the collapsible left sidebar. This streamlines the UI, frees up valuable screen real estate, and delivers a discoverable navigation experience across the entire platform. </li> </ul>  |


## Billing 

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)| Made changes to billing system  | <ul> <li> Introduced monthly spending limits of $100 for Developer and Essential plans, and $500 for the Professional plan. You can contact us if you require higher limits.</li> <li> Added a new credit card pre-authorization process. A temporary charge of $50 for Developer, $100 for Essential, and $500 for Professional plans is applied to verify card validity and available funds. The amount is automatically refunded within seven days.</li> </ul>  |

## Control Center

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Made improvements to [Control Center](https://docs.clarifai.com/control/control-center/) | <ul> <li> Added half-size widgets in the Control Center configure page, allowing users to resize charts to half their original size. This enhancement makes it easier to rearrange charts and optimize the layout for side-by-side comparisons.</li><li> Fixed the Stored Inputs Cost chart to correctly display the average cost for the selected period instead of showing an incorrect total.</li> <li> Enhanced the date grouping for charts, where periods longer than one month now display weekly aggregated data for better readability.</li> <li> Empty states have been added to charts to display meaningful messages when no data is available, rather than just showing zero.</li><li> Added cross-links between compute cost and usage charts, allowing users to navigate easily between these views.</li></ul>  |

## Python SDK

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)  | Improved the Python SDK. <br/> <br/> Learn more [here](https://github.com/Clarifai/clarifai-python/blob/master/CHANGELOG.md).   | <ul> <ul><li>Fixed Local Runner CLI command</li><li>Updated protocol and gRPC versions</li><li>Prevented downloading of original checkpoints</li><li>Integrated secrets into SDK</li><li>Fixed <code>num_threads</code> setting</li><li>Fixed pip checks when cache is broken</li><li>Corrected usage setting on OpenAI responses</li><li>Added <code>stream_options</code> validation for internal streaming model upload</li><li>Added missing packaging dependency</li><li>Ensured JSON errors are always returned on OpenAI calls</li><li>Set default to 32 threads</li><li>Fixed ruff and dependency-related issues</li><li>Fixed model upload deployment</li><li>Adopted method signature for Local Runner</li><li>Added user confirmation to prevent Dockerfile overwrite during model upload</li></ul> </ul>  |

## Platform

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg) | Made improvements to platform| <ul> <li> Added a public resource filter button that lets users quickly view resources shared with the Community. This feature makes it easy to filter and explore resources based on their public visibility.</li> <li> Improved the playground to show a clear error message when users exceed streaming prediction limits. </li><li> Extended the login session duration for users logging in via Google or GitHub SSO to seven days, which was previously much shorter.</li> </ul>  |
|![bug](/img/bug.jpg)  | Fixed some bugs  | <ul> <li> Fixed an issue where the toast notification displayed the old app ID when deleting a renamed app, instead of showing the updated ID.</li> <li> Fixed an issue where users were not redirected to the intended page after login, causing them to get stuck.</li> <li> Fixed an issue where the model page layout expanded incorrectly in width.</li> <li> Fixed issues in the Recent Activity section of the Community home page where resource ID links were not visible on smaller screens, and where audit logs displayed an incorrect target app ID.</li> </ul>  |
