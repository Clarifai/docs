package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.StatusCode;
import com.google.protobuf.Struct;
import com.google.protobuf.Value;

public class ClarifaiExample {

    //////////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, model ID, and prompter details.
    // Change these strings to run your own example.
    /////////////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    // Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to train your own model
    static final String MODEL_ID = "my-prompter-model";
    static final String PROMPTER_DESCRIPTION = "Positive or negative sentiment classifier prompter";
    static final String PROMPT_TEMPLATE = "Classify whether the sentiment of the given text is positive or negative {data.text.raw}";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////	

    public static void main(String[] args) {
        
        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
                .withCallCredentials(new ClarifaiCallCredentials(PAT));
        
        Struct.Builder params = Struct.newBuilder()
                .putFields("prompt_template", Value.newBuilder().setStringValue(PROMPT_TEMPLATE).build());
        
        SingleModelResponse postModelVersionsResponse = stub.postModelVersions(
                PostModelVersionsRequest.newBuilder()
                        .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
                        .setModelId(MODEL_ID)
                        .setDescription(PROMPTER_DESCRIPTION)
                        .addModelVersions(ModelVersion.newBuilder()
                                .setOutputInfo(OutputInfo.newBuilder()
                                        .setParams(params)
                                )
                        )
                        .build()
        );
        
        if (postModelVersionsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post model outputs failed, status: " + postModelVersionsResponse.getStatus());
        }
        
    }
}
