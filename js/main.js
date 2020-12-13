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
  $searchResultsBlock.slideDown(200);
});

$searchInput.on('focusout', function (){
  $searchResultsBlock.slideUp(200);
});




// tabs
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





// Все характеристики кнопка
$openAllSpecifications =  $('#open-all-specifications');
$openAllSpecifications.on("click", function() {
  $('.tabs__caption li')
    .removeClass("active")
    .eq(1)
    .addClass("active");
  $('div.tabs__content')
    .removeClass("active")
    .eq(1)
    .addClass("active");
});




$widgetLeftSudebarTitle = $('.widget .title');

$widgetLeftSudebarTitle.on('click', function () {
  if ( $(this).parent().hasClass('active') ) {
    $(this).parent().removeClass('active');
    $(this).next().slideUp();
  }
  else {
    $(this).parent().addClass('active');
    $(this).next().slideDown();
  }
});


$btnHideShowElementsForFilters = $('#btn-hide-show-elements-for-filters');


$btnHideShowElementsForFilters.on('click', function () {
  if( $(this).hasClass('show') ) {
    $(this).parent().find('ul li').slideDown();
    $(this).removeClass('show');
    $(this).addClass('hide');
    $(this).text('Свернуть');
  }
  else{
    $(this).parent().find('ul li').slideUp();
    $(this).removeClass('hide');
    $(this).addClass('show');
    $(this).text('Посмотреть все');
    $(this).parent().find('ul li:nth-child(1)').slideDown()
    $(this).parent().find('ul li:nth-child(2)').slideDown()
    $(this).parent().find('ul li:nth-child(3)').slideDown()
    $(this).parent().find('ul li:nth-child(4)').slideDown()
  }
});






$activeFilters = $('.active-filters');
$checkboxChecked = $('.checkbox .default-checkbox');



for (let i=0;i<=$checkboxChecked; i++){
  console.log($checkboxChecked);
}

$ras = [];
$checkboxChecked.on('click', function (){

  if( $(this).prop("checked")) {
    $ras.push($(this).parent()[0].innerText);

    console.log($ras)

  }
  else{
    delete $ras[$ras.indexOf($(this).parent()[0].innerText)];
    console.log($ras)
  }
})




// Отпрака запроса на Бэк
$activeFilters.on('click', function () {
  $.get(
    "/group-products.html",
    {
      minPrice: document.querySelector('#price-min-input').value,
      maxPrice: document.querySelector('#price-max-input').value,
      brands: $ras
    },
    onAjaxSuccess
  );

  function onAjaxSuccess(data)
  {
    // Здесь мы получаем данные, отправленные сервером и выводим их на экран.
    alert(data);
  }
})