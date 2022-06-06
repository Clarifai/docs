package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {
	
	//////////////////////////////////////////////////////////////////////////////////////
	// In this section, we set the user authentication, app and model IDs, and the URL
	// of the image we want as an input. Change these strings to run your own example.
	//////////////////////////////////////////////////////////////////////////////////////
	
	static final String USER_ID = "YOUR_USER_ID_HERE";
	//Your PAT (Personal Access Token) can be found in the portal under Authentication
	static final String PAT = "YOUR_PAT_HERE";
	static final String APP_ID = "YOUR_APP_ID_HERE";
	static final String MODEL_ID = "YOUR_MODEL_ID_HERE";
	//Change this to whatever image URL you want to process
	static final String IMAGE_URL = "https://samples.clarifai.com/metro-north.jpg";
	//This is optional.You can specify a model version or an empty string for the default
	static final String MODEL_VERSION_ID = "";		
	
	///////////////////////////////////////////////////////////////////////////////////
	// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
	///////////////////////////////////////////////////////////////////////////////////	

	public static void main(String[] args) {
		
		V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
			    .withCallCredentials(new ClarifaiCallCredentials(PAT));
		
		MultiOutputResponse postModelOutputsResponse = stub.postModelOutputs(
		    PostModelOutputsRequest.newBuilder()
		    	.setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))		 		     
		        .setModelId(MODEL_ID)
		        .setVersionId("")  // This is optional. Defaults to the latest model version.
		        .addInputs(
		            Input.newBuilder().setData(
		                Data.newBuilder().setImage(
		                    Image.newBuilder().setUrl(IMAGE_URL)
		                )
		            )
		        )
		        .build()
		);

		if (postModelOutputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
		  throw new RuntimeException("Post model outputs failed, status: " + postModelOutputsResponse.getStatus());
		}

		// Since we have one input, one output will exist here.
		Output output = postModelOutputsResponse.getOutputs(0);

		System.out.println("Predicted concepts:");
		for (Concept concept : output.getData().getConceptsList()) {
		    System.out.printf("%s %.2f%n", concept.getName(), concept.getValue());
		}

	}

}
