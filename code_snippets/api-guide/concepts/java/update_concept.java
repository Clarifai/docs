package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

	///////////////////////////////////////////////////////////////////////////////////
	// In this section, we set the user authentication, app ID, concept ID and name.
	// Change these strings to run your own example.
	//////////////////////////////////////////////////////////////////////////////////
	
        static final String USER_ID = "YOUR_USER_ID_HERE";
        //Your PAT (Personal Access Token) can be found in the portal under Authentication
        static final String PAT = "YOUR_PAT_HERE";
        static final String APP_ID = "YOUR_APP_ID_HERE";	
        // Change these to whatever concept you want to update
        static final String CONCEPT_ID = "charlie";
        static final String CONCEPT_NAME = "Charlie Name";
        		
	///////////////////////////////////////////////////////////////////////////////////
	// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
	///////////////////////////////////////////////////////////////////////////////////	

	public static void main(String[] args) {
		
		V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
			    .withCallCredentials(new ClarifaiCallCredentials(PAT));	
		
		MultiConceptResponse patchConceptsResponse = stub.patchConcepts(
		    PatchConceptsRequest.newBuilder()
		    	.setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
		        .setAction("overwrite")  // The only supported action right now is overwrite
		        .addConcepts(Concept.newBuilder().setId(CONCEPT_ID).setName(CONCEPT_NAME))
		        .build()
		);

		if (patchConceptsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
		    throw new RuntimeException("Patch concepts failed, status: " + patchConceptsResponse.getStatus());
		}
	
	}
	
}