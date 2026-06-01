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
    range: document.querySelector('.price-filter__range'),
    input: document.querySelector('.price-filter__input'),

    init() {
        noUiSlider.create(this.range, {
            start: [0, 2500],
            connect: true,

            range: {
                min: 0,
                max: 5000
            }
        });

        this.range.noUiSlider.on('update', (values) => {
            this.input.value =
                Math.round(values[1]) + ' грн';
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

const cart = {
    element: document.querySelector('#cartPopup'),
    openBtn: document.querySelector('.open-cart'),
    closeBtn: document.querySelector('#cartPopup .popup__close'),
    bg: document.querySelector('#cartPopup .popup__bg'),
    removeBtns: document.querySelectorAll('.popup-cart__remove'),

    init() {
        if (!this.element) return;

        this.openBtn?.addEventListener('click', (e) => {
            e.preventDefault();
            this.open();
        });

        this.closeBtn?.addEventListener('click', () => this.close());
        this.bg?.addEventListener('click', () => this.close());

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.element.classList.contains('active')) {
                this.close();
            }
        });

        this.removeBtns.forEach(button => {
            button.addEventListener('click', () => {
                const item = button.closest('.popup-cart__item');
                if (item) item.remove();
            });
        });
    },

    open() {
        this.element.classList.add('active');
        document.body.style.overflow = 'hidden';
    },

    close() {
        this.element.classList.remove('active');
        document.body.style.overflow = '';
    }
};

const quickOrderPopup = {
    openBtns: document.querySelectorAll('.productPage__quickOrder'),
    popup: document.getElementById('quickOrderPopup'),
    closeBtn: document.querySelector('#quickOrderPopup .popup__close'),

    init() {
        if (!this.openBtns.length || !this.popup) return;

        this.openBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.open();
            });
        });

        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => this.close());
        }

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.popup.classList.contains('active')) {
                this.close();
            }
        });
    },

    open() {
        this.popup.classList.add('active');
        document.body.style.overflow = 'hidden';
    },

    close() {
        this.popup.classList.remove('active');
        document.body.style.overflow = '';
    }
};

const reviewPopup = {
    popup: document.querySelector('#reviewPopup'),
    openButtons: document.querySelectorAll('.reviews-summary__button'),

    init() {

        if (!this.popup) return;

        this.bg = this.popup.querySelector('.review-popup__bg');
        this.closeBtn = this.popup.querySelector('.review-popup__close');

        this.starsWrapper = this.popup.querySelector('.review-popup__stars');
        this.stars = this.popup.querySelectorAll('.review-popup__stars span');
        this.ratingInput = this.popup.querySelector('input[name="rating"]');

        this.openButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.open();
            });
        });

        this.closeBtn.addEventListener('click', () => this.close());

        this.bg.addEventListener('click', () => this.close());

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.popup.classList.contains('active')) {
                this.close();
            }
        });

        this.stars.forEach((star, index) => {
            star.addEventListener('click', () => {
                const rating = index + 1;

                this.starsWrapper.dataset.rating = rating;
                this.ratingInput.value = rating;
            });
        });
    },

    open() {
        this.popup.classList.add('active');
        document.body.style.overflow = 'hidden';
    },

    close() {
        this.popup.classList.remove('active');
        document.body.style.overflow = '';
    }
};

const authPopup = {
    popup: document.querySelector('.popup-auth'),
    openButtons: document.querySelectorAll('.header__buttons-item.cabinet'),

    init() {
        if (!this.popup) return;

        this.bg = this.popup.querySelector('.popup__bg');
        this.closeBtn = this.popup.querySelector('.popup__close');
        this.signUpBtn = this.popup.querySelector('.sign-up');

        this.popup.classList.remove('active');
        document.body.classList.remove('no-scroll');

        // Открытие авторизации
        this.openButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.open();
            });
        });

        // Клик на Регистрацию -> Закрываем Авторизацию, открываем Регистрацию
        if (this.signUpBtn) {
            this.signUpBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.close();

                if (typeof registrationPopup !== 'undefined') {
                    registrationPopup.open();
                }
            });
        }

        // Закрытие
        if (this.closeBtn) this.closeBtn.addEventListener('click', () => this.close());
        if (this.bg) this.bg.addEventListener('click', () => this.close());

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.popup.classList.contains('active')) {
                this.close();
            }
        });
    },

    open() {
        this.popup.classList.add('active');
        document.body.classList.add('no-scroll');
    },

    close() {
        this.popup.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
};

const registrationPopup = {
    openBtns: document.querySelectorAll('.trigger-registration'),
    popup: document.getElementById('registrationPopup'),

    init() {
        if (!this.popup) return;

        this.closeBtn = this.popup.querySelector('.popup__close');
        this.bgOverlay = this.popup.querySelector('.popup__bg');
        // Находим кнопку "Увійти" внутри попапа регистрации
        this.loginBtn = this.popup.querySelector('.login-btn');

        // Открытие по обычным кнопкам
        if (this.openBtns.length) {
            this.openBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.open();
                });
            });
        }

        // Клик на Вход -> Закрываем Регистрацию, открываем Авторизацию
        if (this.loginBtn) {
            this.loginBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.close();

                if (typeof authPopup !== 'undefined') {
                    authPopup.open();
                }
            });
        }

        // Закрытие
        if (this.closeBtn) this.closeBtn.addEventListener('click', () => this.close());
        if (this.bgOverlay) this.bgOverlay.addEventListener('click', () => this.close());

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.popup.classList.contains('active')) {
                this.close();
            }
        });
    },

    open() {
        this.popup.classList.add('active');
        document.body.classList.add('no-scroll');
    },

    close() {
        this.popup.classList.remove('active');
        document.body.classList.remove('no-scroll');
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


authPopup.init();
registrationPopup.init();
authPopup.init();
reviewPopup.init();
quickOrderPopup.init();
cart.init();
productTabs.init()
reviewsPagination.init()
// product page

quantityCounter.init();
productGallery.init();
subcategories.init();
categoryList.init();
filterGroup.init();
priceRange.init();