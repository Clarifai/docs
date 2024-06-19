const OASNormalize = require("oas-normalize");
const fs = require("fs");
const path = require("path");
const sdk = require('postman-collection');
const postman = require('postman-code-generators');

const oas = new OASNormalize(path.resolve(__dirname, "./static/api-spec/clarifai.json"), {enablePaths: true})

// Function to resolve $ref references
function resolveRef(ref, spec) {
  const parts = ref.replace(/^#\//, '').split('/');
  let result = spec;
  for (const part of parts) {
    result = result[part];
  }
  return result;
}

// Function to generate example data from a schema
function generateExample(schema, spec) {
  if (schema.example) {
    return schema.example;
  }
  if (schema.$ref) {
    const resolvedSchema = resolveRef(schema.$ref, spec);
    return generateExample(resolvedSchema, spec);
  }
  if (schema.type === 'object') {
    const example = {};
    for (const [key, property] of Object.entries(schema.properties || {})) {
      example[key] = generateExample(property, spec);
    }
    return example;
  }
  if (schema.type === 'array') {
    return [generateExample(schema.items, spec)];
  }
  if (schema.type === 'string') {
    return 'string';
  }
  if (schema.type === 'integer') {
    return 0;
  }
  if (schema.type === 'boolean') {
    return true;
  }
  // Add more types as needed
  return null;
}

// Function to convert OpenAPI spec to Postman collection
function convertToPostmanCollection(openApiSpec) {
  const collection = new sdk.Collection();
  
  // Loop through paths and methods in the OpenAPI spec
  for (const pathKey in openApiSpec.paths) {
    for (const method in openApiSpec.paths[pathKey]) {
      const endpoint = openApiSpec.paths[pathKey][method];
      
      const request = {
        method: method.toUpperCase(),
        header: [{
          key: "Authorization",
          value: "Bearer YOUR_PERSONAL_ACCESS_TOKEN",
        }],
        url: {
          raw: `${openApiSpec.servers[0].url}${pathKey}`,
          host: [openApiSpec.servers[0].url],
          path: pathKey.split('/').filter(Boolean),
          query: []
        },
        body: {}
      };

      // Add headers
      if (endpoint.parameters) {
        endpoint.parameters.forEach((param) => {
          if (param.in === 'header') {
            request.header.push({
              key: param.name,
              value: param.example || '',
              type: 'text'
            });
          }
          // Add query parameters
          if (param.in === 'query') {
            request.url.query.push({
              key: param.name,
              value: param.example || ''
            });
          }
        });
      }

      // Add request body
      if (endpoint.requestBody) {
        const content = endpoint.requestBody.content;
        if (content?.['application/json']) {
          const schema = content['application/json'].schema;
          const example = generateExample(schema, openApiSpec);
          request.body = {
            mode: 'raw',
            raw: JSON.stringify(example, null, 2)
          };
          request.header.push({
            key: 'Content-Type',
            value: 'application/json'
          });
          request.header.push({
            key: 'Accept',
            value: 'application/json'
          });
        } else if (content?.['application/x-www-form-urlencoded']) {
          const schema = content['application/x-www-form-urlencoded'].schema;
          const example = generateExample(schema, openApiSpec);
          request.body = {
            mode: 'urlencoded',
            urlencoded: Object.keys(example).map(key => ({
              key: key,
              value: example[key]
            }))
          };
          request.header.push({
            key: 'Content-Type',
            value: 'application/x-www-form-urlencoded'
          });
          request.header.push({
            key: 'Accept',
            value: 'application/json'
          });
        }
      }

      collection.items.add(new sdk.Item({
        name: `${method.toUpperCase()} ${pathKey}`,
        request: request
      }));
    }
  }
  
  return collection;
}

const servers = [{
    url: "https://api.clarifai.com"
}]

const title = "Clarifai Public API";

const description = `Welcome to the Clarifai API documentation. Clarifai is a leading provider of
artificial intelligence and machine learning solutions, specialising in
advanced computer vision, natural language, and generative AI technologies.<br/><br/>
Our powerful API allows developers to integrate cutting-edge image, video
recognition, and text-based analytics capabilities into their applications,
unlocking a world of visual and sequence understanding possibilities.<br/><br/>
The Clarifai API is a connection point enabling communication between
clients and servers. It facilitates interaction between software, making it
valuable for integrating Clarifai's AI technology into your products and
tools through code. Clarifai API is avaiable in Python,Node.js,PHP and Java.<br/><br/>
You can access Clarifai's API over HTTPS via \`https://api.clarifai.com\`.<br/><br/>
[API Documentation](https://docs.clarifai.com/api-guide/api-overview)<br/><br/>
[Clarifai Community](https://clarifai.com/explore)<br/><br/>
[API Status](https://status.clarifai.com/)<br/><br/>
[Discord](https://discord.gg/XAPE3Vtg)<br/><br/>
`
const version = "2.0.0";

oas.validate({
    convertToLatest: true,
}).then(definition => {
    definition.info = {
        title,
        description,
        version
    }
    definition.servers = servers;
    const collection = convertToPostmanCollection(definition);
    collection.items.each((item) => {
        const languages = [['cURL', 'cURL'], ['JavaScript', 'Fetch'], ['NodeJs', 'Axios']];
        languages.forEach(([language, variant]) => {
            postman.convert(language, variant, item.request, {}, (error, snippet) => {
                if (error) {
                    console.error('Error generating code snippet:', error);
                } else {
                    const [method, pathKey] = item.name.split(' ', 2);
                    const endpoint = definition.paths?.[pathKey.toLowerCase()]?.[method.toLowerCase()];
                    if(endpoint) {
                        if (!endpoint['x-codeSamples']) {
                            endpoint['x-codeSamples'] = [];
                        }
                        endpoint['x-codeSamples'].push({
                            lang: language,
                            label: language.toUpperCase(),
                            source: snippet
                        });
                    }
                }
            });
        });
    });

    fs.writeFileSync(path.resolve(__dirname, "static/api-spec/clarifai-v3.json"), JSON.stringify(definition, null, 2));
});