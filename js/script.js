const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImg = document.querySelector('.pokemon_img');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');

const fetchPokemon = async (pokemon) => {
    const apiRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
    const data = await apiRes.json();

    return data;
}

const renderPokemon =async (pokemon) => {
    const data = await fetchPokemon(pokemon);

    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']

    input.value = '';
}

form.addEventListener('submit', (event) => {

    event.preventDefault();

    renderPokemon(input.value);
    
});