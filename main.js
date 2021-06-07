Webcam.attach('#camera');
camera=document.getElementById("camera");
Webcam.set({width:350,
height:300,
image_format:'png',png_quality:90});




function  take_snapshot()
{Webcam.snap(function(data_uri){
 document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'"/>';   
});
}
console.log('ml5 version: ', ml5.version);
//Initialize the Image Classifier method with MobileNet
classifier=ml5.imageClassifier('https://storage.googleapis.com/tm-model/JACkTMciY/model.json',modelLoaded);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);

//when the model is loaded
function modelLoaded(){
    console.log('model Loaded');
}
function check()
{
    img=document.getElementById('captured_image');

    classifier.classify(img,gotResult);
}
//a function to run when we get any errors and results
function gotResult(error,results){
    //display error in the console
    if(error){
        console.error(error);
            
    }
    else{
    //the results are in an array ordered by confidence
    console.log(results);
    document.getElementById("result_object_name").innerHTML=results[0].label;
   document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
}
}