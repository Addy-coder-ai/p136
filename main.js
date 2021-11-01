function start(){
    document.getElementById("status").innerHTML="Getting on it right away...";
    cocossd= ml5.objectDetector('cocossd',modelLoaded );
    obj= document.getElementById("inputObject").value;
    console.log(obj);
}
function setup() {
    canvas = createCanvas(380,380);
    canvas.center();
   video= createCapture(VIDEO);
   video.size(380,380);
   video.hide();

}

function preload() {
    

}
