const functions = require('firebase-functions');
const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.askAgent = functions.https.onCall(async (data, context) => {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Le Prompt Système (la magie du RAG léger)
    const promptSysteme = `Tu es  Poupoune l'assistant financier de la Famille unie'. 
    Voici les données exactes et à jour : ${data.contexteJson}. 
    Réponds avec de l'humour, chaleureuse, et uniquement en te basant sur ces chiffres pour les montants. 
    Question de l'utilisateur : ${data.question}`;

    const result = await model.generateContent(promptSysteme);
    return { reponse: result.response.text() };
});