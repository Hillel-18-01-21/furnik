const url = 'https://reqres.in/api/login';
const containerEl = document.getElementById('container');
const formEl = document.querySelector('form');
const buttonEl = document.getElementById('button'); 
const errorEl = document.getElementById('error');
const loginEl = document.getElementById('login');
const passwordEl = document.getElementById('password');
const doneEl = document.getElementById('congratulation');


buttonEl.addEventListener('click', getInfoBlock);

function getInfoBlock() {
    getInfo('POST', url);
};

function getInfo(method, url) {
    const xhr = new XMLHttpRequest();

    let obj = Object.create(null);
    obj.login = loginEl.value;
    obj.password = passwordEl.value;

    if(loginEl.value == "" || passwordEl.value == "") {
        return;
    };

    xhr.open(method, url);
    
    xhr.onload = () => {
        if(xhr.status !== 200) {
            errorEl.classList.remove('disabled');
            passwordEl.value = null;
        } else {
            doneEl.classList.remove('disabled');
            passwordEl.value = null;
            loginEl.value = null;
        };
    };

    xhr.send(JSON.stringify(obj));
}


