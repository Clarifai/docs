package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.BaseResponse;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

	/////////////////////////////////////////////////////////////////////////////////////
	// In this section, we set the user authentication, app ID, object concept ID, and
	// concept relation IDs. Change these strings to run your own example.
	/////////////////////////////////////////////////////////////////////////////////////
	
        static final String USER_ID = "YOUR_USER_ID_HERE";
        //Your PAT (Personal Access Token) can be found in the portal under Authentication	
        static final String PAT = "YOUR_PAT_HERE";
        static final String APP_ID = "YOUR_APP_ID_HERE";	
        // Change these to whatever relations you want to delete
        static final String OBJECT_CONCEPT_ID = "YOUR_OBJECT_CONCEPT_ID_HERE";
        static final String CONCEPT_RELATION_ID_1 = "0d9b0acb10fb4dac9a9d60a149d8fc5c";
        static final String CONCEPT_RELATION_ID_2 = "f5acf9c2a76143d78daf5f984693c52c";
        		
	///////////////////////////////////////////////////////////////////////////////////
	// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
	///////////////////////////////////////////////////////////////////////////////////	

	public static void main(String[] args) {
		
		V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
			    .withCallCredentials(new ClarifaiCallCredentials(PAT));	
		
		BaseResponse deleteConceptRelationsResponse = stub.deleteConceptRelations(
		    DeleteConceptRelationsRequest.newBuilder()
		    	.setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID).build())		       
		        .addIds(CONCEPT_RELATION_ID_1)
		        .addIds(CONCEPT_RELATION_ID_2)
		        .setConceptId(OBJECT_CONCEPT_ID)
		        .build()
		);

		if (deleteConceptRelationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
		    throw new RuntimeException("Delete concept relations failed, status: " + deleteConceptRelationsResponse.getStatus());
		}
			
	}
	
}