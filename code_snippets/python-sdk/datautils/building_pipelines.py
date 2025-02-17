from clarifai_datautils.multimodal import Pipeline, PDFPartition  

# Define the processing pipeline
pipeline = Pipeline(
    name="basic_pdf",  
    transformations=[        
        PDFPartition()  
    ]
)

# Load predefined pipeline
pipeline = Pipeline.load(name="basic_pdf")

# View the pipeline
pipeline.info()
