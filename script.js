const input = document.getElementById('search-input');
const searchBtn = document.getElementById('search-button');


searchBtn.addEventListener('click', () => {
    const query = input.value.toLowerCase();
    fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${query}`)
        .then((response) => {
            if(!response.ok) {
                throw new Error('Network response was not ok');
            }
        })
});