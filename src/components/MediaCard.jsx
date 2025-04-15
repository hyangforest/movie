import React from "react";
import { Card, Poster, Title, Overlay } from "./MediaCard.styled";

export default function MediaCard({ data }) {
  const { title, poster } = data;

  return (
    <Card>
      <Poster src={poster} alt={title} />
      <Overlay>
        <Title>{title}</Title>
      </Overlay>
    </Card>
  );
}
