$(window).scroll(function(){;
    w = Math.floor( $(window).scrollTop() );
   $('.chapter').css( 'background-color', '' );
    if(w<=$('#pilot').offset().top){
        document.documentElement.style.setProperty('--bars', '255, 255, 0');
    }else if(w<=$('#episode-1').offset().top){
        document.documentElement.style.setProperty('--bars', '0, 255, 255');
    }else if(w<=$('#episode-2').offset().top){
         document.documentElement.style.setProperty('--bars', '0, 255, 0');
    }else if(w<=$('#episode-3').offset().top){
         document.documentElement.style.setProperty('--bars', '255, 0, 255');
    }else if(w<=$('#finale').offset().top){
         document.documentElement.style.setProperty('--bars', '255, 0, 0');
    }else if(w<=$('#credits').offset().top){
        document.documentElement.style.setProperty('--bars', '0, 0, 255');
    }else{
         document.documentElement.style.setProperty('--bars', '255, 255, 255');
    }

});
