'use strict';

class Accordion {
    constructor(containerEl) {
        this.container = containerEl

        this.show();
    }

    show() {
        this.container.addEventListener('click', this.onAccordionClick.bind(this))
    }

    onAccordionClick(e) {
        e.target.nextElementSibling.classList.toggle('show');
    }
}
