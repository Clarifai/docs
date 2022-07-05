package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.StatusCode;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import java.util.List;

public class ClarifaiExample {

    ////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and ID and version
    // of the model to list its inputs. Change these strings to run your own example.
    ///////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to your own model ID and version
    static final String MODEL_ID = "petsID";
    static final String MODEL_VERSION_ID = "872b7ff32db94b51af40f6e274e42b5f";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));

        MultiInputResponse listModelInputsResponse = stub.listModelInputs(
            ListModelInputsRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
            .setModelId(MODEL_ID)
            .setVersionId(MODEL_VERSION_ID)
            .build()
        );

        if (listModelInputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("List model inputs failed, status: " + listModelInputsResponse.getStatus());
        }

        List<Input> inputs = listModelInputsResponse.getInputsList();
        for (Input input: inputs) {
            System.out.println(input);
        }

    }

}