package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.BaseResponse;
import com.clarifai.grpc.api.status.StatusCode;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;

public class ClarifaiExample {
    
    ////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and task IDs. 
    // Change these strings to run your own example.
    ///////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    // Your PAT (Personal Access Token) can be found in the Account's Security section
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to delete your own tasks
    static final String TASK_ID_1 = "d9dc9104afd84332a6dd95dd71a38d19";
    static final String TASK_ID_2 = "e2aff7156fac416e86fee02a1c1cb2f3";
    
    //////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    //////////////////////////////////////////////////////////////////////////////////	

    public static void main(String[] args) {        
        
        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));        

        BaseResponse deleteTasksResponse = stub.deleteTasks(
            DeleteTasksRequest.newBuilder()
                .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
                .addIds(TASK_ID_1)
                .addIds(TASK_ID_2)
                .build()
        );
       
        if (deleteTasksResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Delete tasks failed, status: " + deleteTasksResponse.getStatus());
        }
    }
}
