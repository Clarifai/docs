# Setting the predicate parameter is optional. If skipped, all concept's relations will be returned.

curl -X GET "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/concepts/YOUR_CONCEPT_ID_HERE/relations?predicate=hypernym" \
    -H "Authorization: Key YOUR_PAT_HERE" \
    -H "Content-Type: application/json"