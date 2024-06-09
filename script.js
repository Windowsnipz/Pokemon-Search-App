const input = document.getElementById('search-input');
const searchBtn = document.getElementById('search-button');



document.getElementById('search-form').addEventListener('submit', (event) => {
    event.preventDefault(); // prevent reload on submit
    clearPreviousData();
    const query = input.value.toLowerCase();
    fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${query}`)
        .then((response) => {
            if(!response.ok) {
                alert("Pokémon not found");
            }
            return response.json(); // parse JSON
        })
        .then((data) => {
            populateStats(data);
        })
        .catch((error) => {
            console.error('There was a problem with the fetch operation');
        })
});   

function populateStats(data) {
    const nameText = document.getElementById('pokemon-name');
    const idText = document.getElementById('pokemon-id');
    const weightText = document.getElementById('weight');
    const heightText = document.getElementById('height');
    const imgDiv = document.getElementById('img-div');
    const typeText = document.getElementById('types');
    const statSlots = document.querySelectorAll('.stat');

    const { name, id, weight, height, sprites, types, stats } = data;
    const { front_default } = sprites; // front_default is the default pokemon sprite

    // Display name and id
    nameText.textContent = name.toUpperCase();
    idText.textContent = `#${id}`;

    // Display weight and height
    weightText.textContent = `Weight: ${weight}`;
    heightText.textContent = `Height: ${height}`;

    // Display avatar
    imgDiv.innerHTML = `<img id="sprite" alt="${name}-sprite" src="${front_default}">`

    // Display pokemon types
    typeText.textContent = `${types.length > 1 ? types[0].type.name.toUpperCase() + " " + types[1].type.name.toUpperCase() : types[0].type.name.toUpperCase()}`;    

    // Display pokemon stats
    for (let i = 0; i < stats.length; i++) {
        statSlots[i].textContent = stats[i].base_stat;
    }

    console.log(data);
}

function clearPreviousData() {
    const nameText = document.getElementById('pokemon-name');
    const idText = document.getElementById('pokemon-id');
    const weightText = document.getElementById('weight');
    const heightText = document.getElementById('height');
    const imgDiv = document.getElementById('img-div');
    const typeText = document.getElementById('types');
    const statSlots = document.querySelectorAll('.stat');

    nameText.textContent = '';
    idText.textContent = '';
    weightText.textContent = '';
    heightText.textContent = '';
    imgDiv.innerHTML = '';
    typeText.textContent = '';
    for (let slot of statSlots) {
        slot.textContent = '';
    }
}