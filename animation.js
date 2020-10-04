let canvas, ctx;
var objects = [];

// newly spawned objects start at Y=25
var spawnLineY = 0;

// spawn a new object every 2000ms but will decrease to speed things up
var spawnRate = 1500;

// set how fast the objects will fall
var spawnRateOfDescent = 0.50;

// when was the last object spawned
var lastSpawn = -1;

var startTime = Date.now();

function init(){
    //inizilaizes the canvas
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    animate();
    
}

//we wait for everything to be loaded then we start
document.addEventListener('DOMContentLoaded', init);
function restart() {
    spawnRate = 1500;
}
function spawnRandomObject() {
    var t;
    t = "blue"

    // create the new object
    var object = {
        // set this objects type
        type: t,
        // set x randomly but at least 15px off the canvas edges
        x: Math.random() * (canvas.width - 30) + 15,
        // set y to start on the line where objects are spawned
        y: spawnLineY,
    }

    // add the new object to the objects[] array
    objects.push(object);

    //decrease the time it takes to spawn new virus celss
    
    if( spawnRate > 50 ){
        spawnRate -= 50;
    } else if( spawnRate == 50){
        spawnRate -= 25;
    }
        
}

function animate() {

    // get the elapsed time
    var time = Date.now();

    // see if its time to spawn a new object
    if (time > (lastSpawn + spawnRate)) {
        lastSpawn = time;
        spawnRandomObject();
    }

    // request another animation frame
    requestAnimationFrame(animate);

    // clear the canvas so all objects can be 
    // redrawn in new positions
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw the line where new objects are spawned
    ctx.beginPath();
    ctx.moveTo(0, spawnLineY);
    ctx.lineTo(canvas.width, spawnLineY);
    ctx.stroke();

    // move each object down the canvas
    for (var i = 0; i < objects.length; i++) {
        var object = objects[i];
        object.y += spawnRateOfDescent;
        ctx.beginPath();
        ctx.arc(object.x, object.y, 8, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = object.type;
        ctx.fill();
    }

}