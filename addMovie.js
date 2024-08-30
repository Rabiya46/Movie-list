const movies = JSON.parse(localStorage.getItem("movies")) || [];
const add = document.getElementById("add");

const addMovie = () => {
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const duration = document.getElementById("duration");
  const image = document.getElementById("image");

  if (title.value && description.value && duration.value && image.value) {
    const movie = {
      id: Math.random(),
      image: image.value,
      title: title.value,
      description: description.value,
      titleDescription: "Описание",
      duration: duration.value,
    };

    title.value = "";
    description.value = "";
    duration.value = "";
    image.value = "";

    movies.push(movie); //  [] -> [{}]
    localStorage.setItem("movies", JSON.stringify(movies));

    renderMovie();
  } else {
    alert("Напиши хотя бы одну букву!!!");
  }
};

add.addEventListener("click", addMovie);

console.log(movies);

const body = document.querySelector("body");
const section = document.querySelector(".movies");

const deleteFunc = (movie) => {
  const filtered = movies.filter((item) => item.id !== movie.id);
  localStorage.setItem("movies", JSON.stringify(filtered));
  renderMovie();
};

function renderMovie() {
  section.innerHTML = "";

  const updatedMovies = JSON.parse(localStorage.getItem("movies")) || [];

  updatedMovies.map((item) => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.className = "image";
    div.className = "card";
    img.src = item.image;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";

    deleteButton.addEventListener("click", () => {
      deleteFunc(item);
    });

    div.append(img, deleteButton);
    section.append(div);
  });

  body.appendChild(section);
}

renderMovie();
