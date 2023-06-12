const btn_pesq = document.querySelector('#btn_pesq')

        
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
        const ul = document.querySelector('#anime_details');
        ul.innerHTML = ''

        if(data && data.length>0){
            data.forEach(anime => {
                const anime_title = document.createElement('li')
                anime_title.textContent = anime.title

                ul.appendChild(anime_title)
            });
        }else{
            const menssageError = document.createElement(li)
            menssageError.textContent = 'anime não encontrado no servidor'

            ul.appendChild(menssageError)
        }
    }
})