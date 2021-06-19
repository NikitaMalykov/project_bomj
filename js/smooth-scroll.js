if ($(window).width() > 991) {
  $(function () {
    $('.smooth').on('click', function (event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1500);
      }
    });
  });
} else {
  $(function () {
    $('.smooth').on('click', function (event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top - 190
        }, 1500);
      }
    });
  });
}


