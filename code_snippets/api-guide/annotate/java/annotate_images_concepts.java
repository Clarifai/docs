package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    //////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and how we want to 
    // annotate the image. Change these strings to run your own example.
    //////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication	
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these based on the image you want to annotate
    static final String INPUT_ID = "c99f1b557d1d43d1916b46f8ce4a0487";
    static final String CONCEPT_ID_1 = "tree";
    static final String CONCEPT_ID_2 = "water";

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
                .setData(
                    Data.newBuilder().addConcepts(
                        Concept.newBuilder()
                        .setId(CONCEPT_ID_1)
                        .setValue(1f) // 1 means true, this concept is present
                        .build()
                    ).addConcepts(
                        Concept.newBuilder()
                        .setId(CONCEPT_ID_2)
                        .setValue(0f) // 0 means false, this concept is not present
                        .build()
                    )
                ).build()
            ).build()
        );

        if (postAnnotationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post annotations failed, status: " + postAnnotationsResponse.getStatus());
        }

    }

}