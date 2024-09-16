---
description: Learn about our aggregate operators
sidebar_position: 5
---

# Aggregate

**Learn about our aggregate operators**
<hr />

Aggregate operators are designed to process and synthesize data across multiple regions of an image or multiple frames in a video sequence. These operators are crucial for applications requiring consolidated information from dispersed data points, such as object counting or text aggregation within images.


### **Features**



* **Enhanced Data Synthesis**: Aggregate operators combine data from multiple inputs to produce a coherent output, simplifying further analysis.
* **Customizable Workflows**: Easily integrated into custom workflows, these operators allow flexible configurations to suit varied use cases.


## Text Aggregation Operator
**Input**: `regions[…].data.text`

**Output**: `text`

The Text Aggregation Operator consolidates detected text elements within an image, organizing them into a coherent body of text. This operator is especially beneficial in workflows that process documents or extract readable information from various visual media formats.

This model arranges text detections spatially from left to right and then from top to bottom, mimicking the natural reading order. This functionality ensures the output text follows a logical sequence, increasing its usability for subsequent processing or analysis. The operator adjusts to the positional dynamics of text within the image, making it versatile across different types of textual content.


### **Example Scenario:**

**Text** **Blocks**: Multiple addresses on a package 

**Sorting** **Order**: Left to right, top to bottom 

**Operation**: The operator organizes the detected addresses into a sequence replicating the text's layout as it appears on the package.


### **Workflow Integration and Setup**

Let's demonstrate how you can use the Text Aggregator alongside an OCR operator. This is because the OCR operator identifies regions with text and provides the text read with a score. The text aggregator then uses that output as input.



1. Go to the workflow builder page. Search for the OCR operator in the left-hand sidebar and drag it onto the empty workspace. Then, select a model from the pop-up on the right-hand sidebar.
2. Search for the Text Aggregation operator in the left-hand sidebar, drag it onto the workspace, and set up its output configuration based on the requirements. 
1. Connect the OCR  with the Text Aggregator and save the workflow.

![alt text](<../../../static/img/agent-system-operators/TA 1.png>)


To see it in action, upload the inputs from your local device or use the inputs in the app. When you upload inputs, the workflow will give the output based on the configurations done. 


![alt text](<../../../static/img/agent-system-operators/TA 2.png>)


## Object Counter

**Input**: `regions[…].data.concepts`

**Output**: `metadata`

The Object Counter operator is tailored to quantify objects within images or video frames based on specific concepts. This operator is instrumental in environments where accurate object tracking and counting are required across successive frames, such as in surveillance, traffic monitoring, and automated inventory systems.

This model excels in recognizing and counting occurrences of predefined concepts within the designated regions of interest, frame by frame. By leveraging advanced detection algorithms, the Object Counter ensures precise counts, enhancing data analysis and decision-making processes in real-time applications.


### **Example Scenario:**

**Object of Interest**: "Vehicle" 

**Operation**: The operator counts the number of vehicles across video frames, providing real-time data essential for traffic flow analysis.


### **Object Counter Setup**

Let's demonstrate how you can use the Object Counter alongside a [Visual Detector](https://docs.clarifai.com/portal-guide/model/model-types/visual-detector). The reason behind this is that the Visual Detector identifies regions and provides the confidence scores that the Object Counter uses to count the regions effectively. Without the Visual Detector, the Object Counter would lack the necessary data to perform its counting function.



1. Go to the workflow builder page. Search for the visual-detector option in the left-hand sidebar and drag it onto the empty workspace. Then, use the pop-up that appears on the right-hand sidebar to search for a detection model, such as [general-image-detection](https://clarifai.com/clarifai/main/models/general-image-detection). 
2. Search for the Object Counter option in the left-hand sidebar and drag it onto the workspace. 
1. Connect the Visual Detector with the Object Counter operator and save your workflow.


![alt text](<../../../static/img/agent-system-operators/OC 1.png>)

1. To see it in action, upload the inputs from your local device or use the inputs in the app. When you upload inputs, the workflow will give the output based on the configurations done. For this example, [this](https://samples.clarifai.com/05/26/e0/d96cab4e0cb85c430f2ef763b3.jpg) image is used.


![alt text](<../../../static/img/agent-system-operators/OC 2.png>)

To ensure accurate counting, the Visual Detector identifies the regions of interest and assigns confidence scores to them, which the Object Counter then uses to perform the counting function. However, due to the complex nature of this operation, the workflow's output is not supported directly in the web viewer. Users must access the detailed results in a JSON format to review the count and other metadata effectively. This approach guarantees precise data interpretation and enhances decision-making processes. \
 \
JSON for the above output is given below, and at the end, the "**object_count": 8** is given.


```json
{
  "json": {
    "id": "6ef88a0a76c94da6a02c8ea58feb13d5",
    "status": {
      "code": 10000,
      "description": "Ok"
    },
    "created_at": "2024-09-04T00:28:29.404495670Z",
    "model": {
      "id": "workflow-model-61fd-d06227acd7d1",
      "name": "workflow-model-61fd-d06227acd7d1",
      "created_at": "2024-09-04T00:28:26.852951Z",
      "modified_at": "2024-09-04T00:28:26.852951Z",
      "app_id": "Text-Generator",
      "model_version": {
        "id": "fd2bdda515164775bbbd1b24a2d620a6",
        "created_at": "2024-09-04T00:28:27.141447Z",
        "status": {
          "code": 21100,
          "description": "Model is trained and ready for deployment"
        },
        "visibility": {
          "gettable": 10
        },
        "app_id": "Text-Generator",
        "user_id": "mohit01",
        "metadata": {},
        "inference_compute_info": {}
      },
      "user_id": "mohit01",
      "model_type_id": "object-counter",
      "visibility": {
        "gettable": 10
      },
      "toolkits": [],
      "use_cases": [],
      "languages": [],
      "languages_full": [],
      "check_consents": [],
      "workflow_recommended": false
    },
    "data": {
      "metadata": {
        "object_count": 8
      }
    }
  }
}
```
