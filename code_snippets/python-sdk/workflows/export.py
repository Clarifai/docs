from clarifai.client.workflow import Workflow

# Your PAT (Personal Access Token) can be found in the portal under Authentification

workflow_url = "https://clarifai.com/clarifai/main/workflows/Demographics"
demographics_workflow = Workflow(
    url=workflow_url , pat="YOUR_PAT"
)
demographics_workflow.export("demographics_workflow.yml")
"""
Now the parameters of each model can be changed and new workflow can be easily created by app.create_workflow().

Here we change the margin parameter of the image cropper node to be 1.5

- id: image-crop
    model:
      model_id: margin-100-image-crop-custom
          model_type_id: image-crop
          description: Custom crop model
          output_info:
            params:
              margin: 1.5


"""
