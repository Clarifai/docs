---
description: Create, get, update, and delete annotations on Inputs-Manager
sidebar_position: 4
---

# Annotate 

**Create, get, update, and delete annotations on Inputs-Manager**
<hr />

Labeling, also known as annotation, is the process of assigning one or more relevant tags or keywords — commonly referred to as concepts — to describe the attributes or content of your inputs accurately.

For example, annotations might specify whether an image contains a dog or a cat, identify the spoken words in an audio recording, or highlight cracks in a concrete block.

Within the Inputs-Manager page, you can add annotations to inputs, get the ones already added to inputs, remove them from inputs, and carry out other management tasks with them.

## Create Annotations

To label your inputs on the Clarifai platform, head to your application's individual page. Then, select the **Inputs** option in the collapsible left sidebar.

You'll be redirected to the Input Mode of the Inputs-Manager page, where you can create and manage the annotations of your inputs. It is the default mode of the Inputs-Manager page.

![](/img/community/annotate/create_annotations_1.png)

You can use different ways to label your inputs. Let's illustrate how you can annotate image inputs for classification tasks. 

To label an image on the Inputs-Manager page, hover over it and click the small empty box in the upper-left corner to select it.

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

## Get Annotations

Let's illustrate how you can get an image's labels.

If you check the **Labels** section in the Inputs-Manager page, you can see the concepts you've created listed there. 

![](/img/community/annotate/create_annotations_5.png)

## Update and Delete Annotations

You can remove an annotation from an input and relabel it with a different annotation. Note that this action only removes the annotation from the input — it does not delete the [concept](https://docs.clarifai.com/portal-guide/concepts/create-get-update-delete) from your app.

Let's illustrate how you can edit the annotations of an image via the Inputs-Manager page.

![](/img/community/annotate/update_annotations_1.png)

1. Hover over the image and click the small empty box that appears in the upper-left corner to select it — just like we demonstrated previously;
2. Click the **Label as…** button that appears in the bottom section of the page. The small window that pops up allows you to edit the labels associated with the input;
3. Select the **Remove** option, which lets you remove the annotations you've added to the input;
4. In the **Concepts** field, select the concepts you want to remove from the input. After selecting a concept, it'll appear beneath the search field. Alternatively, you can check the **Remove all Concepts** button to delete all the annotations present in the input;
5. Finally, click the **Remove from inputs** button to delete the selected concepts from the input.

