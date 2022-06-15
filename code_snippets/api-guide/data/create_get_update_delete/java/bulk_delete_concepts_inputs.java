package com.clarifai.example;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

public class ClarifaiExample {

    ///////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and the inputs and
    // concepts IDs. Change these strings to run your own example.
    ///////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these based on the concepts you want to remove
    static final String INPUT_ID_1 = "ff79664eefe94db1878f51931f9d6fd9";
    static final String INPUT_ID_2 = "f54b89ef64874888a64f7016cf6f33ad";
    static final String CONCEPT_ID_1 = "tree";
    static final String CONCEPT_ID_2 = "water";
    static final String CONCEPT_ID_3 = "animal";
    static final String CONCEPT_ID_4 = "fruit";
       
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
                        .setId(INPUT_ID_1)
                        .setData(
                            Data.newBuilder()
                                // We're removing the concepts, so there's no need to specify
                                // the concept value
                                .addConcepts(
                                    Concept.newBuilder().setId(CONCEPT_ID_1)
                                )
                                .addConcepts(
                                    Concept.newBuilder().setId(CONCEPT_ID_2)
                                )
                        )
                        .build()
                )
                .addInputs(
                    Input.newBuilder()
                        .setId(INPUT_ID_2)
                        .setData(
                            Data.newBuilder()
                                .addConcepts(
                                    Concept.newBuilder().setId(CONCEPT_ID_3)
                                )
                                .addConcepts(
                                    Concept.newBuilder().setId(CONCEPT_ID_4)
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