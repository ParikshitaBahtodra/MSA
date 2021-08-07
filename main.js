var SpeechRecognition=window.webkitSpeechRecognition;
var Recognition=new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    Recognition.start();
}
Recognition.onresult=function run(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie"){
        console.log("taking Selfie");
        speak();
    }
    
    
}
function speak(){
    var synth=window.speechSynthesis;
    var speak_data="taking selfie in 5 seconds";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        snapshot();
        save();
    },5000);
    
}
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
  });
  var camera=document.getElementById("camera");
function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='selfie_image' src='"+data_uri+"'>";
    });
}
function save(){
    var link=document.getElementById("link");
    var img=document.getElementById("selfie_image").src;
    link.href=img;
    link.click();
}