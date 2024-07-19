'use client';

import Card from './Card';
import { useSelector } from 'react-redux';

interface Movie {
  Title: string;
  Year: string;
  Poster: string;
}

const Movies: React.FC = () => {

  const movies = useSelector((state: any) => state.search.searchResults);

  return (
    <div className="mx-auto px-4 min-h-[calc(100vh-31rem)] pb-10">
      <h1 className="text-3xl font-semibold my-8">Movies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {movies?.map((movie: Movie, index: number) => (
          <div key={index} className="flex justify-center">
            <Card title={movie.Title} year={movie.Year} poster={movie.Poster} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
