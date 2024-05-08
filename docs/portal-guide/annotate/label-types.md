---
description: Learn about the labeling methods on the Input-Viewer
sidebar_position: 3
---

# Label Types

**Learn about the labeling methods on the Input-Viewer**
<hr />

We support different types of labeling methods, each suited for different tasks and data characteristics. This lets you create high-quality training data depending on the objective you want your machine learning model to achieve. 

We provide the following label types for your images, videos, and texts:

- **Classification** — Categorizes images, videos, and texts into categories;
- **Detection** — Detects where an object of interest is and draws a bounding box around it;
- **Segmentation** (polygons for segmentation) — Outlines the exact shape or contour of the object;
- **Masks** —  A type of image segmentation that defines the exact boundaries of an object at a pixel level. 

You can use any of the labeling types to complete your tasks easily and quickly. These label types provide increasing levels of granularity to support the needs of your specific use case.

Let's illustrate how you can carry out each label type on the Input-Viewer page. 

:::warning Scribe Labeler

[Click here](https://docs.clarifai.com/portal-guide/annotate/labeling-tools) to learn how to use the Scribe Labeling Tasks tool to carry out each of the different label types. 

:::

## Manual Labeling on Input-Viewer Page 

The Input-Viewer page is the main page that showcases the details of a single input available in your app. If you click an input listed on the Input-Manager page, you'll be redirected to the viewer page for that input, where you can see its details.

After navigating to the Input-Viewer, ensure the page's mode is set to **Annotate**, which is the default status. You can find the mode settings at the upper-right corner of the page.

Here is an example:

![](/img/others-2/label-types-1.png)

The page has the following assistive tools to help you make the most of the labeling exercise:

- **Select / Edit** — Use this tool to navigate and interact with the interface. You can use it to select already defined bounding boxes or polygons;
- **Bounding Box** — Use this tool to draw a rectangle on an image to define a region of interest. It's useful for identifying objects in images;
- **Polygon** — Use this tool to draw custom, multi-sided shapes on an image. It's ideal for annotating irregularly shaped areas or objects;
- **Hand** — Use this tool to click and drag an image in order to pan or move it around the workspace. It's useful for examining different areas of a large or zoomed-in image without changing the zoom level; 
- **Zoom** — Use this tool to zoom an image in or out. 

The left sidebar shows a film strip of images you can scroll through to get the specific image you want to annotate. If you click any image on the sidebar, it'll appear on the main workspace.

:::warning AI-assisted labeling

[Click here](https://docs.clarifai.com/portal-guide/annotate/ai-assist) to learn how to carry out AI-assisted labeling on the Input-Viewer. 

:::

## Classification

The classification label type lets you assign annotations to an entire image, a single frame of video, or a piece of text.

### Image Classification

To manually classify an image on the Input-Viewer page, first click the **Select / Edit** tool (it's selected by default) on the navigation bar.

:::tip

The keyboard shortcut for the **Select / Edit** tool is **V**. 

:::

Next, click the **Add annotation tags...** field and select the concept you want to use to annotate the image from the drop-down list — that is, if the concept already exists in your app.

![](/img/others-2/label-types-2.png)

If you want to annotate an input with a new concept that does not already exist in your app, click the **Add annotation tags...** field and type the concept's name. Then, click the drop-down box that appears with the concept name beneath that field.

![](/img/others-2/label-types-3.png)

The new annotation will be added to your app and labeled with your input. 

You can add as many annotations as you want. The added annotations will appear in the **Add annotation tags...** field as well as on the right sidebar of the page. 

![](/img/others-2/label-types-4.png)

### Text Classification

You can classify your text inputs into pre-defined categories — just as with image classification described above. 

:::tip

Ensure you select the appropriate [base workflow](https://docs.clarifai.com/portal-guide/workflows/base-workflows) when creating an app for text inputs.

:::

![](/img/others-2/label-types-5.png)

### Video Classification

Support for video labeling is coming soon. 

## Detection

The detection label type lets you identify the objects in your inputs and also draw bounding boxes around them. 

### Detection for Still Images

To manually add detection labels on the Input-Viewer page, first click the **Bounding Box** tool on the navigation bar.

:::tip

The keyboard shortcut for the **Bounding box** tool is **B**. 

:::

Next, click the **Add annotation tags...** field and select the concept you want to use from the drop-down list — that is, if the concept is already existing in your app. If it's not already existing, you'll need to add it as described earlier. 

Next, draw a rectangle as closely as possible around the image's region of interest. 

![](/img/others-2/label-types-6.png)

You can add as many detection annotations as you want. The added annotations will appear in the **Add annotation tags...** field as well as on the right sidebar of the page. 

### Detection for Video

Support for video labeling is coming soon. 

## Segmentation

The segmentation label type lets you outline a boundary of an object using a series of vertices that define a closed polygonal shape. It's ideal for annotating irregularly shaped areas or objects. 

To manually add segmentation labels on an image on the Input-Viewer page, first click the **Polygon** tool on the navigation bar.

:::tip

The keyboard shortcut for the **Polygon** tool is **P**. 

:::

Next, click the **Add annotation tags...** field and select the concept you want to use from the drop-down list — that is, if the concept is already existing in your app. If it's not already existing, you'll need to add it as described earlier. 

Next, use the dots to draw a contour as closely as possible around the image's region of interest. 

![](/img/others-2/label-types-8.png)


:::tip

After creating the initial shape by placing your dots, you'll need to close the loop. Simply click on the first dot you made again, and this action will close the loop, completing the polygon.

:::

You can add as many detection annotations as you want. The added annotations will appear in the **Add annotation tags...** field as well as on the right sidebar of the page. 

## Masks

The masks label type lets you label each pixel within the region of interest. It provides pixel-level labeling that allows you to precisely identify and delineate objects within an image. 

Currently, you can only minimally review existing image mask annotations on the Input-Viewer page. After creating mask images via the API and uploading them on the platform, you can view them on the page. 

:::note

You can delete an entire image mask annotation on an input on the Input-Viewer page. However, we currently do not support creating and editing mask annotations on the page. 

:::

![](/img/others-2/label-types-7.png)

