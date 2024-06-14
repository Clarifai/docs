if __name__ == "__main__":
    # Creating a writer instance using the clarifai_writer function
    writer = clarifai_writer()
    
    # Creating an instance of DropboxRunner with various configurations
    runner = DropboxRunner(
        processor_config=ProcessorConfig(
            verbose=True,  # Enable verbose output
            output_dir="dropbox-output",  # Directory to store output locally
            num_processes=2,  # Number of processes to use
        ),
        read_config=ReadConfig(),  # Configuration for reading data
        partition_config=PartitionConfig(),  # Configuration for partitioning data
        connector_config=SimpleDropboxConfig(
            access_config=DropboxAccessConfig(token=os.getenv("DROPBOX_ACCESS_TOKEN")),  # Access config using environment variable for Dropbox token
            remote_url="dropbox file URL",  # URL of the Dropbox file
            recursive=True,  # Whether to recursively read files in the directory
        ),
        writer=writer,  # Writer to use for output
        writer_kwargs={},  # Additional arguments for the writer
    )
    
    # Running the DropboxRunner
    runner.run()
