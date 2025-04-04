---
sidebar_position: 2
description: Learn how to perform Filter Search 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";


import CodeIT from "!!raw-loader!../../../code_snippets/python-sdk/Search/filters/fl_it.py";
import CodeITTS from "!!raw-loader!../../../code_snippets/python-sdk/Search/filters/filterWithInputType.ts";

import CodeMD from "!!raw-loader!../../../code_snippets/python-sdk/Search/filters/fl_md.py";
import CodeMDTS from "!!raw-loader!../../../code_snippets/python-sdk/Search/filters/filterWithMetadata.ts";


import CodeGP from "!!raw-loader!../../../code_snippets/python-sdk/Search/filters/fl_gp.py";
import CodeGPTS from "!!raw-loader!../../../code_snippets/python-sdk/Search/filters/filterWithGeoPoint.ts";


import CodeIS from "!!raw-loader!../../../code_snippets/python-sdk/Search/filters/fl_is.py";
import CodeISTS from "!!raw-loader!../../../code_snippets/python-sdk/Search/filters/filterWithInputStatusCode.ts";

import CodeData from "!!raw-loader!../../../code_snippets/python-sdk/Search/filters/fl_data.py";
import CodeDataTS from "!!raw-loader!../../../code_snippets/python-sdk/Search/filters/filterWithDatasetID.ts";

import CodeMM from "!!raw-loader!../../../code_snippets/python-sdk/Search/filters/fl_mm.py";
import CodeMMTS from "!!raw-loader!../../../code_snippets/python-sdk/Search/filters/multiModalFiltering.ts";


import CodeOutputIT from "!!raw-loader!../../../code_snippets/python-sdk/Search/outputs/filters/fl_it.txt";
import CodeOutputMD from "!!raw-loader!../../../code_snippets/python-sdk/Search/outputs/filters/fl_md.txt";
import CodeOutputGP from "!!raw-loader!../../../code_snippets/python-sdk/Search/outputs/filters/fl_gp.txt";
import CodeOutputIS from "!!raw-loader!../../../code_snippets/python-sdk/Search/outputs/filters/fl_is.txt";
import CodeOutputData from "!!raw-loader!../../../code_snippets/python-sdk/Search/outputs/filters/fl_data.txt";
import CodeOutputMM from "!!raw-loader!../../../code_snippets/python-sdk/Search/outputs/filters/fl_mm.txt";





# Filter

**Learn how to perform search with filters using Clarifai SDKs**
<hr />

The filter feature in Clarifai's search functionality allows users to narrow down search results based on specific criteria or conditions. Filters act as constraints that refine the set of results returned by a search query. Users can specify various filter parameters to tailor the search results to their needs. These parameters might include attributes such as input type, status code, metadata, or other properties associated with the data being searched.

Click [here](https://docs.clarifai.com/api-guide/search/filter) to know more about Filter.


##  Filter with Input Type

Filtering with input type in Clarifai enables users to narrow down search results based on the type of data input. For example, users can specify to only retrieve results that are of a particular input type, such as images, videos, or text. This functionality allows for more targeted searches, ensuring that search results align with the desired data format or content type.


<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeIT}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputIT}</CodeBlock>
    <img src="/img/python-sdk/fl_it.png" />
</details>
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeITTS}</CodeBlock>
</TabItem>
</Tabs>





## Filter with Metadata 
The filter feature in Clarifai's search functionality allows users to narrow down search results based on specific criteria or conditions. Filters act as constraints that refine the set of results returned by a search query. In the following example, we are showing the filter method with the use of metadata.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeMD}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputMD}</CodeBlock>
    <img src="/img/python-sdk/fl_md.png" />
</details>
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeMMTS}</CodeBlock>
</TabItem>
</Tabs>







## Filter with Geopoint

Filtering with geopoint in Clarifai allows users to refine search results based on geographic location data associated with the inputs. This feature enables users to specify geographical coordinates such as latitude and longitude to filter inputs that are within a certain proximity or region. By incorporating geopoint filters, users can perform location-based searches, facilitating tasks such as retrieving content relevant to specific geographic areas or analyzing data within a particular region.


<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeGP}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputGP}</CodeBlock>
    <img src="/img/python-sdk/fl_gp.png" />
</details>
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeGPTS}</CodeBlock>
</TabItem>
</Tabs>





## Filter with Input Status Code

Filtering with input status code in Clarifai allows users to refine search results based on the status of the input data. This feature enables users to specify criteria related to the status of the input data, such as whether the data is successfully processed, pending processing, or encountered errors. 


<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeIS}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputIS}</CodeBlock>
    <img src="/img/python-sdk/fl_is.png" />
</details>
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeISTS}</CodeBlock>
</TabItem>
</Tabs>




## Filter with Dataset-ID

Filtering with dataset ID in Clarifai allows users to narrow down search results based on specific criteria within a designated dataset. By specifying a dataset ID in the filter, users can refine their search to only consider inputs or data entries within that particular dataset. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeData}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputData}</CodeBlock>
    <img src="/img/python-sdk/fl_data.png" />
</details>
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeDataTS}</CodeBlock>
</TabItem>
</Tabs>



## MultiModal Filtering

Multimodal filtering in Clarifai refers to the ability to refine search results based on criteria related to both visual and textual content. Unlike unimodal filtering, which focuses solely on one type of data (e.g., images or text), multimodal filtering considers multiple modalities simultaneously.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeMM}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputMM}</CodeBlock>
    <img src="/img/python-sdk/fl_mm.png" />
</details>
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeMMTS}</CodeBlock>
</TabItem>
</Tabs>


