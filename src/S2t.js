import React from 'react'

const S2t = () => {

var audioChunks;
var recordedAudio;
var record;
var stopRecord;
var rec;

  navigator.mediaDevices.getUserMedia({audio:true})
  .then(stream => {handlerFunction(stream)})


        function handlerFunction(stream) {
var        rec = new MediaRecorder(stream);
        rec.ondataavailable = e => {
          audioChunks.push(e.data);
          if (rec.state == "inactive"){
            let blob = new Blob(audioChunks,{type:'audio/mpeg-3'});
            recordedAudio.src = URL.createObjectURL(blob);
            recordedAudio.controls=true;
            recordedAudio.autoplay=true;
            sendData(blob)
          }
        }
      }
            function sendData(data) {}

    record.onclick = e => {
      console.log('I was clicked')
      record.disabled = true;
      record.style.backgroundColor = "blue"
      stopRecord.disabled=false;
      audioChunks = [];
      rec.start();
    }
    stopRecord.onclick = e => {
      console.log("I was clicked")
      record.disabled = false;
      window.stop.disabled=true;
      record.style.backgroundColor = "red"
      rec.stop();
    }
  return (
    <div>
      <h2>Record</h2>
      		<p>
      			<button id={record}>Start</button>
      			<button id={stopRecord} disabled>Stop</button>
      		</p>
      		<p>
      			<audio id={recordedAudio}></audio>
      	
      		</p>
    </div>
  )
}

export default S2t
