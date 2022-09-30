var predict_1="";
var predict_2="";
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 Webcam.attach( '#camera' );

 function Take_pic(){
    Webcam.snap( function(data_uri) {
        document.getElementById('result').innerHTML = 
         '<img  id="pic" src="'+data_uri+'"/>';
    } );
 }

 classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/dBq0UfMNX/model.json", model_ready);

 function model_ready(){
     console.log("model is ready");
 }

 function speak(){
     var synth= window.speechSynthesis;
     var speech_object=new SpeechSynthesisUtterance("First prediction is " + predict_1 + " The second prediction is " + predict_2);
     synth.speak(speech_object);
     
 }

 function result(){
myIamge=document.getElementById("pic");
classifier.classify(myIamge, gotresults);

 }

 function gotresults(error,result){
     if (error){
         console.log(error);
     }

     else {
         console.log(result);
         predict_1=result[0].label;
         predict_2=result[1].label;
         speak();
         document.getElementById("hand_1").innerHTML=predict_1;
         document.getElementById("hand_2").innerHTML=predict_2;
         
    
          if(predict_1=="Best"){
            document.getElementById("emoji_1").innerHTML="&#128077;"
          }

          else if (predict_1=="Peace"){
            document.getElementById("emoji_1").innerHTML="&#9996;"
          }

          else if(predict_1=="Amazing"){
            document.getElementById("emoji_1").innerHTML="&#128076;"
          }

          else if(predict_1=="Victory"){
            document.getElementById("emoji_1").innerHTML="&#9994;"
          }

          
          if(predict_2=="Best"){
            document.getElementById("emoji_2").innerHTML="&#128077;"
          }

          else if (predict_2=="Peace"){
            document.getElementById("emoji_2").innerHTML="&#9996;"
          }

          else if(predict_2=="Amazing"){
            document.getElementById("emoji_2").innerHTML="&#128076;"
          }

          else if(predict_2=="Victory"){
            document.getElementById("emoji_2").innerHTML="&#9994;"
          }

     }

    
 }