curl -X DELETE "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/annotations"  \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -d '{
    "input_ids":["YOUR_INPUT_ID_1_HERE","YOUR_INPUT_ID_2_HERE"],
    "ids":["YOUR_ANNOTATION_ID_1_HERE", "YOUR_ANNOTATION_ID_2_HERE"]
  }'
  