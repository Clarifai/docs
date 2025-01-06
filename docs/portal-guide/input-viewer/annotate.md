---
description: Create, get, update, and delete annotations on Input-Viewer page
sidebar_position: 1
---

# Manual Annotation

**Create, get, update, and delete annotations on Input-Viewer page**
<hr />

Labeling, or annotation, involves assigning one or more descriptive tags or keywords — known as [concepts](https://docs.clarifai.com/portal-guide/inputs-manager/concepts) — to accurately characterize the attributes or content of your inputs.

For example, annotations can indicate whether an image contains a dog or a cat, identify the spoken words in an audio recording, or recognize cracks in a concrete block.

Within the Input-Viewer page, you can add annotations to inputs, get the ones already added to inputs, remove them from inputs, or carry out other management tasks with them.

We support different types of labeling methods, each suited for different tasks and data characteristics. This lets you create high-quality training data depending on the objective you want your AI model to achieve. 

These are the different types of labels we support for your image, video, and text inputs:

- **Classification** — Categorizes images, videos, and texts into categories;
- **Detection** — Detects where an object of interest is and draws a bounding box around it;
- **Segmentation** (polygons for segmentation) — Outlines the exact shape or contour of the object;
- **Masks** —  A type of image segmentation that defines the exact boundaries of an object at a pixel level. 

:::info AI-assisted labeling

[Click here](https://docs.clarifai.com/portal-guide/annotate/ai-assist) to learn how to use the AI-assisted labeling feature to carry out different label types. 

:::

:::info Labeling Tasks Tool

[Click here](https://docs.clarifai.com/portal-guide/annotate/labeling-tools) to learn how to use the Labeling Tasks tool to carry out different label types. 

:::

To carry out manual annotation on the Input-Viewer page, ensure the page's mode is set to **Annotate**, which is the default status. You can find the mode settings in the upper-left corner of the page.

![](/img/others-2/label-types-1.png)

## Classification Labeling

The classification label type lets you assign annotations to an entire image, a single frame of video, or a piece of text.

### Image Classification

To manually classify an image on the Input-Viewer page, start by clicking the **Select / Edit** tool in the navigation bar (this tool is selected by default).

Next, use the **Select label** menu  that drops down to select the concept you want to use to annotate the image — that is, if the concept already exists in your app.

![](/img/others-2/label-types-2.png)

If you want to annotate an image with a new concept that does not already exist in your app, click the **+** (plus) button in the dropdown menu and type the concept's name in the field. Then, click the dropdown box that appears with the concept name beneath that field.

The new concept will be added to your app and labeled with your input.

![](/img/others-2/label-types-3.png)


You can add as many annotations as you want. The added annotations will appear in the **Select label** dropdown menu as well as in the **Classifications** pane in the right sidebar of the page. 

![](/img/others-2/label-types-4.png)

:::note

Alternatively, you can manually classify an image on the Input Viewer page by navigating to the **Classifications** pane. Then, use the **Select or add concepts** search box to choose or add concepts for annotating your inputs, as described earlier.

:::

#### View Individual Annotators

If you hover over the person icon on an annotation field in the **Classifications** pane, you can view the annotator(s) who added that annotation. The displayed number indicates how many annotators labeled that input.

#### Update Annotations

![](/img/others-2/label-types-4-1.png)

To update an annotation, hover over its field in the right sidebar and click the pencil icon that appears. Next, enter a new name for the annotation in the text field that appears, then click the **Update** button to save your changes.

The new concept will be added to your app and annotated with your input. This newly added concept is referred to as a **concept relation**, with the original concept displayed as a superscript next to it. As a result, if you create an annotation using the original concept, the updated concept will be used instead.

Note that if you edit the concept relation back to its original value, the existing concept relation annotation on the input will be removed. It will only be removed from the input, and not from your app. 

#### Delete Annotations

There are several ways of deleting an annotation via the Input-Viewer page:

- If you hover over an annotation field, a delete icon will appear that you can use to remove the annotation. Note that deleting an annotation only removes it from the input; it does not delete the concept from your app.  

- You can remove an annotation by deselecting the checkmark next to it in the annotation field.  

- Additionally, each annotation is assigned a hotkey number. Clicking this number will delete the corresponding annotation from the input. For example, clicking "2" will remove the **sheep** annotation from the image. Up to 20 hotkeys can be assigned to an input. 

### Text Classification

You can classify your text inputs into predefined categories in the same way as described earlier for image classification.

:::note

Ensure you select the appropriate [base workflow](https://docs.clarifai.com/portal-guide/workflows/base-workflows) when creating an app for text inputs.

:::

![](/img/others-2/label-types-5.png)

### Video Classification

Support for video labeling within this tool is coming soon. If you need to label videos, you can create a [Labeling Task](https://docs.clarifai.com/portal-guide/labeling-tasks/create-a-task) and label a dataset with videos.  

## Detection Labeling

The detection label type lets you identify the objects in your inputs and also draw bounding boxes around them. 

### Detection for Still Images

To manually add detection labels on the Input-Viewer page, start by clicking the **Bounding Box** tool in the navigation bar.

Next, use the **Select label** menu that drops down to select the concept you want to use to annotate the image — that is, if the concept already exists in your app. If it's not already existing, you'll need to add it as described earlier.

![](/img/others-2/annotate-9.png) 

Next, draw a rectangle as accurately as possible around the region of interest in the image. You can also create cascading bounding boxes; that is, a hierarchy of annotations where one bounding box is nested or dependent on another.

After creating the bounding box, you can edit it by clicking on it until dotted lines appear around the edges. This will enable you to resize, reposition, or adjust the bounding box to better suit your needs.

![](/img/others-2/label-types-6.png)

:::note drawing mode

After selecting a concept for labeling, the drawing mode will be activated, allowing you to draw bounding boxes to annotate your image(s) easily. The drawing mode box, located in the upper-right corner of the canvas, displays the concept currently in use for detection labeling. To exit drawing mode, simply click the **Exit** button.

:::

You can add as many detection annotations as you want for each concept. The added annotations will appear in the **Select label** dropdown menu as well as in the **Objects** pane in the right sidebar of the page.

The **Objects** pane displays categories of concepts used for annotations, along with individual annotation instances. It supports several detection labeling activities, including:

- **Annotation count display** — The pane shows the number of annotations for each instance. For example, "Objects(2)" indicates that two concept categories were used for the detection annotations in the image, while "sheep(4)" means that four instances are labeled with the `sheep` concept. Individual annotations are numbered sequentially. For example, "sheep.1" represents the first annotation labeled with the `sheep` concept, "sheep.2" the second annotation, and so on. 

- **Hotkey assignment** — Each concept is assigned a hotkey. Pressing a hotkey initiates labeling for that concept. For example, pressing "1" enables you to draw bounding boxes labeled with the `sheep` concept. Up to 20 hotkeys can be assigned to your concepts.

- **Category-specific actions** — These are the actions you can complete on an annotation category:
    - Clicking the bounding box icon in a category field activates the drawing mode, which allows you to create annotations with the selected concept.
    - Hovering over a category of annotations reveals these icons: pencil icon for updating the concept name (as described earlier), eye icon for hiding all the annotations in that category, and delete icon for removing all the annotations in that category. 

- **Instance-specific actions** — These are the actions you can complete on an individual annotation instance:
    - To delete an individual annotation, deselect its checkmark. 
    - Hovering over the person icon on an annotation instance shows the annotator(s) responsible for that annotation. The number displayed represents how many annotators labeled the input.
    - Hovering over an individual annotation instance reveals these icons: pencil icon for reassigning the annotation to a different concept, eye icon for hiding the specific annotation instance, and delete icon for removing the specific annotation instance. 
    - Clicking an individual annotation instance highlights its corresponding bounding box in the canvas, enabling easy editing or deletion (by clicking the delete button on the keyboard).

### Detection for Video

Support for video labeling is coming soon. 

:::info object mode

[Click here](https://docs.clarifai.com/portal-guide/inputs-manager/#object-mode) to learn how to get the objects that have been labeled on your inputs using the Object Mode of the Inputs-Manager page.

:::

## Segmentation Labeling

The segmentation label type lets you outline a boundary of an object using a series of vertices that define a closed polygonal shape. It's ideal for annotating irregularly shaped areas or objects. 

To manually add segmentation labels to an image on the Input-Viewer page, first click the **Polygon** tool on the navigation bar.

Next, use the **Select label** menu that drops down to select the concept you want to use to annotate the image — that is, if the concept already exists in your app. If it's not already existing, you'll need to add it as described earlier. 

Next, use the dots to draw a contour as closely as possible around the image's region of interest.

After creating the initial shape by placing your dots, you'll need to close the loop. Simply click on the first dot you made again, and this action will close the loop, completing the polygon.

![](/img/others-2/label-types-8.png)

Note that segmentation labeling works just as the previously described detection labeling. For example, if you click the polygon icon in an annotation category field, the drawing mode will be activated, enabling you to create annotations with the selected concept.

## Masks Labeling

The mask label type lets you label each pixel within the region of interest. It provides pixel-level labeling that allows you to precisely identify and delineate objects within an image. 

Currently, you can only minimally review existing image mask annotations on the Input-Viewer page. After creating mask images via the API and uploading them to our platform, you can view them on that page. 

[Click here](https://docs.clarifai.com/api-guide/annotate/annotations#annotate-images-with-mask) to learn how to add image mask annotations using our API.

:::note

You can delete an entire image mask annotation for an input directly from the Input-Viewer page. However, the Input-Viewer page does not currently support creating or editing mask annotations.

:::

![](/img/others-2/label-types-7.png)
