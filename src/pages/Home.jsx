import MediaCard from "../components/MediaCard";
import { Container, Grid, Header, SkeletonCard } from "./Home.styled";
import { fetchNowPlaying, fetchTV } from "../api/tmdb";
import { useFetch } from "../hooks/useFetch";

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

  return (
    <Container>
      <Header>최신 영화</Header>
      {movieLoading ? (
        <Grid>
          {Array.from({ length: 8 }, (_, index) => (
            <SkeletonCard key={index} />
          ))}
        </Grid>
      ) : movieError ? (
        <div>{movieError}</div>
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
        <div>{tvShowError}</div>
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
