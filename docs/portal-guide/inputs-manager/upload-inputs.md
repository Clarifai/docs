---
description: Learn how to upload inputs to the Clarifai Platform
sidebar_position: 2
---

# Upload Inputs

**Learn how to upload inputs to the Clarifai platform**
<hr />

An input is any data added to the Clarifai platform. You can upload inputs and organize them into [datasets](https://docs.clarifai.com/portal-guide/datasets/) to support a wide range of tasks, including:

- [Data labeling](https://docs.clarifai.com/portal-guide/labeling-tasks/)
- [Performing searches](https://docs.clarifai.com/portal-guide/psearch/)
- [Training new models](https://docs.clarifai.com/portal-guide/model/)
- [Evaluating models](https://docs.clarifai.com/portal-guide/evaluate/)
- [Making predictions](https://docs.clarifai.com/portal-guide/ppredict/)

The platform lets you upload images, videos, and texts from URLs or local directories. You can upload as many inputs as you want. 

Your inputs should fulfill the following conditions:

* Each image file input should be limited to 85 megapixels and should be less than 20MB in size
* Each video input uploaded via a URL can be anywhere up to 100MB in size or 10mins in length
* Each video input uploaded from a local directory (by bytes) should be less than 10MB in size
* Each text file input should be less than 20MB in size
* Each audio input should be less than 5MB in size (this is typically suitable for a 48kHz audio file lasting up to 60 seconds, recorded with 16-bit audio quality)

:::info

As each input is uploaded, it is automatically indexed using the specified [base workflow](https://docs.clarifai.com/portal-guide/workflows/base-workflows) for your app. This indexing enables you to perform searches over the uploaded inputs, leveraging Clarifai’s custom-built [vector database](https://docs.clarifai.com/portal-guide/psearch/#powered-by-a-vector-database) for fast and efficient search capabilities.

:::

## Upload Inputs

To upload inputs, navigate to your individual app's page and select the **Inputs** option in the collapsible left sidebar. Then, click the **Upload Inputs** button located in the upper-right corner of the page. 

The inputs uploader window that pops up allows you to upload any type of input data — files from your local directory, texts, or publicly accessible URLs. 

Note that you can also use the inputs uploader modal to:

- Organize your inputs into datasets.

- [Add concepts to inputs](https://docs.clarifai.com/portal-guide/inputs-manager/concepts#via-the-inputs-uploader).

- Attach JSON metadata for additional context. Metadata are additional pieces of information you attach to your inputs when uploading them to the Clarifai platform. This can include product IDs, user IDs, or any other relevant details necessary for achieving specific outcomes

This modal simplifies the process of managing and enriching your inputs on the platform.

### Upload Files

![](/img/community_2/data_upload_inputs.png)

:::tip 

[Click here](https://docs.clarifai.com/portal-guide/advanced-topics/csv-and-tsv/) to learn how to upload data using files in **.csv** or **.tsv** formats.

:::

To upload files containing any supported data type from your local directory, select the **Files** tab in the inputs uploader window. Then, click the upload button to select your files or drag and drop them directly into the designated area. 

> If you want to make multiple uploads without closing the uploader window, select the **Keep window open for multiple uploads** checkbox.

After uploading your inputs, click the **Upload Inputs** button located in the lower section of the uploader window. 

### Upload Texts

![](/img/community_2/data_upload_inputs-4.png)

To upload text data directly through the UI, select the **Text** tab in the inputs uploader window and enter your text. Each input can contain a maximum of 500 words.

### Upload URLs

![](/img/community_2/data_upload_inputs-5.png)

To upload a URL containing any supported data type, select the **URL** tab in the inputs uploader window and enter each URL on a separate line.  

> If you want to allow uploading identical URLs, toggle the **Allow duplicate URLs** button on.

## Uploads Status

The **Uploads** status window appears in the lower-right section of the page, enabling you to monitor the percentage progress of your upload. You can check the progress of any of your active uploads in the **Active** tab. 

![](/img/community_2/data_upload_inputs-2.png)

Once the upload process is complete, the **Inactive** tab will display a **Complete** status. 

:::note 

If you select the **Refresh when jobs finish** checkbox, the window will automatically refresh to display the status as soon as the upload process is finished. You'll also be notified if there is an issue with any of your inputs during uploading.  

:::

![](/img/community_2/data_upload_inputs-3.png)