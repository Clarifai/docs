package com.clarifai.example;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    //////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and the details of the 
    // nodes to suppress their outputs. Change these strings to run your own example.
    /////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to suppress the outputs of your own nodes
    static final String WORKFLOW_ID = "auto-annotation-workflow-id";
    static final String NODE_ID_1 = "general-embed";
    static final String MODEL_ID_1 = "bbb5f41425b8468d9b7a554ff10f8581";
    static final String MODEL_VERSION_ID_1 = "bb186755eda04f9cbb6fe32e816be104";

    static final String NODE_ID_2 = "general-cluster";
    static final String MODEL_ID_2 = "cccbe437d6e54e2bb911c6aa292fb072";
    static final String MODEL_VERSION_ID_2 = "cc2074cff6dc4c02b6f4e1b8606dcb54";

    static final String NODE_ID_3 = "general-cluster";

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
                        .setId(MODEL_ID_1)
                        .setModelVersion(
                            ModelVersion.newBuilder()
                            .setId(MODEL_VERSION_ID_1)
                        )
                    )
                )
                .addNodes(
                    WorkflowNode.newBuilder()
                    .setId(NODE_ID_2)
                    .setModel(
                        Model.newBuilder()
                        .setId(MODEL_ID_2)
                        .setModelVersion(
                            ModelVersion.newBuilder()
                            .setId(MODEL_VERSION_ID_2)
                        )
                    )
                    .addNodeInputs(NodeInput.newBuilder().setNodeId(NODE_ID_3))
                )
            )
            .build()
        );

        if (postWorkflowsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post workflows failed, status: " + postWorkflowsResponse.getStatus());
        }

    }

}