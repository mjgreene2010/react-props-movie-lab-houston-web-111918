import React, { Component } from "react";
import MovieCard from "./card-components/MovieCard.js";
import movieData from "./data.js";

export default class MovieShowcase extends Component {
  generateMovieCards = () => {
    let movie = movieData.map(movie => {
      // map over your movieData array and return the correct
      return <MovieCard key={movie.title} {...movie} />;
    });
    return movie;
  };

  render() {
    return <div id="movie-showcase">{this.generateMovieCards()}</div>;
  }
}
