// Setup the canvas element.
var canvas = document.getElementById('dots');
var context = canvas.getContext('2d');
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
canvas.setAttribute('height', canvasHeight);
canvas.setAttribute('width', canvasWidth);

// the slider
var slider = document.getElementById("slider");
var output = document.getElementById("speedVal");
output.innerHTML = slider.value; // Display the default speed

// Set an array of dot objects.
var dots = [];

// default speed is 10
var frameLength = 0.1;

// default time for dot generation is one second
var generationTime = 1000;

// default radius of the dots
var maxRadius = 50;
var minRadius = 5;

// Update the speed
slider.oninput = function() {
    output.innerHTML = this.value;
    frameLength = this.value * 0.01;

    // adjust current dots
    dots.forEach(function(dot) {
        dot.frameLength = frameLength;
    });
};

// Start the animation frame 1 second after the page loads.
setTimeout(function(){
    window.requestAnimationFrame(moveDot);
}, generationTime);

// Add new dot every second
setInterval(function() {
    addDot();
}, generationTime);

// for click events
canvas.addEventListener('click', function(event) {
    var x = event.pageX - canvas.offsetLeft,
        y = event.pageY - canvas.offsetTop;

    // Collision detection between clicked offset and element.
    dots.forEach(function(dot) {
        if (y < dot.y + dot.radius && x < dot.x + dot.radius) {
            var score = Math.floor((1 / Math.round(dot.radius)) * 100);
            removeDot(dot);
            setTimeout(addDot, generationTime);
            addScore(score);
        }
    });

}, false);

// dot related math
function randomRadius() {
    return Math.random() * maxRadius + minRadius;
}

function randomStartPos(radius) {
    var newStartPos = Math.random() * canvasWidth + minRadius;
    // get a starting position that's not 'hanging'
    while ((newStartPos + radius) >= canvasWidth) {
        newStartPos = Math.random() * canvasWidth + minRadius;
    }
    return Math.floor(newStartPos);
}

function addDot() {
    var newDot = {};
    newDot.radius = randomRadius();
    newDot.y = 10;
    newDot.x = randomStartPos(newDot.radius);
    newDot.frameLength = frameLength;
    dots.push(newDot);
}

function removeDot(dot) {
    for (var i = 0; i < dots.length; i++) {
        if (dots[i].x === dot.x && dots[i].radius === dot.radius) {
            dots.splice(i, 1);
        }
    }
}

// This function moves the dot down each frame
function moveDot() {

    // Clear the canvas so we can draw on it again.
    context.clearRect(0, 0, canvasWidth, canvasHeight);

    // Iterate over all the dots.
    for( var i = 0; i < dots.length; i++ ) {

        drawDot(dots[i]);

        dots[i].y += dots[i].frameLength;

        if( (dots[i].y + dots[i].radius) >= canvasHeight ) {
            removeDot(dots[i]);
            dots[i].radius = randomRadius();
            dots[i].y = 10;
            dots[i].x = randomStartPos(dots[i].radius);
            dots[i].frameLength = frameLength;
        }
    }

    // Call this function again.
    window.requestAnimationFrame(moveDot);
}

function drawDot(dot) {
    context.beginPath();
    context.arc(dot.x, dot.y, dot.radius, 0, 2 * Math.PI, false);
    context.fillStyle = '#F03C69';
    context.fill();
}

function addScore(newScore) {
    var scoreElem = document.getElementById('score');
    scoreElem.innerHTML = parseInt(scoreElem.innerHTML) + newScore;
}