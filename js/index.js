// section fadein
$(window).scroll(function () {
      let box = $(".fadeIn");
      box.each(function(){
            let boxOffset = $(this).offset().top;
            let scrollPos = $(window).scrollTop();
            let wh = $(window).height();
      if(scrollPos > boxOffset - wh){
            $(this).addClass("animated");
            }
      });
});

// page top btn fadein and fadeout function
$(function () {
      let topBtn = $(".page-top__btn");
      topBtn.hide();

  // will come of topBtn function
    $(window).scroll(function () {
      if ($(this).scrollTop() > 150) {
        topBtn.fadeIn(600);
      } else {
        topBtn.fadeOut(300);
      }
    });

  // to page top when click the topBtn
      topBtn.on("click", function () {
          var scr = $('#about-me').offset().top;
      $("body, html").animate({
        scrollTop: scr
      }, 400,"swing");
      return false;
    });

  });


// copy right get full year
$(function() {
  let dayOption = new Date();
  let myYear = dayOption.getFullYear();
  let copyRight = $("#copyRight");
      copyRight.text("2020-" + myYear);
});
