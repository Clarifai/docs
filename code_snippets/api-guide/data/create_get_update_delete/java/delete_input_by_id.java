package com.clarifai.example;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

public class ClarifaiExample {

    ///////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and the ID of the
    // input we want to delete. Change these strings to run your own example
    ///////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID =  "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change this based on the input you want to delete
    static final String INPUT_ID = "ff79664eefe94db1878f51931f9d6fd9";
       
    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));            

        BaseResponse deleteInputResponse = stub.deleteInput(
            DeleteInputRequest.newBuilder()
               .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
                .setInputId(INPUT_ID)
                .build()
        );

        if (deleteInputResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Delete input failed, status: " + deleteInputResponse.getStatus());
        }  
                       
    }  
}