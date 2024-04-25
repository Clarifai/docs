package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.TaskWorkerPartitionedStrategyInfo.TaskWorkerPartitionedStrategy;
import com.clarifai.grpc.api.status.Status;
import com.clarifai.grpc.api.status.StatusCode;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.google.protobuf.Struct;
import com.google.protobuf.Value;

public class ClarifaiExample {
    
    // In this section, we set the user authentication, app ID, and details for updating a task.
    // Change these strings to run your own example.

    static final String USER_ID = "YOUR_USER_ID_HERE";
    // Your PAT (Personal Access Token) can be found in the Account's Security section	
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to update your own task
    static final String TASK_ID = "c454edb9446c4de58d4fe3a66c286e55";
    static final String CONCEPT_ID = "water";
    static final String USER_ID_1 = "USER_ID_1_HERE";
    static final String USER_ID_2 = "USER_ID_2_HERE";
    static final String USER_ID_3 = "USER_ID_3_HERE";
    static final String USER_ID_4 = "USER_ID_4_HERE"; // User who will review the task
    
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE

    public static void main(String[] args) {
        
        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));
        
        Struct.Builder params = Struct.newBuilder()
            .putFields(USER_ID_1, Value.newBuilder().setNumberValue(1).build())
            .putFields(USER_ID_2, Value.newBuilder().setNumberValue(1).build())
            .putFields(USER_ID_3, Value.newBuilder().setNumberValue(1).build());
        
        MultiTaskResponse patchTasksResponse = stub.patchTasks(
            PatchTasksRequest.newBuilder()
                .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))                
                .setAction("overwrite")
                .addTasks(Task.newBuilder()
                	.setId(TASK_ID)
                    .setType(Task.TaskType.CONCEPTS_CLASSIFICATION)
                    .setName("Annotate " + CONCEPT_ID)	
                    .setWorker(TaskWorker.newBuilder()
                        .setStrategy(TaskWorker.TaskWorkerStrategy.PARTITIONED)
                        .setPartitionedStrategyInfo(TaskWorkerPartitionedStrategyInfo.newBuilder()
                        		.setType(TaskWorkerPartitionedStrategy.WEIGHTED)
                        		.setWorkersPerInput(3)
                        		.setWeights(params)
                        		.build())
                        .addWorkers(Worker.newBuilder()
                        		.setUser(User.newBuilder().setId(USER_ID_1))
                        		.build())
                        .addWorkers(Worker.newBuilder()
                        		.setUser(User.newBuilder().setId(USER_ID_2))
                        		.build())
                        .addWorkers(Worker.newBuilder()
                        		.setUser(User.newBuilder().setId(USER_ID_3))
                        		.build())
                        .build())
                    .addConcepts(TaskConcept.newBuilder()
                        .setConcept(Concept.newBuilder()
                            .setId(CONCEPT_ID)
                            .build())
                        .build())
                    .setInputSource(TaskInputSource.newBuilder()
                        .setType(TaskInputSource.TaskInputSourceType.ALL_INPUTS)
                        .build())
                    .setSampleMs(1000)
                    .setReview(TaskReview.newBuilder()
                        .setStrategy(TaskReview.TaskReviewStrategy.CONSENSUS)
                        .setConsensusStrategyInfo(TaskReviewConsensusStrategyInfo.newBuilder()
                        		.setApprovalThreshold(2)
                        		.build())
                        .addUsers(User.newBuilder().setId(USER_ID_4).build()) 
                        .build())
                    .setStatus(Status.newBuilder()
                    		.setCode(StatusCode.TASK_DONE).build())
                    .build())
            .build()
        );

        if (patchTasksResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Patch tasks failed, status: " + patchTasksResponse.getStatus());
        }
    }
}
