const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImg = document.querySelector('.pokemon_img');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');

const fetchPokemon = async (pokemon) => {
    const apiRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
    
    if (apiRes.status === 200) {
        const data = await apiRes.json();

        return data;
    } 
}

const renderPokemon =async (pokemon) => {
    pokemonName.innerHTML = 'Carregando...';
    pokemonNumber.innerHTML = '';

    const data = await fetchPokemon(pokemon);

    if (data) {
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']

        input.value = '';
    }
    else {
        pokemonName.innerHTML = 'Não existe';
        pokemonNumber.innerHTML = '';
    }
}

form.addEventListener('submit', (event) => {

    event.preventDefault();

    renderPokemon(input.value);
    
});

renderPokemon('1')