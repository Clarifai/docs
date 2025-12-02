---
description: Learn about the models we'll decommission
# For positioning, we use negative position so that the oldest announcements are displayed at the bottom. Any time you add a new announcement, increase the position by -1.
sidebar_position: -9
unlisted: true
---

# Decommissioning Legacy Models

**Learn about the models we'll decommission**
<hr />

- **Type of Change** — Important breaking change regarding decommissioning of legacy models

- **Implementation Date** — December 31st, 2025

- **Reason** — We are upgrading our infrastructure, and as part of this transition, we will decommission most of our legacy models.

## Models

Here are some legacy models that will be decommissioned on December 31st:

- ocr-scene-english-paddleocr
- general-english-image-caption-clip
- apparel-classification-v2
- general-image-recognition-vit
- travel-recognition
- celebrity-face-detection
- embed
- moderation-english-text-classification
- nougat-base
- ocr-scene-italian-paddleocr
- ocr-scene-french-paddleocr
- ocr-scene-cyrillic-paddleocr
- ocr-scene-arabic-paddleocr
- ocr-scene-spanish-paddleocr
- ocr-scene-german-paddleocr

## Impact

After December 31, these models will be set to **Private** and will no longer accept public inference requests.

## What You Need To Do

Update your applications to use the current models available in the [Community](https://clarifai.com/explore), including LLM and VLM options that support zero-shot image classification, OCR, text understanding, and other related tasks.

These models can be accessed via the API and used as direct replacements depending on your workflow.

If you are unsure which model to migrate to or need guidance choosing the right replacement, feel free to [contact us](https://www.clarifai.com/explore/contact-us) or reach out on [Discord](https://discord.com/invite/WgUvPK4pVD). 

We are happy to help.