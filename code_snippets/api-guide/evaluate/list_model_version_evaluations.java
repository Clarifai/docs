package com.clarifai.example;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    //////////////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and the model evaluation details.
    // Change these strings to run your own example.
    /////////////////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    // Your PAT (Personal Access Token) can be found in the Account's Security section
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to get your model evaluation results
    static final String MODEL_ID = "YOUR_MODEL_ID_HERE";
    static final String MODEL_VERSION_ID = "YOUR_MODEL_VERSION_ID_HERE";
   
    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    public static void main(String[] args) {
        
        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
                .withCallCredentials(new ClarifaiCallCredentials(PAT));
        
        MultiEvalMetricsResponse listEvaluationsResponse = stub.listModelVersionEvaluations(
                ListModelVersionEvaluationsRequest.newBuilder()
                        .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
                        .setModelId(MODEL_ID)
                        .setModelVersionId(MODEL_VERSION_ID)                       
                        .build()
        );
        
        if (listEvaluationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Evaluate model failed, status: " + listEvaluationsResponse.getStatus());
        }
        
        System.out.println(listEvaluationsResponse);
        
    }
    
}
