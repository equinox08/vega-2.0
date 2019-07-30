$(document).ready(function(){
    $(".search").on("click", function(){
        $(".searchfield").addClass("searchfieldshow");
        $(".search").addClass("searchoff");
        $(".iconX").addClass("iconXshow");
    });
    $(".iconX").on("click", function(){
        $(".search").removeClass("searchoff");
        $(".searchfield").removeClass("searchfieldshow");
        $(".iconX").removeClass("iconXshow");
    });
    $(".language").on("click", function(){
        $(".langmenu").toggleClass("langmenushow");
    });
    $(".langmenu").on("mouseleave", function(){
        $(".langmenu").removeClass("langmenushow");
    });
     //touritems
     $(".touritem1").on("mouseenter", function(){
        $(".itembutton1").show();
    });
    $(".touritem1").on("mouseleave", function(){
        $(".itembutton1").hide();
    });
    $(".touritem2").on("mouseenter", function(){
        $(".itembutton2").show();
    });
    $(".touritem2").on("mouseleave", function(){
        $(".itembutton2").hide();
    });
    $(".touritem3").on("mouseenter", function(){
        $(".itembutton3").show();
    });
    $(".touritem3").on("mouseleave", function(){
        $(".itembutton3").hide();
    });
    $(".touritem4").on("mouseenter", function(){
        $(".itembutton4").show();
    });
    $(".touritem4").on("mouseleave", function(){
        $(".itembutton4").hide();
    });
});