package com.clarifai.example;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    ///////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and workflow ID.
    // Change these strings to run your own example.
    //////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change this to your own workflow ID
    static final String WORKFLOW_ID = "food-and-general";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));

        SingleWorkflowResponse getWorkflowResponse = stub.getWorkflow(
            GetWorkflowRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
            .setWorkflowId(WORKFLOW_ID)
            .build()
        );

        if (getWorkflowResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Get workflow failed, status: " + getWorkflowResponse.getStatus());
        }

        Workflow workflow = getWorkflowResponse.getWorkflow();

        System.out.println("The workflow consists of these models:");
        for (WorkflowNode workflowNode: workflow.getNodesList()) {
            Model model = workflowNode.getModel();
            System.out.println(model.getId());
        }

    }

}