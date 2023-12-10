const startAddMovieButton = document.querySelector("header button");
const addMovieModel = document.getElementById("add-modal");
// document.querySelector("#add-modal")
// document.querySelector("body").children[1];
const backDrop = document.getElementById("backdrop");
const cancelButton = document.querySelector(".btn--passive");
const Addbutton = cancelButton.nextElementSibling;
const userInput = document.querySelectorAll("input");
const movieListArray = [];
const sectionHidder = document.getElementById("entry-text");
const getDelete = document.getElementById("delete-modal");


const backdropElementHandler = () => {
    backDrop.classList.toggle('visible');
}
const hideSection = () => {

    if (movieListArray.length === 0) {
        sectionHidder.style.display = "block";
    } else {
        sectionHidder.style.display = "none";
    }

};
const closeMovieModel = () => {

    addMovieModel.classList.remove('visible');
}

const showMovieModel = () => {

    addMovieModel.classList.add('visible');
    backdropElementHandler();

}
const cancelMovieModelHandler = () => {

    closeMovieModel();
    clearUserInput();
    backdropElementHandler();

};
const clearUserInput = () => {
    for (const userdata of userInput) {

        userdata.value = "";
    }
};


const deleteMovie = (movieid) => {
    let movieIndex = 0;
    for (const movie of movieListArray) {

        if (movie.id === movieid) {
            break;
        }
        movieIndex++;
    }
    movieListArray.splice(movieIndex, 1);
    const insertList = document.getElementById("movie-list");
    insertList.children[movieIndex].remove();
    // insertList.removeChild(insertList.children[insertList]);
    cancelMovieDeletionHandler();
    hideSection();
}

const deleteMovieHandler = (movieid) => {

    getDelete.classList.add('visible');
    backdropElementHandler();

    const confirmCancelDelete = getDelete.querySelector(".btn--passive");

    let confirmYesDelete = getDelete.querySelector(".btn--danger");

    confirmYesDelete.replaceWith(confirmYesDelete.cloneNode(true));
    confirmYesDelete = getDelete.querySelector(".btn--danger");

    confirmCancelDelete.removeEventListener('click', cancelMovieDeletionHandler);
    confirmCancelDelete.addEventListener('click', cancelMovieDeletionHandler);
    confirmYesDelete.addEventListener('click', deleteMovie.bind(null, movieid))


};
const cancelMovieDeletionHandler = () => {

    backdropElementHandler();
    getDelete.classList.remove('visible');
}


const displayListOnScreen = (id, Title, image, rating) => {

    const movie = document.createElement("li");
    movie.className = "movie-element";
    movie.innerHTML = `
    <div class="movie-element__image"><img src="${image}" alt="${Title}"></div>
    <div class="movie-element__info"><h1>${Title}</h1></div>
    <p>${rating} /5 stars</p>
    `;
    movie.addEventListener('click', deleteMovieHandler.bind(null, id));
    const insertList = document.getElementById("movie-list");
    insertList.append(movie);


};

const addMovieHandler = () => {

    const movieTitle = userInput[0].value;
    const movieURL = userInput[1].value;
    const movieRatings = userInput[2].value;

    if (movieTitle.trim() === "" ||
        movieURL.trim() === "" ||
        movieRatings.trim() === "" ||
        movieRatings.trim() < 0 || movieRatings.trim() > 6) {

        alert("you have entered invalid input");
        return;
    }

    const movieListObject = {
        id: Math.random().toString(),
        Title: movieTitle,
        URL: movieURL,
        Ratings: movieRatings
    }

    movieListArray.push(movieListObject);
    console.log(movieListArray);
    closeMovieModel();
    backdropElementHandler();
    clearUserInput();
    displayListOnScreen(movieListObject.id, movieListObject.Title, movieListObject.URL, movieListObject.Ratings);
    hideSection();
};

const backDropClickToggle = () => {
    cancelMovieDeletionHandler();
    closeMovieModel();
    clearUserInput();
};

startAddMovieButton.addEventListener('click', showMovieModel);
backDrop.addEventListener('click', backDropClickToggle);
cancelButton.addEventListener('click', cancelMovieModelHandler);
Addbutton.addEventListener('click', addMovieHandler);