---
description: Automatically generate annotations on Input-Viewer page
sidebar_position: 3
---

# AI-Assisted Labeling

**Automatically generate annotations on Input-Viewer page**
<hr />


<div style={{ "position":"relative","width": "100%","overflow": "hidden","padding-top": "56.25%"}}>
<iframe width="900" height="500" style={{"position": "absolute","top": "0","left": "0","bottom": "0","right": "0","width": "100%","height": "100%",}} src="https://www.youtube.com/embed/x4lC5sz-Oqs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
</div>

<br />

> _Note that our UI has been updated since the release of the above video. However, the AI-assist functionality described in the video remains fully compatible with the new interface._

<br />

AI-assisted labeling is an innovative Clarifai feature that leverages artificial intelligence technology to assist and optimize the process of annotating data. 

You can request predictions from any model or workflow available to you on a particular input, and then review, correct, or validate them before converting them into annotations.

AI-Assist provides you with several benefits, including:

![](/img/annotate/ai_assist_image-1.png)

- Significantly accelerate the labeling process, reducing the time required to create labeled datasets;
- Automation can reduce the labor costs associated with manual labeling;
- AI models can provide consistent labeling, minimizing human errors;
- It allows for the efficient and scalable handling of large datasets or rapidly changing data.

:::caution feature availability

