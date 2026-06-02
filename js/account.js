
const accountTabs = {
    links: document.querySelectorAll('.account-sidebar__link'),
    panels: document.querySelectorAll('.account-panel'),

    init() {

        this.links.forEach((link, index) => {

            link.addEventListener('click', () => {

                this.links.forEach(item => {
                    item.classList.remove('active');
                });

                this.panels.forEach(panel => {
                    panel.classList.remove('active');
                });

                link.classList.add('active');
                this.panels[index].classList.add('active');

            });

        });

    }
};



const ordersAccordion = {

    rows: document.querySelectorAll('.orders__row'),

    init() {

        this.rows.forEach(row => {

            const details = row.querySelector('.orders__details');
            const toggle = row.querySelector('.orders__toggle');

            row.addEventListener('click', () => {

                details.classList.toggle('active');
                toggle.classList.toggle('active');

            });

        });

    }
};


const productCardRemove = {
    buttons: document.querySelectorAll('.productCard__remove'),
    init() {
        this.buttons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                const card = button.closest('.productCard');
                card.style.opacity = '0';
                card.style.transform = 'scale(.9)';

                setTimeout(() => {
                    card.remove();
                }, 200);

            });

        });

    }
};




const favoriteButtons = {
    buttons: document.querySelectorAll('.productCard__favorite'),
    init() {
        this.buttons.forEach(button => {
            button.addEventListener('click', () => {
                button.classList.toggle('active');
            });

        });

    }
};

const quantityCounter = {
    items: document.querySelectorAll('.quantity'),

    init() {
        if (!this.items.length) return;

        this.items.forEach(item => {
            const input = item.querySelector('.quantity__input');
            const plusBtn = item.querySelector('.quantity__btn--plus');
            const minusBtn = item.querySelector('.quantity__btn--minus');

            plusBtn?.addEventListener('click', () => {
                input.value = +input.value + 1;
            });

            minusBtn?.addEventListener('click', () => {
                if (+input.value > 1) {
                    input.value = +input.value - 1;
                }
            });
        });
    }
};

quantityCounter.init()
favoriteButtons.init();
productCardRemove.init();
ordersAccordion.init();
accountTabs.init()