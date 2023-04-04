---
description: Export your labeled datasets with their full annotations using this utility
sidebar_position: 6
---

# Dataset Export
This Python script allows you to export labeled data from Clarifai's Scribe labeler. The exported data can be saved as a ZIP archive or in a filesystem directory. The script provides two main classes, `DatasetExportReader` and `InputDownloader`, that handle the data export and download processes, respectively.

You can find the script in our GitHub [clarifai-python-utils repository](https://github.com/Clarifai/clarifai-python-utils) under `clarifai/dataset_export`

## Installation
Before running this script, make sure you have the following dependencies installed:

* `Pillow`
* `protobuf`
* `requests`
* `tqdm`

You can install the dependencies using pip:

`pip install Pillow protobuf requests tqdm`

## Usage
To use the script, run it with the following command:

`python <script_name> <archive-url> [<save-path>]`

Replace `<script_name>` with the name of the Python script, `<archive-url>` with the URL of the exported archive, and `<save-path>` (optional) with the path where you want to save the downloaded data. If `<save-path>` is not provided, the default output will be saved to "output.zip".

## Classes
### DatasetExportReader
This class is responsible for unpacking the ZIP file from the exported dataset version. It downloads the archive onto disk and reads the dataset version exports in memory without extracting all contents. It yields each `api.Input` object.

```python
with DatasetExportReader(archive_url=archive_url) as reader:
    # Use the reader object to access the dataset
```

### InputDownloader
This class takes an iterator or a list of `api.Input` instances as input and provides a method to download all inputs (currently only images) of that data. It has the ability to write the downloaded inputs to a new ZIP archive or a filesystem directory.

```python
input_downloader = InputDownloader(reader)
input_downloader.download_image_archive(save_path=save_path)
```

### Example
Here's an example of how to use this script with an archive URL and an optional save path:

```python
import sys
if len(sys.argv) < 2:
  print(f"usage: {sys.argv[0]} <archive-url> [<save-path>]")
  sys.exit(2)
archive_url = sys.argv[1]
save_path = sys.argv[2] if len(sys.argv) > 2 else "output.zip"

with DatasetExportReader(archive_url=archive_url) as reader:
  InputDownloader(reader).download_image_archive(save_path=save_path)
```

When executed, this script will download the labeled images from the archive URL and save them to the specified save path.
