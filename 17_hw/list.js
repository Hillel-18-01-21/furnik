class ListComponent {
    constructor(container, url) {
        this.containerEl = container;
        this.listContainerEl = document.querySelector('#list-container');
        this.promise =  fetch(url);
    }

    pushItemToList(e) {
        const listItemEl = document.createElement('li');
        const listItemTextEl = document.createElement('p');
        const avatar = document.createElement('img');
        avatar.src = e.avatar;
        listItemTextEl.innerText = 
        `name: ${e.first_name}
        surname: ${e.last_name}
        email: ${e.email}`;
        listItemEl.prepend(avatar);
        listItemEl.append(listItemTextEl);
        this.listEl.append(listItemEl); 
    }

    init() {
        this.listEl = this.listContainerEl.querySelector('#list');
        this.promise.then(response => response.json())
        .then(response => {
            const newArray = response.data;
            newArray.forEach(obj => {
                this.pushItemToList(obj);
            });
        });
    };
}
