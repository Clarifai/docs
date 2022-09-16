curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/workflows" \
    -H "Authorization: Key YOUR_PAT_HERE" \
    -H "Content-Type: application/json" \
    --data-raw '{
		"workflows": [
			{
			  "id": "predict-cluster-only",
			  "nodes": [
				{
				  "id": "general-embed",
				  "model": {
					"id": "bbb5f41425b8468d9b7a554ff10f8581",
					"model_version": {
					  "id": "bb186755eda04f9cbb6fe32e816be104"
					}
				  },
				  "suppress_output": true
				},
				{
				  "id": "general-cluster",
				  "node_inputs": [
					{
					  "node_id": "general-embed"
					}
				  ],
				  "model": {
					"id": "cccbe437d6e54e2bb911c6aa292fb072",
					"model_version": {
					  "id": "cc2074cff6dc4c02b6f4e1b8606dcb54"
					}
				  }
				}
			  ]
			}
		]
	}'