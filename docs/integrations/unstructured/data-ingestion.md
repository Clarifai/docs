
# Data Ingestion Using Unstructured.io
**Learn about the data ingestion process in Unstructured.io**
<hr />

Unstructured.io provides a powerful platform for handling the ingestion of unstructured data. Central to this process are the source and destination connectors, which facilitate the movement of data from its origin to a storage or processing system. 


## Source Connectors

Source connectors are designed to interface with various unstructured data sources, allowing you to seamlessly ingest data into the Clarifai platform. Click [here](https://docs.unstructured.io/api-reference/ingest/source-connectors/overview) to learn more about source connectors.

Below is an example of using S3 as a source connector.
```python
# Importing necessary modules from the 'os' library
import os

# Importing necessary configurations and classes from unstructured.ingest.connector.fsspec.s3
from unstructured.ingest.connector.fsspec.s3 import S3AccessConfig, SimpleS3Config

# Importing configuration classes from unstructured.ingest.interfaces
from unstructured.ingest.interfaces import (
 PartitionConfig,
 ProcessorConfig,
 ChunkingConfig,
 ReadConfig,
)

# Importing the S3Runner class from unstructured.ingest.runner
from unstructured.ingest.runner import S3Runner

# Importing necessary configurations and classes from unstructured.ingest.connector.clarifai
from unstructured.ingest.connector.clarifai import (
 ClarifaiAccessConfig,
 ClarifaiWriteConfig,
 SimpleClarifaiConfig,
)

# Importing base writer and ClarifaiWriter from unstructured.ingest.runner.writers.clarifai
from unstructured.ingest.runner.writers.base_writer import Writer
from unstructured.ingest.runner.writers.clarifai import (
 ClarifaiWriter,
)


if __name__ == "__main__":
    # Creating an instance of ClarifaiWriter
 writer = clarifai_writer()
    
    # Creating an instance of S3Runner with various configurations
 runner = S3Runner(
        processor_config=ProcessorConfig(
            verbose=True,               # Enable verbose output
            output_dir="s3-output-local",  # Directory to store output locally
            num_processes=2,            # Number of processes to use
        ),
        read_config=ReadConfig(),      # Configuration for reading data
        partition_config=PartitionConfig(),  # Configuration for partitioning data
        connector_config=SimpleS3Config(
            access_config=S3AccessConfig(
                key=access_key,         # S3 access key
                secret=secret_access,   # S3 secret access key
            ),
            remote_url="s3 URL",  # URL of the S3 bucket
        ),
        writer=writer,                 # Writer to use for output
        writer_kwargs={},              # Additional arguments for the writer
    )
    
    # Running the S3Runner
 runner.run()


```


## Destination Connector

Destination connectors enable the processed data to be loaded into various storage or processing systems where it can be further analyzed, queried, or used in applications. Click [here](https://docs.unstructured.io/api-reference/ingest/destination-connector/overview) to learn more about destination connectors.

Below is an example of using Clarifai as a destination connector.
```python
import os

# Importing necessary configurations and classes from unstructured.ingest.connector.clarifai
from unstructured.ingest.connector.clarifai import (
 ClarifaiAccessConfig,
 ClarifaiWriteConfig,
 SimpleClarifaiConfig,
)

# Importing local configuration class from unstructured.ingest.connector.local
from unstructured.ingest.connector.local import SimpleLocalConfig

# Importing configuration classes from unstructured.ingest.interfaces
from unstructured.ingest.interfaces import (
 ChunkingConfig,
 PartitionConfig,
 ProcessorConfig,
 ReadConfig,
)

# Importing the LocalRunner class from unstructured.ingest.runner
from unstructured.ingest.runner import LocalRunner

# Importing base writer and ClarifaiWriter from unstructured.ingest.runner.writers.clarifai
from unstructured.ingest.runner.writers.base_writer import Writer
from unstructured.ingest.runner.writers.clarifai import (
 ClarifaiWriter,
)

# Function to create and return a ClarifaiWriter instance
def get_writer() -> Writer:
    return ClarifaiWriter(
        connector_config=SimpleClarifaiConfig(
            access_config=ClarifaiAccessConfig(api_key=os.getenv("CLARIFAI_PAT_KEY")),  # Access config using environment variables
            app_id=os.getenv("CLARIFAI_APP_ID"),  # Clarifai app ID from environment variables
            user_id=os.getenv("CLARIFAI_USER_ID"),  # Clarifai user ID from environment variables
        ),
        write_config=ClarifaiWriteConfig(),  # Write config for Clarifai
    )


if __name__ == "__main__":
    # Creating a writer instance using the get_writer function
 writer = get_writer()
    
    # Creating an instance of LocalRunner with various configurations
 runner = LocalRunner(
        processor_config=ProcessorConfig(
            verbose=True,  # Enable verbose output
            output_dir="local-output-to-clarifai-app",  # Directory to store output locally
            num_processes=2,  # Number of processes to use
        ),
        connector_config=SimpleLocalConfig(
            input_path="example-docs/book-war-and-peace-1225p.txt",  # Path to the input file
        ),
        read_config=ReadConfig(),  # Configuration for reading data
        partition_config=PartitionConfig(),  # Configuration for partitioning data
        chunking_config=ChunkingConfig(chunk_elements=True),  # Configuration for chunking data
        writer=writer,  # Writer to use for output
        writer_kwargs={},  # Additional arguments for the writer
    )
    
    # Running the LocalRunner
 runner.run()

```

## Ingestion Configuration

Ingestion configuration in Unstructured.io allows you to customize the data ingestion process to suit your specific requirements. Key configuration aspects include:

* **Batch Size**: Specifies the number of records to process in each batch, balancing throughput and performance.
* **Schedule**: Defines the frequency of data ingestion, such as hourly, daily, or real-time ingestion.
* **Error Handling**: Configures how the system handles errors during ingestion, including retry policies and logging mechanisms.

Click [here](https://docs.unstructured.io/api-reference/ingest/ingest-configuration/overview) to learn more about ingestion configuration.

