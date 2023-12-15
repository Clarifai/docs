package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.StatusCode;
import com.google.protobuf.Struct;
import com.google.protobuf.Value;

public class ClarifaiExample {

    //////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, model ID, and concept IDs.
    // Change these strings to run your own example.
    //////////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    // Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to train your own model
    static final String MODEL_ID = "petsID";
    static final String CONCEPT_ID_1 = "ferrari23";
    static final String CONCEPT_ID_2 = "outdoors23";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////	

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
                .withCallCredentials(new ClarifaiCallCredentials(PAT));

        Struct.Builder params = Struct.newBuilder()
                .putFields("template", Value.newBuilder().setStringValue("MMClassification_ResNet_50_RSB_A1").build())
                .putFields("num_epochs", Value.newBuilder().setNumberValue(2).build());

        SingleModelResponse postModelVersionsResponse = stub.postModelVersions(
                PostModelVersionsRequest.newBuilder()
                        .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
                        .setModelId(MODEL_ID)
                        .addModelVersions(ModelVersion.newBuilder()
                                .setTrainInfo(TrainInfo.newBuilder()
                                        .setParams(params)
                                )
                                .setOutputInfo(OutputInfo.newBuilder()
                                        .setData(Data.newBuilder()
                                                .addConcepts(Concept.newBuilder()
                                                        .setId(CONCEPT_ID_1)
                                                )
                                                .addConcepts(Concept.newBuilder()
                                                        .setId(CONCEPT_ID_2)
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
