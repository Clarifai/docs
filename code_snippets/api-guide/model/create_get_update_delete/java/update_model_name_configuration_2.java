package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    /////////////////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and how we want to update the model. 
    // Change these strings to run your own example.
    ////////////////////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to update your own model 
    static final String MODEL_ID = "petsID";
    static final String MODEL_NAME = "newname";
   
    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////	

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));

        MultiModelResponse patchModelsResponse = stub.patchModels(
            PatchModelsRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
            .setAction("overwrite")
            .addModels(
                Model.newBuilder()
                .setId(MODEL_ID)
                .setName(MODEL_NAME)
            ).build()
        );

        if (patchModelsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Patch models failed, status: " + patchModelsResponse.getStatus());
        }

    }

}