package com.clarifai.example;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    //////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and the details of the
    // concepts we want to link. Change these strings to run your own example.
    /////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to link your own concepts
    // Run this code three times; once for each concept you want to link
    static final String MODEL_CONCEPT_ID = "YOUR_MODEL_CONCEPT_ID";
    static final String GENERAL_MODEL_CONCEPT_ID = "GENERAL_MODEL_CONCEPT_ID";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));

        MultiConceptRelationResponse postConceptRelationsResponse = stub.postConceptRelations(
            PostConceptRelationsRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
            .setConceptId(MODEL_CONCEPT_ID)
            .addConceptRelations(
                ConceptRelation.newBuilder()
                .setObjectConcept(
                    Concept.newBuilder()
                    .setId(GENERAL_MODEL_CONCEPT_ID)
                    .setAppId("main")
                )
                .setPredicate("synonym").build())
            .build()
        );

        if (postConceptRelationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post concept relations failed, status: " + postConceptRelationsResponse.getStatus());
        }

    }

}