$(document).ready(function() {
    var audioElement1 = document.createElement('audio');
    audioElement1.setAttribute('src', 'https://raw.githubusercontent.com/paprika-mika/romantic-poetry/master/media/sehnsucht.mp3');

    audioElement1.addEventListener('ended', function() {
      this.play();
  }, false);

      $('#play1').click(function() {
          audioElement1.play();
          audioElement2.pause();
          audioElement3.pause();
          audioElement4.pause();
          audioElement5.pause();
          audioElement6.pause();
          if ($("#subtitle-2, #subtitle-3, #subtitle-4, #subtitle-5, #subtitle-6").hasClass("subtitle-box")){
            $("#subtitle-2, #subtitle-3, #subtitle-4, #subtitle-5, #subtitle-6").removeClass("subtitle-box").addClass("subtitle-no");
          }

          $("#subtitle-1").removeClass("subtitle-no").addClass("subtitle-box");
          $("#subtitle-1 > .crawl").css({"-webkit-animation-play-state": "running"});
          $("#subtitle-2 > .crawl").css({"-webkit-animation-play-state": "paused"});
          $("#subtitle-3 > .crawl2").css({"-webkit-animation-play-state": "paused"});
          $("#subtitle-4 > .crawl3").css({"-webkit-animation-play-state": "paused"});
          $("#subtitle-5 > .craw4l").css({"-webkit-animation-play-state": "paused"});
          $("#subtitle-6 > .crawl5").css({"-webkit-animation-play-state": "paused"});
      });

      $('#pause1').click(function() {
          audioElement1.pause();

          $("#subtitle-1 > .crawl").css({"-webkit-animation-play-state": "paused"});
          $("#subtitle-1").removeClass("subtitle-box").addClass("subtitle-no");
      });


    var audioElement2 = document.createElement('audio');
    audioElement2.setAttribute('src', 'https://raw.githubusercontent.com/paprika-mika/romantic-poetry/master/media/herbstnachtgeschichte.mp3');

    audioElement2.addEventListener('ended', function() {
         this.play();
     }, false);

    $('#play2').click(function() {

        audioElement1.pause();
        audioElement2.play();
        audioElement3.pause();
        audioElement4.pause();
        audioElement5.pause();
        audioElement6.pause();
        if ($("#subtitle-1, #subtitle-3, #subtitle-4, #subtitle-5, #subtitle-6").hasClass("subtitle-box")){
          $("#subtitle-1, #subtitle-3, #subtitle-4, #subtitle-5, #subtitle-6").removeClass("subtitle-box").addClass("subtitle-no");
        }

        $("#subtitle-2").removeClass("subtitle-no").addClass("subtitle-box");
        $("#subtitle-1").removeClass("subtitle-no").addClass("subtitle-box");
        $("#subtitle-1 > .crawl").css({"-webkit-animation-play-state": "paused"});
        $("#subtitle-2 > .crawl").css({"-webkit-animation-play-state": "running"});
        $("#subtitle-3 > .crawl2").css({"-webkit-animation-play-state": "paused"});
        $("#subtitle-4 > .crawl3").css({"-webkit-animation-play-state": "paused"});
        $("#subtitle-5 > .craw4l").css({"-webkit-animation-play-state": "paused"});
        $("#subtitle-6 > .crawl5").css({"-webkit-animation-play-state": "paused"});
    });

    $('#pause2').click(function() {
        audioElement2.pause();
        $("#subtitle-2 > .crawl").css({"-webkit-animation-play-state": "paused"});
        $("#subtitle-2").removeClass("subtitle-box").addClass("subtitle-no");


    });


    var audioElement3 = document.createElement('audio');
    audioElement3.setAttribute('src', 'https://raw.githubusercontent.com/paprika-mika/romantic-poetry/master/media/sommertag.mp3');

    audioElement3.addEventListener('ended', function() {
            this.play();
        }, false);


    $('#play3').click(function() {
      audioElement1.pause();
      audioElement2.pause();
      audioElement3.play();
      audioElement4.pause();
      audioElement5.pause();
      audioElement6.pause();
      if ($("#subtitle-1, #subtitle-2, #subtitle-4, #subtitle-5, #subtitle-6").hasClass("subtitle-box")){
        $("#subtitle-1, #subtitle-2, #subtitle-4, #subtitle-5, #subtitle-6").removeClass("subtitle-box").addClass("subtitle-no");
      }

      $("#subtitle-3").removeClass("subtitle-no").addClass("subtitle-box");
      $("#subtitle-1 > .crawl").css({"-webkit-animation-play-state": "paused"});
      $("#subtitle-2 > .crawl").css({"-webkit-animation-play-state": "paused"});
      $("#subtitle-3 > .crawl2").css({"-webkit-animation-play-state": "running"});
      $("#subtitle-4 > .crawl3").css({"-webkit-animation-play-state": "paused"});
      $("#subtitle-5 > .craw4l").css({"-webkit-animation-play-state": "paused"});
      $("#subtitle-6 > .crawl5").css({"-webkit-animation-play-state": "paused"});
  });


    $('#pause3').click(function() {
      audioElement3.pause();
      $("#subtitle-3 > .crawl2").css({"-webkit-animation-play-state": "paused"});
      $("#subtitle-3").removeClass("subtitle-box").addClass("subtitle-no");
    });

    var audioElement4 = document.createElement('audio');
    audioElement4.setAttribute('src', 'https://raw.githubusercontent.com/paprika-mika/romantic-poetry/master/media/derfreund.mp3');

    audioElement4.addEventListener('ended', function() {
            this.play();
        }, false);


    $('#play4').click(function() {
      audioElement1.pause();
      audioElement2.pause();
      audioElement3.pause();
      audioElement4.play();
      audioElement5.pause();
      audioElement6.pause();
      if ($("#subtitle-1, #subtitle-2, #subtitle-3, #subtitle-5, #subtitle-6").hasClass("subtitle-box")){
        $("#subtitle-1, #subtitle-2, #subtitle-3, #subtitle-5, #subtitle-6").removeClass("subtitle-box").addClass("subtitle-no");
      }

      $("#subtitle-4").removeClass("subtitle-no").addClass("subtitle-box");
      $("#subtitle-1 > .crawl").css({"-webkit-animation-play-state": "paused"});
      $("#subtitle-2 > .crawl").css({"-webkit-animation-play-state": "paused"});
      $("#subtitle-3 > .crawl2").css({"-webkit-animation-play-state": "paused"});
      $("#subtitle-4 > .crawl3").css({"-webkit-animation-play-state": "running"});
      $("#subtitle-5 > .craw4l").css({"-webkit-animation-play-state": "paused"});
      $("#subtitle-6 > .crawl5").css({"-webkit-animation-play-state": "paused"});
  });

    $('#pause4').click(function() {
      audioElement4.pause();
      $("#subtitle-4 > .crawl3").css({"-webkit-animation-play-state": "paused"});
      $("#subtitle-4").removeClass("subtitle-box").addClass("subtitle-no");
    });



    var audioElement5 = document.createElement('audio');
    audioElement5.setAttribute('src', 'https://raw.githubusercontent.com/paprika-mika/romantic-poetry/master/media/entschluss.mp3');

    audioElement5.addEventListener('ended', function() {
            this.play();
        }, false);

    $('#play5').click(function() {
      audioElement1.pause();
      audioElement2.pause();
      audioElement3.pause();
      audioElement4.pause();
      audioElement5.play();
      audioElement6.pause();
      if ($("#subtitle-1, #subtitle-2, #subtitle-3, #subtitle-4, #subtitle-6").hasClass("subtitle-box")){
        $("#subtitle-1, #subtitle-2, #subtitle-3, #subtitle-4, #subtitle-6").removeClass("subtitle-box").addClass("subtitle-no");
      }

      $("#subtitle-5").removeClass("subtitle-no").addClass("subtitle-box");
      $("#subtitle-1 > .crawl").css({"-webkit-animation-play-state": "paused"});
      $("#subtitle-2 > .crawl").css({"-webkit-animation-play-state": "paused"});
      $("#subtitle-3 > .crawl2").css({"-webkit-animation-play-state": "paused"});
      $("#subtitle-4 > .crawl3").css({"-webkit-animation-play-state": "paused"});
      $("#subtitle-5 > .crawl4").css({"-webkit-animation-play-state": "running"});
      $("#subtitle-6 > .crawl5").css({"-webkit-animation-play-state": "paused"});

  });

    $('#pause5').click(function() {
      audioElement5.pause();
      $("#subtitle-5 > .crawl4").css({"-webkit-animation-play-state": "paused"});
      $("#subtitle-5").removeClass("subtitle-box").addClass("subtitle-no");
    });


    var audioElement6 = document.createElement('audio');
    audioElement6.setAttribute('src', 'https://raw.githubusercontent.com/paprika-mika/romantic-poetry/master/media/maxklinger.mp3');

    audioElement6.addEventListener('ended', function() {
            this.play();
        }, false);

    $('#play6').click(function() {
      audioElement1.pause();
      audioElement2.pause();
      audioElement3.pause();
      audioElement4.pause();
      audioElement5.pause();
      audioElement6.play();
      if ($("#subtitle-1, #subtitle-2, #subtitle-3, #subtitle-4, #subtitle-5").hasClass("subtitle-box")){
        $("#subtitle-1, #subtitle-2, #subtitle-3, #subtitle-4, #subtitle-5").removeClass("subtitle-box").addClass("subtitle-no");
      }

      $("#subtitle-6").removeClass("subtitle-no").addClass("subtitle-box");
      $("#subtitle-6 > .crawl5").css({"-webkit-animation-play-state": "running"});
  });

    $('#pause6').click(function() {
      audioElement6.pause();
      $("#subtitle-6 > .crawl5").css({"-webkit-animation-play-state": "paused"});
      $("#subtitle-6").removeClass("subtitle-box").addClass("subtitle-no");
      $("#subtitle-1 > .crawl").css({"-webkit-animation-play-state": "paused"});
      $("#subtitle-2 > .crawl").css({"-webkit-animation-play-state": "paused"});
      $("#subtitle-3 > .crawl2").css({"-webkit-animation-play-state": "paused"});
      $("#subtitle-4 > .crawl3").css({"-webkit-animation-play-state": "paused"});
      $("#subtitle-5 > .craw4l").css({"-webkit-animation-play-state": "paused"});
      $("#subtitle-6 > .crawl5").css({"-webkit-animation-play-state": "running"});
    });



    $("#play1").click(function(){
        if ($("#subtitle-2, #subtitle-3, #subtitle-4, #subtitle-5, #subtitle-6").hasClass("subtitle-box")){
          $("#subtitle-2, #subtitle-3, #subtitle-4, #subtitle-5, #subtitle-6").removeClass("subtitle-box").addClass("subtitle-no");
        }

        $("#subtitle-1").removeClass("subtitle-no").addClass("subtitle-box");
        $("#subtitle-1 > .crawl").css({"-webkit-animation-play-state": "running"});

      });


    $("#pause1").click(function(){
          $("#subtitle-1 > .crawl").css({"-webkit-animation-play-state": "paused"});
          $("#subtitle-1").removeClass("subtitle-box").addClass("subtitle-no");
        });



        $("#play2").click(function(){
            if ($("#subtitle-1, #subtitle-3, #subtitle-4, #subtitle-5, #subtitle-6").hasClass("subtitle-box")){
              $("#subtitle-1, #subtitle-3, #subtitle-4, #subtitle-5, #subtitle-6").removeClass("subtitle-box").addClass("subtitle-no");
            }

            $("#subtitle-2").removeClass("subtitle-no").addClass("subtitle-box");
            $("#subtitle-2 > .crawl").css({"-webkit-animation-play-state": "running"});

          });



          $("#original1trigger, #original2trigger, #original3trigger, #original4trigger, #original5trigger, #original6trigger, .cross").click(function(){
            if ($("#box").hasClass("poem-originals-none")) {
           $("#box").removeClass("poem-originals-none").addClass("poem-originals");}
           else {
          $("#box").removeClass("poem-originals").addClass("poem-originals-none");}
          });













});

$( function() {
      $( "#box" ).draggable();



      $( "" ).disableSelection();
} );
