package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.StatusCode;
import com.google.protobuf.Struct;
import com.google.protobuf.Value;

public class ClarifaiExample {

    //////////////////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and details for incremental training.
    // Change these strings to run your own example.
    //////////////////////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    // Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to incrementally train your own model
    static final String MODEL_ID = "detection-test";
    static final String MODEL_VERSION_ID = "5af1bd0fb79d47289ab82d5bb2325c81";
    static final String CONCEPT_ID = "face";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////	

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
                .withCallCredentials(new ClarifaiCallCredentials(PAT));

        Struct.Builder params = Struct.newBuilder()
                .putFields("template", Value.newBuilder().setStringValue("MMDetection_SSD").build())
                .putFields("num_epochs", Value.newBuilder().setNumberValue(1).build());

        SingleModelResponse postModelVersionsResponse = stub.postModelVersions(
                PostModelVersionsRequest.newBuilder()
                        .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
                        .setModelId(MODEL_ID)
                        .addModelVersions(ModelVersion.newBuilder()
                                .setTrainInfo(TrainInfo.newBuilder()
                                        .setParams(params)
                                        .setResumeFromModel(Model.newBuilder()
                                                .setId(MODEL_ID)
                                                .setModelVersion(ModelVersion.newBuilder()
                                                        .setId(MODEL_VERSION_ID)
                                                )
                                        )
                                )
                                .setOutputInfo(OutputInfo.newBuilder()
                                        .setData(Data.newBuilder()
                                                .addConcepts(Concept.newBuilder()
                                                        .setId(CONCEPT_ID)
                                                )
                                        )
                                )
                        )
                        .build()
        );

        if (postModelVersionsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post model outputs failed, status: " + postModelVersionsResponse.getStatus());
        }

    }
}
