FROM --platform=$TARGETPLATFORM public.ecr.aws/clarifai-models/python-base:3.12-df565436eea93efb3e8d1eb558a0a46df29523ec as final

COPY --link requirements.txt /home/nonroot/requirements.txt

# Update clarifai package so we always have latest protocol to the API. Everything should land in /venv
RUN ["pip", "install", "--no-cache-dir", "-r", "/home/nonroot/requirements.txt"]

# Copy in the actual files like config.yaml, requirements.txt, and most importantly 1/pipeline_step.py for the actual pipeline step.
COPY --link=true 1 /home/nonroot/main/1
# At this point we only need these for validation in the SDK.
COPY --link=true requirements.txt config.yaml /home/nonroot/main/
