package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.Status;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    //////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, input ID, and  
    // annotation ID. Change these strings to run your own example.
    //////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these based on the annotation status you want to update
    static final String INPUT_ID = "3232a6fd32544c6a902c2cb0103034ff";
    static final String ANNOTATION_ID = "3377446a88714ba78654f2cf811c2211";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////	

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));

        MultiAnnotationResponse patchAnnotationsResponse = stub.patchAnnotations(
            PatchAnnotationsRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
            .setAction("merge") // Supported actions: overwrite, merge, remove
            .addAnnotations(
                Annotation.newBuilder()
                .setInputId(INPUT_ID)
                .setId(ANNOTATION_ID)
                .setStatus(
                    Status.newBuilder()
                    .setCodeValue(StatusCode.ANNOTATION_SUCCESS_VALUE)
                    .build()
                )
                .build()
            ).build()
        );

        if (patchAnnotationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("patch annotations failed, status: " + patchAnnotationsResponse.getStatus());
        }

    }

}