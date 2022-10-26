const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImg = document.querySelector('.pokemon_img');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');
const btn_voltar = document.querySelector('.btn-voltar');
const btn_proximo = document.querySelector('.btn-proximo');

let buscarPokemon = 1;

const fetchPokemon = async (pokemon) => {
    const apiRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    
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
        pokemonImg.style.display = 'block';
        pokemonName.innerHTML = data.name.toLowerCase();
        pokemonNumber.innerHTML = data.id;
        pokemonImg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']

        input.value = '';
        buscarPokemon = data.id;
    }
    else {
        pokemonImg.style.display = 'none';
        pokemonName.innerHTML = 'Não existe';
        pokemonNumber.innerHTML = '';
    }
}

form.addEventListener('submit', (event) => {

    event.preventDefault();

    renderPokemon(input.value);
    
});

btn_voltar.addEventListener('click', () => {
    if (buscarPokemon > 1) {
        buscarPokemon -= 1;
        renderPokemon(buscarPokemon)
    }
});

btn_proximo.addEventListener('click', () => {
    buscarPokemon += 1;
    renderPokemon(buscarPokemon)
});

renderPokemon(buscarPokemon)