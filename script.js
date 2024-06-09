const input = document.getElementById('search-input');
const searchBtn = document.getElementById('search-button');


document.getElementById('search-form').addEventListener('submit', (event) => {
    event.preventDefault(); // prevent reload on submit
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
});   

function populateStats(data) {
    console.log(data);
}