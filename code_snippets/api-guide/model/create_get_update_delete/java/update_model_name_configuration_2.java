package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.StatusCode;
import com.google.protobuf.Struct;
import com.google.protobuf.Value;

public class ClarifaiExample {

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and how we want to update the model. 
    // Change these strings to run your own example.
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    // Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to update your own model
    static final String MODEL_ID = "petsID";
    static final String MODEL_VERSION_ID = "0b87504a8c1a47dc88b69ce63f4cf814";
    static final Double MINIMUM_VALUE = 0.95;

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////	

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
                .withCallCredentials(new ClarifaiCallCredentials(PAT));

        Struct.Builder params = Struct.newBuilder()
                .putFields("min_value", Value.newBuilder().setNumberValue(MINIMUM_VALUE).build());

        MultiModelVersionResponse patchModelsResponse = stub.patchModelVersions(
                PatchModelVersionsRequest.newBuilder()
                        .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
                        .setAction("overwrite")
                        .setModelId(MODEL_ID)
                        .addModelVersions(ModelVersion.newBuilder()
                                .setId(MODEL_VERSION_ID)
                                .setOutputInfo(OutputInfo.newBuilder()
                                        .setParams(params)
                                )
                        )
                        .build()
        );

        if (patchModelsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post model outputs failed, status: " + patchModelsResponse.getStatus());
        }

    }
}
