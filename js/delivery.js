const deliveryTabs = {
    links: document.querySelectorAll('.delivery-sidebar__link'),
    panels: document.querySelectorAll('.delivery-panel'),

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

deliveryTabs.init();