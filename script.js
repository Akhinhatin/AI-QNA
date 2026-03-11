const axios = require('axios');

// ChatGPT API integration
const CHATGPT_API_URL = 'https://api.openai.com/v1/chat/completions';
const API_KEY = 'your-api-key-here'; // Replace with your actual API Key

async function getChatGPTResponse(userQuestion) {
    try {
        const response = await axios.post(CHATGPT_API_URL, {
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: userQuestion }],
        }, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Error fetching response from ChatGPT:', error);
        return 'I encountered an error while trying to reach ChatGPT.';
    }
}

// Example usage
const userQuestion = 'What is the capital of France?';
getChatGPTResponse(userQuestion).then(response => {
    console.log('ChatGPT Response:', response);
});