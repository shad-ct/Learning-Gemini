import express from 'express';
import { TextGenerate } from './gemini-text.js'; // Import the function

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello World");
});

// New route to generate text
app.get('/generate', async (req, res) => {
    try {
        const generatedText = await TextGenerate(); // Call the function and await the result
        res.send(generatedText); // Send the generated text as a response
    } catch (error) {
        console.error("Error during text generation:", error);
        res.status(500).send("Error generating text");
    }
});

app.listen(port, (err) => {
    if (err) {
        return console.error('Failed to start server:', err);
    }
    console.log(`Server is running on http://localhost:${port}`);
});
