$(window).scroll(function(){
    if($('html,body').scrollTop()>150){
        $('.navbar').addClass('nentrang');// nền menu đổi nền trắng
        $('.nav-link').addClass('chu');
    }
    else{
        $('.navbar').removeClass('nentrang');
        $('.nav-link').removeClass('chu');

    }
})

var menu=document.querySelector('.menu'),
    nuttop=document.querySelector('.top');
window.addEventListener('scroll',function(){
    if(window.pageYOffset>150){
        menu.classList.add('doimenu');
        nuttop.classList.add('active');
    }
    else{
        menu.classList.remove('doimenu');
        nuttop.classList.remove('active');
    }
    
})


