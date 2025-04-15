import React, { useEffect, useState } from "react";
import axios from "axios";
import MediaCard from "../components/MediaCard";
import { Container, Grid, Header } from "./Home.styled";
import { formatMediaData } from '../lib/media/formatMediaData';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY; // 환경변수 REACT_APP 접두어 필수

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTVShows] = useState([]);

  // 최신 영화
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

  // 최신 TV
  const fetchTV = async () => {
    try {
      const res = await axios.get('https://api.themoviedb.org/3/discover/tv', {
        params: {
          api_key: API_KEY,
          language: 'ko-KR',
          sort_by: 'popularity.desc',
          with_origin_country: 'KR',
          first_air_date_year: new Date().getFullYear(), // 올해 첫 방영
        },
      });
      setTVShows(res.data.results.slice(0, 8));
    } catch (error) {
      console.error("오류 발생", error);
    }    
  };

  useEffect(() => {
    fetchNowPlaying();
    fetchTV();
  }, []);

  return (
    <Container>
      <Header>최신 영화</Header>
      <Grid>
        {movies.map((data) => (
          <MediaCard key={data.id} data={formatMediaData(data, 'movie')} />
        ))}
      </Grid>
      <Header>최신 한국 드라마</Header>
      <Grid>
        {tvShows.map((data) => (
          <MediaCard key={data.id} data={formatMediaData(data, 'tv')}/>
        ))}
      </Grid>
      <div>&nbsp;</div>
    </Container>
  );
}
