import axios from "axios";
import { formatMediaData } from "../lib/media/formatMediaData";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BAESE_URL = "https://api.themoviedb.org/3";

// 최신 영화
export const fetchNowPlaying = async () => {
  const res = await axios.get(`${BAESE_URL}/movie/now_playing`, {
    params: {
      api_key: API_KEY,
      language: "ko-KR",
    },
  });
  return res.data.results
    .slice(0, 8)
    .map((item) => formatMediaData(item, "movie"));
};

// 최신 TV
export const fetchTV = async () => {
  const res = await axios.get(`${BAESE_URL}/discover/tv`, {
    params: {
      api_key: API_KEY,
      language: "ko-KR",
      sort_by: "popularity.desc",
      with_origin_country: "KR",
      first_air_date_year: new Date().getFullYear(), // 올해 첫 방영
    },
  });

  return res.data.results
    .slice(0, 8)
    .map((item) => formatMediaData(item, "tv"));
};
