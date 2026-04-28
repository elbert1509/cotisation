document.addEventListener("DOMContentLoaded", function () {

    var transactions = [
        { label: "Solde reporte",                montant: 398400 },
        { label: "Layette Petit ROGANDJI",        montant: -51500 },
        { label: "Regulation Norbert",            montant: 40000  },
        { label: "Solde Stephanie",               montant: 45000  },
        { label: "Avril - Waza",                  montant: 5000   },
        { label: "Avril - Norbert",               montant: 5000   },
        { label: "Avril - Bolingo",               montant: 5000   },
        { label: "Cotisation Waza",               montant: 30000  },
        { label: "Cotisation Levy",               montant: 30000  },
        { label: "Cotisation Waza",               montant: 10000  },
        { label: "Cotisation Isis - 30/10/25",    montant: 30000  },
        { label: "Solde Melissa - 27/12/25",      montant: 40000  },
        { label: "Solde Isis - 30/12/25",         montant: 20000  },
        { label: "Solde Levy - 30/12/25",         montant: 10000  },
        { label: "Solde Evans - 31/12/25",        montant: 60000  },
        { label: "Cotisation Isis - 10/02/26",    montant: 25000  },
        { label: "Cotisation Melissa - 16/02/26", montant: 5000   },
        { label: "Cotisation Ernest - 19/02/26",  montant: 10000  },
        { label: "Consultation compte",           montant: -100   },
        { label: "Layette bebe Isis",             montant: -51500 },
        { label: "Cotisation Ernest - 21/03/26",  montant: 5000   },
        { label: "Cotisation Mélissa - 28/04/26", montant: 15000  }
    ];

    var totalCredits = 0;
    var totalDebits  = 0;
    transactions.forEach(function(t) {
        if (t.montant > 0) totalCredits += t.montant;
        else totalDebits += t.montant;
    });
    var solde = totalCredits + totalDebits;

    localStorage.setItem("montantDisponible", solde);

    var section = document.querySelector(".historique-body");
    if (!section) return;

    // ---- Stats ----
    var statsDiv = document.createElement("div");
    statsDiv.className = "histo-stats";

    function creerStatCard(cls, label, valeur) {
        var card = document.createElement("div");
        card.className = "histo-stat-card " + cls;

        var lbl = document.createElement("span");
        lbl.className = "stat-label";
        lbl.textContent = label;

        var val = document.createElement("span");
        val.className = "stat-value";
        val.textContent = valeur;

        card.appendChild(lbl);
        card.appendChild(val);
        return card;
    }

    statsDiv.appendChild(creerStatCard("solde",  "Solde actuel",   solde.toLocaleString()         + " CFA"));
    statsDiv.appendChild(creerStatCard("credit", "Total credits",  "+" + totalCredits.toLocaleString() + " CFA"));
    statsDiv.appendChild(creerStatCard("debit",  "Total debits",   totalDebits.toLocaleString()    + " CFA"));

    section.appendChild(statsDiv);

    // ---- Liste ----
    var list = document.createElement("div");
    list.className = "histo-list";

    var running = 0;
    transactions.forEach(function(t, i) {
        running += t.montant;
        var isCredit = t.montant >= 0;

        var item = document.createElement("div");
        item.className = "histo-item";
        item.style.animationDelay = (i * 0.04) + "s";

        var icon = document.createElement("div");
        icon.className = "histo-icon " + (isCredit ? "credit" : "debit");
        icon.textContent = isCredit ? "+" : "-";

        var info = document.createElement("div");
        info.className = "histo-info";

        var lbl = document.createElement("span");
        lbl.className = "histo-label";
        lbl.textContent = t.label;

        var runSpan = document.createElement("span");
        runSpan.className = "histo-running";
        runSpan.textContent = "Solde : " + running.toLocaleString() + " CFA";

        info.appendChild(lbl);
        info.appendChild(runSpan);

        var amount = document.createElement("span");
        amount.className = "histo-amount " + (isCredit ? "credit" : "debit");
        amount.textContent = (isCredit ? "+" : "") + t.montant.toLocaleString() + " CFA";

        item.appendChild(icon);
        item.appendChild(info);
        item.appendChild(amount);
        list.appendChild(item);
    });

    section.appendChild(list);
});
