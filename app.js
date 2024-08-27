let figuras = document.querySelector(".decodificador_conteudo_mensagem_figuras");
let copiar = document.querySelector(".decodificador_conteudo_mensagem_copiar");
let figuras768 = document.querySelector(".decodificador_conteudo_mensagem_figuras768");
let copiar768 = document.querySelector(".decodificador_conteudo_mensagem_copiar768");
let msg375 = document.querySelector(".decodificador_conteudo_mensagem375");
let msg375a = document.querySelector(".decodificador_conteudo_mensagem375a");
let texto375 = document.querySelector(".decodificador_conteudo_mensagem_texto375");
let figuras375 = document.querySelector(".decodificador_conteudo_mensagem_figuras375");
let copiar375a = document.querySelector(".decodificador_conteudo_mensagem_copiar375a");
let mensagem_entrada768 = document.getElementById("decodificador_conteudo_mensagem_entrada768");
let textArea = document.getElementById("decodificador_conteudo_texto_entrada");
if (window.innerWidth > 768) {
    copiar.className="hide";
} else if (window.innerWidth > 375 && window.innerWidth <= 768) {
    copiar768.className="hide";
} else {
    msg375a.className="hide";
    textArea.addEventListener("focus", () => {
        textArea.style.height = "624px";
    });
    textArea.addEventListener("blur", () => {
        textArea.style.height = "299px";
    });
}

function criptografaTexto() {
    let texto = document.getElementById("decodificador_conteudo_texto_entrada").value;
    let matrizTexto = texto.split("");
    let textoCriptografado = [];
    for (i in matrizTexto) {
        if (matrizTexto[i] == "e") {
            textoCriptografado.push("enter");
        } else if (matrizTexto[i] == "i") {
            textoCriptografado.push("imes");
        } else if (matrizTexto[i] == "a") {
                textoCriptografado.push("ai");
        } else if (matrizTexto[i] == "o") {
                textoCriptografado.push("ober");
        } else if (matrizTexto[i] == "u") {
                textoCriptografado.push("ufat");
        } else {
            textoCriptografado.push(matrizTexto[i]);
        }
    }
    textoCriptografado = textoCriptografado.join("");
    let mensagem = document.getElementById("decodificador_conteudo_mensagem_entrada");
    let mensagem768 = document.getElementById("decodificador_conteudo_mensagem_entrada768");
    let mensagem375a = document.getElementById("decodificador_conteudo_mensagem_entrada375a");
    if (window.innerWidth > 768) {
        mensagem.value = textoCriptografado;
    } else if (window.innerWidth > 375 && window.innerWidth <= 768) {
        mensagem768.value = textoCriptografado;
    } else {
        mensagem375a.value = textoCriptografado;
    }  
    apagaFiguras();
    let apagaTexto = document.getElementById("decodificador_conteudo_texto_entrada");
    apagaTexto.value = "";
}

function apagaFiguras() {
    if (window.innerWidth > 768) {
        figuras.className="hide";
        copiar.className="show";
    } else if (window.innerWidth > 375 && window.innerWidth <= 768) {
        figuras768.className="hide";
        copiar768.className="show";
    } else {
        msg375.className="hide";
        msg375a.className="show";
    }
}

function apagaCopiar() {
    if (window.innerWidth > 768) {
        figuras.className="show";
        copiar.className="hide";
    } else if (window.innerWidth > 375 && window.innerWidth <= 768) {
        figuras768.className="show";
        copiar768.className="hide";
    } else {
        msg375a.className="hide";
        msg375.className="show";
    }
}

function descriptografaMensagem() {
    let mensagem = document.getElementById("decodificador_conteudo_texto_entrada").value;
    let mensagemDescriptografada = mensagem.replace(/enter/g, "e");
    mensagemDescriptografada = mensagemDescriptografada.replace(/ufat/g, "u");
    mensagemDescriptografada = mensagemDescriptografada.replace(/imes/g, "i");
    mensagemDescriptografada = mensagemDescriptografada.replace(/ober/g, "o");
    mensagemDescriptografada = mensagemDescriptografada.replace(/ai/g, "a");
    if (window.innerWidth > 768) {
        let texto = document.getElementById("decodificador_conteudo_mensagem_entrada");
        texto.value = mensagemDescriptografada;
        apagaFiguras();
        let apagaTexto = document.getElementById("decodificador_conteudo_texto_entrada");
        apagaTexto.value = "";
    } else if (window.innerWidth > 375 && window.innerWidth <= 768) {
        let texto = document.getElementById("decodificador_conteudo_mensagem_entrada768");
        texto.value = mensagemDescriptografada;
        apagaFiguras();
        let apagaTexto = document.getElementById("decodificador_conteudo_texto_entrada");
        apagaTexto.value = "";
    } else {
        let texto = document.getElementById("decodificador_conteudo_mensagem_entrada375a");
        texto.value = mensagemDescriptografada;
        apagaFiguras();
        let apagaTexto = document.getElementById("decodificador_conteudo_texto_entrada");
        apagaTexto.value = "";

    }
}

function copiaMensagem() {
    if (window.innerWidth > 768) {
        let mensagem = document.getElementById("decodificador_conteudo_mensagem_entrada").value;
        let texto = document.getElementById("decodificador_conteudo_texto_entrada");
        texto.value = mensagem;
        apagaCopiar();
    } else if (window.innerWidth > 375 && window.innerWidth <= 768) {
        let mensagem768 = document.getElementById("decodificador_conteudo_mensagem_entrada768").value;
        let texto768 = document.getElementById("decodificador_conteudo_texto_entrada");
        texto768.value = mensagem768;
        apagaCopiar();
    } else {
        let mensagem375 = document.getElementById("decodificador_conteudo_mensagem_entrada375a").value;
        let texto375 = document.getElementById("decodificador_conteudo_texto_entrada");
        texto375.value = mensagem375;
        apagaCopiar();
    }
}