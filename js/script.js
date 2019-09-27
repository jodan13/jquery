$(document).ready(function() {
  $('.main_btna, .main_btn, a[href="#sheldure"]').click(function() {
    // получаем элементы и назначаем им событие клика
    $(".overlay, .modal").fadeIn(1000); // класс "overlay" (затухает фон) медленно появляется на странице
    //$(".modal").fadeIn(1000); // класс "modal" (модальное окно) плавно выезжает сверху
  });

  $(".close").click(function() {
    $(".overlay, .modal").fadeOut(1000); //  класс "modal" плавно уезжает наверх
    //$(".overlay").fadeOut(1000); // класс "overlay" медленно исчезает
  });
});
