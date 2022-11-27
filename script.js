const pokeApi = 'https://pokeapi.co/api/v2/pokemon/'

const getPokemons = async(url) => {
    const response = await fetch(url)
    const myJson = await response.json()
    return myJson
}

const renderPokemons = async() => {
    const pokemons = await getPokemons(pokeApi)
    const containerPokemons = document.getElementById('container-pokemons')

    for(let i=0; i < 9; i++){
        const pokemon = await getPokemons(pokemons.results[i].url)
        containerPokemons.insertAdjacentHTML("beforeend", renderCard(pokemon))
    }
}
renderPokemons()

const renderCard = (pokemon) => {
    return `
    <div class="card m-2" style="width: 25%;">
        <img src="${pokemon.sprites.front_shiny}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${pokemon.name}</h5>
            <p class="card-text">${pokemon.id}</p>
        </div>
    </div>
    `
}
