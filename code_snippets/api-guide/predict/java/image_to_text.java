package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.StatusCode;

import com.google.protobuf.ByteString;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

public class ClarifaiExample {

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, user and app ID, model details, and the URL
    // of the image we want as an input. Change these strings to run your own example.
    ///////////////////////////////////////////////////////////////////////////////////////////////////

    // Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    // Specify the correct user_id/app_id pairings
    // Since you're making inferences outside your app's scope
    static final String USER_ID = "salesforce";
    static final String APP_ID = "blip";
    // Change these to whatever model and image URL you want to use
    static final String MODEL_ID = "general-english-image-caption-blip";
    static final String MODEL_VERSION_ID = "cdb690f13e62470ea6723642044f95e4";
    static final String IMAGE_URL = "https://samples.clarifai.com/metro-north.jpg";
    // Or, to use a local image file, assign the location variable
    //static final String IMAGE_FILE_LOCATION = "YOUR_IMAGE_FILE_LOCATION_HERE";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////	

    public static void main(String[] args) throws IOException {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
                .withCallCredentials(new ClarifaiCallCredentials(PAT));

        MultiOutputResponse postModelOutputsResponse = stub.postModelOutputs(
                PostModelOutputsRequest.newBuilder()
                        .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
                        .setModelId(MODEL_ID)
                        .setVersionId(MODEL_VERSION_ID) // This is optional. Defaults to the latest model version.
                        .addInputs(
                                Input.newBuilder().setData(
                                        Data.newBuilder().setImage(
                                                Image.newBuilder().setUrl(IMAGE_URL)
                                        // Image.newBuilder().setBase64(ByteString.copyFrom(Files.readAllBytes(
                                        // new File(IMAGE_FILE_LOCATION).toPath()
                                        // )))
                                        )
                                )
                        )
                        .build()
        );

        if (postModelOutputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post model outputs failed, status: " + postModelOutputsResponse.getStatus());
        }

        // Since we have one input, one output will exist here.
        Output output = postModelOutputsResponse.getOutputs(0);

        System.out.println("Image caption:");
        System.out.println(output.getData().getText().getRaw());

        // Uncomment this line to print the full Response JSON
        // System.out.println(output);
    }

}
