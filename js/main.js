$(document).ready(function(){
    $('#header').load('header.html');
    $('#footer').load('footer.html');
    
    $('.main-menu').slicknav({
        prependTo:".mobile-nav",
        label: '',
        duration: 500,
        easingOpen: "easeOutBounce",
    });
    

});