package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    //////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and the images and 
    // concepts we want to add. Change these strings to run your own example.
    /////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to add your own images with concepts
    static final String IMAGE_URL_1 = "https://samples.clarifai.com/puppy.jpeg";
    static final String IMAGE_URL_2 = "https://samples.clarifai.com/wedding.jpg";
    static final String CONCEPT_ID_1 = "charlie";
    static final String CONCEPT_ID_2 = "our_wedding";
    static final String CONCEPT_ID_3 = "our_wedding";
    static final String CONCEPT_ID_4 = "charlie";
    static final String CONCEPT_ID_5 = "cat";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////	

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));

        MultiInputResponse postInputsResponse = stub.postInputs(
            PostInputsRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
            .addInputs(
                Input.newBuilder()
                .setData(
                    Data.newBuilder()
                    .setImage(
                        Image.newBuilder()
                        .setUrl(IMAGE_URL_1)
                        .setAllowDuplicateUrl(true)
                    )
                    .addConcepts(Concept.newBuilder().setId(CONCEPT_ID_1).setValue(1))
                    .addConcepts(Concept.newBuilder().setId(CONCEPT_ID_2).setValue(0))
                )
            )
            .addInputs(
                Input.newBuilder()
                .setData(
                    Data.newBuilder()
                    .setImage(
                        Image.newBuilder()
                        .setUrl(IMAGE_URL_2)
                        .setAllowDuplicateUrl(true)
                    )
                    .addConcepts(Concept.newBuilder().setId(CONCEPT_ID_3).setValue(1))
                    .addConcepts(Concept.newBuilder().setId(CONCEPT_ID_4).setValue(0))
                    .addConcepts(Concept.newBuilder().setId(CONCEPT_ID_5).setValue(0))
                )
            )
            .build()
        );

        if (postInputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            for (Input input: postInputsResponse.getInputsList()) {
                System.out.println("Input " + input.getId() + " status: ");
                System.out.println(input.getStatus() + "\n");
            }

            throw new RuntimeException("Post inputs failed, status: " + postInputsResponse.getStatus());
        }

    }

}