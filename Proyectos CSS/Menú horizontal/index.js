const bMore = document.querySelector('#bMore');
const links = document.querySelector('#links');

bMore.addEventListener('click', () => {
    links.classList.toggle('collapsed');
});