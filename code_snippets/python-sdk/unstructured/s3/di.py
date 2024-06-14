if __name__ == "__main__":
    writer = clarifai_writer()    
    # Instantiating an S3Runner object with various configurations.
    runner = S3Runner(
        processor_config=ProcessorConfig(
            verbose=True,  # Setting verbosity to True for detailed output.
            output_dir="s3-output-local",  # Setting the output directory for processed data.
            num_processes=2,  # Specifying the number of processes to be used.
        ),
        read_config=ReadConfig(),  # Instantiating a ReadConfig object with default configurations.
        partition_config=PartitionConfig(),  # Instantiating a PartitionConfig object with default configurations.
        connector_config=SimpleS3Config(  # Instantiating a SimpleS3Config object with S3 access configurations and remote URL.
            access_config=S3AccessConfig(
                key=access_key,  # Setting the access key for S3.
                secret=secret_access,  # Setting the secret access key for S3.
            ),
            remote_url="your_s3_data_uri",  # Specifying the remote URL for S3 data.
        ),
        writer=writer,  # Passing the ClarifaiWriter object as the writer.
        writer_kwargs={},  # Passing empty keyword arguments to the writer.
    )
    
    # Running the S3Runner instance.
    runner.run()
