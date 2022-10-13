noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
    canvas=createCanvas(500,480);
    canvas.position(610,120);
    video=createCapture(VIDEO);
    video.size(460,550);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("model loaded!!!!");
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX = "+noseX+"noseY = "+noseY);
    rightWristX=results[0].pose.rightWrist.x;
    leftWristX=results[0].pose.leftWrist.x;
    difference=floor(leftWristX-rightWristX);
    console.log("rightWristX = "+rightWristX+"leftWristX = "+leftWristX+"difference = "+difference);

}
}
function draw(){
    background("#FFB6C1");
    fill("#AAFOD2");
    stroke("#AAFOD2");
    textSize(difference);
    text("Kait",noseX,noseY);
}
