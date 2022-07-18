package com.clarifai.example;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    /////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and the details of the 
    // VTR Workflow we want to build. Change these strings to run your own example.
    /////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to build your own VTR Workflow
    static final String WORKFLOW_ID = "visual-text-recognition-id";

    static final String WORKFLOWNODE_ID_1 = "detect-concept";
    static final String MODEL_ID_1 = "2419e2eae04d04f820e5cf3aba42d0c7";
    static final String MODEL_VERSION_ID_1 = "75a5b92a0dec436a891b5ad224ac9170";

    static final String WORKFLOWNODE_ID_2 = "image-crop";
    static final String MODEL_ID_2 = "ce3f5832af7a4e56ae310d696cbbefd8";
    static final String MODEL_VERSION_ID_2 = "a78efb13f7774433aa2fd4864f41f0e6";

    static final String WORKFLOWNODE_ID_3 = "image-to-text";
    static final String MODEL_ID_3 = "9fe78b4150a52794f86f237770141b33";
    static final String MODEL_VERSION_ID_3 = "d94413e582f341f68884cac72dbd2c7b";

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
                    .setId(WORKFLOWNODE_ID_1)
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
                    .setId(WORKFLOWNODE_ID_2)
                    .setModel(
                        Model.newBuilder()
                        .setId(MODEL_ID_2)
                        .setModelVersion(
                            ModelVersion.newBuilder()
                            .setId(MODEL_VERSION_ID_2)
                        )
                    )
                    .addNodeInputs(NodeInput.newBuilder().setNodeId(WORKFLOWNODE_ID_1))
                )
                .addNodes(
                    WorkflowNode.newBuilder()
                    .setId(WORKFLOWNODE_ID_3)
                    .setModel(
                        Model.newBuilder()
                        .setId(MODEL_ID_3)
                        .setModelVersion(
                            ModelVersion.newBuilder()
                            .setId(MODEL_VERSION_ID_3)
                        )
                    )
                    .addNodeInputs(NodeInput.newBuilder().setNodeId(WORKFLOWNODE_ID_2))
                )
            )
            .build()
        );

        if (postWorkflowsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post workflows failed, status: " + postWorkflowsResponse.getStatus());
        }

    }

}