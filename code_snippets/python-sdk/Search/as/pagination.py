from clarifai.client.user import User
#replace your "user_id"
client = User(user_id="user_id")

#(Example Workflows: 'Universal', 'Empty', 'General')
app = client.create_app(app_id="app_id", base_workflow="Universal")

# set the input url's
urls = [
    "https://images.pexels.com/photos/139257/pexels-photo-139257.jpeg",
    "https://images.pexels.com/photos/1879386/pexels-photo-1879386.jpeg",
    "https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg"
]

input_obj = app.inputs()
# add inputs to the app
for i, url in enumerate(urls):
    input_obj.upload_from_url(input_id=f"input{i}", image_url=url)


# perform search with pagination
search = app.search(pagination=True)
response = search.query(ranks=[{"text_raw": "Red pineapples on the beach."}], per_page=2,page_no=1)
resp = list(response)
print(len(resp[0].hits))