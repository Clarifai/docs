package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    //////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, model ID, 
    // and concept ID. Change these strings to run your own example.
    //////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to add your own concept to a model
    static final String MODEL_ID = "petsID";
    static final String CONCEPT_ID = "charlie";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////	

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));

        MultiModelResponse patchModelsResponse = stub.patchModels(
            PatchModelsRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
            .setAction("merge") // Supported actions: overwrite, merge, remove
            .addModels(
                Model.newBuilder()
                .setId(MODEL_ID)
                .setOutputInfo(
                    OutputInfo.newBuilder().setData(
                        Data.newBuilder().addConcepts(Concept.newBuilder().setId(CONCEPT_ID))
                    )
                )
            )
            .build()
        );

        if (patchModelsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Patch models failed, status: " + patchModelsResponse.getStatus());
        }

    }

}