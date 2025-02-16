// Navbar Start = Active Link
$(document).ready(function () {
    // Add click event to nav links
    $('.nav-link').on('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior

        // Remove active class from all links and add to the clicked one
        $('.nav-link').removeClass('active');
        $(this).addClass('active');

        // Get the target section ID
        const target = $(this).attr('href');

        // Scroll to the target section
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500); // Smooth scrolling duration in milliseconds
    });
});
// Navbar End

// Dark Mode Toggle Start
$(document).ready(function () {
    // Track current mode and video index
    let isDarkMode = true; // Default to dark mode
    let currentVideo = 1;

    // Function to switch between videos
    function switchVideo() {
        // Hide all videos
        $("video").removeClass("active");

        // Show the next video
        currentVideo = currentVideo === 1 ? 2 : 1;
        $(`#video${currentVideo}`).addClass("active");
    }

    // Toggle dark mode on button click
    $("#dark-mode-toggle").click(function () {
        isDarkMode = !isDarkMode; // Toggle mode

        // Switch text and background colors
        if (isDarkMode) {
            $("body").css({
                backgroundColor: "black",
                color: "white"
            });
        } else {
            $("body").css({
                backgroundColor: "white",
                color: "black"
            });
        }

        // Switch video
        switchVideo();
    });
});
// Dark Mode Toggle End

// Carousel Start
var slideIndex = 0;
carousel();
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 2000);
}

// AOS animation
AOS.init({
    offset: 300,
    duration: 1000,
});
// Carousel End

// Contact Start
function sendMail() {
    let parms = {
        uname: document.getElementById('uname').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    }
    emailjs.send("Your_Service_ID", "Your_Template_ID", parms).then(alert("Email Send Successfully!!!"))
}
// Contact End