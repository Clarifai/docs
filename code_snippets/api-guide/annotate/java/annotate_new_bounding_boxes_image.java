package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    //////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and how we want to annotate
    // new bounding boxes. Change these strings to run your own example.
    /////////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication	
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these based on the new bounding boxes you want to annotate
    static final String INPUT_ID = "53d0362a9dfa4e03b2293375e2d0db73";
    static final String CONCEPT_ID_1 = "tree";
    static final String CONCEPT_ID_2 = "water";
    static final String CONCEPT_ID_3 = "bike";

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
                Annotation.newBuilder() // label a region in this image
                .setInputId(INPUT_ID)
                .setData(
                    Data.newBuilder().addRegions(
                        Region.newBuilder()
                        .setRegionInfo(
                            RegionInfo.newBuilder()
                            .setBoundingBox( // draw a bounding box
                                BoundingBox.newBuilder()
                                .setTopRow(0f)
                                .setLeftCol(0f)
                                .setBottomRow(0.5f)
                                .setRightCol(0.5f)
                                .build()
                            )
                            .build()
                        )
                        .setData(
                            Data.newBuilder()
                            .addConcepts(
                                Concept.newBuilder()
                                .setId(CONCEPT_ID_1)
                                .setValue(1f) // 1 means true, this concept is present
                                .build()
                            )
                            .addConcepts(
                                Concept.newBuilder()
                                .setId(CONCEPT_ID_2)
                                .setValue(0f) // 0 means false, this concept is not present
                                .build()
                            )
                        ).build()
                    ).build()
                )
                .build()
            ).addAnnotations( // label another region in this image
                Annotation.newBuilder()
                .setInputId(INPUT_ID)
                .setData(
                    Data.newBuilder().addRegions(
                        Region.newBuilder()
                        .setRegionInfo(
                            RegionInfo.newBuilder()
                            .setBoundingBox( // draw another bounding box
                                BoundingBox.newBuilder()
                                .setTopRow(0.6f)
                                .setLeftCol(0.6f)
                                .setBottomRow(0.8f)
                                .setRightCol(0.8f)
                                .build()
                            )
                            .build()
                        )
                        .setData(
                            Data.newBuilder()
                            .addConcepts(
                                Concept.newBuilder()
                                .setId(CONCEPT_ID_3)
                                .setValue(1f) // 1 means true, this concept is present
                                .build()
                            )
                        ).build()
                    ).build()
                ).build()
            ).build()
        );

        if (postAnnotationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post annotations failed, status: " + postAnnotationsResponse.getStatus());
        }

    }

}