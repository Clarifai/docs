package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.StatusCode;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.google.protobuf.Struct;
import com.google.protobuf.Value;

public class ClarifaiExample {

    ///////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and details for
    // creating a task. Change these strings to run your own example.
    ///////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to create your own task with consensus review
    static final String CONCEPT_ID = "water";
    static final String USER_ID_1 = "USER_ID_1_HERE";
    static final String USER_ID_2 = "USER_ID_2_HERE";
    static final String USER_ID_3 = "USER_ID_3_HERE";
    static final String USER_ID_4 = "USER_ID_4_HERE";

    ///////////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////////

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
                .withCallCredentials(new ClarifaiCallCredentials(PAT));

        Struct.Builder params = Struct.newBuilder()
                .putFields(USER_ID_1, Value.newBuilder().setNumberValue(1).build())
                .putFields(USER_ID_2, Value.newBuilder().setNumberValue(1).build())
                .putFields(USER_ID_3, Value.newBuilder().setNumberValue(1).build());

        MultiTaskResponse postTasksResponse = stub.postTasks(
                PostTasksRequest.newBuilder()
                        .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID).build())
                        .addTasks(Task.newBuilder()
                                .setType(Task.TaskType.CONCEPTS_CLASSIFICATION)
                                .setName("Annotate " + CONCEPT_ID)
                                .setWorker(TaskWorker.newBuilder()
                                        .setStrategy(TaskWorker.TaskWorkerStrategy.PARTITIONED)
                                        .addUsers(User.newBuilder().setId(USER_ID_1))
                                        .addUsers(User.newBuilder().setId(USER_ID_2))
                                        .addUsers(User.newBuilder().setId(USER_ID_3))
                                        .setPartitionedStrategyInfo(TaskWorkerPartitionedStrategyInfo.newBuilder()
                                                .setType(TaskWorkerPartitionedStrategyInfo.TaskWorkerPartitionedStrategy.WEIGHTED)
                                                .setWorkersPerInput(3)
                                                .setWeights(params)
                                                .build()
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
                                        .setStrategy(TaskReview.TaskReviewStrategy.CONSENSUS)
                                        .setConsensusStrategyInfo(TaskReviewConsensusStrategyInfo.newBuilder().setApprovalThreshold(2))
                                        .addUsers(User.newBuilder().setId(USER_ID_4))
                                        .build()
                                )
                                .build()
                        )
                        .build()
        );

        if (postTasksResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post tasks outputs failed, status: " + postTasksResponse.getStatus());
        }
    }
}
