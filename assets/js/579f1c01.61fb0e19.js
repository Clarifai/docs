"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[7777],{85162:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294),s=n(34334),o="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,s.Z)(o,r),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(83117),s=n(67294),o=n(34334),r=n(72389),i=n(67392),l=n(7094),p=n(12466),c="tabList__CuJ",u="tabItem_LNqP";function _(e){var t,n;const{lazy:r,block:_,defaultValue:d,values:m,groupId:h,className:b}=e,f=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,i.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const E=null===d?d:null!=(t=null!=d?d:null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)?t:f[0].props.value;if(null!==E&&!g.some((e=>e.value===E)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+E+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:T,setTabGroupChoices:I}=(0,l.U)(),[D,w]=(0,s.useState)(E),y=[],{blockElementScrollPositionUntilNextRender:P}=(0,p.o5)();if(null!=h){const e=T[h];null!=e&&e!==D&&g.some((t=>t.value===e))&&w(e)}const O=e=>{const t=e.currentTarget,n=y.indexOf(t),a=g[n].value;a!==D&&(P(t),w(a),null!=h&&I(h,String(a)))},k=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=y.indexOf(e.currentTarget)+1;n=null!=(a=y[t])?a:y[0];break}case"ArrowLeft":{var s;const t=y.indexOf(e.currentTarget)-1;n=null!=(s=y[t])?s:y[y.length-1];break}}null==(t=n)||t.focus()};return s.createElement("div",{className:(0,o.Z)("tabs-container",c)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":_},b)},g.map((e=>{let{value:t,label:n,attributes:r}=e;return s.createElement("li",(0,a.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:e=>y.push(e),onKeyDown:k,onFocus:O,onClick:O},r,{className:(0,o.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":D===t})}),null!=n?n:t)}))),r?(0,s.cloneElement)(f.filter((e=>e.props.value===D))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==D})))))}function d(e){const t=(0,r.Z)();return s.createElement(_,(0,a.Z)({key:String(t)},e))}},89093:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return _}});var a=n(83117),s=(n(67294),n(3905)),o=n(65488),r=n(85162),i=n(66066);const l={description:"Develop your own custom text classifier.",sidebar_position:4},p="Custom Text Model",c={unversionedId:"api-guide/model/custom-text-model-walkthrough",id:"api-guide/model/custom-text-model-walkthrough",title:"Custom Text Model",description:"Develop your own custom text classifier.",source:"@site/docs/api-guide/model/custom-text-model-walkthrough.md",sourceDirName:"api-guide/model",slug:"/api-guide/model/custom-text-model-walkthrough",permalink:"/api-guide/model/custom-text-model-walkthrough",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Develop your own custom text classifier.",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Custom Models",permalink:"/api-guide/model/custom-model-walkthrough"},next:{title:"Models: Create, Update, Get, Delete",permalink:"/api-guide/model/create-get-update-and-delete"}},u={},_=[{value:"Create a New Application",id:"create-a-new-application",level:2},{value:"Add a Batch of Texts",id:"add-a-batch-of-texts",level:2},{value:"Wait for Inputs to Download",id:"wait-for-inputs-to-download",level:2},{value:"Create a Custom Model",id:"create-a-custom-model",level:2},{value:"Train the Model",id:"train-the-model",level:2},{value:"Wait for Model Training to Complete",id:"wait-for-model-training-to-complete",level:2},{value:"Predict on New Inputs",id:"predict-on-new-inputs",level:2},{value:"Start Model Evaluation",id:"start-model-evaluation",level:2},{value:"Wait for Model Evaluation Results",id:"wait-for-model-evaluation-results",level:2}],d={toc:_};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"custom-text-model"},"Custom Text Model"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Develop your own custom text classifier")),(0,s.kt)("hr",null),(0,s.kt)("p",null,"The Clarifai API has the ability not only to learn concepts from images and videos, but from texts as well."),(0,s.kt)("p",null,"In this walkthrough, you'll learn how to create and use a custom text model, learn from your own text data using the power of the Clarifai's base Text model, and predict on new text examples."),(0,s.kt)("p",null,"The steps below can all be done via ",(0,s.kt)("a",{parentName:"p",href:"https://portal.clarifai.com"},"the Clarifai's portal"),". But here you'll learn how to do them programmatically via an API, using our ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Clarifai/clarifai-python-grpc"},"gRPC Python client"),"."),(0,s.kt)("p",null,"The examples below map directly to any of our other gRPC clients."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"The walkthrough assumes you have already created your Clarifai's user account and the ",(0,s.kt)("a",{parentName:"p",href:"https://portal.clarifai.com/settings/authentication"},"Personal Access Token"),". Also, first set up the gRPC Python client together with the initial code. See the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions"},"client installation page."))),(0,s.kt)("p",null,"For debugging purposes, each response returned by a method call can be printed to the console, and its entire data and structure will be shown verbosely."),(0,s.kt)("h2",{id:"create-a-new-application"},"Create a New Application"),(0,s.kt)("p",null,"The first step is manual. In the Clarifai Portal, ",(0,s.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/clarifai-basics/applications/create-an-application"},"create a new application")," with ",(0,s.kt)("strong",{parentName:"p"},"Text")," selected as the Base Workflow."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://s3.amazonaws.com/clarifai-api/img3/prod/large/e12ce254f2824b0ab2aef1b10784ff23/3e695b780f597cd263b06d0aeb30b3d1?v=001",alt:null})),(0,s.kt)("h2",{id:"add-a-batch-of-texts"},"Add a Batch of Texts"),(0,s.kt)("p",null,"We'll now add several text inputs that we will later use as training data in our custom model. The idea is that we'll create a model which can differentiate between positive and negative sentences ","(","in a grammatical sense",")",". "),(0,s.kt)("p",null,"We'll mark each input with one of the two concepts: ",(0,s.kt)("inlineCode",{parentName:"p"},"positive")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"negative"),"."),(0,s.kt)("p",null,"The texts can be added either directly ","(","it's called raw",")"," or from a URL."),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"grpc_python",label:"gRPC Python",mdxType:"TabItem"},(0,s.kt)(i.Z,{className:"language-python",mdxType:"CodeBlock"},'##########################################################################\n# In this section, we set the user authentication, app ID, and negative \n# and positive texts. Change these strings to run your own example.\n##########################################################################\n\nUSER_ID = \'YOUR_USER_ID_HERE\'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = \'YOUR_PAT_HERE\'\nAPP_ID = \'YOUR_APP_ID_HERE\'\n# Add your own batch of texts\npositive_raw_texts = [\n    "Marie is a published author.",\n    "In three years, everyone will be happy.",\n    "Nora Roberts is the most prolific romance writer the world has ever known.",\n    "She has written more than 225 books.",\n    "If you walk into Knoxville, you\'ll find a shop named Rala.",\n    "There are more than 850 miles of hiking trails in the Great Smoky Mountains.",\n    "Harrison Ford is 6\'1\\".",\n    "According to Reader\'s Digest, in the original script of Return of The Jedi, Han Solo died.",\n    "Kate travels to Doolin, Ireland every year for a writers\' conference.",\n    "Fort Stevens was decommissioned by the United States military in 1947.",\n]\nnegative_text_urls = [\n    "https://samples.clarifai.com/negative_sentence_1.txt",\n    "https://samples.clarifai.com/negative_sentence_2.txt",\n    "https://samples.clarifai.com/negative_sentence_3.txt",\n    "https://samples.clarifai.com/negative_sentence_4.txt",\n    "https://samples.clarifai.com/negative_sentence_5.txt",\n    "https://samples.clarifai.com/negative_sentence_6.txt",\n    "https://samples.clarifai.com/negative_sentence_7.txt",\n    "https://samples.clarifai.com/negative_sentence_8.txt",\n    "https://samples.clarifai.com/negative_sentence_9.txt",\n    "https://samples.clarifai.com/negative_sentence_10.txt",\n]\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = ((\'authorization\', \'Key \' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)\n\npost_inputs_response = stub.PostInputs(\n    service_pb2.PostInputsRequest(\n        user_app_id=userDataObject,\n        inputs=[\n            resources_pb2.Input(\n                data=resources_pb2.Data(\n                    text=resources_pb2.Text(raw=raw_text),\n                    concepts=[resources_pb2.Concept(id="positive", value=1)]\n                )\n            )\n            for raw_text in positive_raw_texts\n        ] + [\n            resources_pb2.Input(\n                data=resources_pb2.Data(\n                    text=resources_pb2.Text(\n                        url=text_url,\n                        allow_duplicate_url=True\n                    ),\n                    concepts=[resources_pb2.Concept(id="negative", value=1)]\n                )\n            )\n            for text_url in negative_text_urls\n        ]\n    ),\n    metadata=metadata\n)\n\nif post_inputs_response.status.code != status_code_pb2.SUCCESS:\n    print(post_inputs_response.status)\n    raise Exception("Failed response, status: " + post_inputs_response.status.description)\n\n# Uncomment this line to see the structure and data of the response\n#print(post_inputs_response)'))),(0,s.kt)("h2",{id:"wait-for-inputs-to-download"},"Wait for Inputs to Download"),(0,s.kt)("p",null,"Let's now wait for all the inputs to download."),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"grpc_python",label:"gRPC Python",mdxType:"TabItem"},(0,s.kt)(i.Z,{className:"language-python",mdxType:"CodeBlock"},'###############################################################\n# In this section, we set the user authentication and app ID. \n# Change these strings to run your own example.\n###############################################################\n\nUSER_ID = \'YOUR_USER_ID_HERE\'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = \'YOUR_PAT_HERE\'\nAPP_ID = \'YOUR_APP_ID_HERE\'\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\nimport time\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = ((\'authorization\', \'Key \' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)\n\nwhile True:\n    list_inputs_response = stub.ListInputs(\n        service_pb2.ListInputsRequest(\n            user_app_id=userDataObject,\n            page=1,\n            per_page=100\n        ),\n        metadata=metadata\n    )\n    \n    if list_inputs_response.status.code != status_code_pb2.SUCCESS:\n        print(list_inputs_response.status)\n        raise Exception("Failed response, status: " + list_inputs_response.status.description)\n\n    for the_input in list_inputs_response.inputs:\n        input_status_code = the_input.status.code\n        if input_status_code == status_code_pb2.INPUT_DOWNLOAD_SUCCESS:\n            continue\n        elif input_status_code in (status_code_pb2.INPUT_DOWNLOAD_PENDING, status_code_pb2.INPUT_DOWNLOAD_IN_PROGRESS):\n            print("Not all inputs have been downloaded yet. Checking again shortly.")\n            break\n        else:\n            error_message = (\n                    str(input_status_code) + " " +\n                    the_input.status.description + " " +\n                    the_input.status.details\n            )\n            raise Exception(\n                f"Expected inputs to download, but got {error_message}. Full response: {list_inputs_response}"\n            )\n    else:\n        # Once all inputs have been successfully downloaded, break the while True loop\n        print("All inputs have been successfully downloaded.")\n        break\n    time.sleep(2)'))),(0,s.kt)("h2",{id:"create-a-custom-model"},"Create a Custom Model"),(0,s.kt)("p",null,"Now we can create a custom model that's going to be using the ",(0,s.kt)("inlineCode",{parentName:"p"},"positive")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"negative")," concepts. "),(0,s.kt)("p",null,"All inputs ","(","in our application",")"," associated with these two concepts will be used as training data, once we actually train the model."),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"grpc_python",label:"gRPC Python",mdxType:"TabItem"},(0,s.kt)(i.Z,{className:"language-python",mdxType:"CodeBlock"},"#############################################################################\n# In this section, we set the user authentication, app ID, and the ID of the \n# model we want to create. Change these strings to run your own example.\n#############################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change this to create your own custom model\nMODEL_ID = 'text-model-1' \n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)\n\npost_models_response = stub.PostModels(\n    service_pb2.PostModelsRequest(\n        user_app_id=userDataObject,\n        models=[\n            resources_pb2.Model(\n                id=MODEL_ID,\n                output_info=resources_pb2.OutputInfo(\n                    data=resources_pb2.Data(\n                        concepts=[\n                            resources_pb2.Concept(id=\"positive\"),\n                            resources_pb2.Concept(id=\"negative\"),\n                        ]\n                    ),\n                    output_config=resources_pb2.OutputConfig(closed_environment=True)\n                )\n            )\n        ]\n    ),\n    metadata=metadata\n)\n\nif post_models_response.status.code != status_code_pb2.SUCCESS:\n    print(post_models_response.status)\n    raise Exception(\"Failed response, status: \" + post_models_response.status.description)\n\n# Uncomment this line to see the structure and data of the response\n#print(post_models_response)"))),(0,s.kt)("h2",{id:"train-the-model"},"Train the Model"),(0,s.kt)("p",null,"Let's train the model. This will make it learn from the inputs so that we can later use it to predict new text examples. "),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"grpc_python",label:"gRPC Python",mdxType:"TabItem"},(0,s.kt)(i.Z,{className:"language-python",mdxType:"CodeBlock"},"#############################################################################\n# In this section, we set the user authentication, app ID, and the ID of the \n# model we want to train. Change these strings to run your own example.\n#############################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change this to train your own custom model\nMODEL_ID = 'text-model-1' \n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)\n\npost_model_versions_response = stub.PostModelVersions(\n    service_pb2.PostModelVersionsRequest(\n        user_app_id=userDataObject,\n        model_id=MODEL_ID\n    ),\n    metadata=metadata\n)\n\nif post_model_versions_response.status.code != status_code_pb2.SUCCESS:\n    print(post_model_versions_response.status)\n    raise Exception(\"Failed response, status: \" + post_model_versions_response.status.description)\n\n# Uncomment this line to see the structure and data of the response\n#print(post_model_versions_response)"))),(0,s.kt)("h2",{id:"wait-for-model-training-to-complete"},"Wait for Model Training to Complete"),(0,s.kt)("p",null,"Let's wait for the model training to complete."),(0,s.kt)("p",null,"Each model training produces a new model version. Notice that on the bottom of the following code example, we placed the model version ID into its own variable."),(0,s.kt)("p",null,"We'll be using it later to specify which specific model version we want to use ","(","since a model can have multiple versions",")","."),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"grpc_python",label:"gRPC Python",mdxType:"TabItem"},(0,s.kt)(i.Z,{className:"language-python",mdxType:"CodeBlock"},"###############################################################################\n# In this section, we set the user authentication, app ID, and the ID of the \n# model to wait for its training. Change these strings to run your own example.\n################################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change this to wait for your own model's training\nMODEL_ID = 'text-model-1' \n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\nimport time\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)\n\nwhile True:\n    get_model_response = stub.GetModel(\n        service_pb2.GetModelRequest(\n             user_app_id=userDataObject,\n            model_id=MODEL_ID\n        ),\n        metadata=metadata\n    )\n    \n    if get_model_response.status.code != status_code_pb2.SUCCESS:\n        print(get_model_response.status)\n        raise Exception(\"Failed response, status: \" + get_model_response.status.description)\n\n    version_status_code = get_model_response.model.model_version.status.code\n    if version_status_code == status_code_pb2.MODEL_TRAINED:\n        print(\"The model has been successfully trained.\")\n        break\n    elif version_status_code in (status_code_pb2.MODEL_QUEUED_FOR_TRAINING, status_code_pb2.MODEL_TRAINING):\n        print(\"The model hasn't been trained yet. Trying again shortly.\")\n        time.sleep(2)\n    else:\n        error_message = (\n                str(get_model_response.status.code) + \" \" +\n                get_model_response.status.description + \" \" +\n                get_model_response.status.details\n        )\n        raise Exception(\n            f\"Expected model to train, but got {error_message}. Full response: {get_model_response}\"\n        )\n\nmodel_version_id = get_model_response.model.model_version.id\n"))),(0,s.kt)("h2",{id:"predict-on-new-inputs"},"Predict on New Inputs"),(0,s.kt)("p",null,"Let's now use the trained custom model to predict new text examples."),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"grpc_python",label:"gRPC Python",mdxType:"TabItem"},(0,s.kt)(i.Z,{className:"language-python",mdxType:"CodeBlock"},"###########################################################################\n# In this section, we set the user authentication, app ID, model details, \n# and new input samples. Change these strings to run your own example.\n###########################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change these to make your own predictions\nMODEL_ID = 'text-model-1'\nMODEL_VERSION_ID = '49219b5968624221ac488303dde55327' \nINPUT_TEXT = 'Butchart Gardens contains over 900 varieties of plants.'\nINPUT_URL = 'https://samples.clarifai.com/negative_sentence_12.txt'\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)\n\npost_model_outputs_response = stub.PostModelOutputs(\n    service_pb2.PostModelOutputsRequest(\n        user_app_id=userDataObject,\n        model_id=MODEL_ID,\n        # By default, the latest model version will be used, but it doesn't hurt to set it explicitly\n        version_id=MODEL_VERSION_ID,\n        inputs=[\n            resources_pb2.Input(data=resources_pb2.Data(text=resources_pb2.Text(raw=INPUT_TEXT))),\n            resources_pb2.Input(data=resources_pb2.Data(text=resources_pb2.Text(url=INPUT_URL))),\n        ]\n    ),\n    metadata=metadata\n)\n\nif post_model_outputs_response.status.code != status_code_pb2.SUCCESS:\n    print(post_model_outputs_response.status)\n    raise Exception(\"Failed response, status: \" + post_model_outputs_response.status.description)\n\nfor output in post_model_outputs_response.outputs:\n    text_object = output.input.data.text\n    val = text_object.raw if text_object.raw else text_object.url\n\n    print(f\"The following concepts were predicted for the input `{val}`:\")\n    for concept in output.data.concepts:\n        print(f\"\\t{concept.name}: {concept.value:.2f}\")\n"))),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Code Output Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"The following concepts were predicted for the input `Butchart Gardens contains over 900 varieties of plants.`:\n    positive: 0.83\n    negative: 0.17\nThe following concepts were predicted for the input `https://samples.clarifai.com/negative_sentence_12.txt`:\n    negative: 1.00\n    positive: 0.00\n"))),(0,s.kt)("h2",{id:"start-model-evaluation"},"Start Model Evaluation"),(0,s.kt)("p",null,"Let's now test the performance of the model by using model evaluation. "),(0,s.kt)("p",null,"See the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/evaluate/"},"the Model Evaluation page")," to learn more."),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"grpc_python",label:"gRPC Python",mdxType:"TabItem"},(0,s.kt)(i.Z,{className:"language-python",mdxType:"CodeBlock"},"###########################################################################\n# In this section, we set the user authentication, app ID, model ID, \n# and model version. Change these strings to run your own example.\n###########################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change these to make your own evaluations\nMODEL_ID = 'text-model-1' \nMODEL_VERSION_ID = '49219b5968624221ac488303dde55327'\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)\n\npost_model_version_metrics = stub.PostModelVersionMetrics(\n    service_pb2.PostModelVersionMetricsRequest(\n        user_app_id=userDataObject,\n        model_id=MODEL_ID,\n        version_id=MODEL_VERSION_ID\n    ),\n    metadata=metadata\n)\n\nif post_model_version_metrics.status.code != status_code_pb2.SUCCESS:\n    print(post_model_version_metrics.status)\n    raise Exception(\"Failed response, status: \" + post_model_version_metrics.status.description)\n\nprint(post_model_version_metrics)"))),(0,s.kt)("details",null,(0,s.kt)("summary",null,"JSON Output Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'status {\n  code: SUCCESS\n  description: "Ok"\n  req_id: "967dfe6d8d59d4eaa3b7c7b71bfb190b"\n}\nmodel_version {\n  id: "49219b5968624221ac488303dde55327"\n  created_at {\n    seconds: 1646391865\n    nanos: 51793000\n  }\n  status {\n    code: MODEL_TRAINED\n    description: "Model is trained and ready"\n  }\n  active_concept_count: 2\n  metrics {\n    status {\n      code: MODEL_EVALUATED\n      description: "Model was successfully evaluated."\n    }\n    summary {\n      macro_avg_roc_auc: 1.0\n      macro_avg_f1_score: 1.0\n      macro_avg_precision: 1.0\n      macro_avg_recall: 1.0\n    }\n  }\n  total_input_count: 158\n  completed_at {\n    seconds: 1646391870\n    nanos: 501850000\n  }\n  visibility {\n    gettable: PRIVATE\n  }\n  app_id: "my-text-model"\n  user_id: "ei2leoz3s3iy"\n  metadata {\n  }\n}\n'))),(0,s.kt)("h2",{id:"wait-for-model-evaluation-results"},"Wait for Model Evaluation Results"),(0,s.kt)("p",null,"Model evaluation takes some time; depending on the amount of data the model has. "),(0,s.kt)("p",null,"Let's wait for it to complete, and print all the results that it gives us."),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"grpc_python",label:"gRPC Python",mdxType:"TabItem"},(0,s.kt)(i.Z,{className:"language-python",mdxType:"CodeBlock"},"#################################################################################\n# In this section, we set the user authentication, app ID, and the model to wait\n# for its evaluation results. Change these strings to run your own example.\n#################################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change these to wait for your own model's evaluation results\nMODEL_ID = 'text-model-1' \nMODEL_VERSION_ID = '49219b5968624221ac488303dde55327'\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\nimport time\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)\n\nwhile True:\n    get_model_version_metrics_response = stub.GetModelVersionMetrics(\n        service_pb2.GetModelVersionMetricsRequest(\n            user_app_id=userDataObject,\n            model_id=MODEL_ID,\n            version_id=MODEL_VERSION_ID,\n            fields=resources_pb2.FieldsValue(\n                confusion_matrix=True,\n                cooccurrence_matrix=True,\n                label_counts=True,\n                binary_metrics=True,\n                test_set=True,\n                metrics_by_area=True,\n                metrics_by_class=True,\n            )\n        ),\n        metadata=metadata\n    )\n    \n    if get_model_version_metrics_response.status.code != status_code_pb2.SUCCESS:\n        print(get_model_version_metrics_response.status)\n        raise Exception(\"Get model version metrics failed: \" + get_model_version_metrics_response.status.description)\n    \n    metrics_status_code = get_model_version_metrics_response.model_version.metrics.status.code\n    if metrics_status_code == status_code_pb2.MODEL_EVALUATED:\n        print(\"The model has been successfully evaluated.\")\n        break\n    elif metrics_status_code in (status_code_pb2.MODEL_NOT_EVALUATED, status_code_pb2.MODEL_QUEUED_FOR_EVALUATION, status_code_pb2.MODEL_EVALUATING):\n        print(\"The model hasn't been evaluated yet. Trying again shortly.\")\n        time.sleep(2)\n    else:\n        error_message = (\n                str(get_model_version_metrics_response.status.code) + \" \" +\n                get_model_version_metrics_response.status.description + \" \" +\n                get_model_version_metrics_response.status.details\n        )\n        raise Exception(\n            f\"Expected model to evaluate, but got {error_message}. Full response: {get_model_version_metrics_response}\"\n        )\n\nprint(\"The model metrics response object:\")\nprint(get_model_version_metrics_response)\n"))))}m.isMDXComponent=!0}}]);