curl -X PATCH "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/models" \
-H "Authorization: Key YOUR_PAT_HERE" \
-H "Content-Type: application/json" \
-d '{
"models": [
  {
    "id": "YOUR_MODEL_ID_HERE",
    "deploy_restriction": 2 
  }
],
"action": "merge"
}' 