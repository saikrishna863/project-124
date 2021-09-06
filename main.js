function setup() {
    video = createCapture(VIDEO);
    video.size(550, 400);
    canvas = createCanvas(550, 400);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    }
    function draw() {
    background('#FF0000');
    }
    function modelLoaded() {
    console.log('poseNet Is Initializes!');
    }
    function gotPoses(results)
    {
    if(results.length > 0)
    {
    console.log(results);
    }
    }