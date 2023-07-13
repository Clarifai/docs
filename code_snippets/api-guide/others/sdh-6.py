import requests

url = "https://data.clarifai.com/orig/users/alfrick/apps/deep-learning/inputs/image/140c856dc82565d2c4d6ea720fceff78"
authorization_key = "YOUR_AUTHORIZATION_KEY"

if url.startswith("https://data.clarifai.com"):
    # Download with authorization header
    headers = {"Authorization": f"Key {authorization_key}"}
    response = requests.get(url, headers=headers)
else:
    # Download without authorization header
    response = requests.get(url)

# Process the response or save the downloaded file
if response.status_code == 200:
    # File download successful
    # Process the response content or save the file
    with open("downloaded_file.txt", "wb") as file:
        file.write(response.content)
else:
    # File download failed
    print("File download failed. Status code:", response.status_code)