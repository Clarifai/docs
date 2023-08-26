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

    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, user and app ID, model details, and the location
    // of the text we want as a prompt. Change these strings to run your own example.
    /////////////////////////////////////////////////////////////////////////////////////////////////////////

    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    // Specify the correct user_id/app_id pairings
    // Since you're making inferences outside your app's scope
    static final String USER_ID = "meta";    
    static final String APP_ID = "Llama-2";
    // Change these to whatever model and text input you want to use
    static final String MODEL_ID = "llama2-7b-chat"; 
    static final String MODEL_VERSION_ID = "e52af5d6bc22445aa7a6761f327f7129";   
    static final String TEXT_FILE_LOCATION = "YOUR_TEXT_FILE_LOCATION_HERE";
   
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
            .setVersionId(MODEL_VERSION_ID) // This is optional. Defaults to the latest model version
            .addInputs(
                Input.newBuilder().setData(
                    Data.newBuilder().setText(
                        Text.newBuilder()
                        .setRawBytes(ByteString.copyFrom(Files.readAllBytes(
                            new File(TEXT_FILE_LOCATION).toPath()
                        )))
                    )
                )
            )
            .build()
        );

        if (postModelOutputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post model outputs failed, status: " + postModelOutputsResponse.getStatus());
        }

        // Since we have one input, one output will exist here
        Output output = postModelOutputsResponse.getOutputs(0);

        System.out.println("Completion:");
        System.out.println(output.getData().getText().getRaw());

    }

}