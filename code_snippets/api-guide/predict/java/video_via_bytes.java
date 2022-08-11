package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.StatusCode;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import com.google.protobuf.ByteString;

public class ClarifaiExample {

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, model details, location of the video
    // we want as an input, and sample_ms. Change these strings to run your own example.
    //////////////////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to whatever model and video input you want to use
    static final String MODEL_ID = "general-image-recognition";
    static final String MODEL_VERSION_ID = "aa7f35c01e0642fda5cf400f543e7c40";
    static final String VIDEO_FILE_LOCATION = "YOUR_VIDEO_FILE_LOCATION_HERE";
    // Change this to configure the FPS rate (If it's not configured, it defaults to 1 FPS)
    static final int SAMPLE_MS = 500;

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
                    Data.newBuilder().setVideo(
                        Video.newBuilder()
                        .setBase64(ByteString.copyFrom(Files.readAllBytes(
                            new File(VIDEO_FILE_LOCATION).toPath()
                        )))
                    )
                )
            )
            .setModel(
                Model.newBuilder().setOutputInfo(
                    OutputInfo.newBuilder().setOutputConfig(
                        OutputConfig.newBuilder().setSampleMs(SAMPLE_MS)
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

        // A separate prediction is available for each "frame"
        for (Frame frame: output.getData().getFramesList()) {
            System.out.println("Predicted concepts on frame " + frame.getFrameInfo().getTime() + ":");
            for (Concept concept: frame.getData().getConceptsList()) {
                System.out.printf("\t%s %.2f%n", concept.getName(), concept.getValue());
            }
        }

    }

}