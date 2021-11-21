let imgFilme = document.querySelectorAll('.film-img')

for (let i = 0; i < imgFilme.length; i++) {
    let filme = imgFilme[i]

    filme.addEventListener('click', function(){
        let modal = document.querySelector('.modal')
        modal.style.display = 'block'

        let body = document.querySelector('body')
        body.style.pointerEvents = 'none'
    })
}

let fecharModal = document.querySelector('.close-modal')

fecharModal.addEventListener('click', function(){
    let modal = document.querySelector('.modal')
    modal.style.display = 'none'

    let body = document.querySelector('body')
    body.style.pointerEvents = 'visible'
})