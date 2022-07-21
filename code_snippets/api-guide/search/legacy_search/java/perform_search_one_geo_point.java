package com.clarifai.example;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    ///////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and details of the point 
    // we want to perform a search with. Change these strings to run your own example.
    ///////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication	
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to perform your own search
    static final float LONGITUDE = -29.0f;
    static final float LATITUDE = 40.0f;

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));

        MultiSearchResponse postSearchesResponse = stub.postSearches(
            PostSearchesRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
            .setQuery(
                Query.newBuilder().addAnds(
                    And.newBuilder().setInput(
                        Input.newBuilder().setData(
                            Data.newBuilder().setGeo(
                                Geo.newBuilder()
                                .setGeoPoint(
                                    GeoPoint.newBuilder()
                                    .setLongitude(LONGITUDE)
                                    .setLatitude(LATITUDE)
                                )
                                .setGeoLimit(
                                    GeoLimit.newBuilder()
                                    .setType("withinKilometers")
                                    .setValue(150.0f)
                                )
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