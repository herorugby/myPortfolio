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

var wheel = new wheelnav('wheelDiv');
      wheel.createWheel(["About\nME", "Works", "Skills","Future"]);
      wheel.navigateWheel(0); //default num

      wheel.navItems[0].navigateFunction = function () {
            aboutMe.style.display = "block";
            works.style.display = "none";
            skills.style.display = "none";
            future.style.display = "none";
            window.addEventListener("scroll", function () {
                  let box = document.getElementsByClassName("fadeIn");
                  box.forEach(function () {
                        let boxOffset = this.offset().top;
                  })
            });
      }

      //       let box = $(".fadeIn");
//       box.each(function(){
//             let boxOffset = $(this).offset().top;
//             let scrollPos = $(window).scrollTop();
//             let wh = $(window).height();
//             if(scrollPos > boxOffset - wh + 100){
//               $(this).addClass("animated");
//             }
//           });

      wheel.navItems[1].navigateFunction = function () {
            aboutMe.style.display = "none";
            works.style.display = "block";
            skills.style.display = "none";
            future.style.display = "none";
      }

      wheel.navItems[2].navigateFunction = function () {
            aboutMe.style.display = "none";
            works.style.display = "none";
            skills.style.display = "block";
            future.style.display = "none";
      }

      wheel.navItems[3].navigateFunction = function () {
            aboutMe.style.display = "none";
            works.style.display = "none";
            skills.style.display = "none";
            future.style.display = "block";
      }




// $(window).on("load scroll", function (){
//       let box = $(".fadeIn");

//       box.each(function(){
//         let boxOffset = $(this).offset().top;
//         let scrollPos = $(window).scrollTop();
//         let wh = $(window).height();
//         if(scrollPos > boxOffset - wh + 100){
//           $(this).addClass("animated");
//         }
//       });
//     });

//     function slideIn() {
//       let box = $(".fadeIn");
//       box.each(function(){
//             let boxOffset = $(this).offset().top;
//             let scrollPos = $(window).scrollTop();
//             let wh = $(window).height();
//             if(scrollPos > boxOffset - wh + 100){
//               $(this).addClass("animated");
//             }
//           });
//     }
// window.onload = function () {

//     // var wheel = new wheelnav('wheelDiv');

//     //This is the place for code snippets from the documentation -> http://wheelnavjs.softwaretailoring.net/documentation.html

//     // wheel.createWheel(["About ME", "Works", "Skills", "Future"]);
//     // wheel.navigateWheel(0); //default num

//     //Insert generated JavaScript code from here -> http://pmg.softwaretailoring.net

//     wheel.navItems[0].navigateFunction = function () {
//       // a.style.display = "block";
//     };
// }


// copy right get full year
$(function() {
  let dayOption = new Date();
  let myYear = dayOption.getFullYear();
  let copyRight = $("#copyRight");
      copyRight.text("2020-" + myYear);
});