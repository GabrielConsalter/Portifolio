const projetos = document.querySelectorAll('.project-content')
const infos = document.querySelectorAll('.project-info')
const nextButton = document.querySelector('.button-next')
const backButton = document.querySelector('.button-previous')

var aux = 0

nextButton.onclick = function (){
    if(aux < 3){
        projetos[aux+1].classList.add('selecionado')
        projetos[aux].classList.remove('selecionado')
        infos[aux+1].classList.add('selecionado')
        infos[aux].classList.remove('selecionado')
        var slide = document.getElementById(`slide${aux+2}`)
        slide.checked = true;
        aux++
    }
}

backButton.onclick = function (){
    if(aux > 0){
        projetos[aux-1].classList.add('selecionado')
        projetos[aux].classList.remove('selecionado')
        infos[aux-1].classList.add('selecionado')
        infos[aux].classList.remove('selecionado')
        var slide = document.getElementById(`slide${aux}`)
        slide.checked = true
        aux--
    }
}

window.onload = function () {
    var slide = document.getElementById('slide1')
    slide.checked = true;
}
