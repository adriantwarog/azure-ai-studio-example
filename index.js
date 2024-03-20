const {OpenAIClient, AzureKeyCredential} = require("@azure/openai");
require("dotenv").config();

const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_API_KEY;
const model = process.env.AZURE_OPENAI_MODEL;

const prompt = ["I am"];

(async () => {

	try {
		console.log("Begin Completion Example");
		const client = new OpenAIClient(endpoint, new AzureKeyCredential(apiKey));
		const deploymentId = model;
		const result = await client.getCompletions(deploymentId, prompt);

		for(const choice of result.choices) {
			console.log(choice.text);
		}
	} catch (err){
		console.error("The sample encountered an error:", err);
	}

})();