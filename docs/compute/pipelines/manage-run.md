---
description: Control pipeline runs in real time — monitor, pause, resume, and cancel
sidebar_position: 2
---

#  Manage Pipeline Runs

**Control pipeline runs in real time — monitor, pause, resume, and cancel**
<hr />


The `clarifai pipelinerun` command group lets you manage pipeline version runs after they have started. You can monitor execution, pause or resume long-running workflows, and cancel runs that are no longer needed.


```bash
clarifai pipelinerun [OPTIONS] COMMAND [ARGS]...
```
> **Note:** You can also use the shorthand alias `pr` instead of `pipelinerun` in all commands.

## Monitor a Pipeline Run

Use `monitor` to watch the current status and logs of an existing, already running [pipeline run](create-api.md#step-5-run-the-pipeline). 

```bash
clarifai pr monitor <pipeline_version_run_id>
```

You can also customize monitoring behavior. For example, you can wait up to 2 hours and check the status every 5 seconds:

```bash
clarifai pr monitor <pipeline_version_run_id> \
  --timeout=7200 \
  --monitor_interval=5
```


## Pause a Pipeline Run

Use `pause` to temporarily halt a pipeline run. Pausing is only allowed when the run is in the `Queued` or `Running` state.

This is useful if you need to free up resources or temporarily stop execution.


```bash
clarifai pr pause <pipeline_version_run_id>
```

## Resume a Pipeline Run

Use `resume` to continue a pipeline run that was previously paused. Resuming is only allowed when the run is in the `Paused` state.

```bash
clarifai pr resume <pipeline_version_run_id>
```


## Cancel a Pipeline Run

Use `cancel` to permanently stop a pipeline run. Once canceled, a run cannot be resumed.

Cancellation is only allowed if the pipeline is not already in a terminal state (such as `Completed` or `Failed`).

```bash
clarifai pr cancel <pipeline_version_run_id>
```

## Additional Tips

### Use Flags

Instead of providing the `pipeline_version_run_id` as a positional argument, you can supply it explicitly as a flag. This approach improves readability and is especially useful in scripts or commands with multiple parameters. 

For example:

  ```bash
  clarifai pipelinerun monitor --pipeline_version_run_id=<id>
  ```


### Provide Explicit Parameters

The `clarifai pipelinerun` command automatically reads all required parameters — except `pipeline_version_run_id` — from the `config-lock.yaml` file, which is generated when you [upload a pipeline](create-api.md#step-4-upload-the-pipeline). This allows you to pass the `pipeline_version_run_id` as a positional argument after the action (for example, `monitor`).

However, if the `config-lock.yaml` file has been modified, is unavailable, or you're working in an environment with multiple users or pipelines, you can explicitly provide the full set of identifiers instead of relying on the lock file.

For example:

```bash
clarifai pr monitor <pipeline_version_run_id> \
  --user_id USER_ID \
  --app_id APP_ID \
  --pipeline_id PIPELINE_ID \
  --pipeline_version_id VERSION_ID
```

