---
description: Manage your annotations
sidebar_position: 1
---

# Create, Get, Update, Delete

**Manage your annotations**
<hr />

Within your app, you can add annotations to inputs, get the ones already added to inputs, remove them from inputs, and carry out other management tasks with them.

## Create Annotations

To label your inputs on the Clarifai platform, head to your application's individual page. Then, select the **Inputs** option on the collapsible left sidebar.

You'll be redirected to the inputs manager page, where you can create annotations and add them to your inputs. 

![](/img/community/annotate/create_annotations_1.png)

You can use different ways to label your image inputs. Let's illustrate two of them:

- Via the inputs manager page
- Via the input viewer page

### Via the inputs manager page

The inputs manager page is the main page showcasing all the inputs in your app. To label your inputs from there, start by selecting the input(s) you like to label by clicking the small empty box at the top-left corner of each image. 

Next, click the **Label as…** button that appears at the bottom section of the page.

![](/img/community/annotate/create_annotations_2.png)

The small window that pops up allows you to annotate the selected input(s) with concepts. 

Select the **Add** option, which lets you add annotations to your inputs (the option is selected by default). 

If you want to create a new concept and use it for labeling your inputs:

![](/img/community/annotate/create_annotations_4.png)

- Click the plus sign (**+**) next to the **Select concepts** search field;
- Type the new concept name in the search field. The new name you've typed will appear underneath the search field;
- Click the **Add new concept** button to create the concept. The new concept will be successfully added to your app;
- Finally, click the **Add to inputs** button at the bottom of the pop-up window to complete labeling your inputs with the newly created concept.

:::tip

If you select the **Apply to all search results** button, all the inputs that are visually similar to the one(s) you've initially selected will also be annotated. This allows you to label your inputs easily and fast. 

:::

If there are concepts you've already created and you want to use them to annotate your input(s), select them under the **Concepts** field. 

![](/img/community/annotate/create_annotations_3.png)

After selecting the already existing concepts, click the **Add to inputs** button at the bottom of the pop-up window to complete labeling your inputs with them.

### Via the input viewer page

The input viewer page is the main page that showcases the details of a single input available in your app. If you click an input listed on the inputs manager page, you'll be redirected to the viewer page for that input, where you can see its details. 

![](/img/community/annotate/create_annotations_6.png)

Once you're on the input viewer page, ensure the page's mode is set to **Annotate**, which is the default. You can find the mode settings at the top-right corner of the page. 

The page has several assistive tools to help you make the most of the labeling exercise. For example, on the top section, you can select an icon to label an input with bounding boxes, move an image around the workspace, or zoom an image in or out.

The left sidebar also shows a film strip of images you can scroll through to get the specific image you want to annotate. If you click any image on the sidebar, it'll appear on the main workspace. 

To label your image from the input viewer page, click the **Add annotation tags...** field and select the concept you want to use to annotate the image from the drop-down list—that is, if the concept is already existing in your app.

![](/img/community/annotate/create_annotations_7.png)

You can add as many annotations as you want. The added annotations will appear in the **Add annotation tags...** field.

![](/img/community/annotate/create_annotations_8.png)

If you want to annotate an input with a new concept that does not already exist in your app, click the **Add annotation tags...** field and type the concept's name. Then, click the drop-down box that appears with the concept name beneath that field. 

![](/img/community/annotate/create_annotations_9.png)

The new annotation will be added to your app and labeled with your input. 

![](/img/community/annotate/create_annotations_10.png)

## Get Annotations

If you check the **Labels** section on the inputs manager page, you can see the annotations you've created listed there. 

![](/img/community/annotate/create_annotations_5.png)

If you want to get the annotations of a single input, go to the input viewer page, and you'll see the labels in the **Add annotation tags...** field. You can also get the annotations, alongside the name of the person who added them, on the right sidebar. 

![](/img/community/annotate/create_annotations_11.png)

## Update and Delete Annotations

You can remove an annotation from an input and label that input with another annotation. You can use different ways to edit an image's labels.

Let's illustrate two of them:

- Via the inputs manager page
- Via the input viewer page

### Via the inputs manager page

You can edit the annotations of an image via the inputs manager page.

![](/img/community/annotate/update_annotations_1.png)

1. Start by selecting the image by clicking the small empty box at its top-left corner—just like we demonstrated previously;
2. Click the **Label as…** button that appears on the bottom section of the page. The small window that pops up allows you to edit the labels associated with the input;
3. Select the **Remove** option, which lets you remove the annotations you've added to the input;
4. Under the **Concepts** field, select the concepts you want to remove from the input. After selecting a concept, it'll appear beneath the **Select concepts** search field. Alternatively, you can check the **Remove all Concepts** button to delete all the annotations present in the input;
5. Finally, click the **Remove from inputs** button to delete the selected concepts from the input.

### Via the input viewer page

To edit the annotations of an image via the input viewer page, start by navigating to the page—just like we demonstrated previously.

On the **Add annotation tags...** field, which shows the concepts in the input, click the delete (**x**) button next to the concept you want to remove. You can also click the **Delete All** button to remove all the concepts from the input. 

You can also remove a concept from an input by deselecting its checkmark on the right sidebar.  

![](/img/community/annotate/update_annotations_2.png)