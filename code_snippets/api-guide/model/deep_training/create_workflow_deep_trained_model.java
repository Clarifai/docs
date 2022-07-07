package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.StatusCode;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;

public class ClarifaiExample {

    //////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and the details we want
    // to use to create a workflow. Change these strings to run your own example.
    /////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to create your own workflow
    static final String WORKFLOW_ID = "my-new-workflow-id";
    static final String EMBED_MODEL_ID = "YOUR_EMBED_MODEL_ID";
    static final String EMBED_MODEL_VERSION_ID = "YOUR_EMBED_MODEL_VERSION_ID";
    static final String WORKFLOWNODE_ID = "my-custom-model";
    static final String CUSTOM_MODEL_ID = "YOUR_CUSTOM_MODEL_ID";
    static final String CUSTOM_MODEL_VERSION_ID = "YOUR_CUSTOM_MODEL_VERSION_ID";

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
                    .setId("embed")
                    .setModel(
                        Model.newBuilder()
                        .setId(EMBED_MODEL_ID)
                        .setModelVersion(
                            ModelVersion.newBuilder()
                            .setId(EMBED_MODEL_VERSION_ID)
                        )
                    )
                )
                .addNodes(
                    WorkflowNode.newBuilder()
                    .setId(WORKFLOWNODE_ID)
                    .setModel(
                        Model.newBuilder()
                        .setId(CUSTOM_MODEL_ID)
                        .setModelVersion(
                            ModelVersion.newBuilder()
                            .setId(CUSTOM_MODEL_VERSION_ID)
                        )
                    )
                    .addNodeInputs(NodeInput.newBuilder().setNodeId("embed"))
                )
            )
            .build()
        );

        if (postWorkflowsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post workflows failed, status: " + postWorkflowsResponse.getStatus());
        }

    }

}