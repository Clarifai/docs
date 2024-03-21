from clarifai.client.user import User

# Your PAT (Personal Access Token) can be found in the Account's Security section
# Specify the correct user_id/app_id pairings
# Since you're making inferences outside your app's scope
USER_ID = "user_id"
APP_ID = "app_id"

app = User(user_id=USER_ID, pat="YOUR_PAT").create_app(
    app_id=APP_ID, base_workflow="Empty"
)


# create a yaml file specifying the workflow structure
# eg:
"""configs/prompter_llm.yml
workflow:
  id: wf-prompter-llm
  nodes:
    - id: prompter
      model:
          model_id: prompter
          model_type_id: prompter
          description: 'Prompter Model'
          output_info:
            params:
              prompt_template: 'Classify sentiment between postive and negative for the text {data.text.raw}'

    - id: llm
      model:
          user_id: mistralai
          model_id: mistral-7B-Instruct
          app_id: completion

      node_inputs:
        - node_id: prompter

"""

# create the workflow
prompter_llm_workflow = app.create_workflow(config_filepath="configs/prompter_llm.yml")