const checkoutTabs = {
    items: document.querySelectorAll('.checkout-tabs__btn'),

    init() {
        if (!this.items.length) return;
        this.items.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                this.items.forEach(el => {
                    el.classList.remove('active');
                });
                item.classList.add('active');
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

            plusBtn.addEventListener('click', () => {
                input.value = +input.value + 1;
            });

            minusBtn.addEventListener('click', () => {
                if (+input.value > 1) {
                    input.value = +input.value - 1;
                }
            });

        });

    }
};

checkoutTabs.init();
quantityCounter.init();