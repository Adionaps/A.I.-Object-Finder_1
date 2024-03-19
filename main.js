Objects=[]
status1=""
function preload(){
 

}

function setup(){
Canvas=createCanvas(480,380)
Canvas.center()
camera=createCapture(VIDEO)
camera.size(480,380)
camera.hide()
}

function draw(){
image(camera,0,0,480,380)
if(status1 != ""){
    objectDetector.detect(camera,gotResult)
}

}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML="status : detecting objects: "
}

function modelLoaded(){
    console.log("modelLoaded")
    status1=true


}

function gotResult(error,results){
if(error){
    console.log(error)
}
console.log(results)
Objects=results
}