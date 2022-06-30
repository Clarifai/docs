package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.*;

public class ClarifaiExample {

    /////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, input IDs, and
    // annotation IDs. Change these strings to run your own example.
    /////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication	
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to list your own annotations
    static final String INPUT_ID_1 = "c9cbb1c90cf24bc98bfd2e529e744ca9";
    static final String INPUT_ID_2 = "1be923b967f148dbb4e588cf4a723da1";
    static final String ANNOTATION_ID_1 = "55ccf4250ba34592ac48fd2b839652fe";
    static final String ANNOTATION_ID_2 = "5a6dafa3864a4d768a4c32e514dd8da1";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////	

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));

        MultiAnnotationResponse listAnnotationsResponse = stub.listAnnotations(
            ListAnnotationsRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
            .setPerPage(10)
            .addInputIds(INPUT_ID_1)
            .addInputIds(INPUT_ID_2)
            .addIds(ANNOTATION_ID_1)
            .addIds(ANNOTATION_ID_2)
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