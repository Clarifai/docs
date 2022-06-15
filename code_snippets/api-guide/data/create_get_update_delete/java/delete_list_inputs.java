package com.clarifai.example;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

public class ClarifaiExample {

    ///////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and the IDs of the
    // inputs we want to delete. Change these strings to run your own example.
    ///////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID =  "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these based on the inputs you want to delete
    static final String INPUT_ID_1 = "d4319bb362d9487e812970a3ed9ba028";
    static final String INPUT_ID_2 = "fc449e98ce3847c788954e3fec871d02";
       
    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));      
       
        BaseResponse listInputsResponse = stub.deleteInputs(
            DeleteInputsRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
                .addIds(INPUT_ID_1)
                .addIds(INPUT_ID_2)
                .build()
        );

        if (listInputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Delete inputs failed, status: " + listInputsResponse.getStatus());
        }
                       
    }  
}