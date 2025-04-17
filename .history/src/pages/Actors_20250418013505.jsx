// src/components/Actors.jsx
import React from "react";
import actors from "../data/actors"; // Adjust path if needed

function Actors() {
  return (
    <section>
      <h1>Actors Page</h1>
      {actors.map((actor) => (
        <article key={actor.name}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie) => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

export default Actors;
``