import React from "react";
import { Card, Poster, Title, Overlay } from "./MovieCard.styled";

export default function MovieCard({ movie }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    : "https://via.placeholder.com/200x300?text=No+Image";

  return (
    <Card>
      <Poster src={imageUrl} alt={movie.title} />
      <Overlay>
        <Title>{movie.title}</Title>
      </Overlay>
    </Card>
  );
}
