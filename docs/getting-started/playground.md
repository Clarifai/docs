---
description: Start running inferences in just a few simple steps
sidebar_position: 2
---

# Quick Start With Playground

**Start running inferences in just a few simple steps**
<hr />

<div style={{ "position":"relative","width": "100%","overflow": "hidden","padding-top": "56.25%"}}>
<iframe width="900" height="500" style={{"position": "absolute","top": "0","left": "0","bottom": "0","right": "0","width": "100%","height": "100%",}} src="https://www.youtube.com/embed/H3WWyczCxGo" title="Try out GPT-OSS-120B" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<br/><br/>


Clarifai's AI Playground is an intuitive interface that allows you to experience powerful AI models in action without requiring additional setup.

This interactive battleground brings together a curated selection of cutting-edge models, spanning vision, language, and multimodal tasks.

You can quickly test performance, experiment with real inputs, and explore Clarifai’s full capabilities — directly from your browser.
 
## Step 1: Sign Up or Log In 

Start by [logging in to](https://clarifai.com/login) your existing Clarifai account, or [sign up](https://clarifai.com/signup) for a new one to unlock access to the platform’s powerful AI capabilities. New users receive free operations to help kickstart their exploration.

## Step 2: Get a Model

Clarifai’s [Community platform](https://clarifai.com/explore) offers a wide range of the latest models that you can test and integrate into your AI projects.

You can easily find a model to use by heading to the Community platform and exploring the **Trending Models** section, which showcases popular and ready-to-use options.

After finding a model, click the **TEST IN PLAYGROUND** button in the bottom right corner of its information card. 

For this example, we'll use the [gpt-oss-120b](https://clarifai.com/openai/chat-completion/models/gpt-oss-120b) model.

> **Alternatively:** You can select the **Playground** option in the collapsible left sidebar.

![](/img/new-docs/playground-2.png)

## Step 3: Run Your Inference

You'll be taken to the AI Playground interface. 

> **Alternatively:** In the upper-left section of the Playground, you can choose the model you'd like to use for inference.

![](/img/new-docs/playground-2-1.png)

Once the interface opens, you’ll see a model card that gives you a quick overview of the model, including input and output pricing, and links to the model page and pricing details. You’ll also find predefined prompt examples you can use right away.

Next, in the message box at the bottom of the Playground, enter your desired prompt to generate a response with the selected model.  

> **Note:** If your chosen model supports image or video inputs as prompts, you can also upload them directly into the interface.

Then, submit your request by clicking the arrow icon in the message box or pressing Enter on your keyboard.

:::tip

For this example, we're using the default settings for inferencing — [`Clarifai Serverless deployment`](https://docs.clarifai.com/compute/overview#deployment-options) and default [inference parameters](#playground-settings). You can customize these settings as needed for more advanced use cases.

:::

![](/img/new-docs/playground-3.png)

The results will stream directly in the interface, allowing you to see the generated output token by token, in real time.

Note that the model’s chain-of-thought preview is shown to help you understand how the model interpreted your request.

At the bottom of the response, you’ll also see the following token and performance metrics:

- TTFT (Time to First Token)
- IN (input token count)
- OUT (output token count)
- TOKENS/S (generation speed)

## Additional Playground Features

### Playground Settings

The Playground’s right sidebar lets you adjust a range of settings to customize how the model behaves.

* **Model Version** — Choose the specific version of the model you want to run.
* **Max Completion Tokens** — Sets the maximum number of tokens the model can generate for a completion. This includes both the visible output tokens and any reasoning tokens produced.
* **Reasoning Effort** — Controls how much reasoning the model applies (for reasoning-enabled models). Available options are `minimal`, `low`, `medium` (default), and `high`. Lower effort levels can speed up responses and reduce the number of reasoning tokens generated.
* **Temperature** — Adjusts the randomness of the output, with values ranging from 0 to 2. Higher temperatures (e.g., 0.8) produce more diverse, creative responses, while lower values (e.g., 0.2) produce more focused, deterministic outputs. We generally recommend adjusting either this or `top_p`, but not both.
* **Top P** — Controls nucleus sampling, an alternative to temperature-based sampling. The model selects from the smallest set of tokens whose cumulative probability reaches `top_p`. For example, a value of 0.1 limits choices to the top 10% most probable tokens. As with temperature, we recommend modifying either `top_p` or temperature, but not both.


### Compare Models

The AI Playground includes a side-by-side comparison view, making it easy to test different models — or even the same model across multiple versions and instances — to identify the best fit for your needs. You can directly compare factors such as speed, accuracy, and overall performance.

Click the **Compare Models** button in the upper-right corner of the Playground to launch the side-by-side comparison.

![](/img/new-docs/playground-5.png)

Next, choose a model for the left panel and another for the right. When you’re done, close the comparison by clicking the **X** button in the upper-right corner of the right panel.

![](/img/new-docs/playground-6.png)

> **Note:** If you enable the **Sync Prompts** option, the prompt you enter for the first model will automatically be mirrored to the second one, removing the need to manually copy prompts between models.

### Get Code Snippets

You can toggle the button in the upper-left section of the Playground to display ready-to-use API code snippets in various programming languages. 

Simply copy and use them in your project.

![](/img/new-docs/playground-4.png)

