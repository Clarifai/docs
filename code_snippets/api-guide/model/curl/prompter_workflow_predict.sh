curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/workflows/my-custom-prompter-workflow/results" \
  -H "authorization: Key YOUR_PAT_HERE" \
  -H "content-type: application/json" \
  -d '{
    "inputs": [
        {
          "data": {
            "text": {
              "raw": "I love your product very much"
          }
        }
      }
    ]
}'