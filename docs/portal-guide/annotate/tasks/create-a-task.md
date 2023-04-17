---
description: Manage and delegate your labeling work with tasks
sidebar_position: 1
---

# Create a Task

**Manage and delegate your labeling work with tasks**

<hr />

Tasks enable you to delegate labeling jobs to your team. To create a task, go to your individual app page and select the **Labeler Tasks** option on the collapsible left sidebar. 

Next, on the **Tasks** page, click the **Create New Task** button at the top-right corner of the page. 

![](/img/community/tasks/task_1.png)

You'll be redirected to the **New Task** page, where you can provide the details for creating a new task. 

Let's talk about the fields to fill in the form.

### Task Name 

Start by providing your task with a descriptive name.

![](/img/community/tasks/task_1_1.png)

### Instructions

Provide instructions for your labelers. You can even provide them with a "visual dictionary" by including sample image URLs they can refer to. 

![](/img/community/tasks/task_1_2.png)

### Task Type

Choose the type of label that you would like your worker to add to your images or video. You can choose between the following label types:

- Concepts—Allow you to add "tags" or "keywords" to your data;
- Bounding boxes—Allow you to draw rectangles surrounding the objects in the provided images;
- Masks/polygons—Allow you to outline the precise shape of objects in the provided images.

![](/img/community/tasks/task_3.png)

Please note that if you want to create a detection labeling task, you will need to select a detection model as the base workflow in your app.

### Input Source

You can select a dataset that you like your worker to use for the labeling job. To do so, click the **Select Dataset** search box and select the dataset you want to be used. 

If you do not have a matching dataset, click the **Create new Dataset** button to create a new one. 

![](/img/community/tasks/task_4.png)

### Concepts

Concepts are the words that you are labeling your data with. Concepts can be anything you can think of, and can be written in the language of your choice. 

You can create concepts on the platform, or you can create them when assigning tasks. You can check the **Select all concepts** box to automatically add all the available concepts to your labeling task.

If you want to create a new concept, click the plus (**+**) sign next to the **Select concepts** search box and type the concept name in the empty field. Then, click the **Add new concept** button that appears underneath the search box to create the new concept. 

![](/img/community/tasks/task_5.png)

### Labeler

You can assign the labeling work to a worker or a group of workers. To do so, click the **Select Labelers** search box and select a worker you've already added as a collaborator within your app. You can also assign the task to yourself. 

If you want to assign the task to another worker who already has an account on the Clarifai platform, click the **Add Collaborators** button and provide their email address in the small window that pops up. You also need to select the scopes you want the worker to have in the application. The collaborator will receive an email notification that they've been added to the application. 

![](/img/community/tasks/task_6.png)

### Worker Strategy

Manually assign work to a specific person or have work randomly assigned to workers from a group of collaborators. You can select either of the following:

- **Full**—All inputs will be assigned to each worker;
- **Partitioned**—You will be able to break up your labeling task amongst your workers. So, you need to specify more than one labeler in the **Labeler** field. 

![](/img/community/tasks/task_7.png)

### Review Strategy

You can select any of the following:

- **None**—All labels will be automatically marked with a "Success" status and can be immediately used to train your new model;

- **Manual**—Labels will be marked with a "Pending Review" status until the assigned reviewer approves them. These labels cannot be used to train new models until approved. You can choose to review all or part of a worker's labels. For example, if a worker is labeling 10,000 images, you might choose to review a sample size of 1% of them for quality control.

- **Consensus** \(coming soon!\)—Consensus review will mark labels with "Success" status in cases where multiple reviewers provide the same label.

![](/img/community/tasks/task_8.png)

### Submit

After filling out the form for creating a new task, click the **Submit Task** button to complete the process. 

![](/img/community/tasks/task_9.png)

The newly created task will be listed on the **Tasks** page.

![](/img/community/tasks/task_10.png)

