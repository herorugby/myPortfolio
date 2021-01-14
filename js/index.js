var a = document.getElementById("about-me");
var b = document.getElementById("works");
var c = document.getElementById("skills");
var d = document.getElementById("future");

// a.style.display = "none";





var wheel = new wheelnav("wheelDiv");
window.onload = function () {

    // var wheel = new wheelnav("wheelDiv");

    //This is the place for code snippets from the documentation -> http://wheelnavjs.softwaretailoring.net/documentation.html

    wheel.createWheel(["About ME", "Works", "Skills", "Future"]);
    wheel.navigateWheel(0); //default num
    wheel.titleAttr = { fill: "#FFF" };
    wheel.titleSelectedAttr = { fill: "#111" };
    wheel.titleHoverAttr = { fill: "#111" };

    //Insert generated JavaScript code from here -> http://pmg.softwaretailoring.net
    wheel.navItems[0].navigateFunction = function () {
      addEventListener("click", addVal);
      }

      function addVal() {
        a.style.display = "block";
      }
}




// copy right get full year
// get Date preparation
let dayOption = new Date();
let myYear = dayOption.getFullYear();

$(function() {
  function copyRightYear() {
    copyRight = $("#copyRight");
    copyRight.text("2020-" + myYear);
  }
  copyRightYear();
});