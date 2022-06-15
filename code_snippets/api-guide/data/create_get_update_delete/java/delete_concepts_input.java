package com.clarifai.example;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

public class ClarifaiExample {

    ///////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and the input and
    // concept ID. Change these strings to run your own example.
    ///////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these based on the concept you want to remove
    static final String INPUT_ID = "c99f1b557d1d43d1916b46f8ce4a0487";
    static final String CONCEPT_ID = "tree";
       
    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));        
       
        MultiInputResponse patchInputsResponse = stub.patchInputs(
            PatchInputsRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
                .setAction("remove")  // Supported actions: overwrite, merge, remove
                .addInputs(
                    Input.newBuilder()
                        .setId(INPUT_ID)
                        .setData(
                            Data.newBuilder()
                                .addConcepts(
                                    // We're removing the concept, so there's no need to specify
                                    // the concept value
                                    Concept.newBuilder().setId(CONCEPT_ID)
                                )
                        )
                        .build()
                )
                .build()
        );

        if (patchInputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Patch inputs failed, status: " + patchInputsResponse.getStatus());
        }    
         
    }  
}