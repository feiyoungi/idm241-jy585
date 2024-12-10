document.addEventListener("DOMContentLoaded", () => {
    // Collapsible Button Logic
    var coll = document.getElementsByClassName("collapsible")[0];
    var input = document.querySelector(".personality-input");
    var content = document.querySelector(".content");

    if (coll) {
        coll.addEventListener("click", function () {
            this.classList.toggle("active");

            if (this.style.display !== 'none') {
                this.style.display = 'none'; // Hide the button
                input.style.display = 'block'; // Show the input
                input.classList.add('flat-bottom'); // Add flat bottom style
            }

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.classList.remove("show");
                this.classList.remove("active");
                this.style.display = 'block'; // Show the button again
                input.style.display = 'none'; // Hide the input again
            } else {
                content.style.maxHeight = "none";
                content.classList.add("show");
            }
        });

        document.addEventListener("click", function (event) {
            if (!coll.contains(event.target) && !content.contains(event.target)) {
                if (content.classList.contains("show")) {
                    content.style.maxHeight = null;
                    content.classList.remove("show");
                    coll.classList.remove("active");
                    coll.style.display = 'block';
                    input.style.display = 'none';
                }
            }
        });
    }

    // Like and Dislike Button Logic
    let selected = null;

    function toggleLikeDislike(type, likeSection, dislikeSection, likeCount, dislikeCount, likeIcon, dislikeIcon) {
        if (type === 'like') {
            if (selected === 'like') {
                selected = null;
                likeSection.classList.remove('active');
                likeIcon.textContent = 'thumb_up_off_alt'; // Reset like icon
                likeCount.textContent = parseInt(likeCount.textContent) - 1;
            } else {
                if (selected === 'dislike') {
                    selected = 'like';
                    dislikeSection.classList.remove('active');
                    dislikeIcon.textContent = 'thumb_down_off_alt'; // Reset dislike icon
                    dislikeCount.textContent = parseInt(dislikeCount.textContent) - 1;
                } else {
                    selected = 'like';
                }
                likeSection.classList.add('active');
                likeIcon.textContent = 'thumb_up'; // Filled like icon
                likeCount.textContent = parseInt(likeCount.textContent) + 1;
            }
        } else if (type === 'dislike') {
            if (selected === 'dislike') {
                selected = null;
                dislikeSection.classList.remove('active');
                dislikeIcon.textContent = 'thumb_down_off_alt'; // Reset dislike icon
                dislikeCount.textContent = parseInt(dislikeCount.textContent) - 1;
            } else {
                if (selected === 'like') {
                    selected = 'dislike';
                    likeSection.classList.remove('active');
                    likeIcon.textContent = 'thumb_up_off_alt'; // Reset like icon
                    likeCount.textContent = parseInt(likeCount.textContent) - 1;
                } else {
                    selected = 'dislike';
                }
                dislikeSection.classList.add('active');
                dislikeIcon.textContent = 'thumb_down'; // Filled dislike icon
                dislikeCount.textContent = parseInt(dislikeCount.textContent) + 1;
            }
        }
    }

    // Disable Like/Dislike functionality for the second post
    const posts = document.querySelectorAll('.post');

    posts.forEach((post, index) => {
        const likeSection = post.querySelector('.like-section');
        const dislikeSection = post.querySelector('.dislike-section');
        const likeCount = post.querySelector('#like-count');
        const dislikeCount = post.querySelector('#dislike-count');
        const likeIcon = likeSection.querySelector('.material-icons');
        const dislikeIcon = dislikeSection.querySelector('.material-icons');

        if (index === 1) {
            // Second post (index 1) - Disable like/dislike buttons
            likeSection.style.pointerEvents = 'none';
            dislikeSection.style.pointerEvents = 'none';
            return;
        }

        likeSection.addEventListener('click', () => toggleLikeDislike('like', likeSection, dislikeSection, likeCount, dislikeCount, likeIcon, dislikeIcon));
        dislikeSection.addEventListener('click', () => toggleLikeDislike('dislike', likeSection, dislikeSection, likeCount, dislikeCount, likeIcon, dislikeIcon));
    });

    // Filter Buttons Logic
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            filterButtons.forEach((btn) => btn.classList.remove('selected'));
            button.classList.add('selected');
        });
    });

    // "More" Button and Dropdown Logic
    const moreButton = document.querySelector('.more-btn');
    const dropdownContent = document.querySelector('.dropdown-content');

    if (moreButton && dropdownContent) {
        moreButton.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownContent.classList.toggle('show');

            if (dropdownContent.classList.contains('show')) {
                moreButton.style.borderBottomLeftRadius = '0px';
                moreButton.style.borderBottomRightRadius = '0px';
            } else {
                moreButton.style.borderBottomLeftRadius = '30px';
                moreButton.style.borderBottomRightRadius = '30px';
            }
        });

        document.addEventListener('click', () => {
            dropdownContent.classList.remove('show');
            moreButton.style.borderBottomLeftRadius = '30px';
            moreButton.style.borderBottomRightRadius = '30px';
        });
    }
});

// Get the button
let backToTopBtn = document.getElementById("backToTopBtn");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// When the user clicks the button, scroll to the top of the document
backToTopBtn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"  // Smooth scrolling
  });
};

