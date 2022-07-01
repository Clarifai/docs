package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.BaseResponse;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    /////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, input ID, 
    // and annotation ID. Change these strings to run your own example.
    //////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these based on the annotation you want to delete 
    static final String INPUT_ID = "c99f1b557d1d43d1916b46f8ce4a0487";
    static final String ANNOTATION_ID = "b65d2a9106ba448382a0cee540f7c582";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////	

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));

        BaseResponse deleteAnnotationResponse = stub.deleteAnnotation(
            DeleteAnnotationRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
            .setInputId(INPUT_ID)
            .setAnnotationId(ANNOTATION_ID)
            .build()
        );

        if (deleteAnnotationResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Delete annotation failed, status: " + deleteAnnotationResponse.getStatus());
        }

    }

}