from clarifai.client.dataset import Dataset
import os

os.environ["CLARIFAI_PAT"]="YOUR_PAT"

# The “clarifai-data-protobuf.zip” file can be downloaded from the dataset section in the portal.
Dataset().export(save_path='path to output.zip file', local_archive_path='path to clarifai-data-protobuf.zip file')