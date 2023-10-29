$(document).ready(function(){
    $('.card-header').parent('.card').hover(function(){
        $(this).children('.collapse').collapse('toggle');
    });
});
