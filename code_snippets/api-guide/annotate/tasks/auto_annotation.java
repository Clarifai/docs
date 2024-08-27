package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.StatusCode;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;

public class ClarifaiExample {

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  // In this section, we set the user authentication, app ID, and auto-annotation details.
  // Change these strings to run your own example.
  //////////////////////////////////////////////////////////////////////////////////////////////////

  static final String USER_ID = "YOUR_USER_ID_HERE";
  // Your PAT (Personal Access Token) can be found in the Account's Security section
  static final String PAT = "YOUR_PAT_HERE";
  static final String APP_ID = "YOUR_APP_ID_HERE";
  // Change these to create your own auto-annotation task
  static final String MODEL_ID = "MODEL_ID_HERE";
  static final String MODEL_VERSION_ID = "MODEL_VERSION_ID_HERE";
  static final String CONCEPT_ID = "CONCEPT_ID_HERE";
  static final String DATASET_ID = "DATASET_ID_HERE";

  //////////////////////////////////////////////////////////////////////////////////
  // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
  //////////////////////////////////////////////////////////////////////////////////	

  public static void main(String[] args) {

    V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
      .withCallCredentials(new ClarifaiCallCredentials(PAT));

    MultiTaskResponse postTasksResponse = stub.postTasks(
      PostTasksRequest.newBuilder()
        .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
        .addTasks(Task.newBuilder()
          .setType(Task.TaskType.TYPE_NOT_SET)
          .setName("Auto-Annotate " + CONCEPT_ID)
          .setWorker(TaskWorker.newBuilder()
            .setStrategy(TaskWorker.TaskWorkerStrategy.FULL)
            .addWorkers(Worker.newBuilder()
              .setModel(Model.newBuilder()
                .setId(MODEL_ID)
                .setModelVersion(ModelVersion.newBuilder()
                  .setId(MODEL_VERSION_ID)
                  .build()
                )
              )
              .build()
            )
            .build()
          )
          .addConcepts(TaskConcept.newBuilder()
            .setConcept(Concept.newBuilder()
              .setId(CONCEPT_ID)
              .build())
            .setAutoAnnotationConfig(TaskConceptAutoAnnotationConfig.newBuilder()
              .setAnnotationDataTypes(1)
              .setThresholdRange(ThresholdRange.newBuilder()
                .setIsLowerInclusive(true)
                .setIsUpperInclusive(true)
                .setLower((float) 0.7)
                .setUpper((float) 0.999)
                .build())
              .setStatusCodeValue(24150)
              .build()
            )
            .build())
          .setInputSource(TaskInputSource.newBuilder()
            .setType(TaskInputSource.TaskInputSourceType.DATASET)
            .setId(DATASET_ID)
            .build())
          .setSampleMs(1000)
          .setReview(TaskReview.newBuilder()
            .setStrategy(TaskReview.TaskReviewStrategy.NONE)
            .build())
          .build())
        .build()
    );

    if (postTasksResponse.getStatus().getCode() != StatusCode.SUCCESS) {
      throw new RuntimeException("Post tasks failed, status: " + postTasksResponse.getStatus());
    }
  }
}
