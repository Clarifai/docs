# The first model is the Clarifai's Food model and the second is the Clarifai's General model

curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/workflows" \
    -H "Content-Type: application/json" \
    -H "Authorization: Key YOUR_PAT_HERE" \
    --data-raw '{
      "workflows": [{
        "id": "my-custom-workflow",
        "nodes": [
          {
            "id": "food-concepts",
            "model": {
              "id": "bd367be194cf45149e75f01d59f77ba7",
              "model_version": {
                "id": "dfebc169854e429086aceb8368662641"
              }
            }
          },
          {
            "id": "general-concepts",
            "model": {
              "id": "aaa03c23b3724a16a56b629203edc62c",
              "model_version": {
                "id": "aa9ca48295b37401f8af92ad1af0d91d"
              }
            }
          }
        ]
      }]
    }'