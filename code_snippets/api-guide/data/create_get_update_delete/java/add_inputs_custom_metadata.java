package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;
import com.google.protobuf.Struct;
import com.google.protobuf.Value;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;

public class ClarifaiExample {

    //////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and the input  
    // we want to add. Change these strings to run your own example.
    ///////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change this to whatever input you want to add
    static final String IMAGE_URL = "https://samples.clarifai.com/puppy.jpeg";
   
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
                        .setMetadata(
                            Struct.newBuilder()
                                .putFields("id", Value.newBuilder().setStringValue("id001").build())
                                .putFields("type", Value.newBuilder().setStringValue("animal").build())
                                .putFields("size", Value.newBuilder().setNumberValue(100).build())
                        )
                )
            ).build()
        );

        if (postInputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post inputs failed, status: " + postInputsResponse.getStatus());
        }            
       
    }  
}