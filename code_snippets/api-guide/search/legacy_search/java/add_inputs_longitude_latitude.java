package com.clarifai.example;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    ////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and the input details 
    // we want to add. Change these strings to run your own example.
    ////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication	
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to add your own input with longitude and latitude points
    static final String IMAGE_URL = "https://samples.clarifai.com/dog.tiff";
    static final float LONGITUDE = -30.0f;
    static final float LATITUDE = 40.0f;

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));

        MultiInputResponse postInputsResponse = stub.postInputs(
            PostInputsRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
            .addInputs(
                Input.newBuilder().setData(
                    Data.newBuilder()
                    .setImage(
                        Image.newBuilder()
                        .setUrl(IMAGE_URL)
                        .setAllowDuplicateUrl(true)
                    )
                    .setGeo(
                        Geo.newBuilder().setGeoPoint(
                            GeoPoint.newBuilder()
                            .setLongitude(LONGITUDE)
                            .setLatitude(LATITUDE)
                        )
                    )
                )
            ).build()
        );

        if (postInputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post inputs failed, status: " + postInputsResponse.getStatus());
        }

    }

}