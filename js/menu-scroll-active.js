let menu_selector = ".top-menu";

function onScroll() {
  let scroll_top = $(document).scrollTop();
  $(menu_selector + " a").each(function () {
    let hash = $(this).attr("href");
    let target = $(hash);
    if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
      $(menu_selector + " a.active").removeClass("active");
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
}

$(document).ready(function () {
  $(document).on("scroll", onScroll);
  $("a[href^=#]").click(function (e) {
    e.preventDefault();
    $(document).off("scroll");
    $(menu_selector + " a.active").removeClass("active");
    $(this).addClass("active");
    let hash = $(this).attr("href");
    let target = $(hash);
    $("html, body").animate({
      scrollTop: target.offset().top
    }, 500, function () {
      window.location.hash = hash;
      $(document).on("scroll", onScroll);
    });
  });
});