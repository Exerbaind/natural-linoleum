const input = document.getElementById('inputWidth');
const appContainer = [...document.querySelectorAll('.app-container')];

input.addEventListener('change', () => {
    const { value } = input;
    appContainer.forEach((item) => {
        item.style.width = `${value}px`;
    });
})