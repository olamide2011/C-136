function preload() {
    video=createVideo("video.mp4");
}


function setup() {
 canvas=createCanvas(710,410);
 canvas.center();
 
}

function draw() {
    image(video,0,0,710,410);
}

