package com.clarifai.example;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    ///////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and the concepts we  
    // we want to search by. Change these strings to run your own example.
    //////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to search by your own concepts
    static final String CONCEPT_ID_1 = "cat";
    static final String CONCEPT_ID_2 = "dog";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));

        // Here we search for images which we labeled with "cat" and for which the General prediction model does not find
        // a "dog" concept.
        MultiSearchResponse postAnnotationsSearchesResponse = stub.postAnnotationsSearches(
            PostAnnotationsSearchesRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
            .addSearches(
                Search.newBuilder().setQuery(
                    Query.newBuilder()
                    .addFilters(
                        Filter.newBuilder().setAnnotation(
                            Annotation.newBuilder().setData(
                                Data.newBuilder().addConcepts( // You can search by multiple concepts
                                    Concept.newBuilder()
                                    .setId(CONCEPT_ID_1) // You could search by concept Name as well
                                    .setValue(1f) // Value of 0 will search for images that don't have the concept
                                )
                            )
                        )
                    )
                    .addRanks(
                        Rank.newBuilder().setAnnotation(
                            Annotation.newBuilder().setData(
                                Data.newBuilder().addConcepts( // You can search by multiple concepts
                                    Concept.newBuilder()
                                    .setId(CONCEPT_ID_2) // You could search by concept Name as well
                                    .setValue(1f) // Value of 0 will search for images that don't have the concept
                                )
                            )
                        )
                    )
                )
            )
            .build()
        );

        if (postAnnotationsSearchesResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post annotations searches failed, status: " + postAnnotationsSearchesResponse.getStatus());
        }

        System.out.println("Found inputs " + postAnnotationsSearchesResponse.getHitsCount() + ":");
        for (Hit hit: postAnnotationsSearchesResponse.getHitsList()) {
            System.out.printf("\tScore %.2f for annotation %s of input %s\n", hit.getScore(), hit.getAnnotation().getId(), hit.getInput().getId());
        }

    }

}