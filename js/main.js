$(document).ready(function(){
    $('#header').load('header.html', function() {
        // Code to execute after the header is loaded
        $('.main-menu').slicknav({
            prependTo: ".mobile-nav",
            label: '',
            duration: 500,
            easingOpen: "easeOutBounce",
        });
    });
    $('#footer').load('footer.html');
    

});