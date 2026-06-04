const categoryList = {

    items: document.querySelectorAll('.category-list__item'),
    init() {
        if (!this.items.length) return;
        this.items.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault()
                this.items.forEach(el => {
                    el.classList.remove('active')
                });
                item.classList.add('active')
            })
        })
    }
};

const filterGroup = {
    headers: document.querySelectorAll('.filter-group__header'),

    init() {
        this.headers.forEach(header => {
            header.addEventListener('click', () => {
                header.closest('.filter-group').classList.toggle('active');
            })
        })
    }
};

const priceRange = {
    init() {
        const range = document.querySelector('.price-filter__range');
        const input = document.querySelector('.price-filter__input');

        if (!range || !input) return;

        noUiSlider.create(range, {
            start: [0, 2500],
            connect: true,
            range: {
                min: 0,
                max: 5000
            }
        });

        range.noUiSlider.on('update', (values) => {
            input.value = Math.round(values[1]) + ' грн';
        });
    }
};

const loadMore = {
    cards: document.querySelectorAll('.catalog-grid .productCard'),
    button: document.querySelector('.load-more-btn'),

    visibleCount: 9,
    step: 3,

    init() {

        if (!this.button || !this.cards.length) return;

        this.cards.forEach((card, index) => {

            if (index >= this.visibleCount) {
                card.hidden = true;
            }

        });

        this.button.addEventListener('click', () => {
            this.showMore();
        });

    },

    showMore() {

        for (
            let i = this.visibleCount;
            i < this.visibleCount + this.step;
            i++
        ) {

            if (this.cards[i]) {
                this.cards[i].hidden = false;
            }

        }

        this.visibleCount += this.step;

        if (this.visibleCount >= this.cards.length) {
            this.button.style.display = 'none';
        }

    }
};

document.addEventListener('DOMContentLoaded', () => {
    loadMore.init();
});


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
categoryList.init()
filterGroup.init()
priceRange.init()
loadMore.init()
