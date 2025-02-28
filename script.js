let quadras = [];
let lotes = {};

async function carregarDados() {
    const response = await fetch("https://script.google.com/macros/s/YOUR_GOOGLE_SCRIPT_ID/exec");
    const data = await response.json();

    quadras = [...new Set(data.map(item => item.quadra))]; 
    quadras.forEach(quadra => {
        lotes[quadra] = data.filter(item => item.quadra === quadra).map(item => item.lote);
    });

    preencherQuadras();
}

function preencherQuadras() {
    let selectQuadra = document.getElementById("quadra");
    selectQuadra.innerHTML = "<option value=''>Selecione</option>";

    quadras.forEach(q => {
        let option = document.createElement("option");
        option.value = q;
        option.textContent = q;
        selectQuadra.appendChild(option);
    });

    preencherLotes(); 
}

function preencherLotes() {
    let quadraSelecionada = document.getElementById("quadra").value;
    let selectLote = document.getElementById("lote");
    selectLote.innerHTML = "<option value=''>Selecione</option>";

    if (quadraSelecionada && lotes[quadraSelecionada]) {
        lotes[quadraSelecionada].forEach(l => {
            let option = document.createElement("option");
            option.value = l;
            option.textContent = l;
            selectLote.appendChild(option);
        });
    }
}

async function carregarMapa() {
    const response = await fetch("https://script.google.com/macros/s/YOUR_GOOGLE_SCRIPT_ID/exec");
    const data = await response.json();
    console.log(data);
}
