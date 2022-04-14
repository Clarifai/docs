#!/usr/bin/env python3
import io
import os
import json
import time
import argparse

from pdf2image import convert_from_path
from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_pb2, status_code_pb2


def pdf_to_page_images(file_path):
    """return an iterable of images that span the pages of the document"""
    assert os.path.exists(file_path), f"file not found: {file_path}"
    pdf_images = convert_from_path(file_path)

    return pdf_images

def post_image_bytes_as_input(image_bytes, stub, metadata):
    """post an image in bytes format to the platform as an input"""
    post_inputs_response = stub.PostInputs(  # what is an intellgent way to handle these platform objects? Obvi singleton object that acts as a unified permissions manager...  
        service_pb2.PostInputsRequest(
            inputs=[
                resources_pb2.Input(
                    data=resources_pb2.Data(
                        image=resources_pb2.Image(
                            base64=image_bytes
                        )
                    )
                ) 
            ]    
        ),
        metadata=metadata
    )

    return post_inputs_response

def image_to_bytes(img):
    """convert a PIL image object to a byte array"""
    byte_arr = io.BytesIO()
    img.save(byte_arr, format='PNG')
    return byte_arr.getvalue()

def pixels_to_proportions(coordinates, image):
    """
    This function expects a sequence of coordinates as inputs, along with the image it corresponds to.
    That is, something like: $[(x_0, y_0), (x_1, y_1), ..., (x_n, y_n)]$
    """
    w, h = image.size
    output = []

    for (x, y) in coordinates:
        # x /= w
        # y /= h
        output.append((x/w, y/h))

    return output


def proportions_to_pixels(coordinates, image):
    """see docstring for `pixels_to_proportions`"""
    w, h = image.size
    output = []
    for (x, y) in coordinates:
        output.append((x*w, y*h))

    return output

def unpack_tuple_list(a):
    """flatten a nested list. Currently fixed at a depth of k=2."""
    return [i for sub in a for i in sub]

def grouped(iterable, n):
    """h/t https://stackoverflow.com/a/5389547
    Given the iterable `S`, and the integer n
    $S \to (s_{0,0}, s_{0,1}, s_{0,2}, \dots, s_{0, n-1}), \ldots, (s_{m,0}, s_{m,1} , s_{m,2},...s_{m, n-1})$
    """
    return zip(*[iter(iterable)]*n)

def read_json_fields(json_file):
    """
    parse the document fields defined in json_file
    """
    with open(json_file, 'rb') as f:
        d = json.load(f)

    for k, v in d.items():
        yield k, v


def _hold_for_upload(asset_id, stub, metadata, t=.5):
    """function that will halt the program while we wait for the input to finish uploading"""
    from itertools import count
    for i in count():
        get_inputs_response = stub.GetInput(
            request=service_pb2.GetInputRequest(
                input_id=asset_id,
            ),
            metadata=metadata
        )
        assert get_inputs_response.status.code == status_code_pb2.SUCCESS

        if get_inputs_response.input.status.code == status_code_pb2.INPUT_DOWNLOAD_SUCCESS:
            break
        else:
            time.sleep(t)
            continue

    return True 


def predict_text(image, model_id, stub, metadata):
    """return the text value output by the specified OCR model. This is """
    image_bytes = image_to_bytes(image)

    post_model_outputs_response = stub.PostModelOutputs(
        service_pb2.PostModelOutputsRequest(
            model_id=model_id,
            inputs=[
                resources_pb2.Input(
                    data=resources_pb2.Data(
                        image=resources_pb2.Image(
                            base64=image_bytes
                        )
                    )
                )
            ]
        ),
        metadata=metadata
    )
    if post_model_outputs_response.status.code != status_code_pb2.SUCCESS:
        raise Exception("Post model outputs failed, status: " + post_model_outputs_response.status.description)

    predicted_text = post_model_outputs_response.outputs[0].data.text.raw

    return predicted_text

def make_concept(concept, value=1.):
    """create a concept object. Note: By default this will create a positive association - value=1. - with the concept."""
    return resources_pb2.Concept(id=concept, value=value)

def coords_to_bbox(x0, y0, x1, y1):
    """create a BoundingBox object from a set of 2d Cartesian coordinates"""
    return resources_pb2.BoundingBox(
        left_col=x0,
        top_row=y0,
        right_col=x1,
        bottom_row=y1
    )

def make_annotation(input_id, coords, body, stub, metadata, *concepts):
    """we're going to simply post a single region annotation at a time"""
    post_annotations_response = stub.PostAnnotations(
        service_pb2.PostAnnotationsRequest(
            annotations=[
                resources_pb2.Annotation(
                    input_id=input_id,
                    data=resources_pb2.Data(
                        regions=[
                            resources_pb2.Region(
                                region_info=resources_pb2.RegionInfo(
                                    bounding_box=coords_to_bbox(*coords),
                                    text=resources_pb2.Text(raw=body)
                                ),
                                data=resources_pb2.Data(
                                    concepts=[make_concept(concept) for concept in concepts],
                                )
                            )
                        ]
                    ),
                ),
            ]
        ),
        metadata=metadata
    )

    if post_annotations_response.status.code != status_code_pb2.SUCCESS:
        raise Exception("Post annotations failed, status: " + post_annotations_response.status.description)    

    return post_annotations_response

def main(args):
    # initialize the Clarifai client
    print(args)
    channel = ClarifaiChannel.get_json_channel()
    stub = service_pb2_grpc.V2Stub(channel)

    metadata = (('authorization', f'Key {args.api_key}'),)

    # import the pdf document, and convert it to an iterable of images for the pages
    doc, *_ = pdf_to_page_images(args.file) # we know our document is only one page, so we isolate the first item in the iterable. Isomorphic to pdf_to_page_images(args.file)[0]
    doc_bytes = image_to_bytes(doc)

    # post the doc as an input
    post_input_response = post_image_bytes_as_input(doc_bytes, stub, metadata)

    doc_id = post_input_response.inputs[0].id  # we know there will only be one input, given the setup above
    
    print(f"[DOC] - {doc_id}")
    _ = _hold_for_upload(doc_id, stub, metadata)  # ensure that the input is uploaded, so that we can annotate the regions-of-interest

    doc_fields = read_json_fields(args.layout)    

    for field, value in doc_fields:
        relative_coords = grouped(value, 2)  # xy-coords -> n=2
        pixel_coords = proportions_to_pixels(relative_coords, doc)
        pixel_coords_flat = unpack_tuple_list(pixel_coords)

        # get a crop of the region
        region = doc.crop(pixel_coords_flat)

        # predicted text in cropped region
        predicted_text = predict_text(region, args.model_id, stub, metadata)
        print("\t-", f"{field} | {predicted_text}")

        post_annotation_response = make_annotation(doc_id, tuple(value), predicted_text, stub, metadata, field)

        if post_annotation_response.status.code != status_code_pb2.SUCCESS:
            breakpoint()

    print("Done.")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument('-f', '--file', type=str, help="File path to the PDF document you would like to parse and annotate.")
    parser.add_argument('-k', '--api_key', type=str, help="The Clarifai API key associate with your application.")
    parser.add_argument('-m', '--model_id', type=str, help="The ID of the Clarifai model you would like to use for OCR.", default='eng-ocr')
    parser.add_argument('-l', '--layout', type=str, help="Path to the JSON file in which the document layout is defined.", default='assets/field_regions.json')

    args = parser.parse_args()

    _ = main(args)
