---
description: Label multiple inputs at once
sidebar_position: 3
---

# Bulk Labeling

**Label multiple inputs at once**
<hr />

Clarifai provides a number of convenient ways to label multiple inputs at once in data mode.

## Bulk Labeling at Upload Time

You can label your inputs as they are uploaded with bulk labeling at upload time. To do so, head to your application's individual page and select the **Inputs** option on the collapsible left sidebar.

You'll be redirected to the inputs manager page, which is the main page showcasing all the inputs in your app. Click the **Upload Inputs** button at the upper-right corner of the page.

The inputs uploader window that pops up lets you upload inputs to your application—either by uploading them directly from your local device or by providing publicly accessible URLs. 

![](/img/others/bulk_labeling_1.png)

Click the **Show Upload Settings** button to expose a section that allows you to add concepts with your inputs. 

![](/img/others/bulk_labeling_2.png)

You can select or add the concepts you want to upload with your inputs in the **Concepts** field. If there are concepts you've already added to your app, you can select them. 

If you want to create and add a new concept, click the plus sign (**+**) next to the  **Concepts** field. Then, type the new concept name in the field.

The new name you've typed will appear underneath the search field. Click the **Add new concept** button to create the concept, and it will be successfully added to your app.

Finally, click the **Upload inputs** button at the bottom of the pop-up window to bulk upload your multiple inputs while attaching label(s) to them. 

## Bulk Labeling

After uploading inputs, you can easily add labels to them within the inputs manager page.

To label your inputs from there, start by selecting the inputs you like to label by clicking the checkmark at the upper-left corner of each image. You can even select multiple inputs by holding down the "shift" key.

Next, click the **Label as…** button that appears at the bottom section of the page.

![](/img/others/bulk_labeling_3.png)

The small window that pops up allows you to label the selected inputs with concept(s). 

![](/img/others/bulk_labeling_4.png)

Select the **Add** option, which lets you add labels to your inputs (the option is selected by default).

Next, select or add the concepts you want to label with your inputs in the **Concepts** field. If there are concepts you've already added to your app, you can select them. As described earlier, you can also create and add new concepts. 

:::tip

If you select the **Apply to all search results** button, all the inputs that are visually similar to the ones you've selected initially will also be labeled. This lets you label your inputs easily and quickly in bulk.

:::

Finally, click the **Add to inputs** button at the bottom of the pop-up window to complete bulk labeling your inputs.

## Bulk Add Metadata

Metadata gives more information about each input. You can add them to inputs in bulk.

To add the same metadata to multiple inputs, click the **Edit Metadata** button at the bottom of the inputs manager page. As mentioned earlier, the button appears after selecting inputs by clicking the checkmark at the upper-left corner of each of them.

![](/img/others/bulk_labeling_5.png)

The small window that pops up allows you to add metadata information to all your selected inputs. 

![](/img/others/bulk_labeling_6.png)

Select the **Add** option, which lets you add metadata to your inputs (the option is selected by default).

:::tip

If you select the **Apply to all search results** button, all the inputs that are visually similar to the ones you've selected initially will also be labeled with the metadata information. This lets you label your inputs with metadata easily and quickly in bulk.

:::

Next, add the metadata you want to label with your inputs in the **Metadata** field. You need to add the metadata as a valid JSON object. 

Finally, click the **Add to inputs** button at the bottom of the pop-up window to complete bulk labeling your inputs with the metadata information.

:::note

As demonstrated earlier, you can also add metadata information in bulk via the uploader pop-up window when uploading inputs to your application. 

:::

## Bulk Add Geodata

You can "Add geodata to selected."

![patch geodata](/img/patchGeoDataGridview.jpg)

Once labeled with geodata, you can view your input on the world map under the righthand tab called "Geographical Data."

![geodata tab](/img/geoDataTab.jpg)

