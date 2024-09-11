#################################################################################
# In this section, we set the user authentication, app ID, and details for
# assigning a task. Change these strings to run your own example.
#################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to assign your own task
CONCEPT_ID = 'water'
WORKER_USER_ID = 'WORKER_USER_ID_HERE'
REVIEWER_USER_ID = 'REVIEWER_USER_ID_HERE' # User who will review this task
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
                type='CONCEPTS_CLASSIFICATION',
                name='Annotate ' + CONCEPT_ID,
                worker=resources_pb2.TaskWorker(
                    strategy='DYNAMIC',
                    workers=[
                        resources_pb2.Worker(
                            user=resources_pb2.User(
                                id=WORKER_USER_ID
                            )
                        )
                    ]
                ),
                concepts=[
                    resources_pb2.TaskConcept(
                        concept=resources_pb2.Concept(
                            id=CONCEPT_ID
                        )
                    )
                ],
                input_source=resources_pb2.TaskInputSource(
                    type='DATASET',
                    id=DATASET_ID
                ),
                sample_ms=1000,
                review=resources_pb2.TaskReview(
                    strategy='MANUAL',
                    manual_strategy_info=resources_pb2.TaskReviewManualStrategyInfo(
                        sample_percentage=0.5
                    ),
                    users=[
                        resources_pb2.User(
                            id=REVIEWER_USER_ID
                        )
                    ]
                )
            )
        ]
    ),
    metadata=metadata
)

if post_tasks_response.status.code != status_code_pb2.SUCCESS:
    print(post_tasks_response.status)
    raise Exception('Post tasks failed, status: ' + post_tasks_response.status.description)
