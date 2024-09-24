document.addEventListener("DOMContentLoaded", function() {
    let textElement = document.getElementById("hello");
    let colors = ['red', 'blue'];
    let colorIndex = 0;

    setInterval(function() {
        colorIndex = (colorIndex + 1) % colors.length;
        textElement.style.color = colors[colorIndex];
    }, 1000);
});
