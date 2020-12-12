$subscriptionModal = $('.subscription-modal');


// Функция для скрытия мод. окна "Подпишитесь"
$subscriptionModal.find('.close').on('click', function (){
  $(this).parent().slideUp();
});


// Функция для отображения мод. окна "Подпишитесь" через указанное время
setTimeout(function () {
  $subscriptionModal.slideDown();
}, 2000)



$modal = $('.modal');
$closeModal = $('.modal .close');
$openCallbackModalBtn = $('.open--callback-modal');



// Функция для вызова модального окна Обратной связи
$openCallbackModalBtn.on('click', function () {
  $modal.fadeIn(150);
})

// Функция для закрытия Модальных окон
$closeModal.on('click', function () {
  $modal.fadeOut(200);
})





// Search
$searchInput = $('.search-input');
$searchResultsBlock = $('.search--results');


$searchInput.on('focus', function (){
  $searchResultsBlock.slideDown();
});

$searchInput.on('focusout', function (){
  $searchResultsBlock.slideUp();
});




//tabs
(function($) {
  $(function() {
    $("ul.tabs__caption").on("click", "li:not(.active)", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest("div.tabs")
        .find("div.tabs__content")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });
})(jQuery);
