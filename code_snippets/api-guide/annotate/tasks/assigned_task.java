package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.StatusCode;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;

public class ClarifaiExample {

    ///////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and details for
    // assigning a task. Change these strings to run your own example.
    ///////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    // Your PAT (Personal Access Token) can be found in the Account's Security section	
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to assign your own task
    static final String CONCEPT_ID = "water";
    static final String WORKER_USER_ID = "WORKER_USER_ID_HERE";
    static final String REVIEWER_USER_ID = "REVIEWER_USER_ID_HERE"; // User who will review this task

    //////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    //////////////////////////////////////////////////////////////////////////////////	

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));

        MultiTaskResponse postTasksResponse = stub.postTasks(
            PostTasksRequest.newBuilder()
                .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID).build())
                .addTasks(Task.newBuilder()
                    .setType(Task.TaskType.CONCEPTS_CLASSIFICATION)
                    .setName("Annotate " + CONCEPT_ID)
                    .setWorker(TaskWorker.newBuilder()
                        .setStrategy(TaskWorker.TaskWorkerStrategy.FULL)
                        .addWorkers(Worker.newBuilder()
                            .setUser(User.newBuilder()
                                .setId(WORKER_USER_ID)
                                .build()
                            )
                        )
                        .build()
                    )
                    .addConcepts(TaskConcept.newBuilder()
                        .setConcept(Concept.newBuilder()
                            .setId(CONCEPT_ID)
                            .build()
                        )
                        .build()
                    )
                    .setInputSource(TaskInputSource.newBuilder()
                        .setType(TaskInputSource.TaskInputSourceType.ALL_INPUTS)
                        .build()
                    )
                    .setSampleMs(1000)
                    .setReview(TaskReview.newBuilder()
                        .setStrategy(TaskReview.TaskReviewStrategy.MANUAL)
                        .setManualStrategyInfo(TaskReviewManualStrategyInfo.newBuilder()
                            .setSamplePercentage((float) 0.5)
                            .build()
                        )
                        .addUsers(User.newBuilder()
                            .setId(REVIEWER_USER_ID)
                            .build()
                        )
                        .build()
                    )
                    .build()
                )
                .build()
        );

        if (postTasksResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post model outputs failed, status: " + postTasksResponse.getStatus());
        }
    }
}
