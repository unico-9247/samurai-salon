$(function() {
  const pagetop = $('#page-top');
  // ボタン非表示
  pagetop.hide();
  // 100px スクロールしたらボタン表示
  $(window).scroll(function() {
    if(($this).scrollTop() > 100) {
      pagetop.fadein();
    } else {
      pagetop.fadeout();
    }
  });

  pagetop.click(function() {
    $('body, html').animate({scrollTop: 0}, 500);
    return false;
  });
});