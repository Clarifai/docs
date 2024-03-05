package com.clarifai.example;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    //////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and the details of the new
    // custom workflow. Change these strings to run your own example.
    /////////////////////////////////////////////////////////////////////////////////////////
    
    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to create your own custom workflow
    static final String WORKFLOW_ID = "my-custom-prompter-workflow";

    static final String NODE_ID_1 = "prompter-model";
    static final String PROMPTER_MODEL_ID = "my-prompter-model";
    static final String PROMPTER_MODEL_USER_ID = "YOUR_USER_ID_HERE";
    static final String PROMPTER_MODEL_APP_ID = "my-custom-app";
    static final String PROMPTER_MODEL_VERSION_ID = "e851fb99a3b14df788ce11accee45c19";

    static final String NODE_ID_2 = "text-to-text";
    static final String LLM_MODEL_ID = "GPT-4";
    static final String LLM_MODEL_USER_ID = "openai";
    static final String LLM_MODEL_APP_ID = "chat-completion";
    static final String LLM_MODEL_VERSION = "5d7a50b44aec4a01a9c492c5a5fcf387";

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
                                                                        .setId(PROMPTER_MODEL_ID)
                                                                        .setUserId(PROMPTER_MODEL_USER_ID)
                                                                        .setAppId(PROMPTER_MODEL_APP_ID)
                                                                        .setModelVersion(ModelVersion.newBuilder().setId(PROMPTER_MODEL_VERSION_ID))
                                                        )
                                        )
                                        .addNodes(
                                                WorkflowNode.newBuilder()
                                                        .setId(NODE_ID_2)
                                                        .setModel(
                                                                Model.newBuilder()
                                                                        .setId(LLM_MODEL_ID)
                                                                        .setUserId(LLM_MODEL_USER_ID)
                                                                        .setAppId(LLM_MODEL_APP_ID)
                                                                        .setModelVersion(ModelVersion.newBuilder().setId(LLM_MODEL_VERSION))
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
