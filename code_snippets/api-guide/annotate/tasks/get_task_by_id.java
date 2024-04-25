package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.StatusCode;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;

public class ClarifaiExample {

    /////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and task ID.
    // Change these strings to run your own example.
    /////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    // Your PAT (Personal Access Token) can be found in the Account's Security section	
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change this to get a task by its ID
    static final String TASK_ID = "6e71ff53fd7d4e32a1a7026737c25cb4";

    //////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    //////////////////////////////////////////////////////////////////////////////////	

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));

        SingleTaskResponse getTaskResponse = stub.getTask(
            GetTaskRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
            .setTaskId(TASK_ID)
            .build()
        );

        if (getTaskResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Get tasks failed, status: " + getTaskResponse.getStatus());
        }

        System.out.println(getTaskResponse);
    }
}