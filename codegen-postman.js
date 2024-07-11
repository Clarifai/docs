const OASNormalize = require("oas-normalize");
const fs = require("fs");
const path = require("path");

const oas = new OASNormalize(path.resolve(__dirname, "./clarifai-postman-collection.json"), {enablePaths: true})

oas.validate({
    convertToLatest: true,
}).then(definition => {
    fs.writeFileSync(path.resolve(__dirname, "static/api-spec/clarifai-v3.json"), JSON.stringify(definition, null, 2));
})