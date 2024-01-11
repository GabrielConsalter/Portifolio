const projetos = document.querySelectorAll('.position-container')
const nextButton = document.querySelector('.button-next')
const backButton = document.querySelector('.button-previous')

projetos.forEach((p, i) => {
    nextButton.addEventListener('click', () => {
        if(i == 0) {
            projetos[i+2].classList.add('selecionado')
            projetos[i+3].classList.add('selecionado')
            projetos[i].classList.remove('selecionado')
            projetos[i+1].classList.remove('selecionado')
        }
    })

    backButton.addEventListener('click', () => {
        console.log(i);
        if(i == 0){
            projetos[i].classList.add('selecionado')
            projetos[i+1].classList.add('selecionado')
            projetos[i+2].classList.remove('selecionado')
            projetos[i+3].classList.remove('selecionado')
        }
    })
})

