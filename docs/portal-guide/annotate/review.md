---
description: Review the work performed by your labelers
sidebar_position: 2.2
---

# Review Annotations

**Review the work performed by your labelers**
<hr />

Reviewing annotations ensures data accuracy and quality, validates model performance, and identifies biases. It helps handle complex cases, enhances training data, builds trust, and facilitates continuous improvement in both the annotation process and AI models.

Clarifai offers a valuable tool to help you review the work of your labelers and ensure it meets your quality standards. After labeling a batch of data — whether [manually](https://docs.clarifai.com/portal-guide/annotate/create-a-task), with [AI assistance](https://docs.clarifai.com/portal-guide/annotate/create-a-task), or through [auto-annotation](https://docs.clarifai.com/portal-guide/annotate/auto-annotation) — you can conveniently review the results.

Let's demonstrate how to review the annotations from a detection labeling exercise.

To review and edit the annotations, click the **Review** button on the **Labeling Tasks** page. 

![](/img/images1/review-1.png)

:::note

After completing the review process, the **Review** button will become inactive, preventing further clicks.

:::

You’ll be redirected to the tasks reviewing tool. Click the **Start Reviewing** button in the pop-up window to begin reviewing the task.

![](/img/images1/review-2.png)

At the top of the page, you can click the **Review** button to quickly switch to another labeling task without leaving the current interface. You can click the **Approve all** button to approve all the annotations from the specified labeler or the **Reject all** button to reject all the annotations.

You can also view the labeler responsible for the annotation exercise. 

![](/img/images1/review-3.png)

If you click the ellipsis icon at the upper-right corner of the page, a drop-down menu will appear. This menu allows you to view the keyboard shortcuts available to enhance the review experience. 

You can also click **Open in legacy review mode** to revert to the legacy labeling interface. 

![](/img/images1/review-4.png)

These are the keyboard shortcuts you can use:

- Brightness — `alt`
- Saturation — `shift`
- Invert — `control`
- Pan — `shift + P`
- Search — ` / `

The percentage carousel at the lower-left section of the page displays the progress of reviewed inputs as a percentage of the total.

![](/img/images1/review-5.png)

The right sidebar allows you to edit the annotations: 

- The green tick indicates that the annotation is active. Clicking it will delete the annotation, but you must click the **Approve Selected** button for the change to be permanently reflected.

:::note

When you hover over the active annotation on the right sidebar, you'll notice a change in the intensity of the background color of the image.

:::

- The eye icon allows you to blind the annotation.
- The delete button allows you to delete the annotation.
- The plus (+) button allows you to add another annotation using the same concept. For example, you can click it to add an additional bounding box to the image with the same concept.
- The pencil edit button allows you to move the active annotation to a different concept. Clicking it will open a small menu, enabling you to reassign the annotation to another concept.

![](/img/images1/review-6.png)

:::tip

You can easily resize or move existing bounding box annotations. Just click inside the bounding box you wish to modify, then drag to move or resize. 

:::

You can click the **Approve Selected** button to approve the created annotation. Or, you can click the **Reject Input** button to reject the created annotation. 




