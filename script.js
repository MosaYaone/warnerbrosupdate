document.addEventListener("DOMContentLoaded", function() {
    var toggleSearchButton = document.getElementById("toggleSearch");
    var searchContainer = document.getElementById("searchContainer");

    toggleSearchButton.addEventListener("click", function() {
        searchContainer.style.display = (searchContainer.style.display === "block") ? "none" : "block";
    });
});

const movieArrows = document.querySelectorAll(".movie-arrow");
const gameArrows = document.querySelectorAll(".game-arrow");
const movieLists = document.querySelectorAll(".movie-list");
const gameLists = document.querySelectorAll(".game-list");

movieArrows.forEach((arrow, i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        clickCounter++;
        if (itemNumber - (4 + clickCounter) >= 0) {
            const currentTransform = window.getComputedStyle(movieLists[i]).transform;
            const currentTranslateX = currentTransform !== 'none' ? parseFloat(currentTransform.split(',')[4]) : 0;
            movieLists[i].style.transform = `translateX(${currentTranslateX - 300}px)`;
        } else {
            movieLists[i].style.transform = "translateX(0)";
        }
    });  
});

gameArrows.forEach((arrow, i) => {
    const itemNumber = gameLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        clickCounter++;
        if (itemNumber - (4 + clickCounter) >= 0) {
            const currentTransform = window.getComputedStyle(gameLists[i]).transform;
            const currentTranslateX = currentTransform !== 'none' ? parseFloat(currentTransform.split(',')[4]) : 0;
            gameLists[i].style.transform = `translateX(${currentTranslateX - 300}px)`;
        } else {
            gameLists[i].style.transform = "translateX(0)";
        }
    });  
});


function openDescription(button) {
    var movieItem = button.parentElement;
    var description = movieItem.querySelector('.description');
    description.style.display = 'flex';
}

window.onclick = function(event) {
    var descriptions = document.querySelectorAll('.description');
    descriptions.forEach(function(description) {
        var descriptionContent = description.querySelector('.description-content');
        if (event.target === description) {
            description.style.display = 'none';
        }
    });
};



