package com.clarifai.example;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    ///////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and the details of the
    // workflow we want to update. Change these strings to run your own example.
    ///////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to update your own workflow
    static final String WORKFLOW_ID = "my-custom-workflow";
    static final String NODE_ID_1 = "travel-concepts";
    static final String MODEL_ID_1 = "ccc28c313d69466f836ab83287a54ed9";
    static final String MODEL_VERSION_ID_1 = "cce28c313d69466f836ab83287a54ed9";

    static final String NODE_ID_2 = "nsfw-concepts";
    static final String MODEL_ID_2 = "ccc76d86d2004ed1a38ba0cf39ecb4b1";
    static final String MODEL_VERSION_ID_2 = "cc76a92beaeb4d8495a58ba197998158";

    static final String NODE_ID_3 = "wedding-concepts";
    static final String MODEL_ID_3 = "c386b7a870114f4a87477c0824499348";
    static final String MODEL_VERSION_ID_3 = "787cc9a002164250800598d36b072384";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));

        MultiWorkflowResponse patchWorkflowsResponse = stub.patchWorkflows(
            PatchWorkflowsRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
            .setAction("overwrite")
            .addWorkflows(
                Workflow.newBuilder()
                .setId(WORKFLOW_ID)
                .addNodes(
                    WorkflowNode.newBuilder()
                    .setId(NODE_ID_1)
                    .setModel(
                        Model.newBuilder()
                        .setId(MODEL_ID_1)
                        .setModelVersion(ModelVersion.newBuilder().setId(MODEL_VERSION_ID_1))
                    )
                )
                .addNodes(
                    WorkflowNode.newBuilder()
                    .setId(NODE_ID_2)
                    .setModel(
                        Model.newBuilder()
                        .setId(MODEL_ID_2)
                        .setModelVersion(ModelVersion.newBuilder().setId(MODEL_VERSION_ID_2))
                    )
                )
                .addNodes(
                    WorkflowNode.newBuilder()
                    .setId(NODE_ID_3)
                    .setModel(
                        Model.newBuilder()
                        .setId(MODEL_ID_3)
                        .setModelVersion(ModelVersion.newBuilder().setId(MODEL_VERSION_ID_3))
                    )
                )
            ).build()
        );

        if (patchWorkflowsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Patch workflows failed, status: " + patchWorkflowsResponse.getStatus());
        }

    }

}