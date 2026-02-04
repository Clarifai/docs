# --- Build Stage ---
ARG PYVERSION=3.12
FROM public.ecr.aws/docker/library/python:${PYVERSION}-slim-bookworm AS builder

# 1. Install dependencies (as root)
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    cmake \
    git \
    && rm -rf /var/lib/apt/lists/*

# 2. Create non-root user (as root)
RUN groupadd -g 65532 nonroot && \
    useradd -u 65532 -g 65532 -m -s /bin/bash nonroot

# 3. Create /venv and CHANGE OWNERSHIP immediately (as root)
RUN python -m venv /venv && chown -R nonroot:nonroot /venv

# 4. Set environment variables
ENV VIRTUAL_ENV=/venv \
    PATH="/venv/bin:$PATH" \
    HF_HUB_ENABLE_HF_TRANSFER=1

# 5. Now switch to nonroot
WORKDIR /home/nonroot
USER nonroot

# 6. Pip install requirements.txt
COPY --link requirements.txt /home/nonroot/requirements.txt
RUN pip install --no-cache-dir -r /home/nonroot/requirements.txt

# 7. Copy in the actual files like config.yaml, requirements.txt, and most importantly 1/pipeline_step.py for the actual pipeline step.
COPY --link=true 1 /home/nonroot/main/1

# 8. At this point we only need these for validation in the SDK.
COPY --link=true requirements.txt config.yaml /home/nonroot/main/
