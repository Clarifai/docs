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
    static final String NODE_ID_1 = "food-concepts";
    static final String MODEL_ID_1 = "bd367be194cf45149e75f01d59f77ba7";
    static final String MODEL_VERSION_ID_1 = "dfebc169854e429086aceb8368662641";

    static final String NODE_ID_2 = "general-concepts";
    static final String MODEL_ID_2 = "aaa03c23b3724a16a56b629203edc62c";
    static final String MODEL_VERSION_ID_2 = "aa9ca48295b37401f8af92ad1af0d91d";

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
                )
            ).build()
        );

        if (postWorkflowsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post workflows failed, status: " + postWorkflowsResponse.getStatus());
        }

    }

}