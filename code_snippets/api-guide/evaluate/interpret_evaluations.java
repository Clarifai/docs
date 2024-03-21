package com.clarifai.example;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    //////////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and the model evaluation ID.
    // Change these strings to run your own example.
    //////////////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    // Your PAT (Personal Access Token) can be found in the Account's Security section
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change this to get your model evaluation results
    static final String EVALUATION_ID = "YOUR_EVALUATION_ID_HERE";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////
    
    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
                .withCallCredentials(new ClarifaiCallCredentials(PAT));

        SingleEvalMetricsResponse postEvaluationsResponse = stub.getEvaluation(
                GetEvaluationRequest.newBuilder()
                        .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
                        .setEvaluationId(EVALUATION_ID) // returned after starting an evaluation
                        .setFields(FieldsValue.newBuilder()
                                .setConfusionMatrix(true)
                                .setCooccurrenceMatrix(true)
                                .setLabelCounts(true)
                                .setBinaryMetrics(true)
                                .setTestSet(true)
                                .setMetricsByArea(true)
                                .setMetricsByClass(true)
                        )
                        .build()
        );

        if (postEvaluationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Evaluate model failed, status: " + postEvaluationsResponse.getStatus());
        }

        System.out.println(postEvaluationsResponse);

    }

}
