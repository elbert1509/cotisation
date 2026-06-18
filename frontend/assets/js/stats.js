const allYearsData = {
    "Waza":     { 2024: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2025: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2026: [5000,5000,5000,5000,5000,5000,0,0,0,0,0,0] },
    "Melissa":  { 2024: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2025: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2026: [5000,5000,5000,5000,5000,0,0,0,0,0,0,0] },
    "Victoire": { 2024: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2025: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2026: [5000,5000,0,0,0,0,0,0,0,0,0,0] },
    "Isis":     { 2024: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2025: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2026: [5000,5000,5000,5000,5000,0,0,0,0,0,0,0] },
    "Norbert":  { 2024: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2025: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2026: [0,0,0,0,0,0,0,0,0,0,0,0] },
    "Bolingo":  { 2024: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2025: [5000,5000,5000,5000,0,0,0,0,0,0,0,0],                      2026: [0,0,0,0,0,0,0,0,0,0,0,0] },
    "Evan's":   { 2024: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2025: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2026: [0,0,0,0,0,0,0,0,0,0,0,0] },
    "Tic-Tac":  { 2024: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2025: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 2026: [5000,0,0,0,0,0,0,0,0,0,0,0] },
    "Naz-K":    { 2024: [5000,5000,5000,5000,5000,5000,0,0,0,0,0,0],                  2025: [0,0,0,0,0,0,0,0,0,0,0,0],                                   2026: [0,0,0,0,0,0,0,0,0,0,0,0] },
    "Bagio":    { 2024: [5000,0,0,0,0,0,0,0,0,0,0,0],                                 2025: [],                                                           2026: [] }
};

const COTISATION = 5000;
const CURRENT_YEAR = 2026;
const CURRENT_MONTH = 5; // Juin = index 5
const YEARS = [2024, 2025, 2026];

const MONTH_SHORT = ["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"];

const MEMBER_COLORS = {
    "Waza":     "#4e79a7",
    "Melissa":  "#f28e2b",
    "Victoire": "#e15759",
    "Isis":     "#76b7b2",
    "Norbert":  "#59a14f",
    "Bolingo":  "#edc948",
    "Evan's":   "#b07aa1",
    "Tic-Tac":  "#ff9da7",
    "Naz-K":    "#9c755f",
    "Bagio":    "#bab0ac"
};

function buildTimeLabels() {
    var labels = [];
    YEARS.forEach(function(year) {
        var maxMonth = year < CURRENT_YEAR ? 11 : CURRENT_MONTH;
        for (var m = 0; m <= maxMonth; m++) {
            labels.push(MONTH_SHORT[m] + " " + year);
        }
    });
    return labels;
}

function buildGraph1() {
    var members = Object.keys(allYearsData);
    var actualData = [];
    var idealData = [];
    var cumulActual = 0;
    var cumulIdeal = 0;

    YEARS.forEach(function(year) {
        var maxMonth = year < CURRENT_YEAR ? 11 : CURRENT_MONTH;
        var activeCount = members.filter(function(name) {
            var d = allYearsData[name][year];
            return d && d.length > 0;
        }).length;

        for (var m = 0; m <= maxMonth; m++) {
            var monthTotal = 0;
            members.forEach(function(name) {
                var d = allYearsData[name][year];
                if (d && d.length > m) monthTotal += (d[m] || 0);
            });
            cumulActual += monthTotal;
            cumulIdeal += activeCount * COTISATION;
            actualData.push(cumulActual);
            idealData.push(cumulIdeal);
        }
    });

    var ctx = document.getElementById("chart-global").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: buildTimeLabels(),
            datasets: [
                {
                    label: "Réel collecté",
                    data: actualData,
                    borderColor: "#4e79a7",
                    backgroundColor: "rgba(78,121,167,0.1)",
                    borderWidth: 2.5,
                    pointRadius: 3,
                    tension: 0.3,
                    fill: true
                },
                {
                    label: "Idéal (tout le monde à temps)",
                    data: idealData,
                    borderColor: "#59a14f",
                    backgroundColor: "rgba(89,161,79,0.05)",
                    borderWidth: 2,
                    borderDash: [6, 4],
                    pointRadius: 0,
                    tension: 0.3,
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: "index", intersect: false },
            plugins: {
                legend: { position: "bottom", labels: { font: { size: 12 }, boxWidth: 14 } },
                tooltip: {
                    callbacks: {
                        label: function(ctx) {
                            return ctx.dataset.label + " : " + ctx.raw.toLocaleString() + " CFA";
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { callback: function(v) { return (v / 1000) + "k"; }, font: { size: 11 } }
                },
                x: {
                    ticks: { maxTicksLimit: 8, maxRotation: 40, font: { size: 11 } }
                }
            }
        }
    });
}

