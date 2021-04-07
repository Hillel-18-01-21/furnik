
class LogIn {
    constructor(container) {
        this.containerEl = container;
        this.loginContainerEl = this.containerEl.querySelector('#login');
        this.url = "https://reqres.in/api/login";
    }


    resetDefault(evt) {
        evt.preventDefault();
    }

    handlePost = () => {
        this.loginEl = this.loginContainerEl.querySelector('#loginInput');
        this.passwordEl = this.loginContainerEl.querySelector('#passwordInput');
        if(this.loginEl.value == "" || this.passwordEl.value == "") {
                return;        
        };

        this.promise = fetch(this.url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                "email": this.loginEl.value,
                "password": this.passwordEl.value
            }),
        });

        this.promise.then(response => {
            if(!response.ok) {
                document.querySelector('#error').classList.remove('d-none');
                this.passwordEl.value = null;
            } else {
                this.loginContainerEl.classList.add('d-none');
                this.containerEl.querySelector('#list-container').classList.remove('d-none');
            }; 
        });   
    };

    init() {
        this.formEl = this.containerEl.querySelector('form');

        this.formEl.addEventListener('submit', this.handlePost);
        this.formEl.addEventListener('submit', this.resetDefault);
    };
}