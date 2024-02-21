package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.google.protobuf.Struct;
import com.google.protobuf.Value;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.*;

public class ClarifaiExample {

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and the details of the extraction job.
    // Change these strings to run your own example.
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to make your own extraction
    static final String INPUTS_JOB_ID = "";
    static final String CLOUD_STORAGE_URL = "s3://samples.clarifai.com/storage/";
    static final String CUSTOM_METADATA_1 = "id";
    static final String CUSTOM_METADATA_2 = "id001";
    static final String DATASET_ID_1 = "dataset-1";
    static final String CONCEPT_ID_1 = "lamborghini23_A";
    static final String CONCEPT_ID_2 = "spiderman_a";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
                .withCallCredentials(new ClarifaiCallCredentials(PAT));

        MultiInputsAddJobResponse postInputsResponse = stub.postInputsDataSources(
                PostInputsDataSourcesRequest.newBuilder()
                        .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
                        .setAppPat(PAT)
                        .addDataSources(InputsDataSource.newBuilder().setInputsAddJobId(INPUTS_JOB_ID)
                                .setUrl(DataSourceURL.newBuilder()
                                        .setUrl(CLOUD_STORAGE_URL)
                                )
                                .setInputTemplate(Input.newBuilder()
                                        .addDatasetIds(DATASET_ID_1)
                                        .setData(Data.newBuilder()
                                                .setMetadata(
                                                        Struct.newBuilder()
                                                                .putFields(CUSTOM_METADATA_1, Value.newBuilder().setStringValue(CUSTOM_METADATA_2).build())
                                                )
                                                .addConcepts(Concept.newBuilder()
                                                        .setId(CONCEPT_ID_1)
                                                        .setValue(1f)
                                                )
                                                .addConcepts(Concept.newBuilder()
                                                        .setId(CONCEPT_ID_2)
                                                        .setValue(1f)
                                                )
                                        ))
                        ).build()
        );

        if (postInputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post inputs failed, status: " + postInputsResponse.getStatus());
        }

        System.out.println(postInputsResponse);

    }

}
