/* =========================================================================
   Assistant IA "Poupoune" — Cotisation Famille unie.
   Appel DIRECT à Google Gemini depuis le navigateur (pas de serveur).

   La clé API est définie dans config.js (window.GEMINI_API_KEY), un fichier
   ignoré par git. config.js doit être chargé AVANT agent.js dans index.html.
   ========================================================================= */

const GEMINI_API_KEY = window.GEMINI_API_KEY || "";
const GEMINI_MODEL = "gemini-2.5-flash";

// Liste des mois (au cas où "mois" de script.js ne serait pas accessible)
const MOIS_IA = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

// Messages rigolos affichés quand l'assistant n'arrive pas à répondre.
const MESSAGES_RIGOLOS = [
    "😅 Oups, j'ai la tête dans le portefeuille là... Réessaie dans un instant !",
    "🤖 Mon cerveau fait une pause café ☕. Repose-moi ta question dans quelques secondes.",
    "🐢 Je rame un peu là, trop de monde me pose des questions sur l'argent ! Réessaie vite.",
    "🙃 J'ai trébuché sur un billet de 5000 CFA. Le temps de me relever et je reviens !",
    "🎢 Je suis a au maquis, je revient tout de suite. Réessaie un coup !",
    "💤 Je faisais la sieste sur la caisse... Redemande-moi, je suis réveillé maintenant !"
];

function messageRigolo() {
    return MESSAGES_RIGOLOS[Math.floor(Math.random() * MESSAGES_RIGOLOS.length)];
}

// Petite pause (en millisecondes).
function pause(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// Construit le contexte (les données réelles) envoyé à l'IA.
function getDonneesPourIA() {
    // allYearsData est défini dans script.js (chargé avant agent.js).
    const donnees = (typeof allYearsData !== "undefined") ? allYearsData : {};

    const maintenant = new Date();
    const anneeCourante = maintenant.getFullYear();
    const moisCourantIndex = maintenant.getMonth(); // 0 = Janvier

    const contexte = {
        regles: "La cotisation mensuelle est de 5000 CFA par membre. Dans les tableaux, 5000 = mois payé, 0 = mois non payé.",
        dateDuJour: `${MOIS_IA[moisCourantIndex]} ${anneeCourante}`,
        soldeCaisse: localStorage.getItem("montantDisponible") || "inconnu",
        cotisationsParMembre: donnees
    };
    return JSON.stringify(contexte);
}

// Appel direct à l'API Gemini, avec réessais si le modèle est surchargé.
async function interrogerGemini(question) {
    const promptSysteme =

         "Tu es Poupoune, l'assistant·e financier·e de la 'Cotisation Famille unie qui renseigne sur l'état actuel des cotisations " +
        "### RÈGLE D'OR : LES CHIFFRES AVANT TOUT" +
        "1. TA PRIORITÉ ABSOLUE est de fournir l'état exact des cotisations." +
        "2. Tu dois TOUJOURS chercher la réponse UNIQUEMENT dans les données financières (JSON) fournies à la fin de ce prompt. Ne calcule rien de toi-même si les données brutes suffisent." +
        "3. Structure toujours ta réponse : donne le chiffre exact en premier, puis ajoute ton commentaire humoristique ensuite."+

       
        "voici quelque infos sur la chacun des membre de la famille pour t'aider à rajouter une touche humouristique avec un peu de sarcasme dans tes reponses" +
        "Waza = Ernest, c'est le pere du petit Waza et c'est lui qui gére le site "+ 
        " Melissa ou Mme Nguema c'est la maman de Ayla Nguema et elle n'aime pas qu'on prête l'argent des cotisation "+
        " Victoire ou Stéphanie, les années précedente elle payait toute ces  cotisation à l'avance mais aujourd'hui elle n'a pas de salaire du coup c'est pas facile pour elle, c'est la mère d'awa " +
        "Isis la mère de Shyne " +
        "Norbert ou Norbert Zongo ou Boris ou Bobo c'est lui qui gére le compte Airtelmoney c'est qui vérifie si les virement sont bien arrivés dans le compte" +
        "Bolingo ou Olvain ou Mr Rogandji, c'est le fils de maman Olga, tres polygame, il deux femme officiel et peut être une troisième en secret "+
        "Tic-Tac ou Levy Soungouno, c'est le plus spirituel du groupe, le marie de reine, il vit entre LIbrevile, port gentil et les site pétrolier c'est le papa du petit soleil, il aime bien la tradition africaine et les proverbe africain" +
        " Naz-K ou Nazyrh Keliet, tres grand fan des camerounais qui ont la réputation d'être des fayman (personne fourbe), le papa de Luna c'est l'ainé du groupe en ce moment il roule avec une grosse voiture à plus de 30 millions avec sa copine camerounaise dans Libreville, il est en costume cravate tout les jours."+
        "Evan's qui souvent préfèrent attendre le decembre pour solder toute l'année en une seule fois" +
        "Ces infos c'est juste pour ajouter de la bonne humeur mais tu fois rester concentré sur les chiffres " +
        "Réponds avec de la  bonne humeur , en français, " +
        "pour les chiffres utilise UNIQUEMENT à partir des données fournies et données des cotisations" +
        "Si une information n'est pas dans les données, dis-le simplement (avec le sourire). " +
        "Voici les données exactes et à jour (JSON) : " + getDonneesPourIA();

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;
    const corps = JSON.stringify({
        systemInstruction: { parts: [{ text: promptSysteme }] },
        contents: [{ role: "user", parts: [{ text: question }] }]
    });

    // On réessaie jusqu'à 3 fois si le modèle est temporairement surchargé.
    const MAX_TENTATIVES = 3;
    for (let tentative = 1; tentative <= MAX_TENTATIVES; tentative++) {
        const reponse = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: corps
        });

        if (reponse.ok) {
            const data = await reponse.json();
            const texte = data &&
                data.candidates &&
                data.candidates[0] &&
                data.candidates[0].content &&
                data.candidates[0].content.parts &&
                data.candidates[0].content.parts[0] &&
                data.candidates[0].content.parts[0].text;
            return texte || "Désolé, je n'ai pas pu formuler de réponse.";
        }

        // Erreurs temporaires (surcharge / quota minute) : on attend et on réessaie.
        const estTemporaire = [429, 500, 503].includes(reponse.status);
        console.warn(`Gemini ${reponse.status} (tentative ${tentative}/${MAX_TENTATIVES})`, await reponse.text());

        if (estTemporaire && tentative < MAX_TENTATIVES) {
            await pause(1500 * tentative); // attente progressive : 1.5s puis 3s
            continue;
        }

        // Échec définitif : on remonte une erreur (gérée par un message rigolo).
        throw new Error(`Gemini ${reponse.status}`);
    }
}

