---
description: Manage your annotations
sidebar_position: 1
---

# Create, Get, Update, Delete

**Manage your annotations**
<hr />

Within your app, you can add annotations to inputs, get the ones already added to inputs, remove them from inputs, and carry out other management tasks with them.

## Create Annotations

To label your inputs on the Clarifai platform, head to your application's individual page. Then, select the **Inputs** option in the collapsible left sidebar.

You'll be redirected to the Input Mode of the Inputs-Manager page, where you can create and manage the annotations of your inputs. It is the default mode of the Input-Manager page.

![](/img/community/annotate/create_annotations_1.png)

You can use different ways to label your inputs. Let's illustrate how you can annotate image inputs for classification tasks. 

### Via the Inputs-Manager Page

The Inputs-Manager is the main page that displays all the inputs in your app. To label an image from there, hover over it and click the small empty box in the upper-left corner to select it.

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

### Via the Input-Viewer Page

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

Let's illustrate how you can get an image's labels.

### Via the Inputs-Manager Page

If you check the **Labels** section in the Inputs-Manager page, you can see the concepts you've created listed there. 

![](/img/community/annotate/create_annotations_5.png)

### Via the Input-Viewer Page

If you want to get the annotations for a single input, go to the Input-Viewer page. You'll see the labels in the **Add annotation tags...** field as well as in the right sidebar. 

![](/img/community/annotate/create_annotations_11.png)

:::note object mode

[Click here](https://docs.clarifai.com/portal-guide/data/explorer/#object-mode) to learn how to get the objects that have been labeled on your inputs using the Object Mode of the Input-Manager page.

:::

## Update and Delete Annotations

You can remove an annotation from an input and relabel it with a different annotation. Note that this action only removes the annotation from the input — it does not delete the [concept](https://docs.clarifai.com/portal-guide/concepts/create-get-update-delete) from your app.

Let's illustrate how you can edit an image's labels.

### Via the Inputs-Manager Page

Here is how you can edit the annotations of an image via the Inputs-Manager page.

![](/img/community/annotate/update_annotations_1.png)

1. Hover over the image and click the small empty box that appears in the upper-left corner to select it — just like we demonstrated previously;
2. Click the **Label as…** button that appears in the bottom section of the page. The small window that pops up allows you to edit the labels associated with the input;
3. Select the **Remove** option, which lets you remove the annotations you've added to the input;
4. In the **Concepts** field, select the concepts you want to remove from the input. After selecting a concept, it'll appear beneath the search field. Alternatively, you can check the **Remove all Concepts** button to delete all the annotations present in the input;
5. Finally, click the **Remove from inputs** button to delete the selected concepts from the input.

### Via the Input-Viewer Page

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