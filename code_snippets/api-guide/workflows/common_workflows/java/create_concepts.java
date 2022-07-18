package com.clarifai.example;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    //////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and the details of the
    // concepts we want to create. Change these strings to run your own example.
    /////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to create your own concepts
    static final String CONCEPT_ID_1 = "peopleID";
    static final String CONCEPT_NAME_1 = "people";

    static final String CONCEPT_ID_2 = "manID";
    static final String CONCEPT_NAME_2 = "man";

    static final String CONCEPT_ID_3 = "adultID";
    static final String CONCEPT_NAME_3 = "adult";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));

        MultiConceptResponse postConceptsResponse = stub.postConcepts(
            PostConceptsRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setAppId(APP_ID))
            .addConcepts(
                Concept.newBuilder()
                .setId(CONCEPT_ID_1)
                .setName(CONCEPT_NAME_1)
            )
            .addConcepts(
                Concept.newBuilder()
                .setId(CONCEPT_ID_2)
                .setName(CONCEPT_NAME_2)
            )
            .addConcepts(
                Concept.newBuilder()
                .setId(CONCEPT_ID_3)
                .setName(CONCEPT_NAME_3)
            )
            .build()
        );

        if (postConceptsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post concepts failed, status: " + postConceptsResponse.getStatus());
        }

    }

}