package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    ///////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, subject concept ID, 
    // object concept ID, and predicate. Change these strings to run your own example.
    ///////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication	
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to whatever relations you want to create
    static final String SUBJECT_CONCEPT_ID = "honey";
    static final String OBJECT_CONCEPT_ID = "food";
    static final String PREDICATE = "hypernym"; // This can be hypernym, hyponym, or synonym

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////	

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));

        MultiConceptRelationResponse postConceptRelationsResponse = stub.postConceptRelations(
            PostConceptRelationsRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID).build())
            .setConceptId(SUBJECT_CONCEPT_ID)
            .addConceptRelations(
                ConceptRelation.newBuilder()
                .setObjectConcept(Concept.newBuilder().setId(OBJECT_CONCEPT_ID).build())
                .setPredicate(PREDICATE).build())
            .build()
        );

        if (postConceptRelationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post concept relations failed, status: " + postConceptRelationsResponse.getStatus());
        }

        System.out.println(postConceptRelationsResponse);

    }

}