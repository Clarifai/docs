import requests
import time


def make_request(url, headers):
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.HTTPError as err:
        error_response = err.response.json()
        if (
            "status" in error_response
            and error_response["status"]["code"] == "CONN_THROTTLED"
        ):
            print("Rate limit exceeded. Waiting for 15 seconds before retrying...")
            time.sleep(15)
            return make_request(url, headers)  # Retry the request after waiting
        else:
            # Handle other types of errors
            print("Error:", err)
            return None


url = "https://api.clarifai.com/v2/models/types"
headers = {"Authorization": "Key YOUR_PAT_HERE"}

response_data = make_request(url, headers)

if response_data:
    print(response_data)
