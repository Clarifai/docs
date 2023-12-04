package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.StatusCode; 
import java.util.*;

import com.google.protobuf.ByteString;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

public class ClarifaiExample {

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, user and app ID, model details, and the URL
    // of the image we want as an input. Change these strings to run your own example.
    ///////////////////////////////////////////////////////////////////////////////////////////////////

    // Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    // Specify the correct user_id/app_id pairings
    // Since you're making inferences outside your app's scope
    static final String USER_ID = "clarifai";
    static final String APP_ID = "main";
    // Change these to whatever model and image URL you want to use
    static final String MODEL_ID = "general-image-detection";
    static final String MODEL_VERSION_ID = "1580bb1932594c93b7e2e04456af7c6f";
    static final String IMAGE_URL = "https://samples.clarifai.com/metro-north.jpg";
    // Or, to use a local image file, assign the location variable
    // static final String IMAGE_FILE_LOCATION = "YOUR_IMAGE_FILE_LOCATION_HERE";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////	

    public static void main(String[] args) throws IOException {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
                .withCallCredentials(new ClarifaiCallCredentials(PAT));

        MultiOutputResponse postModelOutputsResponse = stub.postModelOutputs(
                PostModelOutputsRequest.newBuilder()
                        .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
                        .setModelId(MODEL_ID)
                        .setVersionId(MODEL_VERSION_ID) // This is optional. Defaults to the latest model version.
                        .addInputs(
                                Input.newBuilder().setData(
                                        Data.newBuilder().setImage(
                                                Image.newBuilder().setUrl(IMAGE_URL)
                                         // Image.newBuilder().setBase64(ByteString.copyFrom(Files.readAllBytes(
                                         // new File(IMAGE_FILE_LOCATION).toPath()
                                        // )))
                                        )
                                )
                        )
                        .build()
        );

        if (postModelOutputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post model outputs failed, status: " + postModelOutputsResponse.getStatus());
        }
               
        List<Region> regions = postModelOutputsResponse.getOutputs(0).getData().getRegionsList();

        for (Region region : regions) {
            // Accessing and rounding the bounding box values
            double topRow = region.getRegionInfo().getBoundingBox().getTopRow();
            double leftCol = region.getRegionInfo().getBoundingBox().getLeftCol();
            double bottomRow = region.getRegionInfo().getBoundingBox().getBottomRow();
            double rightCol = region.getRegionInfo().getBoundingBox().getRightCol();

            for (Concept concept : region.getData().getConceptsList()) {
                // Accessing and rounding the concept value
                String name = concept.getName();
                double value = concept.getValue();

                System.out.println(name + ": " + value + " BBox: " + topRow + ", " + leftCol + ", " + bottomRow + ", " + rightCol);
            }
        }
    }

}
 