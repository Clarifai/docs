const axios = require('axios');
async function makeRequest(url, headers) {
    try {
        const response = await axios.get(url, { headers });
        return response.data;
    } catch (error) {
        if (error.response && error.response.data.status && error.response.data.status.code === 'CONN_THROTTLED') {
            console.log("Rate limit exceeded. Waiting for 15 seconds before retrying...");
            await delay(15000); // Wait for 15 seconds before retrying
            return makeRequest(url, headers); // Retry the request after waiting
        } else {
            // Handle other types of errors
            console.error("Error:", error);
            return null;
        }
    }
}
// Helper function to delay execution
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const url = "https://api.clarifai.com/v2/models/types";
const headers = { 'Authorization': 'Key YOUR_PAT_HERE' };
makeRequest(url, headers)
    .then(responseData => {
        if (responseData) {
            console.log(responseData);
        }
    });
