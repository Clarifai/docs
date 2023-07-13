---
description: Learn about changes to PostModelOutputs and PostWorkflowResults responses
# For positioning, we use negative position so that the oldest announcements are displayed at the bottom. Any time you add a new announcement, increase the position by -1.
sidebar_position: -2
---

# Changes to PostModelOutputs and PostWorkflowResults Responses

**Learn about changes to PostModelOutputs and PostWorkflowResults responses**
<hr />

## Date

January 4th, 2023

## Change

Exclusion of some fields from **PostModelOutputs** and **PostWorkflowResults** prediction responses

## Details

When using the **PostModelOutputs** endpoint or the **PostWorkflowResults** endpoint to make a prediction call, the entire model information, including all hyperparameters, is included for each output in the response. This is extremely verbose and also unnecessary, as the same information appears repeatedly throughout the response. It also impacts network usage, ease of viewing and processing the results and debugging by the user, and other performances.

Model description, notes, and related model info fields are to be excluded from **PostModelOutputs** and **PostWorkflowResults** prediction responses. The model and model version ids are still available in the responses. If you need more model info than that available from any of the responses, you can look up the info by model id using the **GetModel** endpoint.