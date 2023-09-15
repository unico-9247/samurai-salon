$(function() {

  let pagetop = $('#page-top');
  // ボタン非表示
  pagetop.hide();
  // 100px スクロールしたらボタン表示
  $(window).scroll(function() {
    if($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  // クリックしたらスムーススクロールでTOPに戻る
  pagetop.click(function() {
    $('body, html').animate({scrollTop: 0}, 500);
    return false;
  });

  // カルーセル　slick
  $('.carousel__container-pc, .carousel__container-sp').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 3000,
    arrows: true,
    fade: true,
    });

  // ハンバーガーメニュー
  $('.openbtm1').on('click', function(){
    $('.openbtn1, .header__nav-pc').toggleClass('show');
  })

  $(".openbtn1").click(function () {
    $(this).toggleClass('active');
});

});