---
description: Keep your credentials secure and build powerful modules
sidebar_position: 3
---

# Environment Variables and Secrets

**Keep your credentials secure and build powerful modules**
<hr />

When creating a new module version, you have the option of configuring and setting environment variables and secrets for that specific version. For example, you might use them to store API keys, database connection strings, or other configuration details you do not want to expose publicly on GitHub.

This feature opens up a ton of possibilities and allows you to build much more powerful modules.

It can be beneficial for several reasons, including:

- Allows you to manage the configuration and security of your module versions effectively, ensuring that each version has the necessary environment variables and secrets for its proper functioning. 

- You can employ version-specific settings or secrets for each install of a version to operate independently and without affecting other versions of the same module in your application.

- Allows you to securely interact with external data sources, APIs, or services, and supercharge the capabilities of your modules.

![environment variables and secrets](/img/modules/module_27.png)

## How it Works

When creating a new module version, there is a text area where you can enter the environment variables and secrets specific to your module’s requirements. If you don't need to configure any, you can simply leave this area empty.

We support creating secrets using the [TOML](https://toml.io/en/) file format. When building modules with Streamlit, we leverage their `.streamlit/secrets.toml` file to manage both secrets and environment variables. 

:::info

To dive deeper into how Streamlit implements secrets management, you can explore their documentation [here](https://docs.streamlit.io/streamlit-community-cloud/deploy-your-app/secrets-management). 

:::

Once you provide your credentials within the designated text area, they are encrypted and stored for you and can be accessed conveniently via the `st.secrets` dictionary. 

Moreover, Streamlit's implementation seamlessly maps these secrets to environment variables with matching names. For example, if your `.toml` file contains a definition like `CLARIFAI_PAT`, it will also appear as an environment variable with the same name, simplifying access and integration into your module's functionality.

## How to Create Secrets

You can simply provide your secrets and environment variables using the TOML file format. 

Here is an example:

```toml
KEY = "value"
SOMETHING = 123
```
And you can access them in your code like this:

```python
secret_value = st.secrets.KEY  # access via attribute notation
# Or 
import os
secret_value = os.environ["KEY"]  # access via key notation
```
To maintain clarity, you can even organize your secrets into sections, like this:

```toml
 [db_credentials]
username = "my_username"
password = "my_password"
```
And you can access them in your code via the `st.secrets` dictionary:

```python
db_username = st.secrets.db_credentials.username
# Note: These sectioned secrets won’t appear in os.environ. Only simple data types like strings, integers, and floats are accessible via os.environ.
```
## Template-based Secrets Injection

We have also enhanced the module manager with a feature that automatically retrieves the `.streamlit/secrets.toml` file from the GitHub repository being deployed, and pre-populates it in the text area. 

The module manager first loads authentication information from environment variables, which are sourced from the `.streamlit/secrets.toml` file, and then override them with query parameters. This approach offers increased flexibility and customization for our users.

It serves as a valuable tool for displaying a template in the user interface, showcasing the variables expected by the module so that the author remembers to set them when creating a new module version.

For example, our [LLM Battleground](https://clarifai.com/anthropic/completion/installed_module_versions/LLMBattleground/compare) module relies on the `CLARIFAI_PAT` variable. When checking in its `.streamlit/secrets.toml` file, it appears as follows:

```toml
CLARIFAI_PAT = ""
```
This template is utilized when creating a module version, enabling the module's author to input their specific Personal Access Token (PAT). The module manager then performs validation to ensure that this essential value is not left empty. 

Any variables left as `""` will trigger an error, prompting the author to provide the necessary information, thereby promoting accurate and error-free module deployments.
