const cart = {
    element: document.querySelector('#cartPopup'),
    openBtn: document.querySelector('.open-cart'),
    closeBtn: document.querySelector('#cartPopup .popup__close'),
    bg: document.querySelector('#cartPopup .popup__bg'),

    continueBtns: document.querySelectorAll('.popup-cart__continue'),
    removeBtns: document.querySelectorAll('.popup-cart__remove'),

    init() {
        if (!this.element) return;

        this.openBtn?.addEventListener('click', (e) => {
            e.preventDefault();
            this.open();
        });

        this.closeBtn?.addEventListener('click', () => this.close());
        this.bg?.addEventListener('click', () => this.close());

        this.continueBtns.forEach(button => {
            button.addEventListener('click', () => {
                this.close();
            });
        });

        this.removeBtns.forEach(button => {
            button.addEventListener('click', () => {
                const item = button.closest('.popup-cart__item');
                if (item) item.remove();
            });
        });

        window.addEventListener('keydown', (e) => {
            if (
                e.key === 'Escape' &&
                this.element.classList.contains('active')
            ) {
                this.close();
            }
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
    openBtns: document.querySelectorAll(
        '.productPage__quickOrder, .checkout-help__button'
    ),

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
            this.closeBtn.addEventListener('click', () => {
                this.close();
            });
        }

        window.addEventListener('keydown', (e) => {
            if (
                e.key === 'Escape' &&
                this.popup.classList.contains('active')
            ) {
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

cart.init();
quickOrderPopup.init();
reviewPopup.init();
authPopup.init();
registrationPopup.init();