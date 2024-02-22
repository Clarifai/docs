import time
#Starting the training
model_version_id = model.train()

#Checking the status of training
while True:
    status = model.training_status(version_id=model_version_id,training_logs=False)
    if status.code == 21106: #MODEL_TRAINING_FAILED
        print(status)
        break
    elif status.code == 21100: #MODEL_TRAINED
        print(status)
        break
    else:
        print("Current Status:",status)
        print("Waiting---")
        time.sleep(120)