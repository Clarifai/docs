package com.clarifai.example;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    /////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and the ID of the workflow
    // we want to make as default. Change these strings to run your own example.
    /////////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change this to make your own default workflow
    static final String DEFAULT_WORKFLOW_ID = "auto-annotation-workflow-id";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));

        MultiAppResponse patchAppsResponse = stub.patchApps(
            PatchAppsRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
            .setAction("overwrite")
            .addApps(
                App.newBuilder()
                .setId(APP_ID)
                .setDefaultWorkflowId(DEFAULT_WORKFLOW_ID)
            ).build()
        );

        if (patchAppsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Patch apps failed, status: " + patchAppsResponse.getStatus());
        }

    }

}