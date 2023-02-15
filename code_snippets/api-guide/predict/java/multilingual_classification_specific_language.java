package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, user and app ID, model details, URL of the image
    // we want as an input, and prediction language. Change these strings to run your own example.
    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    // Specify the correct user_id/app_id pairings
    // Since you're making inferences outside your app's scope
    static final String USER_ID = "clarifai";    
    static final String APP_ID = "main";
    // Change these to whatever you want to process
    static final String MODEL_ID = "general-image-recognition";
    static final String IMAGE_URL = "https://samples.clarifai.com/metro-north.jpg";
    static final String PREDICT_LANGUAGE = "zh"; // Chinese

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
                    Data.newBuilder().setImage(
                        Image.newBuilder().setUrl(IMAGE_URL)
                    )
                )
            )
            .setModel(
                Model.newBuilder().setOutputInfo(
                    OutputInfo.newBuilder().setOutputConfig(
                        OutputConfig.newBuilder().setLanguage(PREDICT_LANGUAGE)
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

        System.out.println("Predicted concepts:");
        for (Concept concept: output.getData().getConceptsList()) {
            System.out.printf("%s %.2f%n", concept.getName(), concept.getValue());
        }

    }

}