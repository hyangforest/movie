import React from "react";
import { Card, Poster, Title, Overlay, OverView } from "./MediaCard.styled";

export default function MediaCard({ data }) {
  const { title, poster, overview } = data;

  return (
    <Card>
      <Poster src={poster} alt={title} />
      <Overlay>
        <Title $hasoverview={!!overview}>{title}</Title>        
        {overview && <OverView>{overview}</OverView>}
      </Overlay>
    </Card>
  );
}