// Ajoute un message (ou un indicateur) dans la zone de chat.
function ajouterMessage(texte, type) {
    const div = document.createElement("div");
    div.className = "message " + type;
    div.textContent = texte;
    const zone = document.getElementById("chat-messages");
    zone.appendChild(div);
    zone.scrollTop = zone.scrollHeight; // toujours afficher le dernier message
    return div;
}

// Envoie la question saisie par l'utilisateur.
async function envoyerQuestion() {
    const input = document.getElementById("chat-input");
    const question = input.value.trim();
    if (!question) return;

    input.value = "";
    ajouterMessage(question, "user");

    if (!GEMINI_API_KEY) {
        ajouterMessage("Clé Gemini non configurée. Vérifie que config.js est bien présent et chargé.", "agent");
        return;
    }

    const enCours = ajouterMessage("…", "agent loading");
    try {
        const reponse = await interrogerGemini(question);
        enCours.textContent = reponse;
        enCours.classList.remove("loading");
    } catch (error) {
        console.error(error); // le détail technique reste dans la console
        enCours.textContent = messageRigolo();
        enCours.classList.remove("loading");
    }
}

// --- Branchement de l'interface (ouverture / fermeture / envoi) ---
document.addEventListener("DOMContentLoaded", () => {
    const widget = document.getElementById("ai-chat-widget");
    const launcher = document.getElementById("chat-launcher");
    const closeBtn = document.getElementById("chat-close");
    const sendBtn = document.getElementById("chat-send");
    const input = document.getElementById("chat-input");

    if (launcher) {
        launcher.addEventListener("click", () => {
            widget.classList.add("open");
            widget.setAttribute("aria-hidden", "false");
            launcher.classList.add("hidden");
            input.focus();
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            widget.classList.remove("open");
            widget.setAttribute("aria-hidden", "true");
            launcher.classList.remove("hidden");
        });
    }

    if (sendBtn) sendBtn.addEventListener("click", envoyerQuestion);

    if (input) {
        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                envoyerQuestion();
            }
        });
    }

    // Message d'accueil
    ajouterMessage("Coucou, moi c'est Poupoune 👋 Pose-moi une question sur les cotisations (ex : « Qui est en retard en 2026 ? »).", "agent");
});
