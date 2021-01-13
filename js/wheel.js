var wheel = new wheelnav("wheelDiv");
window.onload = function () {

    // var wheel = new wheelnav("wheelDiv");

    //This is the place for code snippets from the documentation -> http://wheelnavjs.softwaretailoring.net/documentation.html

    wheel.createWheel(["Works", "Skills", "Career"]);
    wheel.navigateWheel(2); //default num
    wheel.titleAttr = { fill: "#FFF" };
    wheel.titleSelectedAttr = { fill: "#111" };
    wheel.titleHoverAttr = { fill: "#111" };

    //Insert generated JavaScript code from here -> http://pmg.softwaretailoring.net
    wheel.navItems[0].navigateFunction = function () {
        alert("Clicked homepage.");
      }
}