const url = 'https://reqres.in/api/login';
const containerEl = document.getElementById('container');
const formEl = document.querySelector('form');
const buttonEl = document.getElementById('button'); 
const errorEl = document.getElementById('error');
const loginEl = document.getElementById('login');
const passwordEl = document.getElementById('password');


buttonEl.addEventListener('click', getInfoBlock);

function getInfoBlock() {
    getInfo('POST', url)
}

function getInfo(method, url) {
    const xhr = new XMLHttpRequest()

    let obj = Object.create(null);
    obj.login = loginEl.value;
    obj.password = passwordEl.value;

    if(loginEl.value == "" || passwordEl.value == "") {
        return
    }

    xhr.open(method, url)
    
    xhr.onload = () => {
        if(xhr.status !== 200) {
            alert('Данные не найдены');
            passwordEl.value = null;
        } else {
            passwordEl.value = null
            loginEl.value = null
            alert('Ваши данные успешно получены')
        }
    }

    xhr.send(JSON.stringify(obj));
}


