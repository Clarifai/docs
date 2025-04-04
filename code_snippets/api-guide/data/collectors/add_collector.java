package com.clarifai.example;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

public class ClarifaiExample {

    ///////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and details of the
    // collector we want to add. Change these strings to run your own example.
    ///////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to add your own collector
    static final String COLLECTOR_ID = "YOUR_COLLECTOR_ID_HERE";
    static final String COLLECTOR_DESCRIPTION = "YOUR_COLLECTOR_DESCRIPTION_HERE";
    static final String PRE_QUEUE_WORKFLOW_ID = "YOUR_PRE_WORKFLOW_ID_HERE";
    static final String POST_QUEUE_WORKFLOW_ID = "YOUR_POST_WORKFLOW_ID_HERE";
    static final String MODEL_ID = "YOUR_MODEL_ID_HERE";
    static final String MODEL_VERSION_ID = "YOUR_MODEL_VERSION_ID_HERE";
    static final String POST_INPUTS_KEY_ID = "YOUR_API_KEY_HERE";    
    static final String CALLER_USER_ID = "YOUR_CALLER_USER_ID_HERE";   
       
    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));      
       
        MultiCollectorResponse postCollectorsResponse = stub.postCollectors(
            PostCollectorsRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
                .addCollectors(
                    Collector.newBuilder()
                        .setId(COLLECTOR_ID)
                        .setDescription(COLLECTOR_DESCRIPTION)
                        .setPreQueueWorkflowId(PRE_QUEUE_WORKFLOW_ID)
                        .setPostQueueWorkflowId(POST_QUEUE_WORKFLOW_ID)
                        .setCollectorSource(
                            CollectorSource.newBuilder()
                                .setApiPostModelOutputsCollectorSource(
                                    APIPostModelOutputsCollectorSource.newBuilder()
                                        .setModelUserId(USER_ID)
                                        .setModelAppId(APP_ID)
                                        .setModelId(MODEL_ID)
                                        .setModelVersionId(MODEL_VERSION_ID)
                                        .setPostInputsKeyId(POST_INPUTS_KEY_ID)
                                        .setCallerUserId(CALLER_USER_ID)
                                )
                        )
                )
                .build()
        );

        if (postCollectorsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post collectors failed, status: " + postCollectorsResponse.getStatus());
        }
                             
    }  
}