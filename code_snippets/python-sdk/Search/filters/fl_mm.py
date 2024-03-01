# Importing necessary modules
from google.protobuf.struct_pb2 import Struct
from clarifai.client.user import User
from clarifai.client.search import Search

# Replace with your Clarifai account information
USER_ID = ''  # Your user ID
APP_ID = ''   # Your app ID
PAT = ''      # Your personal access token

# Creating a User object with your credentials
client = User(user_id=USER_ID)

# Creating an app with specified settings
# (Example Workflows: 'Universal', 'General')
app = client.create_app(app_id=APP_ID, base_workflow="Universal", pat=PAT)

# Initializing a Search object
s = Search(user_id=USER_ID, app_id=APP_ID, pat=PAT)

# URL of the image and raw text to be uploaded
img_url = "https://images.pexels.com/photos/139257/pexels-photo-139257.jpeg"
raw_text = "This is earth."

# Uploading the image and raw text as inputs
input_obj = app.inputs()
input_obj.upload_from_url(input_id="img_input", image_url=img_url)
input_obj.upload_text(input_id="txt_input", raw_text=raw_text)

# Querying the search with filters to retrieve results
res = s.query(filters=[{'input_types': ['image', 'text']}])

# Iterating through the search results
for r in res:
    # Extracting text and image URL from the search results
    text_hit = r.hits[0].input.data.text
    image_hit = r.hits[1].input.data.image.url
    break  # Exiting the loop after the first result

# Printing the extracted text and image URL
print(text_hit)
print(image_hit)

# Displaying the image using its URL
hit_img = Image.open(requests.get(image_hit, stream=True).raw).resize((300, 250))
display(hit_img)