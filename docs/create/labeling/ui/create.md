---
description: Learn how to create annotations
sidebar_position: 1
toc_max_heading_level: 5
---

# Create Annotations

**Learn how to create annotations**
<hr />


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


## Label on Inputs-Manager Page 


To label your inputs, head to your application's individual page. Then, select the **Inputs** option in the collapsible left sidebar.

You'll be redirected to the Input Mode of the Inputs-Manager page, where you can create and manage the annotations of your inputs. It is the default mode of the Inputs-Manager page.

![](/img/community/annotate/create_annotations_1.png)

You can use different ways to label your inputs. 

### Classification Labeling

To label an image input for classification tasks on the Inputs-Manager page, hover over it and click the small empty box in the upper-left corner to select it.

:::tip multi-select feature

- **Mouse click**: Selects a single item or input.
- **Shift + mouse click**: Selects a range of inputs between the first and last clicked item.

:::

Next, click the **Label as…** button that appears at the bottom section of the page.

![](/img/community/annotate/create_annotations_2.png)

The small window that pops up allows you to annotate the selected input(s) with concepts. 

![](/img/community/annotate/create_annotations_4.png)

Select the **Add** option, which lets you add annotations to your inputs (the option is selected by default). 

If you want to create a new concept and use it for labeling your inputs:

- Click the plus sign (**+**) next to the **Select or add concepts** search field;
- Type the new concept name in the search field. The new name you've typed will appear underneath the search field;
- Click the **Add new concept** button to create the concept. The new concept will be successfully added to your app;
- Finally, click the **Add to inputs** button at the bottom of the pop-up window to complete labeling your inputs with the newly created concept.

:::tip

If you select the **Apply to all search results** button, all the inputs that are visually similar to the one(s) you've initially selected will also be annotated. This allows you to label your inputs easily and fast. 

:::

If you've already created concepts and want to use them for annotating your input(s), simply select them from the **Concepts** field.

![](/img/community/annotate/create_annotations_3.png)

After selecting the already existing concepts, click the **Add to inputs** button at the bottom of the pop-up window to complete labeling your inputs with them.


## Label on Input-Viewer Page

If you click an input listed on the Inputs-Manager page, you'll be redirected to the viewer page for that input, where you can view and interact with it.

To carry out manual annotation on the Input-Viewer page, ensure the page's mode is set to **Annotate**, which is the default status. You can find the mode settings in the upper-left corner of the page.

![](/img/others-2/label-types-1.png)

### Classification Labeling

The classification label type lets you assign annotations to an entire image, a single frame of video, or a piece of text.

#### Image Classification

To manually classify an image on the Input-Viewer page, start by clicking the **Select / Edit** tool in the navigation bar (this tool is selected by default).

Next, use the **Select label** menu  that drops down to select the concept you want to use to annotate the image — that is, if the concept already exists in your app.

![](/img/others-2/label-types-2.png)

If you want to annotate an image with a new concept that does not already exist in your app, click the **+** (plus) button in the dropdown menu and type the concept's name in the field. Then, click the dropdown box that appears with the concept name beneath that field.

The new concept will be added to your app and labeled with your input.

![](/img/others-2/label-types-3.png)


You can add as many annotations as you want. The added annotations will appear in the **Select label** dropdown menu as well as in the **Classifications** pane in the right sidebar of the page. 

![](/img/others-2/label-types-4.png)

:::note

Alternatively, you can manually classify an image on the Input-Viewer page by navigating to the **Classifications** pane. Then, use the **Select or add concepts** search box to choose or add concepts for annotating your inputs, as described earlier.

:::


#### Text Classification

You can classify your text inputs into predefined categories in the same way as described earlier for image classification.

:::note

Ensure you select the appropriate [base workflow](https://docs.clarifai.com/portal-guide/workflows/base-workflows) when creating an app for text inputs.

:::

![](/img/others-2/label-types-5.png)

#### Video Classification

Support for video labeling within this tool is coming soon. If you need to label videos, you can create a [Labeling Task](https://docs.clarifai.com/portal-guide/labeling-tasks/create-a-task) and label a dataset with videos.  

### Detection Labeling

The detection label type lets you identify the objects in your inputs and also draw bounding boxes around them. 

#### Detection for Still Images

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

#### Detection for Video

Support for video labeling is coming soon. 

:::info object mode

[Click here](https://docs.clarifai.com/portal-guide/inputs-manager/#object-mode) to learn how to get the objects that have been labeled on your inputs using the Object Mode of the Inputs-Manager page.

:::

### Segmentation Labeling

The segmentation label type lets you outline a boundary of an object using a series of vertices that define a closed polygonal shape. It's ideal for annotating irregularly shaped areas or objects. 

To manually add segmentation labels to an image on the Input-Viewer page, first click the **Polygon** tool on the navigation bar.

Next, use the **Select label** menu that drops down to select the concept you want to use to annotate the image — that is, if the concept already exists in your app. If it's not already existing, you'll need to add it as described earlier. 

Next, use the dots to draw a contour as closely as possible around the image's region of interest.

After creating the initial shape by placing your dots, you'll need to close the loop. Simply click on the first dot you made again, and this action will close the loop, completing the polygon.

![](/img/others-2/label-types-8.png)

Note that segmentation labeling works just as the previously described detection labeling. For example, if you click the polygon icon in an annotation category field, the drawing mode will be activated, enabling you to create annotations with the selected concept.

### Masks Labeling

The mask label type lets you label each pixel within the region of interest. It provides pixel-level labeling that allows you to precisely identify and delineate objects within an image. 

Currently, you can only minimally review existing image mask annotations on the Input-Viewer page. After creating mask images via the API and uploading them to our platform, you can view them on that page. 

[Click here](https://docs.clarifai.com/api-guide/annotate/annotations#annotate-images-with-mask) to learn how to add image mask annotations using our API.

:::note

You can delete an entire image mask annotation for an input directly from the Input-Viewer page. However, the Input-Viewer page does not currently support creating or editing mask annotations.

:::

![](/img/others-2/label-types-7.png)
