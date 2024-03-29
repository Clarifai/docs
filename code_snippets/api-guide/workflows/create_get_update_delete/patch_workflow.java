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
    static final String NODE_ID_1 = "audio-to-text";
    static final String MODEL_ID_1 = "asr-wav2vec2-base-960h-english";
    static final String MODEL_VERSION_ID_1 = "f4deae70a473492a8e2f9b7bb1dbee85";

    static final String NODE_ID_2 = "text-summarization";
    static final String MODEL_ID_2 = "text-summarization-english-distilbart-cnn-12-6";
    static final String MODEL_VERSION_ID_2 = "8279cec2221a4b1d9db774470940aebd";

    static final String NODE_ID_3 = "english-to-french";
    static final String MODEL_ID_3 = "translation-english-to-french-text";
    static final String MODEL_VERSION_ID_3 = "c65a4a51c2b646fca5f0e4bf1ff200d7";

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
                    .addNodeInputs(NodeInput.newBuilder().setNodeId(NODE_ID_1))
                )
                .addNodes(
                    WorkflowNode.newBuilder()
                    .setId(NODE_ID_3)
                    .setModel(
                        Model.newBuilder()
                        .setId(MODEL_ID_3)
                        .setModelVersion(ModelVersion.newBuilder().setId(MODEL_VERSION_ID_3))
                    )
                    .addNodeInputs(NodeInput.newBuilder().setNodeId(NODE_ID_2))
                )
            ).build()
        );

        if (patchWorkflowsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Patch workflows failed, status: " + patchWorkflowsResponse.getStatus());
        }

    }

}