package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.BaseResponse;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    /////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, input IDs, 
    // and annotation IDs. Change these strings to run your own example.
    //////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these based on the annotations you want to bulk delete 
    static final String INPUT_ID_1 = "c99f1b557d1d43d1916b46f8ce4a0487";
    static final String INPUT_ID_2 = "7c5f489bcafe43fe8a71c68091cb64ce";
    static final String ANNOTATION_ID_1 = "9bcbdbc381c34a6da64bb3d635e82833";
    static final String ANNOTATION_ID_2 = "e5f8310fbd824354b657050132311e64";

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
            .addIds(ANNOTATION_ID_1)
            .addIds(ANNOTATION_ID_2)
            .build()
        );

        if (deleteAnnotationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Delete annotations failed, status: " + deleteAnnotationsResponse.getStatus());
        }

    }

}