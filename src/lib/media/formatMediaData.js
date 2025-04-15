export const formatMediaData = (raw, type) => {
    return {
      id: raw.id,
      title: raw.title || raw.name || '제목 없음',
      date: raw.release_date || raw.first_air_date || '날짜 없음',
      overview: raw.overview || '',
      poster: raw.poster_path
        ? `https://image.tmdb.org/t/p/w300${raw.poster_path}`
        : 'https://via.placeholder.com/300x450?text=No+Image',
      type,
    };
  };