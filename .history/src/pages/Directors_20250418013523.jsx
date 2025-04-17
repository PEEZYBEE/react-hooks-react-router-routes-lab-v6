// src/components/Directors.jsx
import React from "react";
import directors from "../data/directors"; // Adjust path

function Directors() {
  return (
    <section>
      <h1>Directors Page</h1>
      {directors.map((director) => (
        <article key={director.name}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie) => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

export default Directors;
