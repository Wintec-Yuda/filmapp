'use client';

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, setSearchResults, setCurrentPage } from '../store/slices/search';
import axios from 'axios';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';

const Hero: React.FC = () => {
  const dispatch = useDispatch();
  const { searchTerm, currentPage, apiKey } = useSelector((state: any) => state.search);
  const [inputValue, setInputValue] = useState(searchTerm);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearch = async () => {
    dispatch(setSearchTerm(inputValue));
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${inputValue}&page=${currentPage}`);
      dispatch(setSearchResults(response.data.Search));
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
      handleSearch();
    }
  };

  const handleNextPage = () => {
    dispatch(setCurrentPage(currentPage + 1));
    handleSearch();
  };

  return (
    <div className="lg:bg-hero bg-cover bg-center py-12 px-4 text-center rounded">
      <div className="mt-6 max-w-md mx-auto px-2">
        <h2 className="text-4xl font-bold">Selamat Datang di Filmapp</h2>
        <div className="mt-4 flex items-center rounded-lg">
          <input
            type="text"
            placeholder="Cari film..."
            value={inputValue}
            onChange={handleInputChange}
            className="py-3 px-4 w-full rounded-l-lg focus:outline-none placeholder:text-black text-black"
          />
          <button onClick={handleSearch} className="py-4 px-6 rounded-r-lg bg-blue-500 text-white">
            <FaSearch className="text-xl" />
          </button>
        </div>
        <div className="mt-4 flex justify-center items-center gap-4">
          <button onClick={handlePrevPage} className="mr-2 py-2 px-4 rounded bg-blue-500 text-white flex items-center">
            <FiChevronsLeft className="inline" size={22} />
            Prev
          </button>
          <span className="text-xl font-semibold py-2 px-6 rounded">{currentPage}</span>
          <button onClick={handleNextPage} className="ml-2 py-2 px-4 rounded bg-blue-500 text-white  flex items-center">
            Next
            <FiChevronsRight className="inline" size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
