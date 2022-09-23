curl --location --request POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/searches/YOUR_SEARCH_ID_HERE" \
--header "Content-Type: application/json" \
--header "Authorization: Key YOUR_PAT_HERE" \
--data-raw '{
  "pagination": {
    "page": 1,
    "per_page": 5
  }
}'