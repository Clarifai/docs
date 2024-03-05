package com.clarifai.example;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.StatusCode;

import com.google.protobuf.ByteString;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

public class ClarifaiExample {

    /////////////////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, user and app ID, workflow ID, and the text 
    // we want as an input. Change these strings to run your own example.
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String USER_ID = "clarifai";
    static final String APP_ID = "main";
    // Change these to make your own predictions
    static final String WORKFLOW_ID = "Language-Understanding";
    static final String RAW_TEXT = "This is a test text for testing";    
    // To use a hosted text file, assign the URL variable
    // static final String TEXT_FILE_URL = "https://samples.clarifai.com/negative_sentence_12.txt";
    // Or, to use a local text file, assign the location variable
    // static final String TEXT_FILE_LOCATION = "YOUR_TEXT_FILE_LOCATION_HERE";

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
                                        Data.newBuilder().setText(
                                                Text.newBuilder().setRaw(RAW_TEXT)
                                                // Text.newBuilder().setUrl(TEXT_FILE_URL)
                                                // Text.newBuilder().setRawBytes(ByteString.copyFrom(Files.readAllBytes(
                                                       // new File(TEXT_FILE_LOCATION).toPath()
                                                //)))
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
        for (Output output : results.getOutputsList()) {
            Model model = output.getModel();

            System.out.println("Predicted concepts for the model '" + model.getId() + "'");
            
            System.out.println(output.getData());
 
        }

        // Uncomment this line to print the full Response JSON
        // System.out.println(results);
    }

}
