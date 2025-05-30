import os

from clarifai.client import Model
model = Model.from_current_context()

# Example model prediction from different model methods:
import json

s = json.dumps({
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/list",
})

response = model.mcp_transport(msg=s)
print(response)


s = json.dumps({
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "weather",
    "arguments": {
      "city": "philly"
    },
    "model_config": {}
  }
})

response = model.mcp_transport(msg=s)
print(response)