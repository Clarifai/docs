---
description: Manage your clusters, nodepools, and deployments
sidebar_position: 3
pagination_next: null
---

# Managing Your Compute

**Manage your clusters, nodepools, and deployments**
<hr />

You can efficiently manage your clusters, nodepools, and deployments within the Clarifai platform to optimize performance and costs. You can gain valuable insights by retrieving detailed resource information, and streamline your compute environment by removing unused resources.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CO3 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/get_compute_cluster.py";
import CO4 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/list_compute_cluster.py";
import CO8 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/get_nodepool.py";
import CO9 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/list_nodepool.py";
import CO13 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/get_deployment.py";
import CO14 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/list_deployment.py";
import CO16 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/delete_deployments.py";
import CO17 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/delete_nodepools.py";
import CO18 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/delete_clusters.py";
import CL5 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/cli_list_cluster.sh";
import CL6 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/cli_list_nodepool.sh";
import CL7 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/cli_list_deployment.sh";
import CL8 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/cli_delete_cluster.sh";
import CL9 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/cli_delete_nodepool.sh";
import CL10 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/cli_delete_deployment.sh";


## Cluster Operations

### Get a Cluster

To get a specific compute cluster, pass the `compute_cluster_id` to the `compute_cluster` method of the `User` class.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO3}</CodeBlock>
</TabItem>
</Tabs>


### List All Clusters

To list your existing compute clusters, call the `list_compute_clusters` method of the `User` class.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO4}</CodeBlock>
</TabItem>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-yaml">{CL5}</CodeBlock>
</TabItem>
</Tabs>

## Nodepool Operations

### Get a Nodepool

To get a specific nodepool, provide the `nodepool_id` to the `nodepool` method of the `ComputeCluster` class.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO8}</CodeBlock>
</TabItem>
</Tabs>


### List All Nodepools

To list the existing nodepools, call the `list_nodepools` method of the `ComputeCluster` class.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO9}</CodeBlock>
</TabItem>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-yaml">{CL6}</CodeBlock>
</TabItem>
</Tabs>

## Deployment Operations

### Get a Deployment

To get a specific deployment, provide the `deployment_id` to the `deployment` method of the `Nodepool` class.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO13}</CodeBlock>
</TabItem>
</Tabs>


### List All Deployments

To list existing deployments, call the `list_deployments` method of the `Nodepool` class.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO14}</CodeBlock>
</TabItem>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-yaml">{CL7}</CodeBlock>
</TabItem>
</Tabs>


## Delete Resources

### Delete Deployments

To delete deployments, pass a list of deployment IDs to the `delete_deployments` method of the `Nodepool` class. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO16}</CodeBlock>
</TabItem>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-yaml">{CL10}</CodeBlock>
</TabItem>
</Tabs>

### Delete Nodepools

To delete nodepools, provide a list of nodepool IDs to the `delete_nodepools` method of the `ComputeCluster` class. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO17}</CodeBlock>
</TabItem>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-yaml">{CL9}</CodeBlock>
</TabItem>
</Tabs>

### Delete Compute Clusters

To delete compute clusters, provide a list of compute cluster IDs to the `delete_compute_clusters` method of the `User` class.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CO18}</CodeBlock>
</TabItem>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-yaml">{CL8}</CodeBlock>
</TabItem>
</Tabs>


