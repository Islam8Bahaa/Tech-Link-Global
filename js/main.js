$(document).ready(function(){
    $('.main-menu').slicknav({
        prependTo:".mobile-nav",
        label: '',
        duration: 500,
        easingOpen: "easeOutBounce",
    });

    $('#header').load('header.html')
    $('#footer').load('footer.html')

});