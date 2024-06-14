if __name__ == "__main__":
    # Creating a writer instance using the clarifai_writer function
    writer = clarifai_writer()
    
    # Creating an instance of SalesforceRunner with various configurations
    runner = SalesforceRunner(
        processor_config=ProcessorConfig(
            verbose=True,  # Enable verbose output
            output_dir="salesforce-output",  # Directory to store output locally
            num_processes=2,  # Number of processes to use
        ),
        read_config=ReadConfig(),  # Configuration for reading data
        partition_config=PartitionConfig(),  # Configuration for partitioning data
        connector_config=SimpleSalesforceConfig(
            access_config=SalesforceAccessConfig(
                consumer_key="YOUR_SALESFORCE_CONSUMER_KEY",  # Salesforce consumer key
                private_key="PATH_TO_server.key_FILE",  # Path to the private key file
            ),
            username="SALESFORCE_USERNAME",  # Salesforce username
            categories=["EmailMessage"],  # Categories to read data from
            recursive=True,  # Whether to recursively read data
        ),
        writer=writer,  # Writer to use for output
        writer_kwargs={},  # Additional arguments for the writer
    )
    
    # Running the SalesforceRunner
    runner.run()