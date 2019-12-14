// function toggle_visibility(id) {
//     var e = document.getElementById(id);
//     if (e.style.display == 'block')
//         (e.style.display = 'none');
//     else
//         e.style.display = 'block';
// }


// $(document).ready(function(){
//     $(".button").click(function () {
//         $(".hide").slideToggle({duration: 300}).scrollTop();
//         $("html, body").animate({scrollTop: $(document).height()})
//     });
// });

$(function(){
    $('.button').click(function(){
        $('.hide').slideToggle(300);
        return false;
    });
});