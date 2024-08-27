curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/tasks" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
        "tasks": [
            {
                "type": "TYPE_NOT_SET",
                "name": "Auto-Annotate CONCEPT_ID_HERE",
                "worker": {
                    "strategy": "FULL",
                    "workers": [
                        {
                            "model": {
                                "id": "MODEL_ID_HERE",
                                "model_version": {
                                    "id": "MODEL_VERSION_ID_HERE"
                                }
                            }
                        }
                    ]
                },
                "concepts": [
                    {
                        "concept": {
                            "id": "CONCEPT_ID_HERE"
                        },
                        "auto_annotation_config": {
                            "annotation_data_types": 1,
                            "threshold_range": {
                                "is_lower_inclusive": true,
                                "is_upper_inclusive": true,
                                "lower": 0.7,
                                "upper": 0.999
                            },
                            "status_code": 24150
                        }
                    }
                ],
                "input_source": {
                    "type": "DATASET",
                    "id": "DATASET_ID_HERE"
                },
                "sample_ms": 1000,
                "review": {
                    "strategy": "NONE"
                }
            }
        ]
  }'
