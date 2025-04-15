import React, { useEffect, useState } from "react";
import MediaCard from "../components/MediaCard";
import { Container, Grid, Header } from "./Home.styled";
import { fetchNowPlaying, fetchTV } from "../api/tmdb";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTVShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const movieDate = await fetchNowPlaying();
      const tvData = await fetchTV();
      
      setMovies(movieDate);
      setTVShows(tvData);
    };
    
    fetchTV();
    fetchData();
  }, []);

  return (
    <Container>
      <Header>최신 영화</Header>
      <Grid>
        {movies.map((data) => (
          <MediaCard key={data.id} data={data} />
        ))}
      </Grid>
      <Header>최신 한국 드라마</Header>
      <Grid>
        {tvShows.map((data) => (
          <MediaCard key={data.id} data={data}/>
        ))}
      </Grid>
      <div>&nbsp;</div>
    </Container>
  );
}
