const url = 'https://reqres.in/api/login.'
const containerEl = document.getElementById('container');
const formEl = document.querySelector('form');
const buttonEl = document.getElementById('button'); 
const errorEl = document.getElementById('error');
const loginEl = document.getElementById('login');
const passwordEl = document.getElementById('password');

const obj = {
    login: loginEl.value,
    password: passwordEl.value
}

buttonEl.addEventListener('click', getInfoBlock);

function getInfoBlock() {
    getInfo('POST', url, obj)
}

function getInfo(method, url, obj) {
    const xhr = new XMLHttpRequest()

    if(loginEl.value == "" || passwordEl.value == "") {
        return
    }

    xhr.open(method, url)
    
    xhr.onload = () => {
        if(xhr.status >= 300) {
            errorEl.style.display = 'block'
            passwordEl.value = null;
        } else {
            passwordEl.value = null
            loginEl.value = null
            alert('Ваши данные успешно получены')
        }
    }

    xhr.send(JSON.stringify(obj));
}


