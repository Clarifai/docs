---
description: Manage and delegate your labeling work with tasks
sidebar_position: 2
---

# Create a Labeling Task

**Manage and delegate your labeling work with tasks**

<hr />

Tasks enable you to delegate labeling jobs of any size to your team. You can create new labeling tasks, distribute these tasks to your workforce, and review their work in one convenient tool.  

Delegating labeling tasks to a team provides several benefits, such as enhancing the overall quality of the exercise, expediting the process, and leveraging a diverse range of skills from various backgrounds.

## How to Create a Task

To create a task, go to your individual app page and select the **Labeling Tasks** option on the collapsible left sidebar. 

Next, on the **Tasks** management page, click the **Create New Task** button at the top-right corner of the page. 

![](/img/community/tasks/task_1.png)

You'll be redirected to the **New Labeling Task** page, where you can provide the details for creating a new task. 

Let's talk about the fields to fill in the form.

### Input Source

Start by selecting a dataset from which inputs will be assigned for the labeling task. To do so, click the **Select Dataset** search box and choose the dataset you want to use. 

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

Concepts are the words that you are labeling your data with. Concepts can be anything you can think of, and can be written in the language of your choice. You can [create concepts](https://docs.clarifai.com/portal-guide/concepts/create-get-update-delete#create-concepts) in your app, or even when assigning tasks.

Enabling [AI Assist](https://docs.clarifai.com/portal-guide/annotate/ai-assist) will allow Clarifai's AI to suggest concepts as you label your data. With AI Assist, you can speed up the labeling process and realize your goals faster. 

If you want to use the AI Assist tool, select the **Yes** option. Then, select a workflow you want to use—either from your own app or an external app in the Community. You can even click the **Create Workflow** button at the bottom of the drop-down list to create a new workflow. 

![](/img/community/tasks/task_13.png)

After choosing a workflow, use the **Select or add concepts** search box to select or add the concepts you want to use. 

![](/img/community/tasks/task_16.png)

You can also create new concepts, and select them. Click the plus (**+**) sign next to the **Select or add concepts** search box and type the concept name in the empty field. Then, click the **Add new concept** button that appears underneath the search box to create the new concept. 

![](/img/community/tasks/task_5.png)

The concepts you've selected will appear underneath the search box. Notice that there is a small AI Assist robot icon on the left side of each concept you've selected. The presence of the robot implies that the labeling task is going to be AI-assisted. Otherwise, the icon does not appear. 

![](/img/community/tasks/task_14.png)

If you do not want to use the AI Assist tool, select the **No** option. Then, select the concepts already present in your app or add new ones. 

![](/img/community/tasks/task_12.png)

### Add Collaborators

You can invite collaborators to help you with the task. Having collaborators can enhance the overall quality and efficiency of the labeling work. 

If you do not want to add any collaborator, select the **No** option. 

![](/img/community/tasks/task_17.png)

If you want to add a collaborator(s), select the **Yes** option.

![](/img/community/tasks/task_18.png)

To assign the labeling work to a worker or a group of workers, click the **Select Labelers** search box and select a worker you've already added as a collaborator within your app. You can also assign the task to yourself. 

You can also click the **Add all collaborators** button to assign the task to all the collaborators in your app.  

If you want to assign the task to another worker who already has an account on the Clarifai platform, click the **New Collaborator** button and provide their email address in the small window that pops up. 

You also need to select the scopes you want the worker to have in the application. The collaborator will receive an email notification that they've been added to the application. 

![](/img/community/tasks/task_20.png)

You can also click the **Select Reviewers** search box to select a reviewer for the task. 

### Task Name 

Provide a descriptive name for your task.

![](/img/community/tasks/task_1_1.png)

### Instructions

You can also provide instructions for your labelers. You can even provide them with a "visual dictionary" by including sample image URLs they can refer to. 

Click the **Add** button to add the instructions. 

![](/img/community/tasks/task_1_2.png)

### Submit

After filling out the form for creating a new task, click the **Create Task** button to complete the process. 

## Tasks Listing

The newly created task will be listed on the **Tasks** management page.

![](/img/community/tasks/task_10.png)

If you click on the ellipsis icon positioned at the end of the row associated with your selected task, a small drop-down window will emerge, allowing you to carry out various  management activities.

![](/img/community/tasks/task_10_1.png)

- The **ID** button lets you copy the ID of the selected task. 
- The **View annotation metrics** button lets you generate the labeling metrics specifically tied to the selected task on a given dataset. This functionality empowers you with a convenient method to gauge task progress and evaluate outcomes. It enables efficient monitoring of label view counts, providing valuable insights into the effectiveness and status of labeling tasks within the broader dataset context.
- The **Edit** button lets you edit the labeling task. 
- The **Delete** button lets you delete the labeling task. 


:::info

-	[Members of an organization](https://docs.clarifai.com/portal-guide/clarifai-organizations/members-teams) can create new labeling tasks and utilize the Labeling Tasks tool. They can add collaborators who already exist within the app as well as other organization members. These can be assigned roles as either task workers or task reviewers. Furthermore, there are convenient options available for quickly adding all collaborators or all organization members.
-	Similarly, [app collaborators](https://docs.clarifai.com/clarifai-basics/applications/collaboration) can also create labeling tasks and assign them to other collaborators who already exist within the app.

:::