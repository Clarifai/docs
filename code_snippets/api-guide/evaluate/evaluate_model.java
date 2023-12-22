package com.clarifai.example;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    //////////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and model evaluation details.
    // Change these strings to run your own example.
    //////////////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    // Your PAT (Personal Access Token) can be found in the portal under Authentification
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to evaluate your own model
    static final String MODEL_APP_ID = "YOUR_MODEL_APP_ID_HERE";
    static final String MODEL_USER_ID = "YOUR_MODEL_USER_ID_HERE";
    static final String MODEL_ID = "YOUR_MODEL_ID_HERE";
    static final String MODEL_VERSION_ID = "YOUR_MODEL_VERSION_HERE";
    static final String DATASET_USER_ID = "YOUR_DATASET_USER_ID_HERE";
    static final String DATASET_APP_ID = "YOUR_DATASET_APP_ID_HERE";
    static final String DATASET_ID = "YOUR_DATASET_ID_HERE";
    static final String DATASET_VERSION_ID = "YOUR_DATASET_VERSION_ID_HERE";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////
    
    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
                .withCallCredentials(new ClarifaiCallCredentials(PAT));

        MultiEvalMetricsResponse postEvaluationsResponse = stub.postEvaluations(
                PostEvaluationsRequest.newBuilder()
                        .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
                        .addEvalMetrics(
                                EvalMetrics.newBuilder()
                                        .setModel(Model.newBuilder()
                                                .setAppId(MODEL_APP_ID)
                                                .setUserId(MODEL_USER_ID)
                                                .setId(MODEL_ID)
                                                .setModelVersion(ModelVersion.newBuilder()
                                                        .setId(MODEL_VERSION_ID)
                                                )
                                        )
                                        .setGroundTruthDataset(Dataset.newBuilder()
                                                .setUserId(DATASET_USER_ID)
                                                .setAppId(DATASET_APP_ID)
                                                .setId(DATASET_ID)
                                                .setVersion(DatasetVersion.newBuilder()
                                                        .setId(DATASET_VERSION_ID)
                                                )
                                        )
                        )
                        .build()
        );

        if (postEvaluationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Evaluate model failed, status: " + postEvaluationsResponse.getStatus());
        }

    }

}
