package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.StatusCode;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;

public class ClarifaiExample {

    //////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and model type ID. 
    // Change these strings to run your own example.
    //////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change this to list the template types of your preferred model 
    static final String MODEL_TYPE = "visual-classifier";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
                .withCallCredentials(new ClarifaiCallCredentials(PAT));

        MultiModelTypeResponse listModelTypesResponse = stub.listModelTypes(
                ListModelTypesRequest.newBuilder()
                        .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
                        .build()
        );

        if (listModelTypesResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("List models failed, status: " + listModelTypesResponse.getStatus());
        }

        for (ModelType modelType : listModelTypesResponse.getModelTypesList()) {
            if (modelType.getId().equals(MODEL_TYPE)) {
                for (ModelTypeField modelTypeField : modelType.getModelTypeFieldsList()) {
                    if (modelTypeField.getPath().split("\\.")[modelTypeField.getPath().split("\\.").length - 1]
                            .equals("template")) {
                        for (ModelTypeEnumOption template : modelTypeField.getModelTypeEnumOptionsList()) {
                            System.out.println(template);
                        }
                    }
                }
            }
        }

    }

}
