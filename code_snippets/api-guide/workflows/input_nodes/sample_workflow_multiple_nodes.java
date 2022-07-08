package com.clarifai.example;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    //////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and the details of the 
    // workflow we want to build. Change these strings to run your own example.
    /////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to build your own workflow with multiple connected nodes

    static final String WORKFLOW_ID = "auto-annotation-workflow-id";
    static final String NODE_ID_1 = "general-embed";
    static final String GENERAL_EMBED_MODEL_ID = "bbb5f41425b8468d9b7a554ff10f8581";
    static final String GENERAL_EMBED_MODEL_VERSION_ID = "bb186755eda04f9cbb6fe32e816be104";

    static final String NODE_ID_2 = "general-concept";
    static final String GENERAL_CONCEPT_MODEL_ID = "aaa03c23b3724a16a56b629203edc62c";
    static final String GENERAL_CONCEPT_MODEL_VERSION_ID = "aa7f35c01e0642fda5cf400f543e7c40";

    static final String NODE_ID_3 = "general-cluster";
    static final String GENERAL_CLUSTER_MODEL_ID = "cccbe437d6e54e2bb911c6aa292fb072";
    static final String GENERAL_CLUSTER_MODEL_VERSION_ID = "cc2074cff6dc4c02b6f4e1b8606dcb54";

    static final String NODE_ID_4 = "mapper";
    static final String SYNONYM_MODEL_ID = "synonym-model-id";
    static final String SYNONYM_MODEL_VERSION_ID = "YOUR_SYNONYM_MODEL_VERSION_ID";

    static final String NODE_ID_5 = "greater-than";
    static final String GREATER_THAN_MODEL_ID = "greater-than-model-id";
    static final String GREATER_THAN_MODEL_VERSION_ID = "YOUR_GREATER_THAN_MODEL_VERSION_ID";

    static final String NODE_ID_6 = "less-than";
    static final String LESS_THAN_MODEL_ID = "less-than-model-id";
    static final String LESS_THAN_MODEL_VERSION_ID = "YOUR_LESS_THAN_MODEL_VERSION_ID";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));

        MultiWorkflowResponse postWorkflowsResponse = stub.postWorkflows(
            PostWorkflowsRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
            .addWorkflows(
                Workflow.newBuilder()
                .setId(WORKFLOW_ID)
                .addNodes(
                    WorkflowNode.newBuilder()
                    .setId(NODE_ID_1)
                    .setModel(
                        Model.newBuilder()
                        .setId(GENERAL_EMBED_MODEL_ID)
                        .setModelVersion(
                            ModelVersion.newBuilder()
                            .setId(GENERAL_EMBED_MODEL_VERSION_ID)
                        )
                    )
                )
                .addNodes(
                    WorkflowNode.newBuilder()
                    .setId(NODE_ID_2)
                    .setModel(
                        Model.newBuilder()
                        .setId(GENERAL_CONCEPT_MODEL_ID)
                        .setModelVersion(
                            ModelVersion.newBuilder()
                            .setId(GENERAL_CONCEPT_MODEL_VERSION_ID)
                        )
                    )
                )
                .addNodes(
                    WorkflowNode.newBuilder()
                    .setId(NODE_ID_3)
                    .setModel(
                        Model.newBuilder()
                        .setId(GENERAL_CLUSTER_MODEL_ID)
                        .setModelVersion(
                            ModelVersion.newBuilder()
                            .setId(GENERAL_CLUSTER_MODEL_VERSION_ID)
                        )
                    )
                )
                .addNodes(
                    WorkflowNode.newBuilder()
                    .setId(NODE_ID_4)
                    .setModel(
                        Model.newBuilder()
                        .setId(SYNONYM_MODEL_ID)
                        .setModelVersion(
                            ModelVersion.newBuilder()
                            .setId(SYNONYM_MODEL_VERSION_ID)
                        )
                    )
                    .addNodeInputs(NodeInput.newBuilder().setNodeId(NODE_ID_2))
                )
                .addNodes(
                    WorkflowNode.newBuilder()
                    .setId(NODE_ID_5)
                    .setModel(
                        Model.newBuilder()
                        .setId(GREATER_THAN_MODEL_ID)
                        .setModelVersion(
                            ModelVersion.newBuilder()
                            .setId(GREATER_THAN_MODEL_VERSION_ID)
                        )
                    )
                    .addNodeInputs(NodeInput.newBuilder().setNodeId(NODE_ID_4))
                )
                .addNodes(
                    WorkflowNode.newBuilder()
                    .setId(NODE_ID_6)
                    .setModel(
                        Model.newBuilder()
                        .setId(LESS_THAN_MODEL_ID)
                        .setModelVersion(
                            ModelVersion.newBuilder()
                            .setId(LESS_THAN_MODEL_VERSION_ID)
                        )
                    )
                    .addNodeInputs(NodeInput.newBuilder().setNodeId(NODE_ID_4))
                )
            )
            .build()
        );

        if (postWorkflowsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post workflows failed, status: " + postWorkflowsResponse.getStatus());
        }

    }

}