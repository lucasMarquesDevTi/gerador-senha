const barraTamanhoSenha = document.querySelector('#slider');
const botaoGeradorSenha = document.querySelector('#botaoGerador');
const tamanhoSenha = document.querySelector('#valor');
const senha = document.querySelector('#senha');
const containerSenha = document.querySelector('#container-senha');
let caracteresDisponiveisSenha = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789@!#$";
let novaSenha;

tamanhoSenha.innerHTML = barraTamanhoSenha.value;

barraTamanhoSenha.oninput = function () {
    tamanhoSenha.innerHTML = this.value;
}
gerarSenha = () => {
    let senhaGerada = "";

    for (let indice = 0, n = caracteresDisponiveisSenha.length; indice < barraTamanhoSenha.value; indice++) {
        senhaGerada += caracteresDisponiveisSenha.charAt(Math.floor(Math.random() * n));
    }
    containerSenha.classList.remove("esconder");
    senha.innerHTML = senhaGerada;
    novaSenha = senhaGerada;
}
copiarSenha = () => {
    navigator.clipboard.writeText(novaSenha);
    alert("Senha copiada com sucesso!");
}