This AI-assist feature is only available to users on our [paid plans](https://www.clarifai.com/pricing).

:::

Let’s demonstrate how you can perform AI-assisted labeling using the **Annotate** mode of the Input-Viewer screen. 

## 1. Activate AI-Assist Settings

On the Input-Viewer, click the **Edit** button located in the upper-right corner of the page. 

![](/img/annotate/ai_assist_1-2.png)

You'll be redirected to the AI-assist sidebar that enables you to choose a model or workflow for using in labeling your inputs. Ensure the **AI Assist** toggle is switched on. 

![navigate to input-viewer screen](/img/annotate/ai_assist_1.png)

## 2. Choose a Model or Workflow

Use the **Select Model or Workflow** search box to choose a model or workflow to generate predictions and assist with annotations. You can choose your own customized model or workflow, or look for a public one from the Community platform. 

![choose a model or workflow](/img/annotate/ai_assist_2.png)

To select a public model or workflow from the Community, click the **Explore Community Models / Workflows** button. In the pop-up window, use the search bar to find the desired model or workflow.

![](/img/annotate/ai_assist_2-1.png)

:::tip

When working with image inputs, you need to choose a model or workflow that outputs concepts or objects (bounding box regions). This ensures the generation and display of annotation suggestions.

:::

:::note Objective

In this example, we'll illustrate how to generate annotations using a [visual classification]( https://docs.clarifai.com/portal-guide/model/model-types/visual-classifier) model and a [visual detection]( https://docs.clarifai.com/portal-guide/model/model-types/visual-detector) workflow. 

:::

### Classifications Labeling

First, let’s choose the Community’s [general-image-recognition]( https://clarifai.com/clarifai/main/models/general-image-recognition) model, which is a visual classification model that identifies a variety of concepts in images.

![ general-image-recognition model](/img/annotate/ai_assist_3.png)

### Objects Labeling

Similarly, let’s select another input on the Input-Viewer screen. And on the **AI Assist** sidebar, let’s choose the Community’s [General-Detection](https://clarifai.com/clarifai/main/workflows/General-Detection) workflow, which identifies a variety of common objects in images.

![General-Detection workflow](/img/annotate/ai_assist_4.png)

## 3. Generate Annotations

After choosing a model or workflow, it could take a few moments to automatically generate the annotations. The generated labels are sorted in descending order based on their concept probability values.

### Classifications Labeling

The **Classifications** pane lists the concepts generated by the classification model, alongside their probability values. 

![generate classification annotations](/img/annotate/ai_assist_5.png)

### Objects Labeling

The **Objects** pane displays the bounding boxes identified by the detection workflow, alongside their probability values. 

![generate bounding box annotations](/img/annotate/ai_assist_6.png)

:::note Manually Generate annotations

The **Select or add concepts** field in either the **Classifications** or **Objects** pane lets you choose existing concepts in your app for annotating your inputs. You can also add new concepts for the annotation.

:::

## 4. Review and Accept Predictions

Finally, you can review the model or workflow prediction suggestions and accept them as needed.  

The **AI assist probability threshold** section in the right sidebar allows you to filter predictions by probability values. Use the slider control to display only the predictions that fall within your selected probability range. 

To accept all AI-assisted suggestions for annotating your input(s) with the selected threshold, simply click the **Accept all AI assist predictions** button.  

:::info

When you accept an AI-assisted prediction suggestion, it will be added to your application as a [concept](https://docs.clarifai.com/portal-guide/inputs-manager/concepts) and automatically applied as a label to your input. 

:::

The **Search concepts** field allows you to find specific concepts and display their annotations on the page.

### Classifications Labeling

The **Classifications** pane allows you to review and accept classification predictions. 

![review and accept classification predictions](/img/annotate/ai_assist_7.png)

- **Concepts count display** — The pane displays the number of concepts used to annotate an image. For example, "Classifications (9)" means the model suggested nine concepts based on the defined probability threshold.
- **Accept or remove annotations** — To manually accept a prediction, simply click on the checkmark next to it. You will notice a color change, and a confirmation message will indicate that the annotation has been successfully added to your app and annotated with your input. You can also remove an annotation by deselecting the checkmark. _The removed annotation will revert to being a suggestion rather than being entirely removed from the list._
- **View individual annotators** — If you hover over the person icon on an annotation field, you can view the annotator(s) who added that annotation. The displayed number indicates how many annotators labeled that input. For example, it can be the annotator who manually accepted the suggestion and the model. 
- **Update annotations** — To update an already accepted annotation, hover over it and click the pencil icon that appears. Enter a new name for the annotation in the provided text field, then click the "Update" button to save your changes. The updated concept will be added to your app and annotated with your input. This updated concept is referred to as a concept relation, with the original concept shown as a superscript next to it. If you create an annotation using the original concept, its relation will be used instead. Note that if you edit the concept relation back to its original value, the concept relation annotation on the input will be removed. However, it will only be removed from the input and not from your app.
- **Delete annotation** — If you hover over an already accepted annotation field, a delete icon will appear that you can use to remove the annotation. A small pop-up will appear, prompting you to confirm the deletion.
- **Hotkey assignment** — Each annotation is assigned a hotkey number. Clicking this number will delete the corresponding annotation from the input. For example, clicking "1" will remove the `animal` annotation from the image. Up to 20 hotkeys can be assigned to an input.


### Objects Labeling

The **Objects** pane allows you to review and accept objects predictions. It displays categories of concepts used for annotations, along with individual annotation instances.

Reviewing and accepting object predictions is largely similar to classification labeling, with a few minor differences.

![review and accept objects predictions](/img/annotate/ai_assist_8.png)

- **Annotation count display** — The pane shows the number of annotation suggestions for each instance. For example, "Objects (6)" indicates that the workflow suggested six categories of concepts. Similarly, "sheep (8)" means the workflow suggested eight instances of the `sheep` concept. Individual annotations are numbered sequentially. For example, "sheep.1" represents the first annotation labeled with the `sheep` concept, "sheep.2" represents the second annotation, and so on.
- **Update and hide suggested annotations** — Hovering over a concept category field reveals a pencil icon for updating the concept name (as described earlier) and an eye icon for hiding all the annotations in that category.
- **Drawing mode** — Clicking the bounding box icon or the polygon icon in a category field activates the drawing mode. This allows you to manually create bounding box or [polygon annotations](https://docs.clarifai.com/portal-guide/input-viewer/annotate#segmentation-labeling), respectively, using the selected concept. The drawing mode box, located in the upper-right corner of the canvas, displays the concept currently in use for detection labeling. To exit drawing mode, simply click the "Exit" button.
- **Instance-specific actions** — Hovering over an individual annotation instance reveals these icons: pencil icon for reassigning the annotation to a different concept, eye icon for hiding the specific annotation instance, and delete icon for removing the specific annotation instance.
- **Edit suggestions** — Clicking an individual annotation instance highlights its corresponding bounding box in the canvas, enabling easy editing by resizing, repositioning, or adjusting to better suit your needs. You can also edit a region prediction by clicking on the labeled bounding box and dragging it to cover the specific areas you want it to encompass. After editing the bounding box, the label will be automatically added to your input. 
- **Hotkey assignment** — Each concept is assigned a hotkey, allowing quick labeling for that concept. For example, pressing "1" enables you to draw bounding boxes labeled with the *sheep* concept. Up to 20 hotkeys can be assigned to your concepts.

