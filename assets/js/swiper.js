

const byCryptoSwiper = new Swiper('.buy-crypto-swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.crypto-button-next',
        prevEl: '.crypto-button-prev',
    },


});