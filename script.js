document.addEventListener("DOMContentLoaded", function() {
    var toggleSearchButton = document.getElementById("toggleSearch");
    var searchContainer = document.getElementById("searchContainer");

    toggleSearchButton.addEventListener("click", function() {
        searchContainer.style.display = (searchContainer.style.display === "block") ? "none" : "block";
    });
});

const movieArrows = document.querySelectorAll(".movie-arrow");
const movieLists = document.querySelectorAll(".movie-list");
const gameArrows = document.querySelectorAll(".game-arrow");
const gameLists = document.querySelectorAll(".game-list");

const handleArrowClick = (arrows, lists) => {
    arrows.forEach((arrow, i) => {
        const itemNumber = lists[i].querySelectorAll("img").length;
        let clickCounter = 0;
        arrow.addEventListener("click", () => {
            const itemsVisible = Math.floor(lists[i].offsetWidth / 300); // Number of items visible in the container
            clickCounter++;
            if (clickCounter + itemsVisible > itemNumber) {
                clickCounter = 0;
                lists[i].style.transform = "translateX(0)";
            } else {
                const currentTransform = window.getComputedStyle(lists[i]).transform;
                const currentTranslateX = currentTransform !== 'none' ? parseFloat(currentTransform.split(',')[4]) : 0;
                lists[i].style.transform = `translateX(${currentTranslateX - 300}px)`;
            }
        });
    });
};

handleArrowClick(movieArrows, movieLists);
handleArrowClick(gameArrows, gameLists);



const buttons = document.querySelectorAll('.movie-list-item-button');

        buttons.forEach(button => {
            button.addEventListener('click', function(event) {
                // Find the corresponding description element
                const description = this.parentElement.querySelector('.description');
                
                // Toggle the display property of the description
                if (description.style.display === 'block') {
                    description.style.display = 'none';
                } else {
                    // Close all open descriptions
                    document.querySelectorAll('.description').forEach(desc => {
                        desc.style.display = 'none';
                    });
                    description.style.display = 'block';
                }

                // Stop event propagation to prevent triggering the document click event
                event.stopPropagation();
            });
        });

        // Close description when clicking outside
        document.addEventListener('click', () => {
            document.querySelectorAll('.description').forEach(description => {
                description.style.display = 'none';
            });
        });

        // Prevent closing the description when clicking inside the description
        document.querySelectorAll('.description').forEach(description => {
            description.addEventListener('click', function(event) {
                event.stopPropagation();
            });
        });




