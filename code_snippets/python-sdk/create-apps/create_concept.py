from clarifai.client.input import Inputs

image_url = "https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg"
# You can set the label parameter inorder to create a concept while uploading inputs 
input_obj = Inputs(user_id="user_id", app_id="test_app", pat="YOUR_PAT")
input_obj.upload_from_url(
    input_id="demo2",
    image_url=image_url,
    labels=["train"],
)
