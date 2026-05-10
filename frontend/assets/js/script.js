

let page = window.location.pathname.split("/").pop();
console.log(page)
let membres; 

// Données des membres avec leur photo et cotisations

    if (page == "index.html"){

         membres = [
            { nom: "Waza", photo: "/frontend/assets/images/waza.jpg",  cotisations: [5000, 5000, 5000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
            { nom: "Melissa", photo: "/frontend/assets/images/melissa.jpg",  cotisations: [5000, 5000, 5000, 5000, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
            { nom: "Victoire", photo: "/frontend/assets/images/stephanie.jpg",  cotisations: [5000, 5000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
            { nom: "Isis", photo: "/frontend/assets/images/isis.jpg",  cotisations: [5000, 5000, 5000, 5000, 5000, 0, 0, 0, 0, 0, 0, 0, 0] },
            { nom: "Norbert", photo: "/frontend/assets/images/photo1.png",  cotisations: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
            { nom: "Bolingo", photo: "/frontend/assets/images/photo1.png",  cotisations: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
            { nom: "Evan's", photo: "/frontend/assets/images/photo1.png", cotisations: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
            { nom: "Tic-Tac ", photo: "/frontend/assets/images/photo1.png", cotisations: [5000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
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
    }else if (page == "2025.html"){
         membres = [
            { nom: "Waza", photo: "/frontend/assets/images/waza.jpg", cotisations: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000] },
            { nom: "Melissa", photo: "/frontend/assets/images/melissa.jpg", cotisations: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000] },
            { nom: "Victoire", photo: "/frontend/assets/images/stephanie.jpg", cotisations: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000] },
            { nom: "Isis", photo: "/frontend/assets/images/isis.jpg", cotisations:[5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000] },
            { nom: "Norbert", photo: "/frontend/assets/images/photo1.png", cotisations: [5000, 5000, 5000, 5000, 0, 0, 0, 0, 0, 0, 0, 0] },
            { nom: "Bolingo", photo: "/frontend/assets/images/photo1.png", cotisations: [5000, 5000, 5000, 5000, 0, 0, 0, 0, 0, 0, 0, 0] },
            { nom: "Evan's", photo: "/frontend/assets/images/photo1.png", cotisations: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000]  },
            { nom: "Tic-Tac ", photo: "/frontend/assets/images/photo1.png", cotisations: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000] },
            { nom: "Naz-K", photo: "/frontend/assets/images/nazk.jpg", cotisations: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ];
    }else {

         membres = [
            { nom: "Waza", photo: "/frontend/assets/images/waza.jpg",  cotisations: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
            { nom: "Melissa", photo: "/frontend/assets/images/melissa.jpg",  cotisations: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
            { nom: "Victoire", photo: "/frontend/assets/images/stephanie.jpg",  cotisations: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
            { nom: "Isis", photo: "/frontend/assets/images/isis.jpg",  cotisations: [5000, 5000, 5000, 5000, 5000, 0, 0, 0, 0, 0, 0, 0, 0] },
            { nom: "Norbert", photo: "/frontend/assets/images/photo1.png",  cotisations: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
            { nom: "Bolingo", photo: "/frontend/assets/images/photo1.png",  cotisations: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
            { nom: "Evan's", photo: "/frontend/assets/images/photo1.png", cotisations: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
            { nom: "Tic-Tac ", photo: "/frontend/assets/images/photo1.png", cotisations: [5000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
            { nom: "Naz-K", photo: "/frontend/assets/images/nazk.jpg", cotisations: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ]

    }


    var soldeTo;

const allYearsData = {
    "Waza":     { 2024: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2025: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2026: [5000,5000,5000,0,0,0,0,0,0,0,0,0] },
    "Melissa":  { 2024: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2025: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2026: [5000,5000,5000,5000,0,0,0,0,0,0,0,0] },
    "Victoire": { 2024: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2025: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2026: [5000,5000,0,0,0,0,0,0,0,0,0,0] },
    "Isis":     { 2024: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2025: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2026: [5000,5000,5000,5000,5000,0,0,0,0,0,0,0] },
    "Norbert":  { 2024: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2025: [5000,5000,5000,5000,0,0,0,0,0,0,0,0],                      2026: [0,0,0,0,0,0,0,0,0,0,0,0] },
    "Bolingo":  { 2024: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2025: [5000,5000,5000,5000,0,0,0,0,0,0,0,0],                      2026: [0,0,0,0,0,0,0,0,0,0,0,0] },
    "Evan's":   { 2024: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2025: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2026: [0,0,0,0,0,0,0,0,0,0,0,0] },
    "Tic-Tac":  { 2024: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2025: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2026: [5000,0,0,0,0,0,0,0,0,0,0,0] },
    "Naz-K":    { 2024: [5000,5000,5000,5000,5000,5000,0,0,0,0,0,0],                   2025: [0,0,0,0,0,0,0,0,0,0,0,0],                                   2026: [0,0,0,0,0,0,0,0,0,0,0,0] },
    "Bagio":    { 2024: [5000,0,0,0,0,0,0,0,0,0,0,0],                                  2025: [],                                                           2026: [] }
};

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
        thMembre.style.cursor = "pointer";
        thMembre.title = `Voir le détail de ${membre.nom.trim()}`;
        thMembre.addEventListener("click", () => ouvrirDetailMembre(membre));
        membreRow.appendChild(thMembre);

        let thNom = document.createElement("th");
        thNom.textContent = membre.nom;
        thNom.style.cursor = "pointer";
        thNom.title = `Voir le détail de ${membre.nom.trim()}`;
        thNom.addEventListener("click", () => ouvrirDetailMembre(membre));
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

function fermerModal() {
    var m = document.getElementById("membreModal");
    if (m) m.classList.remove("open");
}

function ouvrirDetailMembre(membre) {
    const modal = document.getElementById("membreModal");
    const content = document.getElementById("modalContent");
    if (!modal || !content) return;

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const nom = membre.nom.trim();
    const data = allYearsData[nom];

    let totalPaye = 0;
    let totalDu = 0;

    // -- En-tête --
    const header = document.createElement("div");
    header.className = "modal-header";

    const photo = document.createElement("img");
    photo.src = membre.photo;
    photo.alt = nom;
    photo.className = "modal-photo";
    photo.onerror = function() { this.src = "/frontend/assets/images/photo1.png"; };

    const infoDiv = document.createElement("div");
    const nomP = document.createElement("p");
    nomP.className = "modal-name";
    nomP.textContent = nom;
    infoDiv.appendChild(nomP);

    header.appendChild(photo);
    header.appendChild(infoDiv);

    // -- Corps : blocs par année --
    const body = document.createElement("div");
    body.className = "modal-body";

    [2024, 2025, 2026].forEach(function(year) {
        var cotis = data ? (data[year] || []) : (year === currentYear ? membre.cotisations : []);
        if (!cotis || cotis.length === 0) return;

        var cotis12 = cotis.slice(0, 12);
        var paye = cotis12.reduce(function(a, v) { return a + v; }, 0);
        var moisAttendus = year < currentYear ? 12 : currentMonth + 1;
        var du = Math.max(0, moisAttendus * 5000 - paye);
        totalPaye += paye;
        totalDu += du;

        var block = document.createElement("div");
        block.className = "year-block";

        var blockHeader = document.createElement("div");
        blockHeader.className = "year-block-header";

        var yearSpan = document.createElement("span");
        yearSpan.className = "year-label";
        yearSpan.textContent = year;

        var payeSpan = document.createElement("span");
        payeSpan.className = "year-paid";
        payeSpan.textContent = paye.toLocaleString() + " CFA payés";

        blockHeader.appendChild(yearSpan);
        blockHeader.appendChild(payeSpan);

        var pillsWrap = document.createElement("div");
        pillsWrap.className = "year-pills-wrap";

        mois.forEach(function(m, idx) {
            var val = cotis12[idx] || 0;
            var cls;
            if (year < currentYear) {
                cls = val > 0 ? "paid" : "unpaid";
            } else {
                if (val > 0) cls = "paid";
                else if (idx <= currentMonth) cls = "unpaid";
                else cls = "future";
            }
            var pill = document.createElement("span");
            pill.className = "month-pill " + cls;
            pill.textContent = m.slice(0, 3);
            pillsWrap.appendChild(pill);
        });

        var owedLine = document.createElement("div");
        owedLine.className = "year-owed-line " + (du > 0 ? "has-debt" : "no-debt");
        if (du > 0) {
            owedLine.textContent = "Doit encore : " + du.toLocaleString() + " CFA";
        } else {
            owedLine.textContent = "A jour pour cette annee";
        }

        block.appendChild(blockHeader);
        block.appendChild(pillsWrap);
        block.appendChild(owedLine);
        body.appendChild(block);
    });

    // -- Badge statut --
    var estAJour = totalDu === 0;
    var badge = document.createElement("span");
    badge.className = "status-badge " + (estAJour ? "ok" : "retard");
    badge.textContent = estAJour ? "A jour" : "En retard";
    infoDiv.appendChild(badge);

    // -- Pied --
    var footer = document.createElement("div");
    footer.className = "modal-footer";

    var totalDiv = document.createElement("div");
    totalDiv.className = "modal-total-owed " + (totalDu > 0 ? "has-debt" : "no-debt");
    if (totalDu > 0) {
        totalDiv.textContent = "Total dette : " + totalDu.toLocaleString() + " CFA";
    } else {
        totalDiv.textContent = "Tout est a jour ! Total paye : " + totalPaye.toLocaleString() + " CFA";
    }
    footer.appendChild(totalDiv);

    // -- Assemblage --
    content.innerHTML = "";
    content.appendChild(header);
    content.appendChild(body);
    content.appendChild(footer);

    modal.classList.add("open");
}

function genererCartes() {
    const container = document.getElementById("cardsContainer");
    if (!container) return;

    container.innerHTML = "";
    const currentMonth = new Date().getMonth();

    membres.forEach((membre, i) => {
        const total = membre.cotisations.reduce((acc, val) => acc + val, 0);

        const card = document.createElement("div");
        card.classList.add("membre-card");
        card.style.animationDelay = `${i * 0.06}s`;

        const pillsHTML = mois.map((m, idx) => {
            if (idx >= membre.cotisations.length) return "";
            let cls = "future";
            if (membre.cotisations[idx] > 0) cls = "paid";
            else if (idx <= currentMonth) cls = "unpaid";
            return `<span class="month-pill ${cls}">${m.slice(0, 3)}</span>`;
        }).join("");

        card.innerHTML = `
            <div class="card-header">
                <img src="${membre.photo}" alt="${membre.nom}" class="card-photo"
                     onerror="this.src='/frontend/assets/images/photo1.png'">
                <div class="card-info">
                    <h3>${membre.nom}</h3>
                    <span class="card-total-badge">${total.toLocaleString()} CFA</span>
                </div>
            </div>
            <div class="card-months">${pillsHTML}</div>
        `;

        card.style.cursor = "pointer";
        card.addEventListener("click", () => ouvrirDetailMembre(membre));
        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    genererTableau();
    genererCartes();

    var modal = document.getElementById("membreModal");
    var closeBtn = document.getElementById("modalClose");
    if (modal) {
        modal.addEventListener("click", function(e) {
            if (e.target === modal) fermerModal();
        });
    }
    if (closeBtn) {
        closeBtn.addEventListener("click", fermerModal);
    }

    const hamburger = document.getElementById("hamburgerBtn");
    const navMenu = document.querySelector(".navbar ul");
    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("open");
        });
        document.addEventListener("click", (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove("active");
                navMenu.classList.remove("open");
            }
        });
    }

    const downloadBtn = document.getElementById("downloadBtn");
    if (downloadBtn) downloadBtn.addEventListener("click", telechargerImage);
});
