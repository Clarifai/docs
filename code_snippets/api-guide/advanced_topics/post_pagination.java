package com.clarifai.example;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    ///////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and the concept we  
    // we want to filter by. Change these strings to run your own example.
    //////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change this to filter by your own concept
    static final String CONCEPT_ID = "people";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));

        MultiSearchResponse postAnnotationsSearchesResponse = stub.postAnnotationsSearches(
            PostAnnotationsSearchesRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
            .addSearches(
                Search.newBuilder().setQuery(
                    Query.newBuilder().addFilters(
                        Filter.newBuilder().setAnnotation(
                            Annotation.newBuilder().setData(
                                Data.newBuilder().addConcepts( // You can search by multiple concepts
                                    Concept.newBuilder()
                                    .setId(CONCEPT_ID) // You could search by concept Name as well
                                    .setValue(1f) // Value of 0 will search for images that don't have the concept
                                )
                            )
                        )
                    )
                )
            )
            .setPagination(Pagination.newBuilder().setPage(2).setPerPage(20))
            .build()
        );

        if (postAnnotationsSearchesResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post annotations searches failed, status: " + postAnnotationsSearchesResponse.getStatus());
        }

        System.out.println(postAnnotationsSearchesResponse);

    }

}