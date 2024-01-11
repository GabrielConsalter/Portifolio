const nextButton = document.querySelector('.button-next')
const backButton = document.querySelector('.button-back')

nextButton.addEventListener('click', loadNextPage)

// backButton.addEventListener('click', laodPreviusPage)

function loadNextPage() {
    const projetos = document.querySelectorAll('.position-container')
    const projetoSelecionado = document.querySelectorAll('.position-container.selecionado')

    projetos.forEach((projeto) =>{
        console.log(projeto);
     })

    projetoSelecionado.forEach(projeto => {
        projeto.classList.remove('selecionado')
    })

}
