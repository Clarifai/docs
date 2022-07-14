package com.clarifai.example;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    ////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and the details of the 
    // workflow we want to create. Change these strings to run your own example.
    ////////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to create your own workflow 
    // Note that we've also added as comments the values of most of these variables against their names in the code below

    static final String WORKFLOW_ID = "auto-annotation-workflow-id";
    static final String NODE_ID_1 = "general-embed";
    static final String MODEL_ID_1 = "bbb5f41425b8468d9b7a554ff10f8581";
    static final String MODEL_VERSION_ID_1 = "bb186755eda04f9cbb6fe32e816be104";

    static final String NODE_ID_2 = "general-concept";
    static final String MODEL_ID_2 = "aaa03c23b3724a16a56b629203edc62c";
    static final String MODEL_VERSION_ID_2 = "aa7f35c01e0642fda5cf400f543e7c40";

    static final String NODE_ID_3 = "general-cluster";
    static final String MODEL_ID_3 = "cccbe437d6e54e2bb911c6aa292fb072";
    static final String MODEL_VERSION_ID_3 = "cc2074cff6dc4c02b6f4e1b8606dcb54";

    static final String NODE_ID_4 = "mapper";
    static final String SYNONYM_MODEL_ID = "synonym-model-id";
    static final String SYNONYM_MODEL_VERSION_ID = "YOUR_SYNONYM_MODEL_VERSION_ID";

    static final String NODE_ID_5 = "greater-than";
    static final String GREATER_THAN_MODEL_ID = "greater-than-model-id";
    static final String GREATER_THAN_MODEL_VERSION_ID = "YOUR_GREATER_THAN_MODEL_VERSION_ID";

    static final String NODE_ID_6 = "write-success";
    static final String WRITE_SUCCESS_MODEL_ID = "write-success-model-id";
    static final String WRITE_SUCCESS_MODEL_VERSION_ID = "YOUR_WRITE_SUCCESS_MODEL_VERSION_ID";

    static final String NODE_ID_7 = "less-than";
    static final String LESS_THAN_MODEL_ID = "less-than-model-id";
    static final String LESS_THAN_MODEL_VERSION_ID = "YOUR_LESS_THAN_MODEL_VERSION_ID";

    static final String NODE_ID_8 = "write-pending";
    static final String WRITE_PENDING_MODEL_ID = "write-pending-model-id";
    static final String WRITE_PENDING_MODEL_VERSION_ID = "YOUR_WRITE_PENDING_MODEL_VERSION_ID";

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
                .setId(WORKFLOW_ID) //auto-annotation-workflow-id
                .addNodes(
                    WorkflowNode.newBuilder()
                    .setId(NODE_ID_1) // general-embed
                    .setModel(
                        Model.newBuilder()
                        .setId(MODEL_ID_1) // bbb5f41425b8468d9b7a554ff10f8581
                        .setModelVersion(
                            ModelVersion.newBuilder()
                            .setId(MODEL_VERSION_ID_1) // bb186755eda04f9cbb6fe32e816be104
                        )
                    )
                )
                .addNodes(
                    WorkflowNode.newBuilder()
                    .setId(NODE_ID_2) // general-concept
                    .setModel(
                        Model.newBuilder()
                        .setId(MODEL_ID_2) // aaa03c23b3724a16a56b629203edc62c
                        .setModelVersion(
                            ModelVersion.newBuilder()
                            .setId(MODEL_VERSION_ID_2) // aa7f35c01e0642fda5cf400f543e7c40
                        )
                    )
                )
                .addNodes(
                    WorkflowNode.newBuilder()
                    .setId(NODE_ID_3) // general-cluster
                    .setModel(
                        Model.newBuilder()
                        .setId(MODEL_ID_3) // cccbe437d6e54e2bb911c6aa292fb072
                        .setModelVersion(
                            ModelVersion.newBuilder()
                            .setId(MODEL_VERSION_ID_3) // cc2074cff6dc4c02b6f4e1b8606dcb54
                        )
                    )
                )
                .addNodes(
                    WorkflowNode.newBuilder()
                    .setId(NODE_ID_4) // mapper
                    .setModel(
                        Model.newBuilder()
                        .setId(SYNONYM_MODEL_ID) // synonym-model-id
                        .setModelVersion(
                            ModelVersion.newBuilder()
                            .setId(SYNONYM_MODEL_VERSION_ID)
                        )
                    )
                    .addNodeInputs(NodeInput.newBuilder().setNodeId(NODE_ID_2)) // general-concept
                )
                .addNodes(
                    WorkflowNode.newBuilder()
                    .setId(NODE_ID_5) // greater-than
                    .setModel(
                        Model.newBuilder()
                        .setId(GREATER_THAN_MODEL_ID) // greater-than-model-id
                        .setModelVersion(
                            ModelVersion.newBuilder()
                            .setId(GREATER_THAN_MODEL_VERSION_ID)
                        )
                    )
                    .addNodeInputs(NodeInput.newBuilder().setNodeId(NODE_ID_4)) // mapper
                )
                .addNodes(
                    WorkflowNode.newBuilder()
                    .setId(NODE_ID_6) // write-as-success-as-me
                    .setModel(
                        Model.newBuilder()
                        .setId(WRITE_SUCCESS_MODEL_ID) // write-success-as-me-id
                        .setModelVersion(
                            ModelVersion.newBuilder()
                            .setId(WRITE_SUCCESS_MODEL_VERSION_ID)
                        )
                    )
                    .addNodeInputs(NodeInput.newBuilder().setNodeId(NODE_ID_5)) // greater-than
                )
                .addNodes(
                    WorkflowNode.newBuilder()
                    .setId(NODE_ID_7) // less-than
                    .setModel(
                        Model.newBuilder()
                        .setId(LESS_THAN_MODEL_ID) 
                        .setModelVersion(
                            ModelVersion.newBuilder()
                            .setId(LESS_THAN_MODEL_VERSION_ID)
                        )
                    )
                    .addNodeInputs(NodeInput.newBuilder().setNodeId(NODE_ID_4)) // mapper
                )
                .addNodes(
                    WorkflowNode.newBuilder()
                    .setId(NODE_ID_8) // write-pending
                    .setModel(
                        Model.newBuilder()
                        .setId(WRITE_PENDING_MODEL_ID) // write-pending-as-me-id
                        .setModelVersion(
                            ModelVersion.newBuilder()
                            .setId(WRITE_PENDING_MODEL_VERSION_ID)
                        )
                    )
                    .addNodeInputs(NodeInput.newBuilder().setNodeId(NODE_ID_7)) // less-than
                )
            )
            .build()
        );

        if (postWorkflowsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post workflows failed, status: " + postWorkflowsResponse.getStatus());
        }

    }

}