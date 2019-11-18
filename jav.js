$(document).ready(function () {
    $(".gallery").slick({
        // Пейджер
        dots: true,
        // Бесконечная прокрутка
        infinite: true,
        // Скорость прокрутки 
        speed: 1000,
        // Показывать на экране слайдов
        slidesToShow: 4,
        // Пролистывать слайдов
        slidesToScroll: 4,
        // Адаптивность
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
]
    });
});
