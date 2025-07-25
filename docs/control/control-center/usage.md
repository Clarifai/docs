---
description: Get detailed insights into your consumption of the Clarifai platform
sidebar_position: 2
---

# Usage & Operations Tab

**Get detailed insights into your consumption of the Clarifai platform**
<hr />

The Usage & Operations tab provides detailed insights into your consumption of the Clarifai platform. It offers metrics, charts, and reports that allow you to monitor usage patterns, track performance, and optimize resource allocation. 

To access it, go to the Control Center and select the **Usage & Operations** tab in the collapsible left sidebar. 

![](/img/community/control-center/control_center_6.png)

:::note date range selection

You can use the date range control in the upper-right corner of the page to filter and view data for specific time periods. After selecting a date range, the output of the page will be based on the selected period. You can learn more about the feature [here](overview.md#date-range-selection).

:::

## Overview

The overview section of the Usage & Operations page gives you a quick analysis of how you used the Clarifai platform during the selected period. 

It tells you:

- The total compute time for your [Compute Orchestration](https://docs.clarifai.com/compute/overview) tasks (in hours)
- The total number of model predictions you’ve made
- The total number of search operations you’ve made
- The average number of inputs you’ve added and stored in the platform
- The total training hours of your [transfer learning](https://docs.clarifai.com/portal-guide/model/model-types/transfer-learning) models
- The total training hours of your [deep training](https://docs.clarifai.com/portal-guide/model/deep-training/) models

Let’s talk about the different elements of the page.

## Common Chart Features

The Usage & Operations page has several charts that help you visualize your utilization of our platform during a selected period. 

Let’s talk about some functionalities that are common across the charts.

![](/img/community/control-center/control_center_7_1.png)

- **Drag charts** — You can easily drag a chart up and down within the page by clicking and holding the dots in its upper-left corner. This allows you to customize the layout and manage the charts that appear on the page. 

- **Pin icon** — The pin icon allows you to "pin" or "save" charts for quick access. If you click it, the chart will be displayed in the [Overview](overview.md) section within the Control Center. This ensures that it remains easily accessible in the Control Center. If the pin icon is highlighted in the Usage & Operations page, it indicates that the respective chart has already been saved to the Overview section.

- **Change chart display** — You can choose to display the type of chart you want by clicking its icon in the upper-right corner —  a bar chart, a line graph, a donut chart, or any other chart available.

- **Tooltip** — If you hover over a chart, a tooltip is displayed, which shows the exact number of different actions performed for that particular date. In the tooltip, the type of action that is currently hovered over is highlighted, allowing you to easily identify which item is in focus. 

- **Color-coding** — Each type of task in the charts within the page is represented by its own distinct color. This color-coding provides a clear visual distinction between the types of activities, making it easier for users to track and compare their trends across the displayed dates.

- **Timestamp** — A **Last updated** label appears at the bottom-left corner of each chart, indicating when the displayed metrics were last refreshed.

- **Cross-navigation links** — The charts in the Usage & Operations tab are linked to related charts in the [Costs & Budget tab](costs.md), and vice versa. These cross-navigation links allow you to seamlessly explore related insights. For example, the Total Number of Operations chart includes a link in the lower-right corner that directs you to the corresponding Cost of Operations chart.

### View Report Details

If you click the **View Report Details** button in the lower-right corner of a chart, you’ll be redirected to a detailed report page. This page provides a comprehensive breakdown of each type of action. 

The chart in the detailed report page displays all the activities performed, plotted against specific dates. If you want to focus on a particular activity, simply click the block at the top showing its corresponding number. This action will filter the chart to display only the selected activity.

The table on the page includes the date each activity was performed. Additionally, you can sort the items in the table for easier navigation. 

![](/img/community/control-center/control_center_9.png)

After viewing the detailed report, you can go back to the Usage & Operations page by clicking the **Back** button in the upper-left corner. 

## Total Number of Operations

This section shows the total number of operations you've performed, along with the daily average, during the selected time period. It includes both model predictions and search operations.

A stacked bar chart (displayed by default) or a line graph shows the number of each type of operation plotted against specific dates. 

Here is a line graph:

![](/img/community/control-center/control_center_7.png)

## Model Training Hours

This section displays the total hours spent training your models, along with the daily average, for the selected time period. It breaks the hours down by [transfer learning](https://docs.clarifai.com/portal-guide/model/model-types/transfer-learning) models and [deep training](https://docs.clarifai.com/portal-guide/model/deep-training/) models.

A stacked bar chart (displayed by default) or a line graph shows the number of training hours for each type of model plotted against specific dates. 

Here is a bar chart:

![](/img/community/control-center/control_center_10.png)

Here is a line graph:

![](/img/community/control-center/control_center_10_1.png)

## Total Inputs Stored 

This section displays the number of inputs you’ve added and stored in the Clarifai platform for the selected time period. The average number of stored inputs across the time period is displayed in the top section. 

A bar chart (displayed by default) or a line graph shows the number of inputs plotted against specific dates. 

Here is a bar chart:

![](/img/community/control-center/control_center_13.png)

Here is a line graph:

![](/img/community/control-center/control_center_14.png)

## Total Model Predictions by Type

This section displays the total number of model predictions, and the daily average, for the selected time period. It shows the predictions by [model type](https://docs.clarifai.com/create/models/#model-types). 

A bar chart (displayed by default) shows the type of models plotted against the number of predictions. In a donut chart, the number of model predictions is visualized and grouped by type.

Here is a bar chart:

![](/img/community/control-center/control_center_16.png)

Here is a donut chart:

![](/img/community/control-center/control_center_17.png)

## Total Model Predictions by ID

This section displays the total number of model predictions, and the daily average, for the selected time period. It shows the predictions by unique model ID.

A bar chart (displayed by default) shows the ID of models plotted against the number of predictions. In a donut chart, the number of model predictions is visualized and grouped by type.

Here is a bar chart:

![](/img/community/control-center/control_center_19.png)

Here is a donut chart:

![](/img/community/control-center/control_center_20.png)

## Model Predictions by Type and Date

This section displays the total number of model predictions, and the daily average, for the selected time period. It shows the predictions by model type and date.

A stacked bar chart (displayed by default) or a line graph shows the number of predictions by model type plotted against specific dates. 

Here is a bar chart:

![](/img/community/control-center/control_center_22.png)

Here is a line chart:

![](/img/community/control-center/control_center_23.png)

## Model Predictions by ID and Date

This section displays the total number of model predictions, and the daily average, for the selected time period. It shows the predictions by model ID and date.

A stacked bar chart (displayed by default) or a line graph shows the number of predictions by model ID plotted against specific dates. 

Here is a bar chart:

![](/img/community/control-center/control_center_25.png)

Here is a line chart:

![](/img/community/control-center/control_center_26.png)

## Compute Time by Instance and Date

This section shows both the total and average compute time consumed by each [instance type](https://docs.clarifai.com/compute/deployments/cloud-instances) over the selected time period. 

A stacked bar chart (displayed by default) or a line graph shows the number of compute hours per instance type across specific dates.

Here is a bar chart:

![](/img/community/control-center/control_center_27.png)

Here is a line chart:

![](/img/community/control-center/control_center_28.png)
