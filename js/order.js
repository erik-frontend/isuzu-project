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
    input: document.querySelector('.quantity__input'),
    plusBtn: document.querySelector('.quantity__btn--plus'),
    minusBtn: document.querySelector('.quantity__btn--minus'),

    init() {
        if (!this.input ||
            !this.plusBtn ||
            !this.minusBtn) return
        this.plusBtn.addEventListener('click', () => {
            this.input.value =
                +this.input.value + 1
        });

        this.minusBtn.addEventListener('click', () => {
            if (+this.input.value > 1) {
                this.input.value =
                    +this.input.value - 1
            }
        })
    }
}

checkoutTabs.init();
quantityCounter.init();