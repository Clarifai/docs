package com.clarifai.example;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

public class ClarifaiExample {

    /////////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and input ID and concept IDs
    // we want to update. Change these strings to run your own example.
    ////////////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these based on the update you want to make
    static final String INPUT_ID = "7c5f489bcafe43fe8a71c68091cb64ce";
    static final String CONCEPT_ID_1 = "tree";
    static final String CONCEPT_ID_2 = "water";
       
    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));    
               
        MultiInputResponse patchInputsResponse = stub.patchInputs(
            PatchInputsRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
                .setAction("merge")  // Supported actions: overwrite, merge, remove
                .addInputs(
                    Input.newBuilder()
                        .setId(INPUT_ID)
                        .setData(
                            Data.newBuilder()
                                .addConcepts(
                                    Concept.newBuilder()
                                        .setId(CONCEPT_ID_1)
                                        .setValue(1f)  // 1 means true, this concept is present
                                )
                                .addConcepts(
                                    Concept.newBuilder()
                                        .setId(CONCEPT_ID_2)
                                        .setValue(0f)  // 0 means false, this concept is not present
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