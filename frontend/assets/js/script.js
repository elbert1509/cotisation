

let page = window.location.pathname.split("/").pop();
console.log(page)
let membres; 

// Données des membres avec leur photo et cotisations

    if (page == "index.html"){

         membres = [
            { nom: "Waza", photo: "/frontend/assets/images/waza.jpg", cotisations: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000] },
            { nom: "Melissa", photo: "/frontend/assets/images/melissa.jpg", cotisations: [5000, 5000, 5000, 5000, 0, 0, 0, 0, 0, 0, 0, 0] },
            { nom: "Victoire", photo: "/frontend/assets/images/stephanie.jpg", cotisations: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000] },
            { nom: "Isis", photo: "/frontend/assets/images/isis.jpg", cotisations:[5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 0, 0, 0, 0] },
            { nom: "Norbert", photo: "/frontend/assets/images/photo1.png", cotisations: [5000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
            { nom: "Bolingo", photo: "/frontend/assets/images/photo1.png", cotisations: [5000, 5000, 5000, 5000, 0, 0, 0, 0, 0, 0, 0, 0] },
            { nom: "Evan's", photo: "/frontend/assets/images/photo1.png", cotisations: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
            { nom: "Tic-Tac ", photo: "/frontend/assets/images/photo1.png", cotisations: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 0] },
            { nom: "Naz-K", photo: "/frontend/assets/images/nazk.jpg", cotisations: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ];
    }else if (page == "2024.html"){

         membres = [
            { nom: "Waza", photo: "/frontend/assets/images/waza.jpg", cotisations: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000] },
            { nom: "Melissa", photo: "/frontend/assets/images/melissa.jpg", cotisations: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000] },
            { nom: "Victoire", photo: "/frontend/assets/images/stephanie.jpg", cotisations: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000] },
            { nom: "Isis", photo: "/frontend/assets/images/isis.jpg", cotisations:[5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000]  },
            { nom: "Norbert", photo: "/frontend/assets/images/photo1.png", cotisations: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000] },
            { nom: "Bolingo", photo: "/frontend/assets/images/photo1.png", cotisations: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000] },
            { nom: "Evan's", photo: "/frontend/assets/images/photo1.png", cotisations: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000]  },
            { nom: "Tic-Tac ", photo: "/frontend/assets/images/photo1.png", cotisations:[5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000] },
            { nom: "Naz-K", photo: "/frontend/assets/images/nazk.jpg", cotisations: [5000, 5000, 5000, 5000, 5000, 5000, 0, 0, 0, 0, 0, 0, 0] },
            { nom: "Bagio", photo: "/frontend/assets/images/photo1.png", cotisations: [5000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ];
    }else {
        membres = [
            { nom: "Waza", photo: "/frontend/assets/images/waza.jpg", cotisations: [5000, 5000, 5000, 5000, 0, 0, 0, 0, 0, 0, 0, 0] },
            { nom: "Melissa", photo: "/frontend/assets/images/melissa.jpg", cotisations: [5000, 5000, 5000, 5000, 0, 0, 0, 0, 0, 0, 0, 0] },
            { nom: "Victoire", photo: "/frontend/assets/images/stephanie.jpg", cotisations: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000] },
            { nom: "Isis", photo: "/frontend/assets/images/isis.jpg", cotisations:[5000, 5000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
            { nom: "Norbert", photo: "/frontend/assets/images/photo1.png", cotisations: [5000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
            { nom: "Bolingo", photo: "/frontend/assets/images/photo1.png", cotisations: [5000, 5000, 5000, 5000, 0, 0, 0, 0, 0, 0, 0, 0] },
            { nom: "Evan's", photo: "/frontend/assets/images/photo1.png", cotisations: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
            { nom: "Tic-Tac ", photo: "/frontend/assets/images/photo1.png", cotisations: [5000, 5000, 5000, 5000, 5000, 0, 0, 0, 0, 0, 0, 0] },
            { nom: "Naz-K", photo: "/frontend/assets/images/nazk.jpg", cotisations: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ]

    }


    var soldeTo; 

// Liste des mois
const mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

function genererTableau() {
    const membreRow = document.getElementById("membreRow");
    const nomRow = document.getElementById("nomRow");
    const tbody = document.querySelector("#cotisationTable tbody");
    const totalRow = document.getElementById("totalRow");
    const totalAll = document.getElementById("TotalAll");


    // Vider les lignes existantes
    membreRow.innerHTML = "<th></th>";  // Première case vide pour alignement
    nomRow.innerHTML = "<th>Mois</th>"; // Ajout du titre pour les mois
    tbody.innerHTML = "";
    totalRow.innerHTML = "<td><strong>Total</strong></td>"; // Ajoute la colonne "Total"
    let totaux = membres.map(membre => membre.cotisations.reduce((acc, val) => acc + val, 0));

    

    // Ajouter les membres dans l'entête avec leur photo
    membres.forEach(membre => {
        let thMembre = document.createElement("th");
        let img = document.createElement("img");
        img.src = membre.photo;
        img.alt = membre.nom;
        img.classList.add("membre-img");

        thMembre.appendChild(img);
        membreRow.appendChild(thMembre);

        let thNom = document.createElement("th");
        thNom.textContent = membre.nom;
        nomRow.appendChild(thNom);
    });

    // Ajouter les cotisations pour chaque mois
    mois.forEach((moisNom, index) => {
        let tr = document.createElement("tr");

        // Ajouter le mois en première colonne
        let tdMois = document.createElement("td");
        tdMois.textContent = moisNom;
        tdMois.style.fontWeight = "bold";
        tr.appendChild(tdMois);

        // Ajouter les cotisations pour chaque membre
        membres.forEach(membre => {
            let td = document.createElement("td");
            td.textContent = membre.cotisations[index] + " cfa"; 
            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });

    totaux.forEach(total => {
        let tdTotal = document.createElement("td");
        tdTotal.textContent = total + " ";
        totalRow.appendChild(tdTotal);
    });


    let soldeTotal = totaux.reduce((acc,val) => acc + val ,0)
    document.getElementById("TotalAll").textContent = `Solde : ${soldeTotal} `;
    soldeTo = soldeTotal + 298400 ; 
    console.log(soldeTo)
    const montantStocke = localStorage.getItem("montantDisponible");
    console.log(montantStocke)
    const dispoElement = document.getElementById("montantDispo");
    if (dispoElement) {
        if (montantStocke !== null) {
            const montant = parseFloat(montantStocke);
            dispoElement.textContent = `Montant Disponible : ${montant.toLocaleString()} cfa`;
        } else {
            dispoElement.textContent = "Montant Disponible : (non disponible)";
        }
    }
}

// 🔽 Fonction pour convertir le tableau en CSV et le télécharger
function telechargerImage() {
    let table = document.getElementById("cotisationTable");

    // Utilisation de html2canvas pour capturer le tableau en image
    html2canvas(table).then(canvas => {
        let link = document.createElement("a");
        link.href = canvas.toDataURL("image/png"); // Convertit en image PNG
        link.download = "cotisations.png"; // Nom du fichier à télécharger
        link.click(); // Déclenche le téléchargement
    });
}

document.addEventListener("DOMContentLoaded", genererTableau);
document.getElementById("downloadBtn").addEventListener("click", telechargerImage);


// Générer le tableau au chargement de la page
