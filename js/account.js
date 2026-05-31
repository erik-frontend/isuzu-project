
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

favoriteButtons.init();
productCardRemove.init();
ordersAccordion.init();
accountTabs.init()