curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/models/my-prompter-model/versions" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "description": "Positive or negative sentiment classifier prompter",
    "model_versions": [{
       "output_info": {
          "params": {
             "prompt_template": "Classify whether the sentiment of the given text is positive or negative {data.text.raw}"
          }
       }
    }]
}'