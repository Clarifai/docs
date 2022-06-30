package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.*;

public class ClarifaiExample {

    /////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and input IDs.
    // Change these strings to run your own example.
    /////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to list your own annotations
    static final String INPUT_ID_1 = "c9cbb1c90cf24bc98bfd2e529e744ca9";
    static final String INPUT_ID_2 = "a8748df4938447e4844b2f505c8eaaef";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////	

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));

        MultiAnnotationResponse listAnnotationsResponse = stub.listAnnotations(
            ListAnnotationsRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
            .addInputIds(INPUT_ID_1)
            .addInputIds(INPUT_ID_2)
            .setPerPage(10)
            .setPage(1) // Pages start at 1
            .build()
        );

        if (listAnnotationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("List annotations failed, status: " + listAnnotationsResponse.getStatus());
        }

        for (Annotation annotation: listAnnotationsResponse.getAnnotationsList()) {
            System.out.println(annotation);
        }

    }

}