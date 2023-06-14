const btn_pesq = document.querySelector('#btn_pesq')
const input_pesq = document.querySelector('#pesq')


input_pesq.addEventListener('focus', ()=>{
    input_pesq.classList.add('input_focus')

})
input_pesq.addEventListener('blur', ()=>{
    input_pesq.classList.remove('input_focus')

})

function exibirTodosAnimes(){
    const id = 100
    const entpoint = `https://api.jikan.moe/v4/anime/${id}/full`

    fetch(entpoint)
        .then(res => res.json())
        .then(data => {exibirAnimes(data.data)})
    function exibirAnimes(data) {
        const conteiner_info = document.querySelector('#consteiner_main');
        conteiner_info.innerHTML = ''

        if(data && data.length>0){
            data.forEach(anime => {
                const anime_div = document.createElement('div')
                anime_div.setAttribute('class', 'anime_details')

                const anime_title = document.createElement('h2')
                anime_title.textContent = anime.title
                anime_title.setAttribute('class', 'anime_title')

                const anime_image = document.createElement('img')
                anime_image.src = anime.images.jpg.large_image_url
                anime_image.setAttribute('class', 'anime_img')

                anime_div.appendChild(anime_title)
                anime_div.appendChild(anime_image)

                conteiner_info.appendChild(anime_div)
            });
        }else{
            const menssageError = document.createElement('div')
            menssageError.textContent = 'anime não encontrado no servidor'

            conteiner_info.appendChild(menssageError)
        }
    }
}

exibirTodosAnimes()

btn_pesq.addEventListener('click', (evt)=>{
    const input_pesq = document.querySelector('#pesq').value

    
    console.log(input_pesq)

    dadosApi(input_pesq)

    function dadosApi(vlr){
        const title = input_pesq
        const endpoint = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(title)}`
        fetch(endpoint)
            .then(res=>res.json())
            .then(data => exibirAnimes(data.data))
    }
    function exibirAnimes(data) {
        const conteiner_info = document.querySelector('#consteiner_main');
        conteiner_info.innerHTML = ''

        if(data && data.length>0){
            data.forEach(anime => {
                const anime_div = document.createElement('div')
                anime_div.setAttribute('class', 'anime_details')

                const anime_title = document.createElement('h2')
                anime_title.textContent = anime.title
                anime_title.setAttribute('class', 'anime_title')

                const anime_image = document.createElement('img')
                anime_image.src = anime.images.jpg.large_image_url
                anime_image.setAttribute('class', 'anime_img')

                anime_div.appendChild(anime_title)
                anime_div.appendChild(anime_image)

                conteiner_info.appendChild(anime_div)
            });
        }else{
            const menssageError = document.createElement(li)
            menssageError.textContent = 'anime não encontrado no servidor'

            conteiner_info.appendChild(menssageError)
        }
    }
})

 