---
description: Changelog for Clarifai Release 6.1
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -4
pagination_next: product-updates/changelog/release62
pagination_prev: product-updates/changelog/release60
---

# Release 6.1

## Changelog 6.1

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![](/img/new_feature.jpg) | ![](/img/improvement.jpg) | ![](/img/bug.jpg) | ![](/img/enterprise.jpg) |

### Clients

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Remove Feedback endpoints from Python client |
| ![](/img/improvement.jpg) | Remove Feedback endpoints from Java client |
| ![](/img/improvement.jpg) | Remove Feedback endpoints from Javascript client |
| ![](/img/improvement.jpg) | Remove Feedback endpoints from Portal/demo |
| ![](/img/improvement.jpg) | Remove image.crop field from Python API client |
| ![](/img/improvement.jpg) | Remove image.crop field from Java API client |
| ![](/img/improvement.jpg) | Remove image.crop field from Javascript API client |

### Model

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Added detection evaluation in platform |
| ![](/img/new_feature.jpg) | Introduce concept mapping model that uses the knowledge graph relations, creating a path for users to eventually benefit from pool of networked data |
| ![](/img/bug.jpg) | Fix a bug that caused the new face predictions to have a huge performance drop |
| ![](/img/bug.jpg) | Train and eval worker didn't invalidate model related cache. Fixed |
| ![](/img/bug.jpg) | Fix bug in deleting a concept relation by ID |

### Portal

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Bulk labelling can now be done from Explorer mode grid view. |
| ![](/img/improvement.jpg) | Show Check/X on custom detection model predictions in Portal |
| ![](/img/improvement.jpg) | Allow multi concepts per bbox |
| ![](/img/bug.jpg) | Negative tags not visible in Portal. Fixed |

### Predict

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Remove extra round trip to storage in predict pathway |
| ![](/img/improvement.jpg) | Remove the image.crop argument during predict and POST /inputs calls to simplify the API |
| ![](/img/improvement.jpg) | Add region predictions from custom models to detections in videos |

### Search

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Implement search by annotation.status in backend |
| ![](/img/improvement.jpg) | Connect saved searches and annotation status |
