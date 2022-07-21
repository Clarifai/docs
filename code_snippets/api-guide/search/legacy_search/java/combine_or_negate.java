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
    static final String CONCEPT_NAME_1 = "cat";
    static final String CONCEPT_NAME_2 = "dog";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));

        // Here we search for images which we labeled with "cat" and for which the General prediction model does not find
        // a "dog" concept.
        MultiSearchResponse postSearchesResponse = stub.postSearches(
            PostSearchesRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
            .setQuery(
                Query.newBuilder()
                .addAnds(
                    And.newBuilder().setInput( // Setting Input indicates we search for images that have the concept(s)
                        // which we added to the input manually.
                        Input.newBuilder().setData(
                            Data.newBuilder().addConcepts(
                                Concept.newBuilder()
                                .setName(CONCEPT_NAME_1)
                                .setValue(1f)
                            )
                        )
                    )
                )
                .addAnds(
                    And.newBuilder().setOutput( // Setting Output indicates we search for images that have the concept(s)
                        // which were predicted by the General model.
                        Output.newBuilder().setData(
                            Data.newBuilder().addConcepts(
                                Concept.newBuilder()
                                .setName(CONCEPT_NAME_2)
                                .setValue(0f)
                            )
                        )
                    )
                )
            )
            .build()
        );

        if (postSearchesResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post searches failed, status: " + postSearchesResponse.getStatus());
        }

        System.out.println("Found inputs " + postSearchesResponse.getHitsCount() + ":");
        for (Hit hit : postSearchesResponse.getHitsList()) {
            System.out.printf("\tScore %.2f for %s\n", hit.getScore(), hit.getInput().getId());
        }

    }

}