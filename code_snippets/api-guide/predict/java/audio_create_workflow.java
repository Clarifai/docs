package com.clarifai.example;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    //////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and the details of the new
    // custom workflow we want to create. Change these strings to run your own example.
    /////////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to create your own custom workflow
    static final String WORKFLOW_ID = "my-custom-workflow";
    static final String NODE_ID_1 = "audio-to-text";
    static final String MODEL_ID_1 = "asr-wav2vec2-base-960h-english";
    static final String MODEL_VERSION_ID_1 = "f4deae70a473492a8e2f9b7bb1dbee85";

    static final String NODE_ID_2 = "sentiment-analysis";
    static final String MODEL_ID_2 = "sentiment-analysis-distilbert-english";
    static final String MODEL_VERSION_ID_2 = "c0b09e606db94d9bae7eb40c626192fc";

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
            ).build()
        );

        if (postWorkflowsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post workflows failed, status: " + postWorkflowsResponse.getStatus());
        }

    }

}