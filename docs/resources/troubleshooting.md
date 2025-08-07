---
description: Common issues and solutions
sidebar_position: 11
---

# Troubleshooting

**Solve common issues quickly and effectively**

Troubleshooting helps you identify and fix the most common issues encountered when working with Clarifai-based scripts and applications.

Whether you're facing installation errors, API authentication problems, or image processing glitches, this guide offers step-by-step solutions to get you back on track.

## Common Installation Issues

Setups often break due to missing or incorrectly installed packages. These errors are usually easy to resolve once you've verified your environment and dependencies.

### Missing Dependencies

**Error**: `Import could not be resolved` or `ModuleNotFoundError`

This error means that Python can't find the required module — likely because it wasn't installed or was installed in the wrong environment.

Try the following solutions:

```bash
# 1. Make sure you installed the required package
pip install <package-name>

# 2. Check if packages are installed
pip list | grep -E "(clarifai|openai|opencv|numpy)"

# 3. If using conda, activate your environment
conda activate your_environment_name
pip install <package-name>

# 4. Upgrade pip, then try again
pip install --upgrade pip
pip install <package-name>
```

### Package Not Installed Properly

**Error**: `ModuleNotFoundError: No module named 'cv2'`

This usually means OpenCV isn't installed or is incompatible with your current setup.

Try the following in order:

```bash
pip install opencv-python
# or
pip install opencv-contrib-python
# or (for conda users)
conda install -c conda-forge opencv
```

## API and Authentication Issues

API errors often stem from incorrect or missing credentials. Make sure your [Personal Access Token](https://docs.clarifai.com/control/authentication/pat) (PAT) is properly set and valid.

### Unconfigured PAT Key

**Error**: `Please set the CLARIFAI_PAT environment variable`

This happens when the Clarifai PAT is not found in your environment.

Set it based on your platform:

```bash
# Linux / macOS
export CLARIFAI_PAT="your_actual_api_key_here"

# Windows Command Prompt
set CLARIFAI_PAT=your_actual_api_key_here

# Windows PowerShell
$env:CLARIFAI_PAT="your_actual_api_key_here"

# (Optional) Make it permanent
echo 'export CLARIFAI_PAT="your_key_here"' >> ~/.bashrc
source ~/.bashrc
```

### Incorrect PAT

**Error**: `Authentication failed` or `Invalid token`

These indicate that the PAT was not set correctly or has expired.

To fix:

1. Generate a new PAT from your personal settings page by navigating to the **Security** section
2. Ensure the key is copied properly
3. Check for extra spaces or characters when setting the environment variable
4. Confirm your account is active and has API access

## Runtime Errors

Runtime errors occur while executing your code and often result from unexpected data or an unhandled response.

### Index Error

**Error**: `IndexError: list index out of range`

This typically means the code tried to access an element in a list that doesn't exist — often due to an empty or malformed API response.

Try the following:

1. Ensure the input (e.g., an image URL) is valid and accessible
2. Try a different input or a simpler model
3. Confirm your internet connection is stable
4. Log the full API response to investigate

### Network Errors

**Error**: `Network error` or `Connection timeout`

These errors suggest that your script couldn't reach the Clarifai servers.

Possible solutions:

1. Check your internet connection
2. Retry after a few minutes — there might be temporary downtime
3. Ensure your firewall or proxy isn’t blocking traffic
4. Check [Clarifai’s status page](https://status.clarifai.com)

## Image Processing Issues

Working with images can introduce additional complications — from data corruption to file permission errors.

### Corrupted or Unreadable Images

**Error**: Generated images are corrupted or won't open

This usually happens if the image data wasn’t fully received or saved correctly.

Use error checking like this:

```python
if img_np is not None and img_np.size > 0:
    cv2.imwrite("output.jpg", img_np)
    print("✅ Image saved successfully")
else:
    print("❌ Failed to process image data")
```

### Permission Denied

**Error**: Permission denied when saving files

Your script may not have write permissions in the current directory.

Steps to resolve:

```bash
# Check directory permissions
ls -la

# Navigate to a writable directory
cd ~/Documents

# Run the script again
python /path/to/your/script.py
```

## Performance Issues

Slow performance or memory-related crashes can often be addressed through optimization and lighter alternatives.

### Scripts Running Slowly

Common reasons and optimizations:

1. **Large input files:** Resize images before processing
2. **Slow internet:** Use local files when possible
3. **Complex models:** Choose simpler models when speed is a priority
4. **Server load:** Run scripts during off-peak hours

### Out of Memory Errors

These usually occur when handling high-resolution images or large batches.

Tips to reduce memory usage:

```bash
# Use a lightweight version of OpenCV
pip install opencv-python-headless

# Or resize images in your code before processing
```

## Additional Debugging Tips

Debugging effectively helps you isolate and resolve issues faster. Use these tips to gain visibility into what your code is doing.

### Enable Verbose Output

Add print statements to verify assumptions at runtime:

```python
print(f"PAT loaded: {'Yes' if pat else 'No'}")
print(f"Image URL: {image_url}")
print(f"Model prediction type: {type(model_prediction)}")
```

### Check API Responses

Always validate the API response before processing it:

```python
if model_prediction.outputs and len(model_prediction.outputs) > 0:
    # Process results
    pass
else:
    print("No outputs received from the model")
```

## Getting Help

If you're still facing issues:

1. **Read the error message carefully** – it often points to the exact problem
2. **Review the full traceback** – it tells you where the failure occurred
3. **Test with minimal examples** – start simple and build up
4. **Check Clarifai’s status page** – [status.clarifai.com](https://status.clarifai.com)
5. **Consult the documentation, especially on interpreting error codes** – [docs.clarifai.com](https://docs.clarifai.com/resources/api-overview/status-codes)

