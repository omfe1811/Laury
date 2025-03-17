var i = 0;
var txt = "Loves Labour"; // H1 hero typing animation
var speed = 150;
function typeWriter() {
  let typingElement = document.getElementById("typing");
  typingElement.style.visibility = "visible";
  if (i < txt.length) {
    typingElement.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
$(document).ready(function () {
  var wasClicked = false;
  // Function to trigger the animation
  function triggerAnimation() {
    if (!wasClicked) {
      // Initially reset visibility and opacity of all images
      $("#first-image, #second-image, #third-image").removeClass("visible");

      // Trigger opacity transition by adding the 'visible' class to each image
      $("#first-image").addClass("visible");
      $("#second-image")
        .delay(500)
        .queue(function (next) {
          $(this).addClass("visible");
          next();
        });
      $("#third-image")
        .delay(1000)
        .queue(function (next) {
          $(this).addClass("visible");
          next();
        });
      wasClicked = true;
    }
  }

  // Trigger animation when clicking the #samples-link
  $("#samples-link").click(function () {
    triggerAnimation();
  });

  // Trigger animation when #samples section is in view during scroll
  $(window).on("scroll", function () {
    var sectionTop = $("#samples").offset().top;
    var sectionBottom = sectionTop + $("#samples").outerHeight();
    var windowTop = $(window).scrollTop();
    var windowBottom = windowTop + $(window).height();

    // Check if the section is in view
    if (windowBottom > sectionTop && windowTop < sectionBottom) {
      triggerAnimation(); // Trigger the animation when in view
      $(window).off("scroll"); // Trigger animation only once when in view
    }
  });
});

$(document).ready(function () {
  // Remove 'active' class from all nav items
  $(".nav-link").click(function () {
    $(".nav-link").removeClass("active"); // Remove active class from all links
    $(this).addClass("active"); // Add active class to the clicked link
  });
});
// Set visibility hidden on load
window.onload = function () {
  document.getElementById("typing").style.visibility = "hidden";
  typeWriter();
};
