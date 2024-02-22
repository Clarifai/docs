from clarifai.client.user import User

# the list_apps method allows pagination
apps = list(User("user_id", pat="YOUR_PAT").list_apps(page_no=1,per_page=6))
for app in apps:
    print("App id: ", app.id)