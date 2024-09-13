// Funzione per passare alla pagina del test
function vaiAlTest() {
    document.getElementById('pagina1').style.display = 'none';
    document.getElementById('pagina2').style.display = 'block';
}

// Funzione per calcolare il profumo perfetto
function calcolaProfumo() {
    let q1 = document.querySelector('input[name="q1"]:checked').value;
    let q2 = document.querySelector('input[name="q2"]:checked').value;
    let q3 = document.querySelector('input[name="q3"]:checked').value;
    let q4 = document.querySelector('input[name="q4"]:checked').value;
    let q5 = document.querySelector('input[name="q5"]:checked').value;
    let q6 = document.querySelector('input[name="q6"]:checked').value;

    let floreale = 0, agrumato = 0, legnoso = 0, dolce = 0;

    // Calcolo punteggio
    if (q1 === "mare") agrumato++;
    if (q1 === "montagna") legnoso++;
    if (q1 === "città") floreale++;

    if (q2 === "floreale") floreale++;
    if (q2 === "agrumata") agrumato++;
    if (q2 === "legnosa") legnoso++;

    if (q3 === "lavanda") floreale++;
    if (q3 === "vaniglia") dolce++;
    if (q3 === "oli") legnoso++;

    if (q4 === "fresca") agrumato++;
    if (q4 === "dolce") dolce++;
    if (q4 === "speziata") legnoso++;

    if (q5 === "bucato") agrumato++;
    if (q5 === "naturali") legnoso++;
    if (q5 === "legni") legnoso++;

    if (q6 === "felicità") floreale++;
    if (q6 === "energia") agrumato++;
    if (q6 === "comfort") dolce++;

    // Determina il risultato
    let massimo = Math.max(floreale, agrumato, legnoso, dolce);
    let profumo;

    if (massimo === floreale) {
        profumo = "Vigna Rossa";
    } else if (massimo === agrumato) {
        profumo = "Citri Fructus";
    } else if (massimo === legnoso) {
        profumo = "Sapientia";
    } else {
        profumo = "Risveglio";
    }

    // Mostra il risultato
    document.getElementById('pagina2').style.display = 'none';
    document.getElementById('pagina3').style.display = 'block';
    document.getElementById('risultatoProfumo').innerText = profumo;
}

