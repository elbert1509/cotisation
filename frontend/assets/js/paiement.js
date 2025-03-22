
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";

 import { getFirestore } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
 import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-storage.js";
 import { collection, addDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";



 //import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgZrriA6Sj7mxHT41xP3Mf5jdEXjB61EA",
  authDomain: "cotisation-b6800.firebaseapp.com",
  projectId: "cotisation-b6800",
  storageBucket: "cotisation-b6800.firebasestorage.app",
  messagingSenderId: "929441607225",
  appId: "1:929441607225:web:607fd04359f843600527e8",
  measurementId: "G-SPM0ELGDL0"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Initialiser Firestore et Storage
const db = getFirestore(app);
const storage = getStorage(app);


document.getElementById("file-upload").addEventListener("change", function() {
    const label = document.querySelector(".file-label");
    if (this.files.length > 0) {
        label.textContent = this.files[0].name;
    } else {
        label.textContent = "Sélectionner un fichier";
    }
});

const membres = [ "Waza", "Melissa", "Victoire","Isis","Norbert","Bolingo","Evan's","Tic-Tac","Naz-K","Baggio"]
const selecElement = document.getElementById("cotisant-select");
const cotisant = document.getElementById("cotisant-select").value; // Récupère le cotisant sélectionné


membres.forEach(element => {
    let option = document.createElement("option");
    option.value=element;
    option.textContent=element;
    selecElement.appendChild(option)
   
});
console.log("voici le co " + cotisant)

document.getElementById("upload-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const file = document.getElementById("file-upload").files[0];
    const montant = document.getElementById("montant").value;
    
    if (!file) {
        alert("Veuillez sélectionner un fichier.");
        return;
    }
    
    if (montant <= 0) {
        alert("Veuillez entrer un montant valide.");
        return;
    }

    const storageRef = ref(storage, "paiements/" + file.name);
    const uploadTask = uploadBytes(storageRef, file);
    uploadTask.then((snapshot) => {
        console.log("Upload réussi !");
        return getDownloadURL(snapshot.ref);
    }).then((downloadURL) => {
        console.log("Fichier disponible à :", downloadURL);
        
        // Ajouter les infos dans Firestore
        addDoc(collection(db, "coti"), {
            montant: montant,
            photo: downloadURL,
            nom :cotisant,
            date: new Date()
        }).then(() => {
            alert("Paiement enregistré avec succès !");
            document.getElementById("upload-form").reset();
        }).catch((error) => {
            console.error("Erreur lors de l'enregistrement :", error);
        });
    }).catch((error) => {
        console.error("Erreur d'upload :", error);
    });

    alert("Paiement soumis avec succès !");
});

