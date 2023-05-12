---
description: Manage and delegate your labeling work with tasks
sidebar_position: 2
---

# Create a Task

**Manage and delegate your labeling work with tasks**

<hr />

Tasks enable you to delegate labeling jobs of any size to your team. You can create new labeling tasks, delegate these tasks to your workforce, and review their work in one convenient tool.  

## Importance of Tasks

Delegating labeling tasks to a team can provide several benefits, including:

**1. Quality control**

Ensuring inputs are labeled correctly and consistently is critical for producing accurate models. By delegating the labeling tasks to a team, you can have multiple sets of eyes looking at the data and reviewing one another's work, which can help improve the accuracy of the exercise.

**2. Flexibility**

Embracing a team approach to labeling can provide more flexibility in terms of workload management. If one team member is unavailable, or if they're unable to complete their assigned tasks within the stipulated time, other team members can take on their responsibilities. This ensures the labeling tasks are completed on schedule. 

**3. Improved productivity**

Annotating inputs can be time-consuming and resource-intensive. It can be challenging to complete the exercise wholly in-house. By delegating the work to a team, you can scale up the exercise quickly, especially as the volume of data increases. 

Distributing the work among team members can assist in speeding up the process and lead to efficient use of resources. 

**4. Expertise**

A team may comprise members with different backgrounds and skills, which can lead to a more comprehensive and accurate labeling process. For example, one team member may have expertise in [visual similarity search](https://www.clarifai.com/use-cases/visual-search), while another may have experience with [content moderation](https://www.clarifai.com/solutions/content-moderation).
 
## How to Create a Task

Tasks enable you to delegate labeling jobs to your team. To create a task, go to your individual app page and select the **Labeling** option on the collapsible left sidebar. 

Next, on the **Tasks** manager page, click the **Create New Task** button at the top-right corner of the page. 

![](/img/community/tasks/task_1.png)

You'll be redirected to the **New Labeling Task** page, where you can provide the details for creating a new task. 

Let's talk about the fields to fill in the form.

### Input Source

Start by selecting a dataset from which inputs will be assigned for the labeling task. To do so, click the **Select Dataset** search box and select the dataset you want to be used. 

![](/img/community/tasks/task_4.png)

If you do not have an already created dataset, click the **Create new Dataset** option to create a new one. Then, provide the new dataset name on the drop-down that appears. You can also select the checkbox to add all the inputs in your app to the new dataset. 

![](/img/community/tasks/task_21.png)

### Modeling Objective

Next, choose the objective you want to achieve with your model. You can choose among the following label types:

- Classification—categorizes images, videos, and texts into categories;
- Detection—detects where an object of interest is and draws a bounding box around it;
- Segmentation (polygons for segmentation)—outlines the exact shape or contour of an object.

![](/img/community/tasks/task_11.png)

### Enable AI Assist

Concepts are the words that you are labeling your data with. Concepts can be anything you can think of, and can be written in the language of your choice. You can [create concepts](https://docs.clarifai.com/portal-guide/concepts/create-get-update-delete#create-concepts) on your app, or you can create them when assigning tasks.

Enabling [AI Assist](https://docs.clarifai.com/portal-guide/annotate/ai-assist) will allow Clarifai's AI to suggest concepts as you label your data. With AI Assist, you can speed up the labeling task and realize your goals faster. 

If you want to use the AI Assist tool, select the **Yes** option. Then, select a workflow you want to use—either from your own app or an external app in the Community. You can even click the **Create Workflow** button at the bottom of the drop-down list to create a new workflow. 

![](/img/community/tasks/task_13.png)

In the **Select concepts** search box, select the concepts you want to use from the workflow. 

![](/img/community/tasks/task_16.png)

You can also create new concepts, and select them. Click the plus (**+**) sign next to the **Select concepts** search box and type the concept name in the empty field. Then, click the **Add new concept** button that appears underneath the search box to create the new concept. 

![](/img/community/tasks/task_5.png)

The concepts you've selected will appear underneath the search box. Notice that there is a small AI Assist robot icon on the left side of each concept you've selected. The presence of the robot implies that the labeling task is going to be AI-assisted. Otherwise, the icon does not appear. 

![](/img/community/tasks/task_14.png)

If you do not want to use the AI Assist tool, select the **No** option. 

![](/img/community/tasks/task_12.png)

Then, select the concepts already present in your app or add new ones. 

![](/img/community/tasks/task_15.png)

### Add Collaborators

You can invite collaborators to help you with the task. Having collaborators can enhance the overall quality and efficiency of the labeling work. 

If you do not want to add any collaborator, select the **No** option. 

![](/img/community/tasks/task_17.png)

If you want to add a collaborator(s), select the **Yes** option.

![](/img/community/tasks/task_18.png)

The drop-down section lets you specify the details and scopes of any additional collaborators who will be working on the task with you. 

To assign the labeling work to a worker or a group of workers, click the **Select Labelers** search box and select a worker you've already added as a collaborator within your app. You can also assign the task to yourself. 

![](/img/community/tasks/task_19.png)

If you want to assign the task to another worker who already has an account on the Clarifai platform, click the **Add Collaborators** button and provide their email address in the small window that pops up. 

You also need to select the scopes you want the worker to have in the application. The collaborator will receive an email notification that they've been added to the application. 

![](/img/community/tasks/task_20.png)

Next, you need to specify the worker strategy. This allows you to manually assign work to a specific person or have work randomly assigned to workers from a group of collaborators. 

![](/img/community/tasks/task_7.png)

You can select either of the following:

- **Full**—All inputs will be assigned to each worker;
- **Partitioned**—You will be able to break up your labeling task amongst your workers. So, you need to specify more than one labeler in the **Labelers** field. 

Finally, you need to specify the review strategy. 

![](/img/community/tasks/task_8.png)

You can select any of the following:

- **None**—All labels will be automatically marked with a "Success" status and can be immediately used to train your new model;

- **Manual**—Labels will be marked with a "Pending Review" status until the assigned reviewer approves them. These labels cannot be used to train new models until approved. You can choose to review all or part of a worker's labels. For example, if a worker is labeling 10,000 images, you might choose to review a sample size of 1% of them for quality control.

- **Consensus** \(coming soon!\)—Consensus review will mark labels with "Success" status in cases where multiple reviewers provide the same label.

### Task Name 

Provide your task with a descriptive name.

![](/img/community/tasks/task_1_1.png)

### Instructions

Provide instructions for your labelers. You can even provide them with a "visual dictionary" by including sample image URLs they can refer to. 

![](/img/community/tasks/task_1_2.png)


### Submit

After filling out the form for creating a new task, click the **Create Task** button to complete the process. 

![](/img/community/tasks/task_9.png)

The newly created task will be listed on the **Tasks** manager page.

![](/img/community/tasks/task_10.png)

