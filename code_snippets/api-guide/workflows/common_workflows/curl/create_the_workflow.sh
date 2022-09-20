curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/workflows" \
    -H "Authorization: Key YOUR_PAT_HERE" \
    -H "Content-Type: application/json" \
    --data-raw '{
        "workflows": [
            {
                "id": "auto-annotation-workflow-id",
                "nodes": [
                    {
                        "id": "general-embed",
                        "model": {
                            "id": "YOUR_GENERAL_EMBED_MODEL_ID_HERE",
                            "model_version": {
                                "id": "YOUR_GENERAL_EMBED_MODEL_VERSION_ID_HERE"
                            }
                        }
                    },
                    {
                        "id": "general-concept",
                        "model": {
                            "id": "YOUR_GENERAL_CONCEPT_MODEL_ID_HERE",
                            "model_version": {
                                "id": "YOUR_GENERAL_CONCEPT_MODEL_VERSION_ID_HERE"
                            }
                        }
                    },
                    {
                        "id": "general-cluster",
                        "model": {
                            "id": "YOUR_GENERAL_CLUSTER_MODEL_ID_HERE",
                            "model_version": {
                                "id": "YOUR_GENERAL_CLUSTER_MODEL_VERSION_ID_HERE"
                            }
                        }
                    },
                    {
                        "id": "mapper",
                        "model": {
                            "id": "synonym-model-id",
                            "model_version": {
                                "id": "YOUR_MAPPER_MODEL_VERSION_ID_HERE"
                            }
                        },
                        "node_inputs": [
                            {
                                "node_id": "general-concept"
                            }
                        ]
                    },
                    {
                        "id": "greater-than",
                        "model": {
                            "id": "greater-than-model-id",
                            "model_version": {
                                "id": "YOUR_GREATER_THAN_MODEL_VERSION_ID_HERE"
                            }
                        },
                        "node_inputs": [
                            {
                                "node_id": "mapper"
                            }
                        ]
                    },
                    {
                        "id": "write-success",
                        "model": {
                            "id": "write-success-as-me",
                            "model_version": {
                                "id": "YOUR_WRITE_AS_ME_MODEL_VERSION_ID_HERE"
                            }
                        },
                        "node_inputs": [
                            {
                                "node_id": "greater-than"
                            }
                        ]
                    },
                    {
                        "id": "less-than",
                        "model": {
                            "id": "less-than-model-id",
                            "model_version": {
                                "id": "YOUR_LESS_THAN_MODEL_VERSION_ID_HERE"
                            }
                        },
                        "node_inputs": [
                            {
                                "node_id": "mapper"
                            }
                        ]
                    },
                    {
                        "id": "write-pending",
                        "model": {
                            "id": "write-pending-as-me",
                            "model_version": {
                                "id": "YOUR_WRITE_AS_COLLABORATOR_MODEL_VERSION_ID_HERE"
                            }
                        },
                        "node_inputs": [
                            {
                                "node_id": "less-than"
                            }
                        ]
                    }
                ]
            }
        ]
    }'