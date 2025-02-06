# Model to be uploaded: https://platform.openai.com/docs/guides/speech-to-text/quickstart

import io
import itertools
import wave
from typing import Iterator

from clarifai.runners.models.model_class import ModelClass
from clarifai_grpc.grpc.api import resources_pb2, service_pb2
from clarifai_grpc.grpc.api.status import status_code_pb2
from google.protobuf import json_format
from openai import OpenAI

OPENAI_API_KEY = "OPENAI_API_KEY"


def bytes_to_audio_file(audio_bytes):
  """Convert bytes data into a file-like object."""
  if not audio_bytes:
    raise ValueError("Audio bytes cannot be empty.")
  audio_file = io.BytesIO(audio_bytes)
  audio_file.name = "audio.wav"  # This name is used for the API
  return audio_file


def preprocess_audio(audio_bytes=None, chunk_duration=1.0, stream=False):
  """
  Fetch and preprocess audio data from a URL or bytes.

  Parameters:
    bytes (bytes): Audio data in bytes (if provided).
    chunk_duration (float): Duration of each audio chunk in seconds.
    stream (bool): Whether to stream the audio in chunks.

  Returns:
    Audio data in bytes or a generator of audio chunks.
  """

  if audio_bytes:
    if stream:
      # Read the original audio bytes
      audio_bytes = io.BytesIO(audio_bytes)
      with wave.open(audio_bytes, "rb") as wave_file:
        params = wave_file.getparams()
        sample_rate = params.framerate
        channels = params.nchannels
        sample_width = params.sampwidth

        # Calculate number of frames per chunk
        frames_per_chunk = int(sample_rate * chunk_duration)

        # Stream the audio in chunks (generator)
        def audio_stream_generator():
          while True:
            frames = wave_file.readframes(frames_per_chunk)
            if not frames:
              break
            chunk_buffer = io.BytesIO()
            with wave.open(chunk_buffer, "wb") as chunk_wav:
              chunk_wav.setnchannels(channels)
              chunk_wav.setsampwidth(sample_width)
              chunk_wav.setframerate(sample_rate)
              chunk_wav.writeframes(frames)
            yield chunk_buffer.getvalue()

        return audio_stream_generator()
    else:
      # Return a single chunk of audio
      return audio_bytes
  else:
    raise ValueError("'audio_bytes' must be provided")


def get_inference_params(request) -> dict:
  """Get the inference params from the request."""
  inference_params = {}
  if request.model.model_version.id != "":
    output_info = request.model.model_version.output_info
    output_info = json_format.MessageToDict(output_info, preserving_proto_field_name=True)

    if "params" in output_info:
      inference_params = output_info["params"]
  return inference_params


class MyModel(ModelClass):
  """A custom runner that used for transcribing audio."""

  def load_model(self):
    """Load the model here."""
    self.client = OpenAI(api_key=OPENAI_API_KEY)
    self.model = "whisper-1"

  def predict(self,
              request: service_pb2.PostModelOutputsRequest) -> service_pb2.MultiOutputResponse:
    """Predict the output for the given audio data."""
    inference_params = get_inference_params(request)
    language = inference_params.get("language", None)
    task = inference_params.get("task", "transcription")
    outputs = []
    # TODO: parallelize this over inputs in a single request.
    for input in request.inputs:
      output = resources_pb2.Output()

      input_data = input.data
      audio_bytes = preprocess_audio(audio_bytes=input_data.audio.base64, stream=False)

      if task == "transcription":
        # Send audio bytes to Whisper for transcription
        whisper_output = self.client.audio.transcriptions.create(
            model=self.model, language=language, file=bytes_to_audio_file(audio_bytes))
      elif task == "translation":
        # Send audio bytes to Whisper for translation
        whisper_output = self.client.audio.translations.create(
            model=self.model, file=bytes_to_audio_file(audio_bytes))

      # Set the output data
      output.data.text.raw = whisper_output.text
      output.status.code = status_code_pb2.SUCCESS
      outputs.append(output)
    return service_pb2.MultiOutputResponse(outputs=outputs,)

  def generate(self, request: service_pb2.PostModelOutputsRequest
              ) -> Iterator[service_pb2.MultiOutputResponse]:
    """Generate the output in a streaming fashion for large audio files."""
    inference_params = get_inference_params(request)
    language = inference_params.get("language", None)
    task = inference_params.get("task", "transcription")
    batch_audio_streams = []
    for input in request.inputs:
      output = resources_pb2.Output()

      input_data = input.data

      audio_bytes = input_data.audio.base64
      chunk_duration = 3.0

      audio_stream = preprocess_audio(
          audio_bytes=audio_bytes, stream=True, chunk_duration=chunk_duration)
      batch_audio_streams.append(audio_stream)

    for audio_stream in itertools.zip_longest(*batch_audio_streams, fillvalue=None):
      resp = service_pb2.MultiOutputResponse()

      for audio_bytes in audio_stream:
        output = resp.outputs.add()
        if task == "transcription":
          # Send audio bytes to Whisper for transcription
          whisper_output = self.client.audio.transcriptions.create(
              model=self.model, language=language, file=bytes_to_audio_file(audio_bytes))
        elif task == "translation":
          # Send audio bytes to Whisper for translation
          whisper_output = self.client.audio.translations.create(
              model=self.model, file=bytes_to_audio_file(audio_bytes))
        output.data.text.raw = whisper_output.text
        output.status.code = status_code_pb2.SUCCESS
      yield resp

  def stream(self, request_iterator: Iterator[service_pb2.PostModelOutputsRequest]
            ) -> Iterator[service_pb2.MultiOutputResponse]:
    """Stream the output in a streaming fashion"""
    for request in request_iterator:
      for response in self.generate(request):
        yield response