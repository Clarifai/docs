package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.StatusCode;
import com.google.protobuf.Struct;
import com.google.protobuf.Value;

public class ClarifaiExample {

    ////////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, model ID, and model ZIP URL.
    // Change these strings to run your own example.
    ////////////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    // Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to import your own model    
    static final String MODEL_ID = "embedding-model";
    static final String MODEL_ZIP_URL = "s3://clarifai-testing-persistent-data/test_triton_upload/jina-embeddings-v2-base-en.zip";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////	
    
    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
                .withCallCredentials(new ClarifaiCallCredentials(PAT));

        Struct.Builder input__fields_params = Struct.newBuilder()
                .putFields("text", Value.newBuilder().setStringValue("text").build());

        Struct.Builder output__fields_params = Struct.newBuilder()
                .putFields("embeddings", Value.newBuilder().setStringValue("embeddings").build());

        SingleModelResponse postModelVersionsResponse = stub.postModelVersions(
                PostModelVersionsRequest.newBuilder()
                        .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
                        .setModelId(MODEL_ID)
                        .addModelVersions(ModelVersion.newBuilder()
                                .setPretrainedModelConfig(PretrainedModelConfig.newBuilder()
                                        .setInputFieldsMap(input__fields_params)
                                        .setOutputFieldsMap(output__fields_params)
                                        .setModelZipUrl(MODEL_ZIP_URL)
                                )
                        )
                        .build()
        );

        if (postModelVersionsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post model outputs failed, status: " + postModelVersionsResponse.getStatus());
        }

    }
}
