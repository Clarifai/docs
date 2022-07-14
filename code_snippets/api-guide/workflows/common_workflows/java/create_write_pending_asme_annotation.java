package com.clarifai.example;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.StatusCode;
import com.google.protobuf.Struct;
import com.google.protobuf.Value;

public class ClarifaiExample {

    ///////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and the details of the model
    // we want to create. Change these strings to run your own example.
    ///////////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to create your own annotation writer model
    static final String MODEL_ID = "write-pending-as-me-id";
    static final String MODEL_TYPE_ID = "annotation-writer";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));

        Struct.Builder params = Struct.newBuilder()
            .putFields(
                "annotation_status", Value.newBuilder().setNumberValue(StatusCode.ANNOTATION_PENDING_VALUE).build()
            )
            .putFields(
                "annotation_user_id",
                Value.newBuilder().setStringValue(USER_ID).build()
            );

        SingleModelResponse postModelsResponse = stub.postModels(
            PostModelsRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
            .addModels(
                Model.newBuilder()
                .setId(MODEL_ID)
                .setModelTypeId(MODEL_TYPE_ID)
                .setOutputInfo(
                    OutputInfo.newBuilder()
                    .setParams(params)
                )
            )
            .build()
        );

        if (postModelsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post models failed, status: " + postModelsResponse.getStatus());
        }

    }

}