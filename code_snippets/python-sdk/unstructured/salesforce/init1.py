import os  # Importing the os module for environment variable access

# Importing necessary configurations and classes from unstructured.ingest.connector.salesforce
from unstructured.ingest.connector.salesforce import SalesforceAccessConfig, SimpleSalesforceConfig

# Importing configuration classes from unstructured.ingest.interfaces
from unstructured.ingest.interfaces import PartitionConfig, ProcessorConfig, ReadConfig

# Importing the SalesforceRunner class from unstructured.ingest.runner
from unstructured.ingest.runner import SalesforceRunner

# Importing necessary configurations and classes from unstructured.ingest.connector.clarifai
from unstructured.ingest.connector.clarifai import (
    ClarifaiAccessConfig,
    ClarifaiWriteConfig,
    SimpleClarifaiConfig,
)

# Importing base writer and ClarifaiWriter from unstructured.ingest.runner.writers.clarifai
from unstructured.ingest.runner.writers.base_writer import Writer
from unstructured.ingest.runner.writers.clarifai import ClarifaiWriter