function buildGraph2() {
    var members = Object.keys(allYearsData).filter(function(name) {
        return YEARS.some(function(y) {
            return allYearsData[name][y] && allYearsData[name][y].length > 0;
        });
    });

    var labels = buildTimeLabels();
    var datasets = members.map(function(name) {
        var data = [];
        var cumul = 0;
        YEARS.forEach(function(year) {
            var maxMonth = year < CURRENT_YEAR ? 11 : CURRENT_MONTH;
            for (var m = 0; m <= maxMonth; m++) {
                var d = allYearsData[name][year];
                if (d && d.length > m) cumul += (d[m] || 0);
                data.push(cumul);
            }
        });
        var color = MEMBER_COLORS[name] || "#999";
        return {
            label: name,
            data: data,
            borderColor: color,
            backgroundColor: "transparent",
            borderWidth: 2,
            pointRadius: 2,
            tension: 0.3,
            fill: false
        };
    });

    var ctx = document.getElementById("chart-members").getContext("2d");
    var chart = new Chart(ctx, {
        type: "line",
        data: { labels: labels, datasets: datasets },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: "index", intersect: false },
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(ctx) {
                            return ctx.dataset.label + " : " + ctx.raw.toLocaleString() + " CFA";
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { callback: function(v) { return (v / 1000) + "k"; }, font: { size: 11 } }
                },
                x: {
                    ticks: { maxTicksLimit: 8, maxRotation: 40, font: { size: 11 } }
                }
            }
        }
    });

    var toggleContainer = document.getElementById("member-toggles");
    members.forEach(function(name, i) {
        var color = MEMBER_COLORS[name] || "#999";
        var btn = document.createElement("button");
        btn.className = "member-toggle-btn";
        btn.textContent = name;
        btn.style.borderColor = color;
        btn.style.backgroundColor = color;
        btn.style.color = "white";

        btn.addEventListener("click", function() {
            var meta = chart.getDatasetMeta(i);
            var nowHidden = meta.hidden !== true;
            meta.hidden = nowHidden;
            if (nowHidden) {
                btn.style.backgroundColor = "transparent";
                btn.style.color = color;
            } else {
                btn.style.backgroundColor = color;
                btn.style.color = "white";
            }
            chart.update();
        });

        toggleContainer.appendChild(btn);
    });
}

function buildDebtCard() {
    var debts = Object.entries(allYearsData).map(function(entry) {
        var name = entry[0];
        var data = entry[1];
        var totalPaid = 0;
        var totalExpected = 0;

        YEARS.forEach(function(year) {
            var cotis = data[year] || [];
            if (cotis.length === 0) return;
            var paid = cotis.slice(0, 12).reduce(function(a, v) { return a + v; }, 0);
            var monthsExpected = year < CURRENT_YEAR ? 12 : CURRENT_MONTH + 1;
            totalPaid += paid;
            totalExpected += monthsExpected * COTISATION;
        });

        return { name: name, debt: Math.max(0, totalExpected - totalPaid), totalPaid: totalPaid };
    }).sort(function(a, b) { return b.debt - a.debt; });

    var rankEmojis = ["💀", "😱", "😰", "😟", "😐", "😶", "🔸", "🔹"];
    var debtorIndex = 0;

    var container = document.getElementById("debt-list");
    debts.forEach(function(d) {
        var item = document.createElement("div");
        item.className = "debt-item " + (d.debt === 0 ? "no-debt" : "has-debt");

        var emoji;
        var rankLabel = "";
        if (d.debt === 0) {
            emoji = "✅";
        } else {
            emoji = rankEmojis[debtorIndex] || "🔺";
            rankLabel = '<span class="debt-rank">#' + (debtorIndex + 1) + '</span>';
            debtorIndex++;
        }

        item.innerHTML =
            '<div class="debt-left">' +
                '<span class="debt-emoji">' + emoji + '</span>' +
                '<div class="debt-info">' +
                    '<span class="debt-name">' + d.name + '</span>' +
                    '<span class="debt-paid">Payé : ' + d.totalPaid.toLocaleString() + ' CFA</span>' +
                '</div>' +
            '</div>' +
            '<div class="debt-right">' +
                rankLabel +
                '<span class="debt-amount ' + (d.debt === 0 ? "ok" : "owed") + '">' +
                    (d.debt === 0 ? "À jour 🎉" : d.debt.toLocaleString() + " CFA") +
                '</span>' +
            '</div>';

        container.appendChild(item);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    buildGraph1();
    buildGraph2();
    buildDebtCard();

    var hamburger = document.getElementById("hamburgerBtn");
    var navMenu = document.querySelector(".navbar ul");
    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function() {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("open");
        });
        document.addEventListener("click", function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove("active");
                navMenu.classList.remove("open");
            }
        });
    }
});
