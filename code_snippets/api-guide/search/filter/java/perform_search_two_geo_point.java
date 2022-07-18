package com.clarifai.example;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    ///////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and details of the points 
    // we want to perform a search with. Change these strings to run your own example.
    //////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to perform your own search
    static final float LONGITUDE_1 = -31.0f;
    static final float LATITUDE_1 = 42.0f;
    static final float LONGITUDE_2 = -29.0f;
    static final float LATITUDE_2 = 39.0f;

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
                                Data.newBuilder().setGeo(
                                    Geo.newBuilder()
                                    .addGeoBox(
                                        GeoBoxedPoint.newBuilder().setGeoPoint(
                                            GeoPoint.newBuilder()
                                            .setLongitude(LONGITUDE_1)
                                            .setLatitude(LATITUDE_1)
                                        )
                                    )
                                    .addGeoBox(
                                        GeoBoxedPoint.newBuilder().setGeoPoint(
                                            GeoPoint.newBuilder()
                                            .setLongitude(LONGITUDE_2)
                                            .setLatitude(LATITUDE_2)
                                        ).build()
                                    )
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
        for (Hit hit : postAnnotationsSearchesResponse.getHitsList()) {
            System.out.printf("\tScore %.2f for annotation %s of input %s\n", hit.getScore(), hit.getAnnotation().getId(), hit.getInput().getId());
        }

    }

}