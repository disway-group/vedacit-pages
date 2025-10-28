function updateProfImage() {
    const select = document.getElementById("00NHZ000005uk26");
    const image = document.getElementById("profImage");
    const value = select.value.toLowerCase();

    // Caminho base das imagens
    const basePath = "./_assets/_images/";

    // Define a imagem padrão (Lojista)
    let fileName = "logista.png";

    if (value.includes("pedreiro") || value.includes("mestre")) {
        fileName = "mestre-de-obras.png";
    } else if (value.includes("engenheiro")) {
        fileName = "engenheiro.png";
    } else if (value.includes("consumidor")) {
        fileName = "consumidor.png";
    } else if (value.includes("lojista")) {
        fileName = "logista.png";
    }

    image.src = basePath + fileName;
}