const url = "https://reqres.in/api/users?page=2";
const containerEl = document.getElementById('container');

const listComponent = new UsersList(containerEl, url);
const loginComponent = new LogIn(containerEl);

listComponent.init();
loginComponent.init();