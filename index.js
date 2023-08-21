let characterBtn = document.querySelector("#characterBtn")

characterBtn.addEventListener('click', async () => {
    let characterInfoDiv = document.querySelector('.character-info');

    characterInfoDiv.innerHTML = "";

    let options = {
        method: "GET"
    }
    
    let apiPublicKey = '57183bae915d4c57ddadc5167b8163a1'
    let characterNameElement = document.querySelector('#character');
    

    let response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${characterNameElement.value}&apikey=${apiPublicKey}&hash=b91a28de97d7513bf902f833ffadb243&ts=553388475644`, options)
    let result = await response.json()

    let nameDiv = document.createElement('div');
    nameDiv.innerText = `Name: ${result.data.results[0].name}`
    characterInfoDiv.appendChild(nameDiv)

    let idDiv = document.createElement('div');
    idDiv.innerText = `ID Number: ${result.data.results[0].id}`
    characterInfoDiv.appendChild(idDiv)

    let descriptionDiv = document.createElement('div');
    descriptionDiv.innerText = `Discription: ${result.data.results[0].description}`
    characterInfoDiv.appendChild(descriptionDiv)

    /*how to do an image tag */
    let thumbnailDiv = document.createElement('img');
    thumbnailDiv.setAttribute('src', result.data.results[0].comics.item[0].resourceURI)
    /*thumbnailDiv.setAttribute('id', '/') how to make/name an ID*/
    characterInfoDiv.appendChild(thumbnailDiv)



    characterNameElement.value = "";
})

/*http://i.annihil.us/u/prod/marvel/i/mg/a/40/5269aa8aee99*/