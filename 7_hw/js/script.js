const btnList = document.querySelector('.list-btn');
const inputList = document.querySelector('.list-input');
const list = document.querySelector('.list');

btnList.addEventListener("click", onBtnClick);

function onBtnClick() {
    const newElement = document.createElement('li');
    const text = inputList.value;
    if(text === ''){
        return;
    } 
    newElement.innerText = text;
    list.appendChild(newElement);
    inputList.value = null;
};