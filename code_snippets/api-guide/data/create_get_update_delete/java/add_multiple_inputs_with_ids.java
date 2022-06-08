package com.clarifai.example;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;


public class ClarifaiExample {

    ////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and the URLs and IDs
    // of the images we want as inputs. Change these strings to run your own example.
    ////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to whatever inputs you want to add
    static final String IMAGE_URL_1 = "https://samples.clarifai.com/metro-north.jpg";
    static final String IMAGE_URL_2 = "https://samples.clarifai.com/puppy.jpeg";
    static final String INPUT_ID_1 = "train1";
    static final String INPUT_ID_2 = "puppy1";

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
                Input.newBuilder()
                .setId(INPUT_ID_1)
                .setData(
                    Data.newBuilder().setImage(
                        Image.newBuilder()
                        .setUrl(IMAGE_URL_1)
                        .setAllowDuplicateUrl(true)
                    )
                )
            )
            .addInputs(
                Input.newBuilder()
                .setId(INPUT_ID_2)
                .setData(
                    Data.newBuilder().setImage(
                        Image.newBuilder()
                        .setUrl(IMAGE_URL_2)
                        .setAllowDuplicateUrl(true)
                    )
                )
            )
            .build()
        );

        if (postInputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            for (Input input: postInputsResponse.getInputsList()) {
                System.out.println("Input " + input.getId() + " status: ");
                System.out.println(input.getStatus() + "\n");
            }

            throw new RuntimeException("Post inputs failed, status: " + postInputsResponse.getStatus());
        }

    }
}