---
description: Learn about our algorithmic predict operators
sidebar_position: 6
---

# Algorithmic Predict

**Learn about our algorithmic predict operators**
<hr />

## KNN Classifier

**Output**: Concepts

Use k-nearest neighbors (KNN) search and plurality voting amongst the nearest neighbors to classify new instances. Recommended when you only have a small dataset, like one image per concept. 

## Language Identification Operator

**Output**: Concepts

Operator for language identification using the langdetect library.

## Cross-App Input Searcher

**Output**: Hits

Triggers a visual search in another app based on the model config, if concept(s) are found in images and returns the matched search hits as regions.

## Regex-Based Classifier 

Classifies text using regex. If the regex matches, the text is classified as the provided concepts.

## Isolation Operator

**Output**: Regions

This is an operator that computes the distance between detections and assigns an isolation label.

## Barcode Operator

**Output**: Regions

This is an operator that detects and recognizes barcodes from an image. It assigns regions with barcode text for each detected barcode. Supports EAN/UPC, Code 128, Code 39, Interleaved 2 of 5, and QR Code.

## Custom Code Operator 

**Output**: Any

This model expects a Python 3.9 driver function with the following signature: `def main(req):`. Here, "req" is a dictionary with a single key "inputs" that holds a list of "Input" objects from `clarifai_grpc.grpc.api.service_pb2` —these inputs are normally sent in API prediction requests. 

The available libraries for importing are: NumPy, SciPy, PIL, and Clarifai gRPC. The response should be a Python dictionary whose nested structure mirrors that of `MultiOutputResponse` in `clarifai_grpc.grpc.api.service_pb2`. 

IDs in inputs should be forwarded to outputs 1-to-1. You can also provide helpers to reference in your main implementation. All the code must be passed in via `output_info.params.operator_code`. 

Each execution can last up to 50 seconds and consume 256 MBs of memory.

## AWS Lambda

**Output**: Any

This model sends data to an AWS lambda function so you can implement any arbitrary logic to be handled within a model prediction or workflow. 
The request our API sends is a `PostModelOutputsRequest` in the 'request' field, and the response we expect is a `MultiOutputResponse` response in the `response` field. 

## Input Searcher

## Image Color Recognizer