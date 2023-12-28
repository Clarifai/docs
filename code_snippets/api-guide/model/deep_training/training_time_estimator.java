package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.StatusCode;
import com.google.protobuf.Struct;
import com.google.protobuf.Value;

public class ClarifaiExample {

    //////////////////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, model ID, and estimated input count.
    // Change these strings to run your own example.
    /////////////////////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    // Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to get your training time estimate
    static final String MODEL_ID = "YOUR_CUSTOM_MODEL_ID_HERE";
    static final int ESTIMATED_INPUT_COUNT = 100;

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////	

    public static void main(String[] args) {
        
        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
                .withCallCredentials(new ClarifaiCallCredentials(PAT));
        
        Struct.Builder params = Struct.newBuilder()
                .putFields("template", Value.newBuilder().setStringValue("MMDetection_FasterRCNN").build());
        
        MultiTrainingTimeEstimateResponse trainingTimeEstimateResponse = stub.postModelVersionsTrainingTimeEstimate(
                PostModelVersionsTrainingTimeEstimateRequest.newBuilder()
                        .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
                        .setModelId(MODEL_ID)
                        .addModelVersions(ModelVersion.newBuilder()
                                .setTrainInfo(TrainInfo.newBuilder()
                                        .setParams(params)
                                )
                        )
                        .setEstimatedInputCount(ESTIMATED_INPUT_COUNT)
                        .build()
        );
        
        if (trainingTimeEstimateResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post model outputs failed, status: " + trainingTimeEstimateResponse.getStatus());
        }
        
        System.out.print(trainingTimeEstimateResponse);
        
    }
}
