---
description: Learn how to manage annotations
sidebar_position: 5
---

# Manage Annotations

**Learn how to manage annotations**
<hr />

## Manage on Inputs-Manager Page

### Get Annotations

Let's illustrate how you can get an image's labels.

If you check the **Labels** section in the Inputs-Manager page, you can see the concepts you've created listed there. 

![](/img/community/annotate/create_annotations_5.png)


### Update and Delete Annotations

You can remove an annotation from an input and relabel it with a different annotation. Note that this action only removes the annotation from the input — it does not delete the [concept](https://docs.clarifai.com/create-manage/concepts/) from your app.

Let's illustrate how you can edit the annotations of an image via the Inputs-Manager page.

![](/img/community/annotate/update_annotations_1.png)

1. Hover over the image and click the small empty box that appears in the upper-left corner to select it — just like we demonstrated previously;
2. Click the **Label as…** button that appears in the bottom section of the page. The small window that pops up allows you to edit the labels associated with the input;
3. Select the **Remove** option, which lets you remove the annotations you've added to the input;
4. In the **Concepts** field, select the concepts you want to remove from the input. After selecting a concept, it'll appear beneath the search field. Alternatively, you can check the **Remove all Concepts** button to delete all the annotations present in the input;
5. Finally, click the **Remove from inputs** button to delete the selected concepts from the input.


## Manage on Input-Viewer Page

Within the Input-Viewer page, you can get the annotations already added to inputs, remove them from inputs, or carry out other management tasks with them.

### View Individual Annotators

If you hover over the person icon on an annotation field in the **Classifications** pane, you can view the annotator(s) who added that annotation. The displayed number indicates how many annotators labeled that input.

### Update Annotations

![](/img/others-2/label-types-4-1.png)

To update an annotation, hover over its field in the right sidebar and click the pencil icon that appears. Next, enter a new name for the annotation in the text field that appears, then click the **Update** button to save your changes.

The new concept will be added to your app and annotated with your input. This newly added concept is referred to as a [**concept relation**](https://docs.clarifai.com/create-manage/concepts/concepts-relations), with the original concept displayed as a superscript next to it. As a result, if you create an annotation using the original concept, the updated concept will be used instead.

Note that if you edit the concept relation back to its original value, the existing concept relation annotation on the input will be removed. It will only be removed from the input, and not from your app. 

### Delete Annotations

There are several ways of deleting an annotation via the Input-Viewer page:

- If you hover over an annotation field, a delete icon will appear that you can use to remove the annotation. Note that deleting an annotation only removes it from the input; it does not delete the concept from your app.  

- You can remove an annotation by deselecting the checkmark next to it in the annotation field.  

- Additionally, each annotation is assigned a hotkey number. Clicking this number will delete the corresponding annotation from the input. For example, clicking "2" will remove the **sheep** annotation from the image. Up to 20 hotkeys can be assigned to an input. 
