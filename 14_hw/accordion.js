'use strict';

class Accordion {
    constructor(containerEl) {
        this.container = containerEl

        this.show();
    }

    show() {
        const titleEls = document.querySelectorAll('.title');

        titleEls.forEach(e => {
            e.addEventListener('click', () => {
                e.nextElementSibling.classList.toggle('show');
            })
        })
    }
}
