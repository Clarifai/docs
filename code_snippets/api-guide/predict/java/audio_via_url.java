package com.clarifai.example;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    //////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, user and app ID, model ID, and
    // audio URL. Change these strings to run your own example.
    //////////////////////////////////////////////////////////////////////////////////////
    
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    // Specify the correct user_id/app_id pairings
    // Since you're making inferences outside your app's scope
    static final String USER_ID = "facebook";
    static final String APP_ID = "asr";
    // Change these to make your own predictions
    static final String MODEL_ID = "asr-wav2vec2-base-960h-english";
    static final String AUDIO_URL = "https://samples.clarifai.com/negative_sentence_1.wav";

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
                        .addInputs(
                                Input.newBuilder().setData(
                                        Data.newBuilder().setAudio(
                                                Audio.newBuilder().setUrl(AUDIO_URL)
                                        )
                                )
                        )
                        .build()
        );

        if (postModelOutputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            System.out.println(postModelOutputsResponse.getStatus());
            throw new RuntimeException("Post workflow results failed, status: " + postModelOutputsResponse.getStatus().getDescription());
        }

        Output output = postModelOutputsResponse.getOutputs(0);

        // Print the output
        System.out.println(output.getData().getText().getRaw());

    }

}
