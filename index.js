require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Usa a chave API da variável de ambiente
});

const openai = new OpenAIApi(configuration);

console.log("Hello, Eve!");

// Adicione sua lógica para interagir com a API da OpenAI aqui
