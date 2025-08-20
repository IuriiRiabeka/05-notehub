import axios from 'axios';
import type { MoviesResponse } from "../services/noteService" ;

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;
const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMovies = async (query: string, page: number = 1): Promise<MoviesResponse> => {
  const { data } = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      query,
      page,
    },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  return data;
};
