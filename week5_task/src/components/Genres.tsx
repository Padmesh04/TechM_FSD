import axios from 'axios';

// Define the types for genre data
export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

interface GenresResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Genre[];
}

// API Key & URL
const API_KEY = '5a7d576436e640338d4844584d611731';  
const API_URL = 'https://api.rawg.io/api/genres';

// Function to fetch genres from the RAWG API
export const getGenres = async (): Promise<Genre[]> => {
  try {
    const response = await axios.get<GenresResponse>(API_URL, {
      params: { key: API_KEY }
    });

    return response.data.results;
  } catch (error) {
    console.error('%c⚠️ Error fetching genres:', 'color: red; font-weight: bold;', error);
    return [];
  }
};
