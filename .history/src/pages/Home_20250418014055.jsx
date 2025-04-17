// src/components/Home.jsx
import React from "react";
import movies from "./pages/movie"; // Adjust path

function Home() {
  return (
    <section>
      <h1>Home Page</h1>
      {movies.map((movie) => (
        <article key={movie.title}>
          <h2>{movie.title}</h2>
          <p>Time: {movie.time} minutes</p>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

export default Home;
