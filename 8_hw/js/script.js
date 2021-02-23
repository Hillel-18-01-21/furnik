const colorFig = document.querySelector('.color');
const typeFig = document.querySelector('.type');
const figure = document.querySelector('.figure');

colorFig.addEventListener('change', onColorFig);
typeFig.addEventListener('change', onTypeFig)

function onTypeFig() {
    figure.classList.remove('circle', 'rectangle', 'squire');
    figure.classList.add(typeFig.value);
};

function onColorFig() {
    figure.style.background = colorFig.value;
};
