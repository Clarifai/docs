# Model to be uploaded: https://platform.openai.com/docs/guides/speech-to-text/quickstart

import copy
import io
from typing import Iterator

import requests
from clarifai_grpc.grpc.api import resources_pb2, service_pb2
from clarifai_grpc.grpc.api.status import status_code_pb2, status_pb2
from openai import OpenAI

from clarifai.runners.models.model_runner import ModelRunner


def bytes_to_audio_file(audio_bytes):
  """Convert bytes data into a file-like object."""
  if not audio_bytes:
    raise ValueError("Audio bytes cannot be empty.")
  audio_file = io.BytesIO(audio_bytes)
  audio_file.name = "audio.mp3"  # This name is used for the API
  return audio_file


def preprocess_audio(audio_url=None, audio_bytes=None, chunk_size=1024, stream=False):
  """
  Fetch and preprocess audio data from a URL or bytes.

  Parameters:
    url (str): URL to fetch audio from (if provided).
    bytes (bytes): Audio data in bytes (if provided).
    chunk_size (int): Size of chunks for streaming.
    stream (bool): Whether to stream the audio in chunks.

  Returns:
    Generator or file-like object containing audio data.
  """

  if audio_bytes:
    if stream:
      # Stream the audio in chunks (generator)
      def audio_stream_generator():
        for i in range(0, len(audio_bytes), chunk_size):
          yield audio_bytes[i : i + chunk_size]

      return audio_stream_generator()
    else:
      # Return a single chunk of audio
      return audio_bytes
  elif audio_url:
    response = requests.get(audio_url, stream=stream)
    if response.status_code != 200:
      raise Exception(f"Failed to fetch audio. Status code: {response.status_code}")

    if stream:
      # Stream the audio in chunks (generator)
      def audio_stream_generator():
        for chunk in response.iter_content(chunk_size=chunk_size):
          if chunk:  # Filter out keep-alive new chunks
            yield chunk

      return audio_stream_generator()
    else:
      # Return a single chunk of audio
      return response.content

  else:
    raise ValueError("Either 'url' or 'audio_bytes' must be provided")


OPENAI_API_KEY = "API_KEY"


class MyRunner(ModelRunner):
  """A custom runner that used for transcribing audio."""

  def load_model(self):
    """Load the model here."""
    self.client = OpenAI(api_key=OPENAI_API_KEY)
    self.modelname = "whisper-1"
    self.language = None

    # reset the task in set_translate_task
    self.task = "transcribe"

  def predict(
    self, request: service_pb2.PostModelOutputsRequest
  ) -> service_pb2.MultiOutputResponse:
    """This is the method that will be called when the runner is run. It takes in an input and
    returns an output.
    """

    outputs = []
    # TODO: parallelize this over inputs in a single request.
    for inp in request.inputs:
      output = resources_pb2.Output()

      data = inp.data
      audio_bytes = None
      if data.audio.base64:
        audio_bytes = preprocess_audio(audio_bytes=data.audio.base64, stream=False)

      elif data.audio.url:
        audio_bytes = preprocess_audio(
          audio_url=data.audio.url,
          stream=False,
        )

      # Send audio bytes to Whisper for transcription
      transcription = self.client.audio.transcriptions.create(
        model=self.modelname, language=self.language, file=bytes_to_audio_file(audio_bytes)
      )

      # Set the output data
      output.data.text.raw = transcription.text
      output.status.code = status_code_pb2.SUCCESS
      outputs.append(output)
    return service_pb2.MultiOutputResponse(
      outputs=outputs,
    )

  def generate(
    self, request: service_pb2.PostModelOutputsRequest
  ) -> Iterator[service_pb2.MultiOutputResponse]:
    def request_iterator(request, chunk_size=1024):
      request_copy = copy.deepcopy(request)
      for inp in request_copy.inputs:
        data = inp.data

        audio_chunks = None
        if data.audio.base64:
          audio_chunks = preprocess_audio(
            audio_bytes=data.audio.base64, stream=True, chunk_size=chunk_size
          )
        elif data.audio.url:
          audio_chunks = preprocess_audio(
            audio_url=data.audio.url,
            stream=True,
            chunk_size=chunk_size,
          )

        for chunk in audio_chunks:
          inp.data.audio.base64 = chunk
          yield request_copy

    chunk_size = 1024 * 1024
    return self.stream(request_iterator(request, chunk_size=chunk_size))

  def stream(
    self, request_iterator: Iterator[service_pb2.PostModelOutputsRequest]
  ) -> Iterator[service_pb2.MultiOutputResponse]:
    for request in request_iterator:
      for inp in request.inputs:
        output = resources_pb2.Output()

        data = inp.data
        chunk_size = 10 * 1024 * 1024
        if data.image.base64 != b"":
          audio_chunks = preprocess_audio(
            audio_bytes=data.audio.base64, stream=True, chunk_size=chunk_size
          )
        elif data.audio.url != "":
          audio_chunks = preprocess_audio(
            audio_url=data.audio.url, stream=True, chunk_size=chunk_size
          )

        for chunk in audio_chunks:
          transcription = self.client.audio.transcriptions.create(
            model=self.modelname, language=self.language, file=bytes_to_audio_file(chunk)
          )
          # Set the output data
          output.data.text.raw = transcription.text

          output.status.code = status_code_pb2.SUCCESS
          result = service_pb2.MultiOutputResponse(
            status=status_pb2.Status(
              code=status_code_pb2.SUCCESS,
              description="Success",
            ),
            outputs=[output],
          )
          yield result