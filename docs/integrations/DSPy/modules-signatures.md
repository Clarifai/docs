# DSPy Modules & Signatures
**Learn about Modules & Signatures in DSPy**
<hr />

## Modules
DSPy introduces a novel approach to programming large language models (LLMs) by leveraging modular components called modules. These modules act as reusable building blocks that encapsulate specific functionalities or sub-tasks within a larger LLM program. Unlike pre-built functions with fixed purposes, DSPy modules are designed to be adaptable. They can be combined in various ways to tackle complex tasks and can be applied across different use cases. The ability to create custom modules extends DSPy's capabilities. Developers can tailor modules to address specific needs or domain-specific tasks, making DSPy a highly versatile framework.


Some core modules built in DSPy are as follows, 

* ```Retrieve``` Module: This module facilitates information retrieval from the LLM. You can provide the LLM with a prompt or query, and the Retrieve module will extract the relevant information.
* ```ChainOfThought``` Module: This module empowers the LLM to engage in chain-of-thought reasoning. It prompts the LLM to break down complex tasks into a series of logical steps, providing transparency into its reasoning process.
* ```Predict``` Module: This module focuses on making predictions based on provided data. It can be used for tasks like sentiment analysis or image classification.

In the following example ```dspy.Predict``` is the module we are using for performing sentiment classification.

```python
sentence = "Fuel pump is broken"
classify = dspy.Predict('sentence -> sentiment')
print(classify(sentence=sentence).sentiment)
```
Click [here](https://dspy-docs.vercel.app/docs/building-blocks/modules) to learn more about Modules in DSPy.

## Signatures
DSPy signatures guide the LLM through each task with clear instructions. Unlike pre-programmed commands that dictate every step, DSPy signatures emphasize the desired outcome. They tell the LLM what needs to be achieved (mission objective) without prescribing the exact approach. This allows the LLM to leverage its capabilities creatively to fulfil the mission. 

A DSPy signature includes the following fields,

* Input Fields: This could be text, data, code, or anything relevant to the objective. Think of them as the reference materials provided to the LLM.
* Output Fields: These define the answer, prediction, or generated text the LLM should produce. 

In the following example the string `sentence -> sentiment`  is a signature for performing sentiment classification.
:::tip
The field names used in signatures should be meaningful.
:::

```python
sentence = "Fuel pump is broken"
classify = dspy.Predict('sentence -> sentiment')
print(classify(sentence=sentence).sentiment)
```

Click [here](https://dspy-docs.vercel.app/docs/building-blocks/signatures) to learn more about Signatures in DSPy.