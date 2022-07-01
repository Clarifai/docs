package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.Status;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    //////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, input ID, 
    // and another user ID. Change these strings to run your own example.
    //////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication	
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to post your own annotations
    static final String INPUT_ID = "c9cbb1c90cf24bc98bfd2e529e744ca9";
    static final String ANOTHER_USER_ID = "ANOTHER_USER_ID_HERE";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////	

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));

        MultiAnnotationResponse postAnnotationsResponse = stub.postAnnotations(
            PostAnnotationsRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
            .addAnnotations(
                Annotation.newBuilder()
                .setInputId(INPUT_ID)
                .setUserId(ANOTHER_USER_ID) // If empty, it is the user who posts this annotation
                .setStatus(
                    Status.newBuilder()
                    .setCodeValue(StatusCode.ANNOTATION_PENDING_VALUE) // annotation pending status. By default, it's ANNOTATION_SUCCESS_VALUE
                    .build()
                )
                .build()
            ).build()
        );

        if (postAnnotationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post annotations failed, status: " + postAnnotationsResponse.getStatus());
        }


    }

}