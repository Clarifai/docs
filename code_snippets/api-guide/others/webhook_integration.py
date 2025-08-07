from flask import Flask, request, jsonify
import hmac
import hashlib
import json

app = Flask(__name__)
WEBHOOK_SECRET = os.environ.get("CLARIFAI_WEBHOOK_SECRET")

@app.route('/webhook', methods=['POST'])
def handle_webhook():
    """Handle Clarifai webhook notifications"""
    
    # Verify webhook signature
    signature = request.headers.get('X-Clarifai-Signature')
    if not verify_webhook_signature(request.data, signature):
        return jsonify({'error': 'Invalid signature'}), 401
    
    # Process webhook data
    webhook_data = request.get_json()
    
    if webhook_data.get('type') == 'model.training.completed':
        handle_training_completed(webhook_data)
    elif webhook_data.get('type') == 'input.uploaded':
        handle_input_uploaded(webhook_data)
    
    return jsonify({'status': 'success'})

def verify_webhook_signature(payload: bytes, signature: str) -> bool:
    """Verify webhook signature for security"""
    if not WEBHOOK_SECRET or not signature:
        return False
    
    expected_signature = hmac.new(
        WEBHOOK_SECRET.encode(),
        payload,
        hashlib.sha256
    ).hexdigest()
    
    return hmac.compare_digest(f"sha256={expected_signature}", signature)

def handle_training_completed(data: dict):
    """Handle model training completion"""
    model_id = data.get('model_id')
    print(f"✅ Model {model_id} training completed!")
    
    # Add your custom logic here
    # e.g., send notification, update database, trigger next workflow

def handle_input_uploaded(data: dict):
    """Handle new input upload"""
    input_id = data.get('input_id')
    print(f"📁 New input uploaded: {input_id}")
    
    # Add your custom logic here
    # e.g., trigger automatic processing, update UI

if __name__ == '__main__':
    app.run(debug=True, port=5000)