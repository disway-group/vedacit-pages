// Pega o valor da campanha na URL (?campanha=xxxx)
function getCampaignFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("campanha");
}

// Atualiza os elementos da página
function updateLanding(data) {
    const titleEl = document.querySelector(".hero-content h1");
    const descEl = document.querySelector(".hero-content p");
    const imageEl = document.getElementById("profImage");

    if (data.title) titleEl.textContent = data.title;
    if (data.description) descEl.textContent = data.description;
    if (data.image) imageEl.src = data.image;
}

// Carrega JSON e aplica campanha
function initCampaignLanding() {
    const campanha = getCampaignFromURL();

    fetch("/assets/data/data.json")
        .then(res => res.json())
        .then(json => {
            const campanhaData = json[campanha] || json["default"];
            updateLanding(campanhaData);
        })
        .catch(err => {
            console.error("Erro ao carregar JSON:", err);
        });
}

// Inicia
initCampaignLanding();