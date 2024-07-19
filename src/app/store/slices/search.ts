import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Movie {
  Title: string;
  Year: string;
  Poster: string;
}

interface SearchState {
  searchTerm: string;
  searchResults: Movie[];
  currentPage: number;
  apiKey: string;
}

const initialState: SearchState = {
  searchTerm: '',
  searchResults: [],
  currentPage: 1,
  apiKey: process.env.NEXT_OMDB_API_KEY || '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    setSearchResults(state, action: PayloadAction<any[]>) {
      state.searchResults = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const { setSearchTerm, setSearchResults, setCurrentPage } = searchSlice.actions;
export default searchSlice.reducer;
