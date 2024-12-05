---
description: Create, get, update, and delete annotations on Input-Viewer
sidebar_position: 1
---

# Annotate

**Create, get, update, and delete annotations on Input-Viewer**
<hr />

Labeling, or annotation, involves assigning one or more descriptive tags or keywords — known as concepts — to accurately characterize the attributes or content of your inputs.

For example, annotations can indicate whether an image contains a dog or a cat, identify the spoken words in an audio recording, or recognize cracks in a concrete block.

Within the Input-Viewer page, you can add annotations to inputs, get the ones already added to inputs, remove them from inputs, and carry out other management tasks with them.

## Create Annotations

The Input-Viewer is the main page that showcases the details of a single input available in your app. If you click an input listed on the Inputs-Manager page, you'll be redirected to the viewer page for that input, where you can see its details. 

![](/img/community/annotate/create_annotations_6.png)

Once you're on the page, ensure its mode is set to **Annotate**, which is the default. You can find the mode settings in the upper-right corner of the page. 

The page has several assistive tools to help you make the most of the labeling exercise. For example, on the top section, you can select an icon to label an input with bounding boxes, move an image around the workspace, or zoom an image in or out.

:::info

- Learn more about the types of labeling methods available in the Input-Viewer [here](https://docs.clarifai.com/portal-guide/annotate/label-types).

- You can download the original asset directly from the Input-Viewer page. If you right-click on the canvas area, a button will appear, which allows you to download the original input. 

:::

The left sidebar shows a film strip of images you can scroll through to get the specific image you want to annotate. If you click any image in the sidebar, it'll appear on the main workspace. 

To label an image, click the **Add annotation tags...** field and select the concept you want to use to annotate the image from the drop-down list — that is, if the concept is already existing in your app.

![](/img/community/annotate/create_annotations_7.png)

You can add as many annotations as you want. After adding an annotation, it is labeled with your input and appears in both the **Add annotation tags...** field and the right sidebar of the page.

![](/img/community/annotate/create_annotations_8.png)

If you want to annotate an input with a new concept that does not already exist in your app, click the **Add annotation tags...** field and type the concept's name. Then, click the drop-down box that appears with the concept name beneath that field. 

![](/img/community/annotate/create_annotations_9.png)

The new annotation will be added to your app and labeled with your input. 

## Get Annotations

If you want to get the annotations for a single input, go to the Input-Viewer page. You'll see the labels in the **Add annotation tags...** field as well as in the right sidebar. 

![](/img/community/annotate/create_annotations_11.png)

### View Individual Annotators

You can view an annotation and the annotator who added it by clicking the person icon on a listed annotation field on the right sidebar. 

An aggregate view window will pop up, and you can review the work of your annotator from here, and resolve any potential conflicts between annotations.

![](/img/others/explorer_annotations_2.png)


:::tip object mode

[Click here](https://docs.clarifai.com/portal-guide/data/explorer/#object-mode) to learn how to get the objects that have been labeled on your inputs using the Object Mode of the Input-Manager page.

:::

## Update and Delete Annotations

You can remove an annotation from an input and relabel it with a different annotation. Note that this action only removes the annotation from the input — it does not delete the [concept](https://docs.clarifai.com/portal-guide/concepts/create-get-update-delete) from your app.

To edit the annotations of an image via the Input-Viewer page, start by navigating to the page — just like we demonstrated previously.

There are several ways of deleting an annotation via the Input-Viewer page:

- In the **Add annotation tags...** field, click the delete (**x**) button next to the annotation you want to remove;
- Click the **Delete All** button to remove all the annotations from the input;
- Deselect the annotation's checkmark in the right sidebar;
- Click the three vertical dots next to the annotation in the right sidebar. Then, click the **Delete annotation** button that appears. 

![](/img/community/annotate/update_annotations_2.png)

To update an annotation, hover over it in the right sidebar and click the pencil icon that appears. Enter the new name in the provided field and click the **Update** button to save your changes.

The new concept you’ve added will also be saved to your app as well.

![](/img/community/annotate/update_annotations_3.png)