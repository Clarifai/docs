---
description: Learn about our edit operators
sidebar_position: 3
---

# Edit
**Learn about our edit operators**
<hr />

Edit operators are specific type of agent system operators that are specialized for data transformation tasks. These operators are responsible for modifying and/or augmenting your data as it passes through the workflow.

They can be used to crop out regions of an image, align an image based on the pose of a face, or even map predictions from one model to another.

### Common Characteristics

- **Purpose**: Designed to manipulate and prepare images for enhanced analysis or visual presentation.

- **Configurability**: Users can configure each operator with specific parameters to adjust the image processing according to the needs of their application, making these tools versatile across different scenarios.

- **Enhanced Workflow Efficiency**: By modifying images as per specified requirements early in the process, these operators streamline the workflow, reducing the workload and computational requirements of downstream processes.

:::tip

Since the transform operators can be "chained" together with models to automate tasks in a workflow, you can learn how to create workflows [here](https://docs.clarifai.com/portal-guide/workflows/working-with-workflows##step-2-create-a-new-workflow). 

:::

## Image Cropper
**Input:** `image`, `regions`

**Output:** `regions[...].data.image`

The Image Cropper model crops input images based on regions specified either in the workflow or detected by a preceding model, making it particularly useful in workflows where precise image manipulation is required. 

This model works seamlessly across different types of visual inputs. It is designed to ensure that only the specified regions of an image are retained for further processing, enhancing both the accuracy and relevance of the results. The cropper can look back along the workflow to find the input image if the preceding model does not output an image itself, allowing for a streamlined process in image-based workflows.

**Example Scenario:**

- **Region of Interest:** "Face"
- **Margin Setting:** 10 pixels
- **Operation:** If a face is detected in an image, the cropper will extract this region with a 10-pixel margin around it. If no face is detected, the image may either be passed as is or not included in the output, depending on configuration.

### Workflow Integration and Setup

1. Go to the workflow builder page. Search for the visual-detector option in the left-hand sidebar and drag it onto the empty workspace. This model will detect the regions to be cropped.

2. Search for the Image Cropper option in the left-hand sidebar and drag it onto the workspace. Use the pop-up that appears on the right-hand sidebar to configure the margin and other settings.

3. Set up its output configuration on the below-given parameter:

- **Margin:** Adjust the slider to set the desired margin around the cropped areas.

1. Connect the region detection model (such as a face detector or general object detector) with the Image Cropper operator and configure the workflow.

![Image Cropper Setup](<../../../static/img/agent-system-operators/Image Cropper Setup.png>)

To see it in action, upload the inputs from your local device or use the inputs in the app. As soon as you upload inputs where regions are detected, the workflow will execute and output the cropped images based on the configurations done.

![alt text](<../../../static/img/agent-system-operators/Image Cropper Output.png>)

## Image Tiler

**Input:** `image`

**Output:** `regions[...].data.image`, `regions|[...].region_info.bounding_box`

The Image Tiler model divides input images into multiple equal-sized tiles. This operator is essential in workflows where large images need to be broken down into smaller, more manageable segments for detailed analysis or parallel processing.

This model effectively handles visual inputs by splitting them into uniformly sized tiles. It ensures that detailed analyses can be performed on each segment without the computational burden of processing large images in their entirety. The tiler is configurable to adapt to various sizes and formats of images, making it versatile for different application needs.

**Example Scenario:**

- **Tile Size:** 512x512 pixels
- **Max Object Size:** 120 pixels
- **Operation:** An aerial photograph will be tiled into 512x512 pixel segments, ensuring that any object smaller than 120 pixels remains within a single tile to facilitate accurate analysis.

### Workflow Integration and Setup

Workflow Integration and Setup

1. Go to the workflow builder page. From the tool palette on the left-hand sidebar, select the Image Tiler option.

2. Drag the Image Tiler onto the workspace and use the configuration options in the right-hand sidebar to set the tile size and max object size.

3. Set up its output configuration on the below-given parameters:

  - **Tile Size:** Specify the size for each tile.
  - **Max Object Size:** Set the maximum size for objects that should not be split across tiles.

1. Save your workflow. No need to connect it to other models unless specific regions within tiles need further analysis or processing.

![alt text](<../../../static/img/agent-system-operators/Image TIler Setup.png>)

To see it in action, upload the inputs from your local device or use the inputs in the app. As soon as you upload inputs, the workflow will execute, and you will see the images split into the specified tile sizes. This tiling is crucial for handling large-scale images efficiently.

![alt text](<../../../static/img/agent-system-operators/Image Tiler Output.png>)