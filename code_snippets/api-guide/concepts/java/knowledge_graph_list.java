package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    ////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, concept ID, and predicate. 
    // Change these strings to run your own example.
    ////////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication	
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to whatever concept you want to list its relations
    static final String CONCEPT_ID = "honey";
    static final String PREDICATE = "hypernym"; // This is optional. If skipped, all concept's relations will be returned

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////	

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));

        MultiConceptRelationResponse listConceptRelationsResponse = stub.listConceptRelations(
            ListConceptRelationsRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID).build())
            .setConceptId(CONCEPT_ID)
            .setPredicate(PREDICATE)
            .build()
        );

        if (listConceptRelationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("List concept relations failed, status: " + listConceptRelationsResponse.getStatus());
        }

        for (ConceptRelation relation: listConceptRelationsResponse.getConceptRelationsList()) {
            System.out.println(relation);
        }

    }

}