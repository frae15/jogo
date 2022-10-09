var musicafundo = document.getElementById("musicatema");
var mscfundo = false;
var musicadiv = document.querySelector(".musicadiv");
var volumemusica = document.querySelector(".volumemusica");
let todosbotoes = document.querySelectorAll(`.botao`)
let telacreditos = document.querySelector(`.creditos`)
volumemusica.value = 0;
var guardamusica;

function musica() {
    if (!mscfundo) {
        musicadiv.style.backgroundImage = 'url("./telainicial/musicaligada.png")';
        musicafundo.play();
        volumemusica.value = guardamusica;
    }
    else {
        musicadiv.style.backgroundImage = 'url("./telainicial/musicadesligada.png")';
        musicafundo.pause();
        volumemusica.value = 0;
    }

    mscfundo = !mscfundo

}

function volmusica() {
    musicafundo.volume = volumemusica.value / 100;
    guardamusica = volumemusica.value;

}

function iniciarjogo() {
    setTimeout(() => {
        window.location.href = "./index.html";
    }, 1000);
}

function creditos() {
    telacreditos.style.transform = `translateY(0%)`


    todosbotoes.forEach(botao => {
        botao.disabled = true
    })
}


function voltarmenu() {
    todosbotoes.forEach(botao => {
        botao.disabled = false
    })


    telacreditos.style.transform = `translateY(-100%)`
}

