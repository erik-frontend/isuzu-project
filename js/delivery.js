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

deliveryTabs.init();