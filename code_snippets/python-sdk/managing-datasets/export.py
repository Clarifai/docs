from clarifai.client.dataset import Dataset

# The “clarifai-data-protobuf.zip” file can be downloaded from the dataset section in the portal.
Dataset().export(save_path='output.zip', local_archive_path='clarifai-data-protobuf.zip')