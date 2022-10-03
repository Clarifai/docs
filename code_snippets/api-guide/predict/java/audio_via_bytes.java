package com.clarifai.example;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.StatusCode;
import com.google.protobuf.ByteString;

public class ClarifaiExample {

    ///////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, workflow ID, and
    // audio file location. Change these strings to run your own example.
    ///////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to make your own predictions
    static final String WORKFLOW_ID = "my-custom-workflow";
    static final String AUDIO_FILE_LOCATION = "YOUR_AUDIO_FILE_LOCATION_HERE";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    public static void main(String[] args) throws IOException {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));

        PostWorkflowResultsResponse postWorkflowResultsResponse = stub.postWorkflowResults(
            PostWorkflowResultsRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
            .setWorkflowId(WORKFLOW_ID)
            .addInputs(
                Input.newBuilder().setData(
                    Data.newBuilder().setAudio(
                        Audio.newBuilder().setBase64(ByteString.copyFrom(Files.readAllBytes(
                                new File(AUDIO_FILE_LOCATION).toPath()
                                )))
                    )
                )
            )
            .build()
        );

        if (postWorkflowResultsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post workflow results failed, status: " + postWorkflowResultsResponse.getStatus());
        }

        // We'll get one WorkflowResult for each input we used above. Because of one input, we have here
        // one WorkflowResult
        WorkflowResult results = postWorkflowResultsResponse.getResults(0);

        // Each model we have in the workflow will produce its output
        for (Output output: results.getOutputsList()) {
            Model model = output.getModel();
            System.out.println("Output for the model: `" + model.getId() + "`");   
            for (Concept concept: output.getData().getConceptsList()) {       
            	System.out.printf("\t%s %.2f%n",concept.getName(), concept.getValue());                 
            }
            System.out.println(output.getData().getText().getRaw());
        }

    }

}