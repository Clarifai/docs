package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    ///////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, input ID, annotation ID, 
    // concept ID, and region ID. Change these strings to run your own example.
    //////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these based on the annotation you want to update
    static final String INPUT_ID = "c9cbb1c90cf24bc98bfd2e529e744ca9";
    static final String ANNOTATION_ID = "08d3b9b81432477fb5522d3fb1d1a6f4";
    static final String CONCEPT_ID = "apple";
    static final String REGION_ID = "361d6a9253be9152968012660258a4bf";

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
                .setData(
                    Data.newBuilder().addRegions(
                        Region.newBuilder()
                        .setId(REGION_ID) // this should be the region id of this annotation
                        .setData(
                            Data.newBuilder().addConcepts(
                                Concept.newBuilder()
                                .setId(CONCEPT_ID)
                                .setValue(1f) // 1 means true, this concept is present
                                .build()
                            )
                        ).build()
                    ).build()
                )
                .build()
            ).build()
        );

        if (patchAnnotationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Patch annotations failed, status: " + patchAnnotationsResponse.getStatus());
        }

    }

}