import MediaCard from "../components/MediaCard";
import {
  Container,
  Grid,
  Header,
  SkeletonCard,
  MediaErrorBox,
  MediaRetryButton,
} from "./Home.styled";
import { fetchNowPlaying, fetchTV } from "../api/tmdb";
import { useFetch } from "../hooks/useFetch";
import { RefreshCcw } from "lucide-react";

import { useState } from 'react';

export default function Home() {
  const {
    data: movies,
    loading: movieLoading,
    error: movieError,
    refetch: refetchMovies,
  } = useFetch(fetchNowPlaying);
  const {
    data: tvShows,
    loading: tvShowLoading,
    error: tvShowError,
    refetch: refetchTvShows,
  } = useFetch(fetchTV);

  // 검색
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (!query.trim()) return;

    const prev = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    const next = [...prev, query];

    localStorage.setItem('searchHistory', JSON.stringify(next));
    console.log('📦 저장된 검색어 목록:', next);

    setQuery('');
  };
  // 검색

  return (
    <Container>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        placeholder="검색어를 입력하세요"
      />
      <Header>최신 영화</Header>
      {movieLoading ? (
        <Grid>
          {Array.from({ length: 8 }, (_, index) => (
            <SkeletonCard key={index} />
          ))}
        </Grid>
      ) : movieError ? (
        <MediaErrorBox>
          <p>{movieError}</p>
          <MediaRetryButton onClick={refetchMovies}>
            <RefreshCcw /> 새로고침
          </MediaRetryButton>
        </MediaErrorBox>
      ) : (
        <Grid>
          {movies &&
            movies.map((data) => <MediaCard key={data.id} data={data} />)}
        </Grid>
      )}
      <Header>최신 한국 드라마</Header>

      {tvShowLoading ? (
        <Grid>
          {Array.from({ length: 8 }, (_, index) => (
            <SkeletonCard key={index} />
          ))}
        </Grid>
      ) : tvShowError ? (
        <MediaErrorBox>
          <p>{tvShowError}</p>
          <MediaRetryButton onClick={refetchTvShows}>
            <RefreshCcw /> 새로고침
          </MediaRetryButton>
        </MediaErrorBox>
      ) : (
        <Grid>
          {tvShows &&
            tvShows.map((data) => <MediaCard key={data.id} data={data} />)}
        </Grid>
      )}
      <div>&nbsp;</div>
    </Container>
  );
}
