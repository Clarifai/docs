# Value of 1 means true, this concept is present
# Value of 0 means false, this concept is not present

curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/annotations" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
   "annotations": [
            {
                "input_id": "YOUR_INPUT_ID_HERE",
                "data": {
                    "regions": [
                        {
                            "region_info": {
                                "polygon": {
                                    "points": [
                                        {
                                            "row": 0.30
                                        },
                                        {
                                            "col": 0.50
                                        },
                                        {
                                            "z": 0.50
                                        }
                                    ]
                                }
                            },
                            "data": {                                
                                "concepts": [
                                    {
                                        "id": "YOUR_CONCEPT_ID_1",
                                        "value": 1
                                    },
                                    {
                                        "id": "YOUR_CONCEPT_ID_2",
                                        "value": 0
                                    }
                                ]
                            }
                        }
                    ]
                }
                
            }, {
                "input_id": "YOUR_INPUT_ID_HERE",
                "data": {
                    "regions": [
                        {
                            "region_info": {
                                "polygon": {
                                    "points": [
                                        {
                                            "row": 0.60
                                        },
                                        {
                                            "col": 0.80
                                        },
                                        {
                                            "z": 0.50
                                        }

                                    ]

                                }
                            },
                            "data": {
                                "concepts": [
                                    {
                                        "id": "YOUR_CONCEPT_ID_3",
                                        "value": 1
                                    }
                                ]
                            }
                        }
                    ]
                }
                
            }
        ]
}'