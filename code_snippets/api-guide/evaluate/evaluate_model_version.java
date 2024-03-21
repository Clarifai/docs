package com.clarifai.example;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.StatusCode;
import com.google.protobuf.Struct;
import com.google.protobuf.Value;

public class ClarifaiExample {

    //////////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and model evaluation details.
    // Change these strings to run your own example.
    //////////////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    // Your PAT (Personal Access Token) can be found in the Account's Security section
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to make your own evaluations  
    static final String MODEL_ID = "YOUR_MODEL_ID_HERE";
    static final String MODEL_VERSION_ID = "YOUR_MODEL_VERSION_HERE";
    static final String DATASET_ID = "YOUR_DATASET_ID_HERE";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
                .withCallCredentials(new ClarifaiCallCredentials(PAT));

        Struct.Builder params = Struct.newBuilder()
                .putFields("dataset_id", Value.newBuilder().setStringValue(DATASET_ID).build());

        MultiEvalMetricsResponse postEvaluationsResponse = stub.postModelVersionEvaluations(
                PostModelVersionEvaluationsRequest.newBuilder()
                        .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
                        .setModelId(MODEL_ID)
                        .setModelVersionId(MODEL_VERSION_ID)
                        .addEvalMetrics(
                                EvalMetrics.newBuilder()
                                        .setEvalInfo(EvalInfo.newBuilder()
                                                .setParams(params)
                                        )
                        )
                        .build()
        );

        if (postEvaluationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Evaluate model failed, status: " + postEvaluationsResponse.getStatus());
        }

    }

}
