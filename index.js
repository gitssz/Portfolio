$(window).scroll(function(){
    if($(this).scrollTop()>=1900){
        $('#return-to-top').fadeIn(400);
    }
    else{
        $('#return-to-top').faffdeOut(300);
    }
})


$('#return-to-top').click(function(){
    $('body,html').animate({
        scrollTop:0
    },500);
});