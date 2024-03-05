package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.StatusCode;
import com.google.protobuf.ByteString;
import java.io.FileOutputStream;
import java.io.IOException;
// import java.io.File; //  Uncomment to use a local text file
// import java.nio.file.Files; //  Uncomment to use a local text file

public class ClarifaiExample {

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, user and app ID, model details, and the prompt text we want
    // to provide as an input. Change these strings to run your own example.
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    // Specify the correct user_id/app_id pairings
    // Since you're making inferences outside your app's scope
    static final String USER_ID = "stability-ai";
    static final String APP_ID = "stable-diffusion-2";
    // Change these to whatever model you want to use
    static final String MODEL_ID = "stable-diffusion-xl";
    static final String MODEL_VERSION_ID = "0c919cc1edfc455dbc96207753f178d7";
    static final String RAW_TEXT = "A penguin watching the sunset.";
    // To use a hosted text file, assign the URL variable
    // static final String TEXT_FILE_URL = "https://samples.clarifai.com/negative_sentence_12.txt";
    // Or, to use a local text file, assign the location variable
    // static final String TEXT_FILE_LOCATION = "YOUR_TEXT_FILE_LOCATION_HERE";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////	
    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
                .withCallCredentials(new ClarifaiCallCredentials(PAT));

        MultiOutputResponse postModelOutputsResponse = stub.postModelOutputs(
                PostModelOutputsRequest.newBuilder()
                        .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
                        .setModelId(MODEL_ID)
                        .setVersionId(MODEL_VERSION_ID) // This is optional. Defaults to the latest model version.
                        .addInputs(
                                Input.newBuilder().setData(
                                        Data.newBuilder().setText(
                                                Text.newBuilder().setRaw(RAW_TEXT)
                                        // Text.newBuilder().setUrl(TEXT_FILE_URL)
                                        // Text.newBuilder().setRawBytes(ByteString.copyFrom(Files.readAllBytes(
                                        // new File(TEXT_FILE_LOCATION).toPath()
                                        // )))
                                        )
                                )
                        )
                        .build()
        );

        if (postModelOutputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post model outputs failed, status: " + postModelOutputsResponse.getStatus());
        }

        // Extract the base64-encoded image data
        ByteString imageData = postModelOutputsResponse.getOutputs(0).getData().getImage().getBase64();

        // Save the image to a file
        try {
            FileOutputStream outputStream = new FileOutputStream("gen-image.jpg");
            outputStream.write(imageData.toByteArray());
            outputStream.close();
        } catch (IOException e) {
            System.err.println("Error writing image to file: " + e.getMessage());
            System.exit(1);
        }

    }
}
