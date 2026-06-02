const deliveryTabs = {
    buttons: document.querySelectorAll('.delivery-sidebar__link'),
    panels: document.querySelectorAll('.delivery-card__panel'),

    init() {

        if (!this.buttons.length) return;

        this.buttons.forEach((button, index) => {

            button.addEventListener('click', () => {

                this.buttons.forEach(btn => {
                    btn.classList.remove('active');
                });

                this.panels.forEach(panel => {
                    panel.classList.remove('active');
                });

                button.classList.add('active');

                if (this.panels[index]) {
                    this.panels[index].classList.add('active');
                }

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
deliveryTabs.init();