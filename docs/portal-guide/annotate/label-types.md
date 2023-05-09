---
description: Learn about the different types of labels that are possible with Scribe
sidebar_position: 3
---

# Label Types

**Learn about the different types of labels that are possible with Scribe**
<hr />

The Scribe Label lets you create high-quality training data for building powerful machine learning models. You can use the automated data labeling tool to annotate unstructured image, video, and text data faster and more accurately—something which could be laborious and time-consuming if done manually. 

It's a unique automated label prefilling technique that allows you to assign concepts for faster dataset annotation and speed labeling projects 100x. 

Scribe provides the following three basic label types for your images, videos, and texts:

- Classification—categorizes images, videos, and texts into categories;
- Detection—detects where an object of interest is and draws a bounding box around it;
- Segmentation (polygons for segmentation)—outlines the exact shape or contour of an object. 

You can use any of the label types to complete your labeling tasks easily and quickly. These label types provide increasing levels of granularity to support the needs of your specific use case.

## How to Choose a Label Type

You can choose the label type you want to use when creating a new labeling task. To create a new task, go to the individual page for your app, and select the **Labeling** option on the collapsible left sidebar. You'll be redirected to the **Tasks** manager page. 

![task manager page](/img/others/label_types_1.png)

Next, click the **Create New Task** button at the upper-right corner of the page, and you'll be redirected to the **New Labeling Task** page, where you can provide the details for creating a new task. 

![new labeling task page](/img/others/label_types_2.png)

Under the **Task Type** option, you can select your desired type of label. 

:::note

You can read [here](https://docs.clarifai.com/portal-guide/annotate/create-a-task) to learn more about how to create a new labeling task. 

:::

After creating a new task, it will be listed on the **Tasks** manager page. To access your assigned tasks and start labeling using Scribe, click the **LABEL** button. 

![new labeling task page](/img/others/label_types_3.png)

Next, you'll be redirected to the Scribe tasks labeler page, where you can use any of the label types you selected when creating a task to complete your assigned labeling work. 


## Classification Label Type

With the classification label type, you can provide annotations for an entire image or a single frame of video. On the right sidebar, you can find a list of the [concepts](https://docs.clarifai.com/portal-guide/annotate/create-a-task#concepts) you created when you assigned a new labeling task. 

To classify an image, just click the tick button next to the concept you want to label the image with. 

![classify an image](/img/others/label_types_5.png)

You can also click the cross button to explicitly label the image as not having the concept. 

![label with cross button](/img/others/label_types_6.png)

:::note

Clicking an already clicked tick or cross button removes the label.

:::

You can also apply multiple labels to the same image. Let's say you have two classes that might be easily confused by your model, such as cats and dogs, you can specifically indicate that a cat is present and a dog is not present. This can improve the performance of your model, but also result in longer labeling times.

In the following screenshot, the tick button has been clicked, indicating that the image has been labeled with the "cat" concept. Also, the cross button has been clicked, indicating that the image has been expressly labeled as not having the "dog" concept.

![cat and dog label](/img/others/label_types_4.png)

If you enabled AI Assist when you created a new labeling task, you'll notice the concepts that the Clarifai AI has suggested, which could be present in the image you want to label—alongside their probabilities. You can accept the highlighted suggestions to help you label your images quickly and fast. You can also adjust the slider to a prediction probability threshold you desire. 

![label with AI assist](/img/others/label_types_7.png)

Finally, click the **Submit** button on the lower-right corner of the page to complete the labeling exercise. 

## Detection Label Type (Bounding Box Detection)

With the detection label type, you can provide annotation within a single box-shaped region of an image or a video. To use bounding box detection, you need to select a workflow that offers detection capabilities when creating a new labeling task. 

On the Scribe tasks labeler page, you can accept or modify the detected regions that the Clarifai's AI Assist technology has suggested for labeling—that is, if you enabled AI Assist when you created a new labeling task. 

You can also click the plus (**+**) button next to the concept you want to use for labeling to start drawing your own bounding boxes. 

### Detection for Still Images

![detection for still images](/img/others/label_types_8.png)

### Detection for Video

![Bounding box detection for video](/img/video_detector.jpg)

## Polygon Detection 

Provide annotation within any polygon-shaped region of an image or video.


![](/img/polygon.jpg)

