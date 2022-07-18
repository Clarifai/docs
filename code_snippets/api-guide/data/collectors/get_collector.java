package com.clarifai.example;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

public class ClarifaiExample {

    ///////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and ID of the collector
    // we want its details. Change these strings to run your own example.
    //////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";  
    // Change this to get your own collector
    static final String COLLECTOR_ID = "YOUR_COLLECTOR_ID_HERE";
       
    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));          

        SingleCollectorResponse getCollectorResponse = stub.getCollector(
            GetCollectorRequest.newBuilder()
                .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
                .setCollectorId(COLLECTOR_ID)
                .build()
        );

        if (getCollectorResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Get collector failed, status: " + getCollectorResponse.getStatus());
        }

        System.out.println(getCollectorResponse.getCollector());  
    }  
}