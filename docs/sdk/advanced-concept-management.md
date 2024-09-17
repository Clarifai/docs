---
description: Manage your concepts
sidebar_position: 4.1
---

# Advanced Concept Management
<hr />

Concept relations in the Clarifai platform allow you to establish hierarchical and semantic relationships between your concepts. These relationships are essential for building robust knowledge graphs and enabling more advanced computer vision and natural language processing capabilities.

By defining how concepts interact—whether as synonyms, hyponyms, or hypernyms—you can build a more intelligent, context-aware system that delivers accurate, relevant results.

Whether you are managing a product database, building a search engine, or organizing large datasets, leveraging concept relations will significantly enhance your ability to structure, search, and retrieve data, making your AI-driven applications smarter and more effective.


## Applications

* **Enhanced Search and Retrieval**: Concept relations allow for more refined searches. For example, when searching for “Animal”, the system can automatically include results for all hyponyms like “Dog” or “Cat”, providing a broader and more relevant result set.
* **Improved Data Organization**: Establishing hierarchical relationships can organize data more effectively. This is especially useful in complex datasets, where understanding the structure and relationships between concepts is crucial for accurate data retrieval.
* **Contextual Understanding**: Models that understand the relationships between concepts can better interpret context, improving the accuracy of classifications and predictions. For instance, recognizing that "Puppy" is a synonym for "Dog" ensures that all relevant data is considered during processing.
* **Dynamic Content Delivery**: In scenarios like personalized content or targeted advertising, concept relations can help in delivering more relevant results by understanding the user's intent better


## Types:

1. **Hyponym (Subtype Relation)**:
    * **Definition**: Represents a "kind of" relationship. For example, "Dog" is a kind of "Animal". This hierarchical relationship allows models to generalize or specialize when identifying concepts.
    * **Usage**: Hyponyms help refine search results, where a search for "Animal" may include results for "Dog", "Cat", and other animals.

**Code Example**:
`app.create_concept_relations("dog", ["animal"], predicates=["hyponym"]`



2. **Hypernym (Supertype Relation)**:
    * **Definition**: The opposite of a hyponym, it represents a broader category or parent concept. For example, "Animal" is a hypernym for "Dog".
    * **Usage**: Hypernyms allow models to group specific entities under broader categories, improving organizational structures.

**Code Example**:
`app.create_concept_relations("animal", ["dog"], predicates=["hypernym"]`



3. **Synonym (Equivalent Relation)**:
    * **Definition**: Links concepts that have the same or very similar meanings, such as "Puppy" and "Pup".
    * **Usage**: Synonyms ensure that different terms referring to the same concept are recognized as equivalent, enhancing search and retrieval accuracy.

**Code Example**:
`app.create_concept_relations("puppy", ["pup"], predicates=["synonym"]`


## Managing Concepts Relations in the Clarifai App

Let's dive into some code examples to see how you can create and manage concept relations in the Clarifai platform.


### Prerequisites

Initialize the Clarifai App

```python
!pip install -U clarifai
import os
#Replace your PAT
os.environ['CLARIFAI_PAT'] = "YOUR_PAT"
```


You can get help from here to get your [PAT](https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens/)


### Initialize the App

```python
# Initialize the Clarifai App
app = App(user_id="user_id", app_id="app_id")
```



### Add concepts

```python
app.create_concepts(concept_ids=["cat", "kitten", "animal"])
```



### Add concept relations


```python
app.create_concept_relations("cat", ["animal", "kitten"], ["hyponym", "synonym"])
```


In the above example, we first create three concepts: "cat", "kitten", and "animal". Then, we establish two concept relations:



1. A hyponym relation between "cat" and "animal", indicating that "cat" is a kind of "animal".
2. A synonym relation between "cat" and "kitten", suggests that these two concepts are essentially the same.


### Search Concept Relations

You can then search for and retrieve the concept relations using the `search_concept_relations()` method:


#### Search for all concept relations


```python
concept_relations = list(app.search_concept_relations())
for relation in concept_relations:
    print("Subject_concept:", relation.subject_concept.id)
    print('\t' "Object_concept:", relation.object_concept.id)
    print('\t' "Predicate:", relation.predicate, '\n')
```



#### Search for specific concept relations


```python
concept_relations = list(app.search_concept_relations(concept_id="cat", predicate="synonym"))
for relation in concept_relations:
    print("Subject_concept:", relation.subject_concept.id)
    print('\t' "Object_concept:", relation.object_concept.id)
    print('\t' "Predicate:", relation.predicate, '\n')
```


This will output the concept relations we previously created, showing the subject concept, object concept, and the predicate (relation type) for each.


#### Display Concept Relation in Tree Structure

To display the concept relations in a rich Tree structure, we have added True to the **show_tree** argument of **search_concept_relations**


```python
concept_relations = list(app.search_concept_relations(show_tree=True))
for relation in concept_relations:
print("Subject_concept:",relation.subject_concept.id)
print('\t'"Oject_concept:",relation.object_concept.id)
print('\t'"Predicate:",relation.predicate,'\n')
```



### Concept-Based Input Search

You can also use the concept relations to filter your input search queries, allowing you to find images or text related to specific concepts and their relationships:


#### Search for Inputs Related to "dog" Concept


```python
search = app.search(top_k=2, metric="euclidean")
search.query(filters=[{
    "concepts": [{
        "name": "dog",
       "value": 1
    }]
}])
```



#### Using And/Or Operations in Filters


```python
#OR
search.query(filters=[{ 
    "concepts": [{
        "name": "cat",
        "value": 1
    }, {
        "name": "dog",
        "value": 1
    }]
}])

#AND
search.query(filters=[
    {
        "concepts": [{
            "name": "dog",
            "value": 1
        }]
    },
    {
        "concepts": [{
            "name": "cat",
            "value": 1
     }]
    }
])
```


By leveraging concept relations, your Clarifai-powered applications can gain a deeper understanding of the world, enabling more accurate and contextual predictions, recommendations, and search capabilities.
