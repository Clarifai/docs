---
description: Learn about how to use SDH to download inputs securely
# For positioning, we use negative position so that the oldest announcements are displayed at the bottom. Any time you add a new announcement, increase the position by -1.
sidebar_position: -7
---

# Enabling Secure Data Hosting 

**Learn about how to use SDH to download inputs securely**
<hr />

**Change**: Enabling Secure Data Hosting (SDH) feature for all users

**Date**:  August 15, 2023 (we’ll enable it in the 9.7 release)

**Who is affected**: API users who want to download inputs securely

**Type of change**: Critical, breaking change

**What you need to do**: [See below](#what-you-need-to-do)

## What is Secure Data Hosting?

At Clarifai, we use the Amazon S3 storage service to host user-provided inputs. Additionally, we’ll be introducing Secure Data Hosting (SDH) as an extra layer of security and access control to the data stored on Amazon S3.

Secure Data Hosting simply works as a proxy over the Amazon S3 storage service. It acts as an intermediary or middleman, allowing authorized users to access the content stored on Amazon S3. When a user with the necessary authorization tries to access an SDH URL, it will retrieve the corresponding content from the associated S3 URL, and display it to the user.

The SDH service uses a token-based authorization mechanism to grant access. All inputs are fetched from the hosted service only with an authorized token—the tokens are issued after a proper user authentication as part of the Clarifai platform login process.  

By employing secure data hosting as a proxy over Amazon S3, we enhance the security of users’ data while leveraging the robust storage and infrastructure capabilities provided by Amazon S3. The SDH service helps us to ensure that users’ inputs remain protected and can only be accessed by authorized individuals or systems.  

:::tip

- After enabling SDH in the 9.7 release, all inputs will be accessible through SDH URLs. The new inputs will be uploaded to S3 as private files, which can only be accessible via secure SDH URLs. S3 URLs will not be accessible through the API anymore as they will be replaced by SDH URLs —all our endpoints will now return SDH URLs instead of S3 URLs. 

- Old inputs that were added before the release will keep having public S3 URLs, However, if a non-logged-in user still wants to access an S3 URL that was added before the transition, they will still be able to access that old S3 URL because it remains public. 
SDH URLs will only be accessible to logged-in, authorized users. 

- If you share an SDH URL with someone, they will not be able to download the shared content unless they have access to it; for example, you can add them as a collaborator to the app, or you can add them to the same team as yourself, the app owner. 

:::

## Uploading and Downloading Inputs

Let’s demonstrate how Clarifai implements the Secure Data Hosting feature for uploading and downloading user inputs.

![secure data hosting](/img/others/sdh-1.png)

#### Uploading

1. A user starts by uploading an input, such as a file of an image, to the Clarifai platform.
2. Clarifai hosts the file in a Clarifai Amazon S3 bucket. 
3. If SDH is enabled for an account, the input hosted on the S3 storage service will be backed by an SDH service with token-based authorization.

#### Retrieving

1. The SDH service will fetch inputs from the S3 storage service via an S3 API, and not the S3 web URLs. So, without an authorized token, a user cannot fetch inputs from the re-hosted URLs. 
2. If a user logs in successfully, they are issued with an authorized token, which they can use to fetch inputs via the SDH service.
3. If a user logs out, and they do not have a proper token, they cannot download the SDH URL of the input—even if they have a valid input URL.

## How it Works

You can start by using the [`ListInputs`](https://docs.clarifai.com/api-guide/data/create-get-update-delete#list-all-inputs) endpoint to list all the inputs in your app. 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import sdh1 from "!!raw-loader!../../../code_snippets/api-guide/others/sdh-1.sh";
import sdh2 from "!!raw-loader!../../../code_snippets/api-guide/others/sdh-2.json";
import sdh3 from "!!raw-loader!../../../code_snippets/api-guide/others/sdh-3.json";
import sdh4 from "!!raw-loader!../../../code_snippets/api-guide/others/sdh-4.sh";
import sdh5 from "!!raw-loader!../../../code_snippets/api-guide/others/sdh-5.sh";
import sdh6 from "!!raw-loader!../../../code_snippets/api-guide/others/sdh-6.py";

<Tabs>
<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{sdh1}</CodeBlock>
</TabItem>
</Tabs>

If you run the above command, and SDH has not been enabled on your account, you’ll get a response with the hosted information about each input. 

Here is an example response (it’s truncated for brevity):

<Tabs>
<TabItem value="json" label="JSON">
    <CodeBlock className="language-json">{sdh2}</CodeBlock>
</TabItem>
</Tabs>


And if SDH has been enabled on your account, you’ll get the following response:

<Tabs>
<TabItem value="json" label="JSON">
    <CodeBlock className="language-json">{sdh3}</CodeBlock>
</TabItem>
</Tabs>

Let’s talk about the components of the `image` object in the response:

- **url**—the original URL that was used to upload the image to the Clarifai platform. 
- **hosted**—an object nested within the `image` object that contains the details for downloading the image.
- **prefix**—the initial part of the URL for downloading the image. If SDH has been enabled on your account, it will be `https://data.clarifai.com` Otherwise, it will be an S3 URL such as https://s3.amazonaws.com/clarifai-api/img3/prod.
- **suffix**—the last part of the URL for downloading the image.
- **sizes**—the different sizes you can specify for downloading the image.

To get a downloadable URL for the image, you’ll combine the following:

`prefix + sizes (specify any size) + suffix`

For example, if SDH is enabled, an image’s download URL could look like this:

```text
https://data.clarifai.com/orig/users/alfrick/apps/deep-learning/inputs/image/140c856dc82565d2c4d6ea720fceff78
```

If you click the above URL to access the image, you’ll get an error message. So, without providing the necessary authorization, you cannot access an SDH URL. 

However, if you provide the authorization, like in the example below, the request will be successful:

<Tabs>
<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{sdh4}</CodeBlock>
</TabItem>
</Tabs>

On the other hand, if SDH is disabled, you can also get the download URL by combining the three components. 

Here is an example:

```text
https://s3.amazonaws.com/clarifai-api/img3/prod/orig/c272a8b0ea6c47c7b17430b922597aad/140c856dc82565d2c4d6ea720fceff78
```

If you click the above S3 URL, you’ll notice that you can access the image even without providing the necessary authorization. 

However, if you provide the authorization, like in the example below, the request will fail:

<Tabs>
<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{sdh5}</CodeBlock>
</TabItem>
</Tabs>

So, while you require authorization to access an SDH URL, the authorization does not work when accessing an S3 URL. 

## What You Need To Do

If you are an API user downloading inputs programmatically, you must change your code to transition from S3 input URLs to SDH input URLs.

In order to download the input URL, you need to first check if the URL is an SDH URL or an S3 URL.

- If the input URL is an SDH URL, then provide the authorization token to download the URL;
- Otherwise, do not provide the authorization token to download the URL.

Here is an example in Python:

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-bash">{sdh6}</CodeBlock>
</TabItem>
</Tabs>