document.addEventListener("DOMContentLoaded", function () {
    const historiqueSection = document.querySelector(".Historique-section");


    const data = [
        { description: "Solde Avant ", montant: 398400 },
        { description: "Layette Petit ROGANDJI", montant: -51500 },
{ description: "Régulation Norbert", montant: 40000 },
        { description: "Solde Stéphanie", montant: 45000 },
        { description: "Avril Waza", montant: 5000 },
        
    ];

    let total = 0;

    const table = document.createElement("table");
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    ["Description", "Montant "].forEach(text => {
        const th = document.createElement("th");
        th.textContent = text;
        th.style.border = "1px solid black";
        th.style.padding = "8px";
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    data.forEach(item => {
        const row = document.createElement("tr");

        const tdDesc = document.createElement("td");
        tdDesc.textContent = item.description;
        tdDesc.style.border = "1px solid black";
        tdDesc.style.padding = "8px";

        const tdMontant = document.createElement("td");
        tdMontant.textContent = item.montant.toFixed(2);
        tdMontant.style.border = "1px solid black";
        tdMontant.style.padding = "8px";

        total += item.montant;
        localStorage.setItem("montantDisponible",total)

        row.appendChild(tdDesc);
        row.appendChild(tdMontant);
        tbody.appendChild(row);
    });

    // Ajout de la ligne Total
    const totalRow = document.createElement("tr");
    const tdTotalLabel = document.createElement("td");
    tdTotalLabel.textContent = "Total";
    tdTotalLabel.style.fontWeight = "bold";
    tdTotalLabel.style.border = "1px solid black";
    tdTotalLabel.style.padding = "8px";

    const tdTotalValue = document.createElement("td");
    tdTotalValue.textContent = total.toFixed(2);
    tdTotalValue.style.fontWeight = "bold";
    tdTotalValue.style.border = "1px solid black";
    tdTotalValue.style.padding = "8px";

    totalRow.appendChild(tdTotalLabel);
    totalRow.appendChild(tdTotalValue);
    tbody.appendChild(totalRow);

    table.appendChild(tbody);
    historiqueSection.appendChild(table);
});
