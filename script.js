var i = 0;
var txt = "Loves Labour"; // The text to type out
var speed = 200; // Typing speed in milliseconds

function typeWriter() {
  let typingElement = document.getElementById("typing");
  typingElement.style.visibility = "visible"; // Make text visible when animation starts

  if (i < txt.length) {
    typingElement.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Set visibility hidden on load
window.onload = function () {
  document.getElementById("typing").style.visibility = "hidden";
  typeWriter();
};
