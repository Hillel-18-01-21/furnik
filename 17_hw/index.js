const url = "https://reqres.in/api/users?page=2";
const containerEl = document.getElementById('container');

const listComponent = new ListComponent(containerEl, url);
const loginComponent = new LoginComponent(containerEl);

listComponent.init();
loginComponent.init();