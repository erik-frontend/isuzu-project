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
                header.parentElement.classList.toggle('active');
            })
        })
    }
};

const subcategories = {
    subcategoriesItems: document.querySelectorAll(".catalog-subcategories__link"),

    init() {
        this.subcategoriesItems.forEach(item => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                const isActive =
                    item.classList.contains('active');

                this.subcategoriesItems.forEach(el => {
                    el.classList.remove('active');
                });

                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });
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

const productGallery = {
    thumbnails: document.querySelector('.productGallery__thumbnails'),
    main: document.querySelector('.productGallery__main'),
    thumbnailsSlider: null,
    mainSlider: null,

    init() {
        this.thumbnailsSlider = new Swiper(this.thumbnails, {
            slidesPerView: 4,
            spaceBetween: 14,
            freeMode: true,
            watchSlidesProgress: true,
        })

        this.mainSlider = new Swiper(this.main, {
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            thumbs: {
                swiper: this.thumbnailsSlider,
            },
        })
    }
}

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

const productTabs = {
    buttons: document.querySelectorAll('.productTabs__btn'),
    panels: document.querySelectorAll('.productTabs__panel'),

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
                this.panels[index].classList.add('active');

            });

        });

    }
};

const reviewsPagination = {
    pages: document.querySelectorAll('.reviews-page'),
    buttons: document.querySelectorAll('.reviews-pagination__button'),
    currentPage: 0,

    init() {
        if (!this.pages.length) return;
        this.prevBtn = this.buttons[0];
        this.nextBtn = this.buttons[this.buttons.length - 1];
        this.numberButtons = [...this.buttons].slice(1, -1);
        this.numberButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                this.showPage(index);
            });

        });

        this.prevBtn.addEventListener('click', () => {
            if (this.currentPage > 0) {
                this.showPage(this.currentPage - 1);
            }
        });

        this.nextBtn.addEventListener('click', () => {
            if (this.currentPage < this.pages.length - 1) {
                this.showPage(this.currentPage + 1);
            }
        });
    },

    showPage(index) {
        this.currentPage = index;
        this.pages.forEach(page => {
            page.classList.remove('active');
        });

        this.numberButtons.forEach(button => {
            button.classList.remove('active');
        });

        this.pages[index].classList.add('active');
        this.numberButtons[index].classList.add('active');
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

productTabs.init()
reviewsPagination.init()
// product page

quantityCounter.init();
productGallery.init();
subcategories.init();
categoryList.init();
filterGroup.init();
priceRange.init();