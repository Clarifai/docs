package com.clarifai.example;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.StatusCode;
import com.google.protobuf.Struct;
import com.google.protobuf.Value;

public class ClarifaiExample {

    //////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication and app ID. 
    // Change these strings to run your own example.
    //////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";

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
                            Annotation.newBuilder().setAnnotationInfo(
                                Struct.newBuilder()
                                .putFields("type", Value.newBuilder().setStringValue("animal").build())
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
        for (Hit hit : postAnnotationsSearchesResponse.getHitsList()) {
            System.out.printf("\tScore %.2f for annotation %s of input %s\n", hit.getScore(), hit.getAnnotation().getId(), hit.getInput().getId());
        }

    }

}