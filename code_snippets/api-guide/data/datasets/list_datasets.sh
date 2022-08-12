curl --location --request GET "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/datasets?page=1&per_page=100" \
--header "Authorization: Key YOUR_PAT_HERE" \
--header "Content-Type: application/json"