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

/*like and dislike button*/ 
let likeCount = 0;
let dislikeCount = 0;
let currentSelection = null;

function toggleSelection(action) {
const likeSection = document.querySelector('.like-section');
const dislikeSection = document.querySelector('.dislike-section');

if (action === 'like') {
    if (currentSelection === 'like') {
    likeCount--;
    currentSelection = null;
    likeSection.classList.remove('selected');
    } else {
    if (currentSelection === 'dislike') {
        dislikeCount--;
        dislikeSection.classList.remove('selected');
    }
    likeCount++;
    currentSelection = 'like';
    likeSection.classList.add('selected');
    }
} else if (action === 'dislike') {
    if (currentSelection === 'dislike') {
    dislikeCount--;
    currentSelection = null;
    dislikeSection.classList.remove('selected');
    } else {
    if (currentSelection === 'like') {
        likeCount--;
        likeSection.classList.remove('selected');
    }
    dislikeCount++;
    currentSelection = 'dislike';
    dislikeSection.classList.add('selected');
    }
}

document.getElementById('like-count').textContent = likeCount;
document.getElementById('dislike-count').textContent = dislikeCount;
}

let selected = null; // Variable to keep track of the selected button

function toggleSelection(type) {
    const likeSection = document.querySelector('.like-section');
    const dislikeSection = document.querySelector('.dislike-section');
    const likeCount = document.getElementById('like-count');
    const dislikeCount = document.getElementById('dislike-count');

    if (type === 'like') {
        if (selected === 'like') {
            selected = null;
            likeSection.classList.remove('active'); // Remove active class
            likeSection.querySelector('.material-icons').textContent = 'thumb_up_off_alt'; // Reset icon
            likeCount.textContent = parseInt(likeCount.textContent) - 1; // Decrease like count
        } else {
            // If dislike is selected, reset it
            if (selected === 'dislike') {
                selected = 'like';
                dislikeSection.classList.remove('active'); // Remove active class from dislike
                dislikeSection.querySelector('.material-icons').textContent = 'thumb_down_off_alt'; // Reset dislike icon
                dislikeCount.textContent = parseInt(dislikeCount.textContent) - 1; // Decrease dislike count
            } else {
                selected = 'like'; // Set selected to like
            }
            likeSection.classList.add('active'); // Add active class
            likeCount.textContent = parseInt(likeCount.textContent) + 1; // Increase like count
        }
    } else if (type === 'dislike') {
        if (selected === 'dislike') {
            selected = null;
            dislikeSection.classList.remove('active'); // Remove active class
            dislikeSection.querySelector('.material-icons').textContent = 'thumb_down_off_alt'; // Reset icon
            dislikeCount.textContent = parseInt(dislikeCount.textContent) - 1; // Decrease dislike count
        } else {
            // If like is selected, reset it
            if (selected === 'like') {
                selected = 'dislike';
                likeSection.classList.remove('active'); // Remove active class from like
                likeSection.querySelector('.material-icons').textContent = 'thumb_up_off_alt'; // Reset like icon
                likeCount.textContent = parseInt(likeCount.textContent) - 1; // Decrease like count
            } else {
                selected = 'dislike'; // Set selected to dislike
            }
            dislikeSection.classList.add('active'); // Add active class
            dislikeCount.textContent = parseInt(dislikeCount.textContent) + 1; // Increase dislike count
        }
    }

    // Update styles based on selection
    updateStyles();
}

function updateStyles() {
    const likeIcon = document.querySelector('.like-section .material-icons');
    const dislikeIcon = document.querySelector('.dislike-section .material-icons');

    // Update icons based on selection
    if (selected === 'like') {
        likeIcon.textContent = 'thumb_up'; // Change to filled icon
    } else {
        likeIcon.textContent = 'thumb_up_off_alt'; // Change back to outlined icon
    }

    if (selected === 'dislike') {
        dislikeIcon.textContent = 'thumb_down'; // Change to filled icon
    } else {
        dislikeIcon.textContent = 'thumb_down_off_alt'; // Change back to outlined icon
    }
}
