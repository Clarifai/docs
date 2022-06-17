package com.clarifai.example;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

public class ClarifaiExample {

    ////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and IDs of the collectors
    // we want to delete. Change these strings to run your own example.
    ///////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";  
    // Change these to delete your own collectors
    static final String COLLECTOR_ID_1 = "YOUR_COLLECTOR_ID_HERE";
    static final String COLLECTOR_ID_2 = "YOUR_COLLECTOR_ID_HERE";
       
    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));    
       
        BaseResponse deleteCollectorsResponse = stub.deleteCollectors(
            DeleteCollectorsRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
                .addIds(COLLECTOR_ID_1)
                .addIds(COLLECTOR_ID_2)
                .build()
        );

        if (deleteCollectorsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Delete collectors failed, status: " + deleteCollectorsResponse.getStatus());
        }

    }  
}