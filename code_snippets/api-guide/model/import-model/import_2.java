package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.StatusCode;
import com.google.protobuf.Struct;
import com.google.protobuf.Value;

public class ClarifaiExample {

    //////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, model ID, and concept IDs.
    // Change these strings to run your own example.
    //////////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    // Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to import your own model
    static final String MODEL_ID = "zero-shot-text-model";
    static final String CONCEPT_ID_1 = "happy";
    static final String CONCEPT_ID_2 = "sad";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////	

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
                .withCallCredentials(new ClarifaiCallCredentials(PAT));

        Struct.Builder params = Struct.newBuilder()
                .putFields("toolkit", Value.newBuilder().setStringValue("HuggingFace").build())
                .putFields("pipeline_name", Value.newBuilder().setStringValue("zero-shot-classification").build())
                .putFields("model_name", Value.newBuilder().setStringValue("facebook/bart-large-mnli").build())
                .putFields("tokenizer_config", Value.newBuilder().setStructValue(Struct.newBuilder()).build())
                .putFields("use_gpu", Value.newBuilder().setBoolValue(true).build());

        SingleModelResponse postModelVersionsResponse = stub.postModelVersions(
                PostModelVersionsRequest.newBuilder()
                        .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
                        .setModelId(MODEL_ID)
                        .addModelVersions(ModelVersion.newBuilder()
                                .setImportInfo(ImportInfo.newBuilder()
                                        .setParams(params)
                                )
                                .setOutputInfo(OutputInfo.newBuilder()
                                        .setData(Data.newBuilder()
                                                .addConcepts(Concept.newBuilder()
                                                        .setId(CONCEPT_ID_1)
                                                )
                                                .addConcepts(Concept.newBuilder()
                                                        .setId(CONCEPT_ID_2)
                                                )
                                        )
                                )
                        )
                        .build()
        );

        if (postModelVersionsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post model outputs failed, status: " + postModelVersionsResponse.getStatus());
        }

    }
}