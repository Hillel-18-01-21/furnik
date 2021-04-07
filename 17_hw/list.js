class UsersList {
    constructor(container, url) {
        this.containerEl = container.querySelector('#list-container');
        this.promise =  fetch(url);
    }

    createListItem(e) {
        this.listItemEl = document.createElement('li');
            this.listItemTextEl = document.createElement('p');
            this.avatar = document.createElement('img');
            this.avatar.src = e.avatar;
            this.listItemTextEl.innerText = 
            `name: ${e.first_name}
            surname: ${e.last_name}
            email: ${e.email}`
            this.listItemEl.prepend(this.avatar)
            this.listItemEl.append(this.listItemTextEl);
            this.listEl.append(this.listItemEl); 
    }

    init() {
        this.listEl = this.containerEl.querySelector('#list');
        this.promise.then(response => response.json())
        .then(response => {
            const newArray = response.data;
            console.log(newArray)
            newArray.forEach(obj => {
                this.createListItem(obj);
            });
        });
    };
}
