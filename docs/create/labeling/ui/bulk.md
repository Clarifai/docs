---
description: Label multiple inputs at once
sidebar_position: 2
pagination_next: null
---

# Bulk Labeling

**Label multiple inputs at once**
<hr />

Clarifai offers several convenient methods to label multiple inputs simultaneously, helping you save time and streamline your annotation process. 

Whether you're managing a large dataset or need to apply consistent labels across multiple inputs, the platform provides tools designed for efficiency and accuracy.

:::note

The examples provided here demonstrate how to perform bulk labeling for visual classification tasks. However, these methods can also be applied to bulk label other types of machine learning tasks, such as text classification tasks.

:::

## Bulk Label at Upload Time

You can label all your inputs as you upload them to the Clarifai platform. To do so, go to the Inputs-Manager and click the **Upload Inputs** button located in the upper-right corner of the page.

The [inputs uploader window](https://docs.clarifai.com/portal-guide/inputs-manager/upload-inputs) that pops up allows you to upload any type of data supported by the Clarifai platform.

Next, use the **Concepts** section to select or add the [**concept(s)**](https://docs.clarifai.com/portal-guide/inputs-manager/concepts) you want to label your inputs with. If the concept already exists in your app, you can select it from the dropdown menu.

![](/img/others/bulk_labeling_1.png)

If you want to add a new concept, click the plus sign (**+**) next to the  **Select or add concepts** field. Then, type the new concept name in the field.

Once the new name appears below the search field, click the **Add new concept** button to create the concept. The new concept will be added to your app and attached as a label to your inputs.

![](/img/others/bulk_labeling_2.png)

Finally, click the **Upload inputs** button at the bottom of the uploader window to upload your inputs in bulk, complete with the assigned labels.

## Bulk Label Uploaded Inputs

After uploading your inputs, you can quickly add labels directly from the Inputs-Manager page.

To bulk label inputs, simply hover over the desired items and click the checkmark in the upper-left corner of each.

:::tip multi-select feature

- **Mouse click:** Selects a single item or input.
- **Shift + mouse click:** Selects a range of inputs between the first and last clicked item.

:::

Next, click the **Label as…** button that appears at the bottom of the page.

![](/img/others/bulk_labeling_3.png)

The small window that pops up allows you to label the selected inputs with the chosen concept(s). Ensure the **Add** option is selected (this is the default). This option lets you add labels to your inputs. 

:::tip

Optionally, you can select the **Apply to all search results** checkbox to label all inputs visually similar to the ones you initially selected. This is a quick way to apply bulk labeling. 

:::

Next, select or add the concepts you want to label with your inputs in the **Concepts** section. If your app already has existing concepts, you can select them from the dropdown menu; otherwise, add them as described earlier. 

![](/img/others/bulk_labeling_4.png)

Finally, click the **Add to inputs** button at the bottom of the uploader window to complete bulk labeling your inputs.

## Bulk Label Using Smart Search

You can leverage Clarifai’s Smart Search capabilities to efficiently label large batches of inputs. For example, you can use the visual similarity search feature to identify and label similar images in bulk.

To start a visual similarity search, hover over an image input and click the magnifying glass icon that appears on its left. 

![](/img/others/bulk_labeling_7.png)

A thumbnail of the image will be added to the search bar, and your results will be displayed in ranked order, from most to least visually similar.

![](/img/others/bulk_labeling_8.png)

Once the results are displayed, you can quickly annotate the visually similar inputs with the same concept(s), as illustrated previously.

[Click here](https://docs.clarifai.com/portal-guide/psearch/) to learn more about Clarifai’s Smart Search capabilities. 

## Bulk Add Metadata

Metadata provides additional information about each input. 

To add the same metadata to multiple inputs, start by hovering over the desired items and clicking the checkmark in the upper-left corner of each. Then, click the **Edit Metadata** button that appears at the bottom of the page.

![](/img/others/bulk_labeling_5.png)

A small window will pop up, allowing you to add metadata to all the selected inputs.

![](/img/others/bulk_labeling_6.png)

Ensure the **Add** option is selected (this is the default). Next, add the metadata you want to label with your inputs in the **Metadata** field. You need to add the metadata as a valid JSON object. 

Finally, click the **Add to inputs** button at the bottom of the pop-up window to complete bulk labeling your inputs with the metadata information.

:::info

As demonstrated earlier, you can also add metadata information in bulk via the inputs uploader pop-up window when uploading inputs to your application. 

:::

<!--
## Bulk Add Geodata

You can "Add geodata to selected."

![patch geodata](/img/patchGeoDataGridview.jpg)

Once labeled with geodata, you can view your input on the world map under the righthand tab called "Geographical Data."

![geodata tab](/img/geoDataTab.jpg)

-->