---
description: Learn about the labeling tools that are available in Scribe
sidebar_position: 4
---

# Labeling Tasks Tools

**Learn about the labeling tools that are available in Scribe**
<hr />

<div style={{ "position":"relative","width": "100%","overflow": "hidden","padding-top": "56.25%"}}>
<iframe width="900" height="500" style={{"position": "absolute","top": "0","left": "0","bottom": "0","right": "0","width": "100%","height": "100%",}} src="https://www.youtube.com/embed/KLoziNCUKFQ" title="11 - Detection labeling task" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<br/><br/>

The Scribe Labeling Tasks platform provides special tools for working with images, videos, and texts for classification, detection, and segmentation labeling tasks. With the tools, you can annotate your inputs faster and more conveniently. 

After successfully [creating a labeling task](https://docs.clarifai.com/portal-guide/annotate/create-a-task), it will appear on the **Tasks** listing page. To begin working on the task, click the blue **LABEL** button. 

![label button](/img/annotate/labeling_tools_1.png)

You’ll be redirected to the **Labeling Tasks** screen, where you can begin annotating your inputs. At the upper-right section of the screen, you'll find a variety of tools you can use to simplify the annotation process.

On the right sidebar, you can find a list of the [concepts](https://docs.clarifai.com/portal-guide/concepts/create-get-update-delete) you specified when you created a new labeling task. You can use them to label your inputs. 

![labeling tools](/img/annotate/labeling_tools_2.png)

## Labeling Tools 

Let's talk about each of the tools. 

:::warning make the most of the tools

- After selecting a labeling tool and using the slider that pops up to adjust your input, you can simply click the **Reset** button next to the slider to revert to its initial version.
- You can combine multiple tools as appropriate to make adjustments to your input.
- Clicking a button for the second time will deactivate or remove the highlight effect associated with that button. 

:::

### View Metadata 

The metadata button allows you to toggle and view the metadata available in your inputs. 

### Brightness

The brightness button allows you to adjust the visibility of your inputs. 

### Saturation

The saturation button allows you to adjust the hue or saturation intensity of your inputs.

### Invert Color

The invert color button allows you to apply transformation to your inputs. When clicked, it reverses the colors within the input, turning light areas dark, and vice versa. 

### Zoom

The zoom button allows you to change the level of magnification or the size of the view for your inputs. 

### Pan

The pan button allows you to move the visible areas of your inputs so that you can inspect specific regions closely.

### Show Hotkeys

The show hotkeys button allows you to display the keyboard shortcuts available for each annotation tool. 

These are the hotkeys you can use:

![display hotkeys](/img/annotate/labeling_tools_3.png)

- **B** — brightness
- **S** — saturation
- **I** — invert color
- **P** — pan
- **/** — filter concepts
- **Enter** — submit a label

### View and Edit Labels

You can view and edit previously submitted labels while working on a task. There is an input carousel tool at the bottom of the labeler screen that allows you to go back and review inputs after you have submitted them.

This functionality provides a convenient mechanism to revisit and edit previously submitted labeled inputs. If you realize you made a mistake while labeling, you can easily go back and review your own work. 

![View and Edit Labels](/img/annotate/labeling_tools_5.png)

## How to Label Image Inputs

### Classification Labeling

:::note

To perform classification labeling, you'll need to specify **Classification** as the [label type](https://docs.clarifai.com/portal-guide/annotate/create-a-task#modeling-objective) when setting up your labeling task. 

:::

With the classification label type, you can provide annotations for an entire image or a single frame of video. On the right sidebar of the Scribe Labeling Tasks platform, you can find a list of the [concepts](https://docs.clarifai.com/portal-guide/annotate/create-a-task#concepts) you specified when you created a new labeling task. 

To classify an image, just click the tick button next to the concept you want to label the image with. 

![classify an image](/img/others/label_types_5.png)

You can also click the cross button to explicitly label the image as not having the concept. 

![label with cross button](/img/others/label_types_6.png)

:::note

Clicking an already-clicked tick or cross button removes the label.

:::

You can also apply multiple labels to the same image. Let's say you have two classes that might be easily confused by your model, such as cats and dogs, you can specifically indicate that a cat is present and a dog is not present. This can improve the performance of your model, but also result in longer labeling times.

In the following screenshot, the tick button has been clicked, indicating that the image has been labeled with the "cat" concept. Also, the cross button has been clicked, indicating that the image has been expressly labeled as not having the "dog" concept.

![cat and dog label](/img/others/label_types_4.png)

If you enabled [AI Assist](https://docs.clarifai.com/portal-guide/annotate/ai-assist/) when you created a new labeling task, you'll notice the concepts that the Clarifai AI has suggested, which could be present in the image you want to label — alongside their probabilities.

You can accept the highlighted suggestions to help you label your images quickly and fast. You can also adjust the slider to a prediction probability threshold you desire. 

![label with AI assist](/img/others/label_types_7.png)

Finally, click the **Submit** button on the lower-right corner of the page to submit the labeled input. 

### Detection Labeling

:::note

- To perform detection labeling, you'll need to specify **Detection** as the [label type](https://docs.clarifai.com/portal-guide/annotate/create-a-task#modeling-objective) when setting up your labeling task. 
- You also need to select a workflow that offers detection capabilities when creating a new labeling task.

:::

With the detection label type, you can provide annotation within a single box-shaped region of an image or a video. 

To begin labeling, click the plus (**+**) button next to the concept you want to use. This action will highlight the button, enabling you to begin drawing a bounding box around the image. 

You also have the option to use keyboard shortcuts provided alongside the concepts. For example, in the image below, pressing the number "2" on the keyboard will highlight the "vehicle" concept.

Once you've highlighted a concept, position your cursor over the input and draw a bounding box around it as closely as possible. Next, release your mouse, and you'll see the annotation appearing under the selected concept.

![draw bounding box](/img/annotate/labeling_tools_4.png)

:::tip

You can easily resize, move, or relabel existing bounding boxes. Just click inside the bounding box you wish to modify, then drag to move or resize. If you need to change the label, just click the "edit" icon located next to the existing label in the right sidebar.

:::

If you enabled AI Assist when you created a new labeling task, you can accept or modify the detected regions that have been suggested for labeling. 

![detection for still images](/img/others/label_types_8.png)

###  Segmentation Labeling Using Polygons

Support for segmentation labeling is coming soon.

<!--
Bounding boxes are effective for many labeling tasks, but in scenarios requiring more precise object annotation, polygon labels offer a more accurate solution. With polygon labels, you can pinpoint and annotate the exact pixels in your image that define the object you're labeling.

Polygon labels generate a sequence of x and y coordinates that define each point forming the polygon.

:::note

To use polygon labels, you'll need to specify "segmentation" as the [label type](https://docs.clarifai.com/portal-guide/annotate/create-a-task/#modeling-objective) when setting up your labeling task. 

:::

While labeling your images, you can create multi-point shapes to precisely outline the pixels of the object you intend to label. Remember that you'll need to "connect the dots" by linking the last point in your polygon with the initial point to form a complete shape.

![Outline your image and be sure to connect the first and last nodes of your polygon](/img/polygon-label.gif)

#### Quick-mask Tool

The Quick-mask tool makes it easy to select image masks when creating polygon annotations. 

The tool allows you to select a region of an image and then automatically generate an image mask for the detected object in the image. You can also fine-tune the selection once a mask has been created.

-->

## How to Label Video Inputs

Support for video labeling is coming soon.

<!--
Scribe provides powerful tools for labeling videos. When working with video, you can leverage video interpolation tools to label thousands of individual frames of video quickly. 

This rapid labeling technique makes video an excellent source of training data, even if you want your model to primarily analyze still images. 

### Keyframes

Keyframes define the starting and ending points of interpolated transitions. When you adjust the positions of bounding points around your object, new keyframe markers are added to the timeline of your video.

Keyframes allow you to adjust for the changing shape, speed, and trajectory of a given object in your video.

### Frames and Time Segments

When labeling video, you can label and train video at the frame level or the video level. Labeling video at the frame level means that you are labeling individual video frames as separate images. Labeling video at the video level means that you are labeling an entire video or a segment of time from a video.

When creating your labeling project, you can label a video using time segments by selecting a concept task type. Just click the plus icon in the labeling view, and you can adjust the time segment selected by using the slider bars below the video.

![label time segment](/img/time-segment.jpg)

Note that you can label an entire video with a concept by holding down the option key when clicking the plus icon to add a concept to a video. 

You can also click the cancel button next to the time segment display, and the concept will be applied to the whole video (if you want to remove the entire concept, click the trash can icon instead).

### Interpolation

Interpolation allows you to label multiple frames of video with the same concept quickly. Select the interpolation icon and draw a bounding box or polygon around the object you would like to label. 

Then, scrub the video player to a new point in the video and move and adjust the bounding box to the object's new location. Interpolation will automatically draw a series of bounding boxes between them. A keyframe marker will identify the point in the video where a new interpolation begins.

![Label multiple frames of video with video interpolation](/img/video-timeline.jpeg)

### Track Suggestions for AI-Assist

AI-Assist can automatically track objects across multiple frames of video. Just be sure to include a "centroid-tracker" in the workflow that you are using for AI-assist. 

Separate instances of a given concept will be detected and versioned for labeling. You can even use the timeline editor to scrub back and forth between different frames of video.

![Automatically track objects](/img/detect-tracks-scribe.jpeg)

### Video Keyboard Shortcuts

* Q - Start of video
* W - Scrub backward
* E - Scrub forward
* R - End of video

-->

## How to Label Text Inputs

Scribe makes it easy to classify your text data. You can classify text inputs in the same way that you would classify images.

![Label text data in Scribe](/img/label-text.jpg)
