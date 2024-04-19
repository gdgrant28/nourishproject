// Add an event listener to the "Get Started" button
document.getElementById("getStartedButton").addEventListener("click", function() {
    // Smoothly fade out the current page
    document.body.style.transition = "opacity 0.5s ease-in-out";
    document.body.style.opacity = "0";

    // Wait for the fade-out effect to complete
    setTimeout(function() {
        // Navigate to the new page
        window.location.href = ""C:\Users\19808\Desktop\New folder (2)\welcome1.html"";
    }, 500); // Wait for 0.5 seconds, same duration as the transition
});
