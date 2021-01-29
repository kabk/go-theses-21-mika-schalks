$(window).scroll(function(){;
    w = Math.floor( $(window).scrollTop() );
   $('.chapter').css( 'background-color', '' );
    if(w<=$('#pilot').offset().top){
        document.documentElement.style.setProperty('--bars', '255, 255, 0');
        $('#yellow').css( 'content', 'url("files/triangle.svg")' );
        $('#light-blue').css( 'content', 'url()' );
        $('#green').css( 'content', 'url()' );
        $('#pink').css( 'content', 'url()' );
        $('#red').css( 'content', 'url()' );
        $('#dark-blue').css( 'content', 'url()' );
    }else if(w<=$('#episode-1').offset().top){
        document.documentElement.style.setProperty('--bars', '0, 255, 255');
          $('#yellow').css( 'content', 'url()' );
          $('#light-blue').css( 'content', 'url("files/triangle.svg")' );
          $('#green').css( 'content', 'url()' );
          $('#pink').css( 'content', 'url()' );
          $('#red').css( 'content', 'url()' );
          $('#dark-blue').css( 'content', 'url()' );
    }else if(w<=$('#episode-2').offset().top){
         document.documentElement.style.setProperty('--bars', '0, 255, 0');
         $('#yellow').css( 'content', 'url()' );
         $('#light-blue').css( 'content', 'url()' );
         $('#green').css( 'content', 'url("files/triangle.svg")' );
         $('#pink').css( 'content', 'url()' );
         $('#red').css( 'content', 'url()' );
         $('#dark-blue').css( 'content', 'url()' );
    }else if(w<=$('#episode-3').offset().top){
         document.documentElement.style.setProperty('--bars', '255, 0, 255');
         $('#yellow').css( 'content', 'url()' );
         $('#light-blue').css( 'content', 'url()' );
         $('#green').css( 'content', 'url()' );
         $('#pink').css( 'content', 'url("files/triangle.svg")' );
         $('#red').css( 'content', 'url()' );
         $('#dark-blue').css( 'content', 'url()' );
    }else if(w<=$('#finale').offset().top){
         document.documentElement.style.setProperty('--bars', '255, 0, 0');
         $('#yellow').css( 'content', 'url()' );
         $('#light-blue').css( 'content', 'url()' );
         $('#green').css( 'content', 'url()' );
         $('#pink').css( 'content', 'url()' );
         $('#red').css( 'content', 'url("files/triangle.svg")' );
         $('#dark-blue').css( 'content', 'url()' );
    }else if(w<=$('#credits').offset().top){
        document.documentElement.style.setProperty('--bars', '0, 0, 255');
        $('#yellow').css( 'content', 'url()' );
        $('#light-blue').css( 'content', 'url()' );
        $('#green').css( 'content', 'url()' );
        $('#pink').css( 'content', 'url()' );
        $('#red').css( 'content', 'url()' );
        $('#dark-blue').css( 'content', 'url("files/triangle.svg")' );
    }else{
         document.documentElement.style.setProperty('--bars', '255, 255, 255');
         $('#yellow').css( 'content', 'url()' );
         $('#light-blue').css( 'content', 'url()' );
         $('#green').css( 'content', 'url()' );
         $('#pink').css( 'content', 'url()' );
         $('#red').css( 'content', 'url()' );
         $('#dark-blue').css( 'content', 'url()' );
    }

});

var acc = document.getElementsByClassName("title");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


$('div.rect', '#queer-cover').bind('taphold', function(event, ui) {
    var offset = $(this).offset();
    var type   = $.mobile.touchEnabled ? 'touchstart' : 'mousedown';
    var newevent = $.Event(type);
    newevent.which  = 1;
    newevent.target = this;
    newevent.pageX  = event.pageX ? event.pageX : offset.left;
    newevent.pageY  = event.pageY ? event.pageX : offset.top;

    $(this).trigger(newevent);
});
