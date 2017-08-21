let route = require("./controllers/routing.js");
route.routing("./views/Dashboard/index.html");
$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

$(".sidebar-nav li a").on("click", function () {
    $("li a").removeClass("active");
    $(this).addClass('active');

    //view
    var url = $(this).attr('data-url');
    route.routing(url);
});