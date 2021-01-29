// get all section
let aboutMe = document.getElementById("about-me");
let works = document.getElementById("works");
let skills = document.getElementById("skills");
let future = document.getElementById("future");

// style setting at the first
aboutMe.style.display = "block";
works.style.display = "none";
skills.style.display = "none";
future.style.display = "none";

$(window).scroll(function (){
      let box = $(".fadeInAboutMe");
      box.each(function(){
            let boxOffset = $(this).offset().top;
            let scrollPos = $(window).scrollTop();
            let wh = $(window).height();
      if(scrollPos > boxOffset - wh){
            $(this).addClass("animated");
            }
      });
});



var wheel = new wheelnav('wheelDiv');
wheel.createWheel(["About\nME", "Works", "Skills","Future"]);
wheel.navigateWheel(0); //default num
// wheel.spreaderEnable = true;

wheel.navItems[0].navigateFunction = function () {
      aboutMe.style.display = "block";
      works.style.display = "none";
      skills.style.display = "none";
      future.style.display = "none";
}

wheel.navItems[1].navigateFunction = function () {
      aboutMe.style.display = "none";
      works.style.display = "block";
      skills.style.display = "none";
      future.style.display = "none";
      $(window).scroll(function (){
            let box = $(".fadeInWorks");
            box.each(function(){
                  let boxOffset = $(this).offset().top;
                  let scrollPos = $(window).scrollTop();
                  let wh = $(window).height();
            if(scrollPos > boxOffset - wh){
                  $(this).addClass("animated");
                  }
            });
      });
}

wheel.navItems[2].navigateFunction = function () {
      aboutMe.style.display = "none";
      works.style.display = "none";
      skills.style.display = "block";
      future.style.display = "none";
      $(window).scroll(function (){
            let box = $(".fadeInSkills");
            box.each(function(){
                  let boxOffset = $(this).offset().top;
                  let scrollPos = $(window).scrollTop();
                  let wh = $(window).height();
            if(scrollPos > boxOffset - wh){
                  $(this).addClass("animated");
                  }
            });
      });
}

wheel.navItems[3].navigateFunction = function () {
      aboutMe.style.display = "none";
      works.style.display = "none";
      skills.style.display = "none";
      future.style.display = "block";
      $(window).scroll(function (){
            let box = $(".fadeInFuture");
            box.each(function(){
                  let boxOffset = $(this).offset().top;
                  let scrollPos = $(window).scrollTop();
                  let wh = $(window).height();
            if(scrollPos > boxOffset - wh){
                  $(this).addClass("animated");
                  }
            });
      });
}

// page top btn fadein and fadeout function
$(function () {
      let topBtn = $(".btn");
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
    topBtn.on("click", function() {
      $("body, html").animate({
        scrollTop: 0
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
