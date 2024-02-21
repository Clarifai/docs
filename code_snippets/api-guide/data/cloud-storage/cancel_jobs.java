package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.*;

public class ClarifaiExample {

    //////////////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and the inputs extraction job ID.
    // Change these strings to run your own example.
    //////////////////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change this ID to whatever inputs you want to cancel their upload process
    static final String INPUTS_EXTRACTION_JOB_ID = "2a6f1f69cced42029986a72009e7d4da";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    public static void main(String[] args) {
        
        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
                .withCallCredentials(new ClarifaiCallCredentials(PAT));
        
        MultiInputsExtractionJobResponse cancelInputsResponse = stub.cancelInputsExtractionJobs(
                CancelInputsExtractionJobsRequest.newBuilder()
                        .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
                        .addIds(INPUTS_EXTRACTION_JOB_ID)
                        .build()
        );
        
        if (cancelInputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post inputs failed, status: " + cancelInputsResponse.getStatus());
        }
        
        System.out.println(cancelInputsResponse);
        
    }
    
}
