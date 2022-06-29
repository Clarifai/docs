package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, concept ID, and language ID and name. 
    // Change these strings to run your own example.
    ///////////////////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to whatever concept you want to add its language translation
    static final String CONCEPT_ID = "charlie";
    static final String LANGUAGE_ID = "ja";
    static final String LANGUAGE_NAME = "ボスコ";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////	

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));

        MultiConceptLanguageResponse postConceptLanguageResponse = stub.postConceptLanguages(
            PostConceptLanguagesRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
            .setConceptId(CONCEPT_ID)
            .addConceptLanguages(ConceptLanguage.newBuilder().setId(LANGUAGE_ID).setName(LANGUAGE_NAME))
            .build()
        );

        if (postConceptLanguageResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post concept languages failed, status: " + postConceptLanguageResponse.getStatus());
        }

        System.out.println(postConceptLanguageResponse);

    }

}