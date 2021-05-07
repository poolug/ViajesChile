$(document).ready(function(){

    //Smooth scroll
    $("a").click(function(event){
        if (this.hash !== "") {
            event.preventDefault();

            var gato = this.hash;

            $("html, body").animate({
            scrollTop: $(gato).offset().top
            }, 800, function(){
            window.location.hash = gato;
            });
        }
    });

    //Cambio de color en el navbar al hacer scroll
    $(window).scroll(function() {
        if ($("#menu").offset().top > 56) {
            $("#menu").addClass("bg-info");
        } else {
            $("#menu").removeClass("bg-info");
        }
    });

    //Añade color el navbar al posicionar cursor encima del navbar-icon
    $(".navbar-toggler-icon").mouseenter(function() {
        $("#menu").addClass("bg-info");
    });

    //Quita color del navbar al quitar el mouse encima del navbar-icon
    $(".navbar-toggler-icon").mouseleave(function() {
        $("#menu").removeClass("bg-info");
    });

    //Cambia el puntero al pasar por los íconos en ¿Quienes somos?
    $('.pointer').css('cursor', 'pointer');

});