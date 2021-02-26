const typeEl = document.getElementById('type_operation');
const firstOperandEl = document.getElementById('first_operand');
const secondOperandEl = document.getElementById('second_operand');
const btnEl = document.getElementById('btn_result');
const listEl = document.getElementById('list');
const inputContainerEl = document.querySelector('.input_container');
const liTemplate = document.getElementById('li_template').innerHTML;


btnEl.addEventListener('click', onCalculation);
inputContainerEl.addEventListener('keypress', e => {
    if(e.key === 'Enter') {
        onCalculation();
    }
});
inputContainerEl.addEventListener('change', onError)

function onError() {
    const firstOperand = +firstOperandEl.value;
    const secondOperand = +secondOperandEl.value;

    if(firstOperand == '' || firstOperand !== firstOperand){
        firstOperandEl.classList.add('error');
    } else {
        firstOperandEl.classList.remove('error');
    }
    if(secondOperand == '' || secondOperand !== secondOperand){
        secondOperandEl.classList.add('error');
    } else {
        secondOperandEl.classList.remove('error');
    };
};


function onCalculation() {
    const firstOperand = +firstOperandEl.value;
    const secondOperand = +secondOperandEl.value;    
    let result;
    
    if(firstOperandEl.value === '' || secondOperandEl.value === '') {
        return;
    };

    switch(typeEl.value) {
        case('sum'):
            result = sum(firstOperand, secondOperand);
            break;
        case('different'):
            result = diff(firstOperand, secondOperand);
            break;
        default:
            result = '';
            break;
    };

    if(result === '' || result !== result){
        onError();
        return;
    } 

    const newLiEl = document.createElement('li');
    newLiEl.innerHTML = liTemplate.replace('{{text}}', result);

    listEl.append(newLiEl);
}

function sum(a, b) {
    return a + b;
};

function diff(a, b) {
    return a - b;
};