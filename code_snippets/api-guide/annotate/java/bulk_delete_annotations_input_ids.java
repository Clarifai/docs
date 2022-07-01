package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.BaseResponse;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    ////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and input IDs. 
    // Change these strings to run your own example.
    ////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these based on the annotations you want to bulk delete 
    static final String INPUT_ID_1 = "b5585a6869d34c04bbcaf631e7cd5816";
    static final String INPUT_ID_2 = "a8748df4938447e4844b2f505c8eaaef";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////	

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));

        BaseResponse deleteAnnotationsResponse = stub.deleteAnnotations(
            DeleteAnnotationsRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
            .addInputIds(INPUT_ID_1)
            .addInputIds(INPUT_ID_2)
            .build()
        );

        if (deleteAnnotationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Delete annotations failed, status: " + deleteAnnotationsResponse.getStatus());
        }

    }

}