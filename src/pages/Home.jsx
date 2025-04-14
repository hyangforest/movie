import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import { Container, Grid, Header } from "./Home.styled";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY; // 환경변수 REACT_APP 접두어 필수

export default function Home() {
  const [movies, setMovies] = useState([]);

  const fetchNowPlaying = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?`,
        {
          params: {
            api_key: API_KEY,
            language: "ko-KR",
            page: 1,
          },
        }
      );

      // 8개
      setMovies(res.data.results.slice(0, 8));
    } catch (error) {
      console.error("오류 발생", error);
    }
  };

  useEffect(() => {
    fetchNowPlaying();
  }, []);

  return (
    <Container>
      <Header>최신 영화</Header>
      <Grid>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Grid>
    </Container>
  );
}
