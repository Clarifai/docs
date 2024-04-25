#################################################################################
# In this section, we set the user authentication, app ID, and details for
# creating a task. Change these strings to run your own example.
#################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to create your own task with consensus review
CONCEPT_ID = 'water'
USER_ID_1 = 'USER_ID_1_HERE'
USER_ID_2 = 'USER_ID_2_HERE'
USER_ID_3 = 'USER_ID_3_HERE'
USER_ID_4 = 'USER_ID_4_HERE'

##########################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
##########################################################################

from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_code_pb2
from google.protobuf.struct_pb2 import Struct

channel = ClarifaiChannel.get_grpc_channel()
stub = service_pb2_grpc.V2Stub(channel)

params = Struct()
params.update({
    USER_ID_1: 1,
    USER_ID_2: 1,
    USER_ID_3: 1
})

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
                    strategy='PARTITIONED',
                    users=[
                        resources_pb2.User(id=USER_ID_1),
                        resources_pb2.User(id=USER_ID_2),
                        resources_pb2.User(id=USER_ID_3)
                    ],
                    partitioned_strategy_info=resources_pb2.TaskWorkerPartitionedStrategyInfo(
                        type='WEIGHTED',
                        workers_per_input=3,
                        weights=params
                    )
                ),
                concepts=[
                    resources_pb2.TaskConcept(
                        concept=resources_pb2.Concept(id=CONCEPT_ID)
                    )
                ],
                input_source=resources_pb2.TaskInputSource(type='ALL_INPUTS'),
                sample_ms=1000,
                review=resources_pb2.TaskReview(
                    strategy='CONSENSUS',
                    consensus_strategy_info=resources_pb2.TaskReviewConsensusStrategyInfo(
                        approval_threshold=2
                    ),
                    users=[resources_pb2.User(id=USER_ID_4)]
                )
            )
        ]
    ),
    metadata=metadata
)

if post_tasks_response.status.code != status_code_pb2.SUCCESS:
    print(post_tasks_response.status)
    raise Exception('Post tasks failed, status: ' + post_tasks_response.status.description)
