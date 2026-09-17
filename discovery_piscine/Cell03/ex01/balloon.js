// State tracking variables
let size = 200;
const colors = ['red', 'green', 'blue'];
let colorIndex = 0;

const balloon = document.getElementById('balloon');

// Helper function to render DOM changes
function updateBalloon() {
    balloon.style.width = size + 'px';
    balloon.style.height = size + 'px';
    balloon.style.backgroundColor = colors[colorIndex];
}

// Click Event: Grow, cycle forward color, explode if > 420px
balloon.addEventListener('click', function() {
    size += 10;
    colorIndex = (colorIndex + 1) % 3; // Forward color cycle

    if (size > 420) {
        size = 200;
        colorIndex = 0; // Reset color to red on explosion
    }

    updateBalloon();
});

// Mouseleave Event: Shrink, minimum size limit, cycle reverse color
balloon.addEventListener('mouseleave', function() {
    size -= 5;
    if (size < 200) {
        size = 200; // Enforce 200px lower boundary
    }

    // Reverse color cycle calculation
    colorIndex = (colorIndex - 1 + colors.length) % colors.length;

    updateBalloon();
});