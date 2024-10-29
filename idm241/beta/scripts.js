document.addEventListener("DOMContentLoaded", () => {
    var coll = document.getElementsByClassName("collapsible")[0]; // get the first collapsible button
    var input = document.querySelector(".personality-input");
    var content = document.querySelector(".content");

    coll.addEventListener("click", function () {
        this.classList.toggle("active");

        // hide the button when it is clicked
        if (this.style.display !== 'none') {
            this.style.display = 'none'; // hide the button
            input.style.display = 'block'; // show the input
            input.classList.add('flat-bottom'); // add flat bottom style
        }

        // toggle the collapsible content
        if (content.style.maxHeight) {
            content.style.maxHeight = null; // instantly hide content
            content.classList.remove("show");
            // Reset button shape
            this.classList.remove("active"); // remove active class to reset shape
            this.style.display = 'block'; // show the button again
            input.style.display = 'none'; // hide the input again
        } else {
            content.style.maxHeight = "none"; // instantly show content
            content.classList.add("show");
        }
    });

    // close the collapsible content when clicking outside
    document.addEventListener("click", function (event) {
        // check if the click was outside the collapsible button and content
        if (!coll.contains(event.target) && !content.contains(event.target)) {
            // if content is open, close it
            if (content.classList.contains("show")) {
                content.style.maxHeight = null; // instantly hide content
                content.classList.remove("show");
                coll.classList.remove("active"); // reset button shape
                coll.style.display = 'block'; // show the button again
                input.style.display = 'none'; // hide the input again
            }
        }
    });
});
