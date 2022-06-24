package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

	///////////////////////////////////////////////////////////////////////////////////////////////
	// In this section, we set the user authentication, app ID, search name, and language ID.
	// Change these strings to run your own example.
	///////////////////////////////////////////////////////////////////////////////////////////////
	
        static final String USER_ID = "YOUR_USER_ID_HERE";
        //Your PAT (Personal Access Token) can be found in the portal under Authentication	
        static final String PAT = "YOUR_PAT_HERE";
        static final String APP_ID = "YOUR_APP_ID_HERE";	
        // Change these to whatever concept you want to search for
        static final String SEARCH_NAME = "人";
        static final String LANGUAGE_ID = "ja";
        		
	///////////////////////////////////////////////////////////////////////////////////
	// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
	///////////////////////////////////////////////////////////////////////////////////	

	public static void main(String[] args) {
		
		V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
			    .withCallCredentials(new ClarifaiCallCredentials(PAT));	
		
		MultiConceptResponse postConceptsSearchesResponse = stub.postConceptsSearches(
		    PostConceptsSearchesRequest.newBuilder()
		        .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))	
		        .setConceptQuery(
		            ConceptQuery.newBuilder()
		                .setName(SEARCH_NAME)
		                .setLanguage(LANGUAGE_ID)
		        )
		        .build()
		);

		if (postConceptsSearchesResponse.getStatus().getCode() != StatusCode.SUCCESS) {
		  throw new RuntimeException("Post concepts searches failed, status: " + postConceptsSearchesResponse.getStatus());
		}

		System.out.println("Found concepts:");
		for (Concept concept : postConceptsSearchesResponse.getConceptsList()) {
		    System.out.printf("\t%s %.2f%n", concept.getName(), concept.getValue());
		}
		
	}
	
}