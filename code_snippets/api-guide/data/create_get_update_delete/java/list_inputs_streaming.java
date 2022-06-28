package com.clarifai.example;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;
import java.util.List;

public class ClarifaiExample {

    ////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication and app ID. 
    // Change these strings to run your own example.
    ////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////	

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));

        // To start from beginning, do not provide the last ID parameter.
        MultiInputResponse firstStreamInputsResponse = stub.streamInputs(
            StreamInputsRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
            .setPerPage(10)
            .build()
        );

        if (firstStreamInputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Stream inputs failed, status: " + firstStreamInputsResponse.getStatus());
        }

        System.out.println("First response (starting from the first input):");
        List < Input > inputs = firstStreamInputsResponse.getInputsList();
        for (Input input: inputs) {
            System.out.println("\t" + input.getId());
        }

        String lastId = inputs.get(inputs.size() - 1).getId();

        // Set last ID to get the next set of inputs. The returned inputs will not include the last ID input.
        MultiInputResponse secondStreamInputsResponse = stub.streamInputs(
            StreamInputsRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
            .setLastId(lastId)
            .setPerPage(10)
            .build()
        );

        if (secondStreamInputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Stream inputs failed, status: " + secondStreamInputsResponse.getStatus());
        }

        System.out.println(String.format("Second response (first input is the one following input ID %s)", lastId));
        for (Input input: secondStreamInputsResponse.getInputsList()) {
            System.out.println("\t" + input.getId());
        }

    }
}