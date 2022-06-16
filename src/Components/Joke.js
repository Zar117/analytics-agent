import React, { useState } from "react";

export const Joke = () => {
  const [joke, setJoke] = useState([]);

  const fetchJokeData = async () => {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any");
    const data = await response.json();
    console.log(data.type);
    const transformedJoke = {
      category: data.category,
      type: data.type,
      joke: data.joke,
      setup: data.setup,
      delivery: data.delivery,
      safe: data.safe,
    };
    setJoke(transformedJoke);
    console.log(transformedJoke);
  };
  return (
    <React.Fragment>
     <button onClick={fetchJokeData}>Get Joke</button>
      {joke.type === "single" ? (
        <p>{joke.joke}</p>
      ) : (
        <React.Fragment>
          <p>{joke.setup}</p>
          <p>{joke.delivery} </p>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
