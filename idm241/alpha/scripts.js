document.addEventListener("DOMContentLoaded", () => {
    var coll = document.getElementsByClassName("collapsible")[0]; // Get the first collapsible button
    var input = document.querySelector(".personality-input");
    var content = document.querySelector(".content");

    coll.addEventListener("click", function () {
        this.classList.toggle("active");

        // Hide the button when it is clicked
        if (this.style.display !== 'none') {
            this.style.display = 'none'; // Hide the button
            input.style.display = 'block'; // Show the input
            input.classList.add('flat-bottom'); // Add flat bottom style
        }

        // Toggle the collapsible content
        if (content.style.maxHeight) {
            content.style.maxHeight = null; // Instantly hide content
            content.classList.remove("show");
            // Reset button shape
            this.classList.remove("active"); // Remove active class to reset shape
            this.style.display = 'block'; // Show the button again
            input.style.display = 'none'; // Hide the input again
        } else {
            content.style.maxHeight = "none"; // Instantly show content
            content.classList.add("show");
        }
    });

    // Close the collapsible content when clicking outside
    document.addEventListener("click", function (event) {
        // Check if the click was outside the collapsible button and content
        if (!coll.contains(event.target) && !content.contains(event.target)) {
            // If content is open, close it
            if (content.classList.contains("show")) {
                content.style.maxHeight = null; // Instantly hide content
                content.classList.remove("show");
                coll.classList.remove("active"); // Reset button shape
                coll.style.display = 'block'; // Show the button again
                input.style.display = 'none'; // Hide the input again
            }
        }
    });
});
