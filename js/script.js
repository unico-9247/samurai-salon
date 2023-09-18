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
  $(".openbtn").click(function () {
    $(this).toggleClass('active');
    $("header__nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  });

  $(".header__nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $(".header__nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

});




