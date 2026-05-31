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

// const productRating = {

//     ratings: document.querySelectorAll('.rating-stars'),

//     init() {

//         this.ratings.forEach(rating => {

//             const stars =
//                 rating.querySelectorAll('span');

//             stars.forEach((star, index) => {

//                 star.addEventListener('click', () => {

//                     rating.dataset.rating = index + 1;

//                 });

//             });

//         });

//     }
// };
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

document.addEventListener('DOMContentLoaded', () => {
    loadMore.init();
});


// productRating.init();
subcategories.init();
categoryList.init();
filterGroup.init();
priceRange.init();