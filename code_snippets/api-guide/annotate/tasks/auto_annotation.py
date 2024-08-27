##########################################################################################
# In this section, we set the user authentication, app ID, and auto-annotation details.
# Change these strings to run your own example.
##########################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to create your own auto-annotation task 
MODEL_ID = 'MODEL_ID_HERE'
MODEL_VERSION_ID = 'MODEL_VERSION_ID_HERE'
CONCEPT_ID = 'CONCEPT_ID_HERE'
DATASET_ID = 'DATASET_ID_HERE'

##########################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
##########################################################################

from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_code_pb2

channel = ClarifaiChannel.get_grpc_channel()
stub = service_pb2_grpc.V2Stub(channel)

metadata = (('authorization', 'Key ' + PAT),)

userDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)

post_tasks_response = stub.PostTasks(
    service_pb2.PostTasksRequest(
        user_app_id=userDataObject,  # The userDataObject is created in the overview and is required when using a PAT
        tasks=[
            resources_pb2.Task(
                type='TYPE_NOT_SET',
                name='Auto-Annotate ' + CONCEPT_ID,
                worker=resources_pb2.TaskWorker(
                    strategy='FULL',
                    workers=[
                        resources_pb2.Worker(
                            model=resources_pb2.Model(
                                id=MODEL_ID,
                                model_version=resources_pb2.ModelVersion(
                                    id=MODEL_VERSION_ID
                                )
                            )
                        )
                    ]
                ),
                concepts=[
                    resources_pb2.TaskConcept(
                        concept=resources_pb2.Concept(
                            id=CONCEPT_ID
                        ),
                        auto_annotation_config=resources_pb2.TaskConceptAutoAnnotationConfig(
                            annotation_data_types=1,
                            threshold_range=resources_pb2.ThresholdRange(
                                is_lower_inclusive=True,
                                is_upper_inclusive=True,
                                lower=0.7,
                                upper=0.999
                            ),
                            status_code=24150
                        )
                    )
                ],
                input_source=resources_pb2.TaskInputSource(
                    type='DATASET',
                    id=DATASET_ID
                ),
                sample_ms=1000,
                review=resources_pb2.TaskReview(
                    strategy='NONE'
                )
            )
        ]
    ),
    metadata=metadata
)

if post_tasks_response.status.code != status_code_pb2.SUCCESS:
    print(post_tasks_response.status)
    raise Exception("Post tasks failed, status: " + post_tasks_response.status.description)
