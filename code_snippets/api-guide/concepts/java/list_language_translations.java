package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    ////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and concept ID.
    // Change these strings to run your own example.
    ////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change this to whatever concept you want to see its languages
    static final String CONCEPT_ID = "charlie";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////	

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));

        MultiConceptLanguageResponse listConceptLanguagesResponse = stub.listConceptLanguages(
            ListConceptLanguagesRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
            .setConceptId(CONCEPT_ID)
            .build()
        );

        if (listConceptLanguagesResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("List concept languages failed, status: " + listConceptLanguagesResponse.getStatus());
        }

        System.out.println(listConceptLanguagesResponse);

    }

}