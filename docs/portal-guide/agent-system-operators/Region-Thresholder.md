# Region Thresholder

The Region Thresholder node or operator is designed to filter image regions based on the confidence scores assigned to detected concepts and works in conjunction with the visual detection node.

It ensures that only regions meeting specific confidence criteria are passed on for further processing, thereby enhancing the accuracy and relevance of the workflow results.** **It uses a thresholding mechanism to filter out regions according to threshold criteria set by the user, Ensuring that only regions with required scores are considered for further analysis.


## Threshold Mechanism:



* **Threshold Type:** The threshold can be set using various operators such as >, >=, =, &lt;=, or &lt;.
* **Per Concept Thresholding:** For each concept detected in a region, the confidence score is compared to the specified threshold or threshold criteria set by the user. For example, if the threshold type is >, then only regions with a concept's confidence score greater than the threshold will be passed on.
* **Overall Region Filtering:** If all concepts within a region are filtered out (i.e., none meet the threshold criteria), the entire region is removed from the output.


### Example Scenario:



* **Concept:** "Laptop"
* **Threshold Type:** >
* **Threshold Value:** 0.8
* **Operation:** If the confidence score of "Laptop" in a detected region is greater than 0.8, that region is passed through. Otherwise, it is filtered out.

Now that the theory of how Region Thresholder Functions is established, let’s understand the Region Thresholder by creating an app, setting up a workflow with this node, and testing it to deepen our understanding.


## How to Create a Region Thresholder


### 1. Create a New Application

Follow this [guide](https://docs.clarifai.com/clarifai-basics/applications/create-an-application/) to create an application in a few simple steps. Upload Inputs and Concepts in it.

![alt text](<../../../static/img/Workflow Folder/Create-app-upload-inputs.png>)

Now, follow this [guide](https://docs.clarifai.com/portal-guide/workflows/setting-up-a-mesh-workflow/#workflow-setup) and create a workflow. Once it is created and user can start editing it as per the requirements using the plethora of Clarifai models available to use visible in the left menu by dragging them into the workspace and connecting & configuring them as per need to create the workflow.

 
To understand how Region thresholder works we have set up a flow that uses a visual detector model as well. The reason behind this is that the Visual Detector identifies regions and provides the confidence scores that the Thresholder uses to filter those regions effectively. Without the Visual Detector, the Region Thresholder would lack the necessary data to perform its filtering function.



### 2. Add Visual Detection Node

Drag and drop a visual detector node onto the workspace and connect it to the input data node. After connecting the input element, select the appropriate model for visual detection (e.g., Image Detection) and configure it.

![alt text](<../../../static/img/Workflow Folder/Visual-detector-node.png>)

### 3. Configure Region Thresholder Node

Drag and drop a region-thresholder node onto the workspace and Connect the visual-detector node to the region-thresholder node. Post connection click on the region-thresholder node to configure it.

![alt text](<../../../static/img/Workflow Folder/Region-thresholder-node.png>)

Select the concepts that we created in step 3 and Set the confidence threshold value.

Select the concept threshold type from the dropdown. These filters are critical in determining which concepts pass through based on their associated confidence scores. (>, >=, =, &lt;=, or &lt;) Here’s how each type of threshold filter functions within the region thresholder:


* <strong><code>GREATER_THAN</code></strong>: Allows concepts with confidence scores strictly higher than the threshold.
* <strong><code>GREATER_THAN_OR_EQUAL</code></strong>: Allows concepts with confidence scores equal to or higher than the threshold.
* <strong><code>LESS_THAN</code></strong>: Permits only concepts with confidence scores strictly below the threshold.
* <strong><code>LESS_THAN_OR_EQUAL</code></strong>: Permits concepts with confidence scores equal to or below the threshold.
* <strong><code>EQUAL</code></strong>: Allows only concepts with confidence scores exactly equal to the threshold.

Save the workflow.



### 4. Test the Workflow

Upload the Inputs from a local device or use the inputs in the app.  We will use Batch Predict as we have already uploaded inputs in step 3. As soon as the user uploads inputs, the workflow will give the output based on the configurations done.

![alt text](<../../../static/img/Workflow Folder/Region-thresholder-output.png>)

That’s it.