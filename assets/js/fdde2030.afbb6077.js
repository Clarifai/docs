"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[3447],{88962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>A});var a=n(74848),s=n(28453);const i={description:"Learn how to label a batch of data manually or with AI assistance",sidebar_position:2},o="Create a Labeling Task",l={id:"portal-guide/annotate/create-a-task",title:"Create a Labeling Task",description:"Learn how to label a batch of data manually or with AI assistance",source:"@site/docs/portal-guide/annotate/create-a-task.md",sourceDirName:"portal-guide/annotate",slug:"/portal-guide/annotate/create-a-task",permalink:"/portal-guide/annotate/create-a-task",draft:!1,unlisted:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/annotate/create-a-task.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Learn how to label a batch of data manually or with AI assistance",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create, Get, Update, Delete",permalink:"/portal-guide/annotate/create-get-update-delete"},next:{title:"Auto-Annotation",permalink:"/portal-guide/annotate/auto-annotation"}},r={},A=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Start the Labeling Task",id:"step-1-start-the-labeling-task",level:2},{value:"Step 2: Select Dataset",id:"step-2-select-dataset",level:2},{value:"Step 3: Turn Off Auto-Annotation",id:"step-3-turn-off-auto-annotation",level:2},{value:"Step 4: Select Task Type",id:"step-4-select-task-type",level:2},{value:"Step 5: Turn Off or Enable AI-Assist",id:"step-5-turn-off-or-enable-ai-assist",level:2},{value:"Step 6: Add Collaborators",id:"step-6-add-collaborators",level:2},{value:"Step 7: Set Task Name",id:"step-7-set-task-name",level:2},{value:"Step 8: Add Instructions",id:"step-8-add-instructions",level:2},{value:"Step 9: Configure Advanced Settings",id:"step-9-configure-advanced-settings",level:2},{value:"Step 10: Create Labeling Task",id:"step-10-create-labeling-task",level:2},{value:"Step 11: Start Labeling",id:"step-11-start-labeling",level:2},{value:"Step 12: Start Reviewing",id:"step-12-start-reviewing",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"create-a-labeling-task",children:"Create a Labeling Task"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Label a batch of data manually or with AI assistance"})}),"\n",(0,a.jsx)("hr",{}),"\n",(0,a.jsx)(t.p,{children:"Tasks enable you to label the inputs in your dataset easily, fast, and conveniently. You can create new labeling tasks, distribute these tasks to your workforce, and review their work in one convenient tool."}),"\n",(0,a.jsx)(t.p,{children:"Let's demonstrate how you can label a batch of data manually or with AI assistance."}),"\n",(0,a.jsx)(t.admonition,{title:"auto-annotation",type:"tip",children:(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://docs.clarifai.com/portal-guide/annotate/auto-annotation",children:"Click here"})," to learn how to label inputs automatically using the auto-annotation technique."]})}),"\n",(0,a.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://docs.clarifai.com/clarifai-basics/applications/create-an-application/",children:"An application"})}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete/",children:"A dataset"})," containing the inputs you want to label. For this example, we\u2019ll create a dataset containing a few images of pants, shirts, shoes, shorts, and skirts sourced from this ",(0,a.jsx)(t.a,{href:"https://www.kaggle.com/datasets/agrigorev/clothing-dataset-full/data",children:"clothing dataset"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://docs.clarifai.com/portal-guide/concepts/create-get-update-delete#create-concepts",children:"Concepts"})," that you want to use for the labeling task. For this example, we'll add the following concepts to our app:  ",(0,a.jsx)(t.code,{children:"pants"}),", ",(0,a.jsx)(t.code,{children:"shirt"}),", ",(0,a.jsx)(t.code,{children:"shoe"}),", ",(0,a.jsx)(t.code,{children:"short"}),", and ",(0,a.jsx)(t.code,{children:"skirt"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"step-1-start-the-labeling-task",children:"Step 1: Start the Labeling Task"}),"\n",(0,a.jsxs)(t.p,{children:["To create a task, select ",(0,a.jsx)(t.strong,{children:"Labeling Tasks"})," from the collapsible left sidebar, then click the ",(0,a.jsx)(t.strong,{children:"New Labeling Task"})," button located in the upper-right corner of the ",(0,a.jsx)(t.strong,{children:"Labeling Tasks"})," page."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(14569).A+"",width:"1905",height:"822"})}),"\n",(0,a.jsx)(t.h2,{id:"step-2-select-dataset",children:"Step 2: Select Dataset"}),"\n",(0,a.jsxs)(t.p,{children:["You'll be redirected to the ",(0,a.jsx)(t.strong,{children:"New Labeling Task"})," page, where you can provide the details for creating a new task."]}),"\n",(0,a.jsxs)(t.p,{children:["Start by selecting a dataset from which inputs will be assigned for the labeling task. To do so, click the ",(0,a.jsx)(t.strong,{children:"Select a dataset"})," search box and choose the dataset you want to use from the list that drops down."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(4836).A+"",width:"1853",height:"713"})}),"\n",(0,a.jsxs)(t.p,{children:["If you don't already have a dataset, click the ",(0,a.jsx)(t.strong,{children:"Create new Dataset with all inputs"})," button. Then, provide the name for the new dataset in the drop-down that appears. All the inputs in your app will be added to this new dataset."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(55153).A+"",width:"1303",height:"309"})}),"\n",(0,a.jsx)(t.h2,{id:"step-3-turn-off-auto-annotation",children:"Step 3: Turn Off Auto-Annotation"}),"\n",(0,a.jsxs)(t.p,{children:["To label the inputs manually or with AI assistance, select the ",(0,a.jsx)(t.strong,{children:"No"})," button. This will turn off the ",(0,a.jsx)(t.a,{href:"https://docs.clarifai.com/portal-guide/annotate/auto-annotation",children:"auto-annotation"})," process."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(10010).A+"",width:"1279",height:"169"})}),"\n",(0,a.jsx)(t.h2,{id:"step-4-select-task-type",children:"Step 4: Select Task Type"}),"\n",(0,a.jsx)(t.p,{children:"Choose the objective you want to achieve with your labeling task. You can choose among the following label types:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Classification \u2014 categorizes images, videos, and texts into categories;"}),"\n",(0,a.jsx)(t.li,{children:"Detection \u2014 detects where an object of interest is and draws a bounding box around it;"}),"\n",(0,a.jsx)(t.li,{children:"Segmentation (polygons for segmentation) \u2014 outlines the exact shape or contour of an object."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(36676).A+"",width:"1449",height:"385"})}),"\n",(0,a.jsx)(t.p,{children:"For this example, let's select the detection label type."}),"\n",(0,a.jsx)(t.h2,{id:"step-5-turn-off-or-enable-ai-assist",children:"Step 5: Turn Off or Enable AI-Assist"}),"\n",(0,a.jsx)(t.admonition,{title:"manual labeling",type:"warning",children:(0,a.jsx)(t.p,{children:"Manual labeling of data is crucial for ensuring high-quality training data, handling complex and ambiguous cases, and providing accurate validation benchmarks. It also ensures data diversity and reduces bias, especially in sensitive applications. It's best for new domains with scarce pre-labeled data and niche datasets where the team is building collective concept definitions and libraries."})}),"\n",(0,a.jsxs)(t.p,{children:["To label a batch of data manually, select the ",(0,a.jsx)(t.strong,{children:"No"})," option when asked if you want to enable AI-assist. This will turn off AI-assist and enable you to label your inputs manually."]}),"\n",(0,a.jsxs)(t.p,{children:["Next, use the ",(0,a.jsx)(t.strong,{children:"Search concepts"})," field to find and add existing concepts from your app that you want to use for the labeling exercise. The concepts you've selected will appear underneath the search box. For this example, we'll add these concepts: ",(0,a.jsx)(t.code,{children:"pants"}),", ",(0,a.jsx)(t.code,{children:"shirt"}),", ",(0,a.jsx)(t.code,{children:"shoe"}),", ",(0,a.jsx)(t.code,{children:"short"}),", and ",(0,a.jsx)(t.code,{children:"skirt"}),"."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(95121).A+"",width:"1543",height:"304"})}),"\n",(0,a.jsxs)(t.p,{children:["You can also create new concepts, and select them. Type the concept name in the ",(0,a.jsx)(t.strong,{children:"Search concepts"})," field. Then, click the ",(0,a.jsx)(t.strong,{children:"Add new concept"})," button that appears underneath the search box to create the new concept and also add it to your app."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(30989).A+"",width:"1543",height:"267"})}),"\n",(0,a.jsx)(t.admonition,{title:"AI-Assisted labeling",type:"warning",children:(0,a.jsx)(t.p,{children:"AI-assisted labeling is a semi-automated approach with human-in-the-loop that combines the power of existing models and workflows with the flexibility and accuracy of manual labeling. This method speeds up the labeling process by automating straightforward tasks while allowing human labelers to focus on complex or ambiguous cases. The AI model provides initial labels that humans can review and refine, ensuring high-quality and consistent annotations. This combines the strengths of both automated systems and human oversight."})}),"\n",(0,a.jsxs)(t.p,{children:["To label using AI-assist, select the ",(0,a.jsx)(t.strong,{children:"Yes"})," option."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(88502).A+"",width:"1542",height:"323"})}),"\n",(0,a.jsxs)(t.p,{children:["Then, choose a model or workflow from the available options \u2014 either one you own or one publicly available in the Community. For this example, let\u2019s select the ",(0,a.jsx)(t.a,{href:"https://clarifai.com/clarifai/main/workflows/General-Detection",children:"General-Detection"})," workflow that detects a variety of common objects in images by drawing bounding boxes around them."]}),"\n",(0,a.jsxs)(t.p,{children:["Next, use the ",(0,a.jsx)(t.strong,{children:"Search Concepts"})," field to select the concepts you want to use. Note that you can choose concepts already included in the workflow or model, or create new ones, as illustrated earlier. For this example, let\u2019s select these concepts already existing in the workflow: ",(0,a.jsx)(t.code,{children:"pants"}),", ",(0,a.jsx)(t.code,{children:"shirt"}),", ",(0,a.jsx)(t.code,{children:"shoe"}),", ",(0,a.jsx)(t.code,{children:"short"}),", and ",(0,a.jsx)(t.code,{children:"skirt"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"The concepts you've selected will appear underneath the search box. Notice that there is a small AI-assist robot icon on the left side of each concept you've selected. The presence of the robot implies that the labeling task is going to be AI-assisted. Otherwise, the icon does not appear."}),"\n",(0,a.jsx)(t.admonition,{title:"segmentation",type:"caution",children:(0,a.jsx)(t.p,{children:"AI-assist is not available for segmentation labeling tasks."})}),"\n",(0,a.jsx)(t.h2,{id:"step-6-add-collaborators",children:"Step 6: Add Collaborators"}),"\n",(0,a.jsx)(t.p,{children:"Delegating labeling tasks to a team provides several benefits, such as enhancing the overall quality of the exercise, expediting the process, and leveraging a diverse range of skills from various backgrounds."}),"\n",(0,a.jsxs)(t.p,{children:["If you do not want to add any collaborator to help you with the task, select the ",(0,a.jsx)(t.strong,{children:"No"})," option."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(97618).A+"",width:"1541",height:"252"})}),"\n",(0,a.jsxs)(t.p,{children:["If you want to add a collaborator(s), select the ",(0,a.jsx)(t.strong,{children:"Yes"})," option."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(49621).A+"",width:"1542",height:"506"})}),"\n",(0,a.jsxs)(t.p,{children:["To assign the labeling work to a worker or a group of workers, click the ",(0,a.jsx)(t.strong,{children:"Select Labelers"})," search box and select a worker(s) you've already added as a collaborator(s) within your app. You can also assign the task to yourself. The inputs to be labeled will be evenly distributed among all the workers, ensuring that each input is assigned to only one worker and there is no duplication of work."]}),"\n",(0,a.jsxs)(t.p,{children:["To assign the reviewing work to a worker or a group of workers, click the ",(0,a.jsx)(t.strong,{children:"Select Reviewers"})," search box and select a reviewer(s) for the task. Adding human review adds a critical layer of verification and validation, ensuring that the annotations are both accurate and reliable."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Clicking the ",(0,a.jsx)(t.strong,{children:"New collaborator"})," button will open a pop-up, enabling you to add new collaborators to the app and assign them to the labeling or reviewing task. You can learn how to add a collaborator ",(0,a.jsx)(t.a,{href:"https://docs.clarifai.com/clarifai-basics/applications/collaboration/",children:"here"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["Clicking the ",(0,a.jsx)(t.strong,{children:"Add all collaborators"})," button will assign the task to all collaborators in your app. On the other hand, clicking the ",(0,a.jsx)(t.strong,{children:"Remove all collaborators"})," button will unassign the task from all collaborators in your app."]}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{title:"Review Partitioning",type:"warning",children:(0,a.jsx)(t.p,{children:"Distributing inputs across multiple reviewers allows you to automatically assign labeled assets to multiple reviewers. This approach improves the speed of the review process and reduces the risk of a single point of dependence. The labeled inputs will be evenly partitioned among all reviewers without duplication of the reviewing work."})}),"\n",(0,a.jsx)(t.h2,{id:"step-7-set-task-name",children:"Step 7: Set Task Name"}),"\n",(0,a.jsx)(t.p,{children:"Specify the name of the task to facilitate easy identification."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(29545).A+"",width:"1541",height:"178"})}),"\n",(0,a.jsx)(t.h2,{id:"step-8-add-instructions",children:"Step 8: Add Instructions"}),"\n",(0,a.jsx)(t.p,{children:"Optionally, you can provide instructions for your labelers to help them with the labeling task."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(22482).A+"",width:"1881",height:"312"})}),"\n",(0,a.jsx)(t.h2,{id:"step-9-configure-advanced-settings",children:"Step 9: Configure Advanced Settings"}),"\n",(0,a.jsxs)(t.p,{children:["You can optionally expand the ",(0,a.jsx)(t.strong,{children:"Advanced Settings"})," section to configure additional options for the labeling task."]}),"\n",(0,a.jsx)(t.p,{children:"Within the settings, you can assign one of the following priority levels:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Low"})," \u2014 The task is of low priority."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Medium (default)"})," \u2014 The task is of medium priority."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"High"})," \u2014 The task is of high priority."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(24986).A+"",width:"1729",height:"373"})}),"\n",(0,a.jsx)(t.h2,{id:"step-10-create-labeling-task",children:"Step 10: Create Labeling Task"}),"\n",(0,a.jsxs)(t.p,{children:["Click the ",(0,a.jsx)(t.strong,{children:"Create Labeling Task"})," button to create the labeling task. Or, click the ",(0,a.jsx)(t.strong,{children:"Cancel"})," button to cancel the process."]}),"\n",(0,a.jsxs)(t.p,{children:["You\u2019ll be redirected to the ",(0,a.jsx)(t.strong,{children:"Labeling Tasks"})," page, where you can see the newly created task listed in a table."]}),"\n",(0,a.jsx)(t.p,{children:"For this example, you can see the two tasks we created listed in the table: one for manual labeling and another for AI-assisted labeling."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(79181).A+"",width:"1760",height:"513"})}),"\n",(0,a.jsx)(t.p,{children:'You can monitor the progress of the annotation in the "Labeling Status" column,  where the current status percentage will be displayed. Once the process is finished, the status will update to "Complete."'}),"\n",(0,a.jsx)(t.p,{children:"You can also view other details of the annotation exercise, including:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The reviewing status;"}),"\n",(0,a.jsx)(t.li,{children:"The dataset used;"}),"\n",(0,a.jsx)(t.li,{children:"Priority level for the task;"}),"\n",(0,a.jsx)(t.li,{children:"The concepts applied;"}),"\n",(0,a.jsx)(t.li,{children:"The labelers involved."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"If you click the ellipsis icon at the end of the row for your selected task, a drop-down menu will appear. This menu allows you to perform various task management activities, such as:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Copying the task ID;"}),"\n",(0,a.jsx)(t.li,{children:"Creating a new dataset version;"}),"\n",(0,a.jsx)(t.li,{children:"Editing the task;"}),"\n",(0,a.jsx)(t.li,{children:"Deleting the task."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"step-11-start-labeling",children:"Step 11: Start Labeling"}),"\n",(0,a.jsxs)(t.p,{children:["To start labeling your inputs, click the ",(0,a.jsx)(t.strong,{children:"Label"})," button on the ",(0,a.jsx)(t.strong,{children:"Labeling Tasks"})," page."]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["After completing the labeling process, the ",(0,a.jsx)(t.strong,{children:"Label"})," button will become inactive, preventing further clicks."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["After labeling the inputs, the ",(0,a.jsx)(t.strong,{children:"Review"})," button will become active, allowing you to click it to proceed with reviewing."]}),"\n"]}),"\n"]})}),"\n",(0,a.jsxs)(t.p,{children:["You'll be redirected to the ",(0,a.jsx)(t.strong,{children:"Labeling Tasks"})," tool, where you can begin annotating your inputs."]}),"\n",(0,a.jsx)(t.p,{children:"If you enabled AI-assist when you created a new labeling task, you'll notice that capability enabled in the tool."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(62761).A+"",width:"1886",height:"814"})}),"\n",(0,a.jsx)(t.p,{children:"If you did not enable AI-assist, you'll be able to label the inputs manually."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(91584).A+"",width:"1887",height:"819"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://docs.clarifai.com/portal-guide/annotate/labeling-tools/#detection-labeling",children:"Click here"})," to learn how to use the ",(0,a.jsx)(t.strong,{children:"Labeling Tasks"})," tool to add bounding box annotations to your batch of inputs."]}),"\n",(0,a.jsx)(t.h2,{id:"step-12-start-reviewing",children:"Step 12: Start Reviewing"}),"\n",(0,a.jsxs)(t.p,{children:["To start reviewing your inputs, click the ",(0,a.jsx)(t.strong,{children:"Review"})," button on the ",(0,a.jsx)(t.strong,{children:"Labeling Tasks"})," page."]}),"\n",(0,a.jsx)(t.p,{children:"You\u2019ll be redirected to the tasks reviewing page, where you can start reviewing the annotations for quality control purposes."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(66732).A+"",width:"1891",height:"910"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://docs.clarifai.com/portal-guide/annotate/review",children:"Click here"})," to learn how to review the annotations created manually or with AI assistance."]}),"\n",(0,a.jsx)(t.admonition,{title:"info",type:"tip",children:(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://docs.clarifai.com/portal-guide/clarifai-organizations/members-teams",children:"Members of an organization"})," can create new labeling tasks and utilize the Labeling Tasks tool. They can add collaborators who already exist within the app as well as other organization members. These can be assigned roles as either task workers or task reviewers. Furthermore, there are convenient options available for quickly adding all collaborators or all organization members."]}),"\n",(0,a.jsxs)(t.li,{children:["Similarly, ",(0,a.jsx)(t.a,{href:"https://docs.clarifai.com/clarifai-basics/applications/collaboration",children:"app collaborators"})," can also create labeling tasks and assign them to other collaborators who already exist within the app."]}),"\n"]})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},14569:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/task_1-fbfbbab4e9f3bc0577909c0f60d5b0bb.png"},79181:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/task_10-f3ced7c71721b1a5745080247e363676.png"},95121:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/task_11-2-5b4d180c2de2b1da02e5866443c03dd5.png"},36676:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/task_11-e732f58fb092dfd36bb73666e455f6a4.png"},88502:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/task_13-5257d801a5bb4f602f8b5230dc52e4e6.png"},62761:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/task_14-40c2abb1f629b9d145e125cc1291a5f4.png"},91584:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/task_15-794c59033daee424e001a4825c2d4d83.png"},97618:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/task_17-28f59c5c4375fdd5b017d618fab2eb84.png"},49621:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/task_18-d07a9c8cccdd332780226d31d4b65c34.png"},66732:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/task_19-99036b9c2e009d1e13c6dd48f764b22d.png"},29545:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/task_1_1-ce0c14978fd5aec69b471adcd4d176ae.png"},22482:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/task_1_2-bde83f7b650bfd21306aa045cc861781.png"},55153:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/task_21-72d562c81c0604c7abcaf7a2cbf05253.png"},24986:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/task_22-4de3c9668cf06b302a6622299e703548.png"},10010:(e,t,n)=>{n.d(t,{A:()=>a});const a="data:image/png;base64,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"},4836:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/task_4-9cedeebf61a21c9ecafc4890a20d88d9.png"},30989:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/task_5-f154d3310978d429752e391231c2aab1.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var a=n(96540);const s={},i=a.createContext(s);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);