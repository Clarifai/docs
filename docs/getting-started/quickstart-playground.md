---
description: Start quickly with Clarifai Playground in a few simple steps
sidebar_position: 2
---

# Quick Start With Playground

**Start quickly with Clarifai Playground in a few simple steps**
<hr />

<div style={{ "position":"relative","width": "100%","overflow": "hidden","padding-top": "56.25%"}}>
<iframe width="900" height="500" style={{"position": "absolute","top": "0","left": "0","bottom": "0","right": "0","width": "100%","height": "100%",}} src="https://www.youtube.com/embed/8oWjmB3Bmqk" title="How to Use a Model on the Clarifai Platform (Playground or API)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<br/><br/>


Clarifai's AI Playground is an intuitive interface that allows you to experience powerful AI models in action without requiring additional setup.

This interactive battleground brings together a curated selection of cutting-edge models, spanning vision, language, and multimodal tasks.

You can quickly test performance, experiment with real inputs, and explore Clarifai’s full capabilities — directly from your browser.
 
## Step 1: Sign Up or Log In 

Start by [logging in to](https://clarifai.com/login) your existing Clarifai account, or [sign up](https://clarifai.com/signup) for a new one to unlock access to the platform’s powerful AI capabilities. New users receive free operations to help kickstart their exploration.

## Step 2: Get a Model

Clarifai’s [Community platform](https://clarifai.com/explore) offers a wide range of the latest models that you can test and integrate into your AI projects.

You can easily find a model to use by heading to the Community homepage and exploring the **Trending Models** section, which showcases popular and ready-to-use options.

After finding a model, click the **TEST IN PLAYGROUND** button in the bottom right corner of its information card. 

For this example, we'll use the [gpt-oss-120b](https://clarifai.com/openai/chat-completion/models/gpt-oss-120b) model.

> _Alternatively, you can select the **Playground** option in the top navigation bar._

<br/>

![](/img/new-docs/playground-2.png)

## Step 3: Run Your Inference

You'll be taken to the AI Playground interface. 

> _Alternatively, in the upper-left section of the Playground, you can choose the model you'd like to use for inference._

In the message box at the bottom of the Playground, enter your desired prompt to generate text with the selected model. You can also use any of the provided predefined prompt examples. 

**Note:** If your chosen model supports image or video inputs as prompts, you can also upload them directly into the interface.

Then, submit your request by clicking the arrow icon in the message box or pressing Enter on your keyboard.

![](/img/new-docs/playground-3.png)

The results will be streamed directly on the interface, allowing you to see the output in real time. 

**Note:** Since we support streaming capabilities, you can interact with language models as they generate responses token by token — just like in a live chat experience.

:::tip

For this example, we're using the default settings for deployment ([`Clarifai Shared`](https://docs.clarifai.com/compute/deployments/clusters-nodepools)) and [inference parameters](https://docs.clarifai.com/compute/inference/advanced). You can customize these settings as needed for more advanced use cases.

:::

## Additional Playground Features

### Compare Models

The AI Playground includes a side-by-side comparison view, making it easy to test different models — or even the same model across multiple versions and instances — to identify the best fit for your needs. You can directly compare factors such as speed, accuracy, and overall performance.

Click the **Compare Models** button in the upper-right corner of the Playground to launch the side-by-side comparison.

![](/img/new-docs/playground-5.png)

Next, choose a model for the left panel and another for the right. When you’re done, close the comparison by clicking the **X** button in the upper-right corner of the right panel.

![](/img/new-docs/playground-6.png)

### Get Code Snippets

You can toggle the button in the upper-left section of the Playground to display ready-to-use API code snippets in various programming languages. 

Simply copy and use them in your project.

![](/img/new-docs/playground-4.png)

