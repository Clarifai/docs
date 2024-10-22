---
description: Reduce noise by filtering out unwanted data
pagination_next: null
sidebar_position: 5
---

# Filter

**Reduce noise by filtering out unwanted data**
<hr />

You can use the **Input Filters** section on the Input-Manager screen to customize how inputs are displayed. By default, inputs are sorted by creation date, with the newest at the top. 

You can filter inputs by dataset, labels, type, or metadata. You can also combine multiple filter parameters to expand your search criteria and get more refined results. 

## Filter by Datasets

You can filter the display of inputs based on their datasets. To do so, identify the dataset you want to display inputs for and click the checkbox next to it.

Note that the number of inputs matching your criteria will be displayed at the top of the display area.

![](/img/smart-search/search_24.png)

If you want to filter out inputs that do not belong to a specific dataset, select the dataset and hover over it. Double arrows will appear with a tooltip: `Filter for inputs that do NOT match this value.` Click the double arrows to apply the negative filter. You’ll notice that the word **NOT** will be added next to the dataset's name, and the filter results will be populated on the page.

Additionally, you can use the "Unassigned" parameter to filter all inputs that have not been assigned to any dataset.

:::tip

To reset any applied filters, click the **Clear** button that appears after applying the filters.

:::

## Filter by Labels

You can filter the display of inputs based on their labeled concepts. To do so, identify the concept you want to display inputs for and click the checkbox next to it.

You can also filter out inputs that do not belong to a specific concept. Start by selecting the label and hovering over it. Double arrows will appear with a tooltip: `Filter for inputs that do NOT match this value.` Click the double arrows to apply the negative filter. You’ll notice that the word **NOT** will be added next to the concept’s name, and the filter results will be populated on the page.

Additionally, you can use the "Unlabeled" parameter to filter all inputs that have not been annotated with any concept.

![](/img/smart-search/search_25.png)

You can also click the ellipsis next to the **Labels** section to reveal additional options for filtering the display of your inputs. 

You can filter the display by these parameters:

- **Operator** — You can specify either the `or` (default) or `and` operator to determine how this filter should be applied when multiple values are selected. 

    - Choosing `or` will filter for inputs that match _any_ of the selected values.
    - Choosing `and` will return only the inputs that match _all_ the selected values.

    Note that this setting does not affect how negated values are interpreted. Inputs matching any negated selections are always removed after those matching the positively selected values have been identified.

-	**[Labeler](https://docs.clarifai.com/portal-guide/annotate/create-a-task/#step-6-add-collaborators)** —  You can filter the display by the labeler who annotated the inputs. By default, inputs from all labelers are shown. 

-	**[Status](https://docs.clarifai.com/api-guide/advanced-topics/status-codes/#annotation-related-codes-24xxx)** — You can filter the display based on the status of the annotation exercise. The available options are `Success` (default), `Awaiting Review`, `Awaiting Consensus Review`, or `Pending`. 

## Filter by Input Type

You can filter the display of inputs based on their types — audio, image, text, and video. 

![](/img/smart-search/search_26.png)

## Filter by Metadata

You can filter the display of inputs based on their custom metadata. Note that the metadata should be a valid JSON object. 

Metadata are additional pieces of information you attach to your inputs when uploading them to the Clarifai platform. This can include product IDs, user IDs, or any other relevant details necessary for achieving specific business outcomes. You can use metadata to quickly filter your data and combine it with other ranking criteria.

![](/img/smart-search/search_27.png)
