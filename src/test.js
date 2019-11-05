navigator.getUserMedia = ( navigator.getUserMedia || navigator.webkitGetUserMedia ||navigator.mozGetUserMedia || navigator.msGetUserMedia);
if (navigator.getUserMedia) {
   console.log('getUserMedia supported.');
   navigator.getUserMedia (
      {
         audio: true
      },
      function(stream) {
         // Success code here
      },
   );}

   var mediaRecorder = new MediaRecorder(stream);
   mediaRecorder.start();
   $("#stop").click(function() {
    mediaRecorder.stop();
  });