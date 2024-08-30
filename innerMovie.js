const movie = JSON.parse(localStorage.getItem("selectedMovie"));

if (movie) {
  document.getElementById("movieImage").src = movie.image;
  document.getElementById("movieTitle").textContent = movie.title;
  document.getElementById("movieDescription").textContent = movie.description;
  document.getElementById("movieCity").textContent = `City: ${movie.city}`;
  document.getElementById("movieStar").textContent = `Star: ${movie.star}`;
}

console.log(movie);
