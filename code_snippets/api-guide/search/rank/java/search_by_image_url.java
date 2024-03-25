package com.clarifai.example;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    ////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and 
    // image URL. Change these strings to run your own example.
    ////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change this to the image URL you want to search by
    static final String IMAGE_URL = "https://samples.clarifai.com/metro-north.jpg";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));

        MultiSearchResponse postInputsSearchesResponse = stub.postInputsSearches(
            PostInputsSearchesRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
            .addSearches(
                Search.newBuilder().setQuery(
                    Query.newBuilder().addRanks(
                        Rank.newBuilder().setInput(
                            Input.newBuilder().setData(
                                Data.newBuilder().setImage(
                                    Image.newBuilder()
                                    .setUrl(IMAGE_URL)
                                )
                            )
                        )
                    )
                )
            )
            .build()
        );

        if (postInputsSearchesResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post inputs searches failed, status: " + postInputsSearchesResponse.getStatus());
        }

        System.out.println("Found inputs " + postInputsSearchesResponse.getHitsCount() + ":");
        for (Hit hit : postInputsSearchesResponse.getHitsList()) {
            System.out.printf("\tScore %.2f for input %s", hit.getScore(), hit.getInput().getId());
        }

    }

}