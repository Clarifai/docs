from clarifai.client.input import Inputs
input_obj = Inputs( user_id='user_id', app_id='test_app')

#listing inputs
input_generator = input_obj.list_inputs(page_no=1,per_page=1,input_type='image')
inputs_list = list(input_generator)

#downloading_inputs
input_bytes = input_obj.download_inputs(inputs_list)
with open('demo.jpg','wb') as f:
  f.write(input_bytes[0])