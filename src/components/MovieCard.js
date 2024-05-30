
import React, { useState } from "react";
import { Link } from "react-router-dom";
import backUpImage from "../assets/backup.avif";
export const MovieCard = ({ movie }) => {
  const { id, original_title, overview, poster_path } = movie;
  const [isExpanded, setIsExpanded] = useState(false);
  const poster = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : backUpImage;

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-64 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto mt-8">
      <Link to={`/movie/${id}`}>
        <img className="rounded-t-lg" src={poster} alt="Movie Image" />
      </Link>
      <div className="p-4">
        <Link to={`/movie/${id}`}>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white md:text-2xl">
            {original_title}
          </h5>
        </Link>
        <p className={`mb-3 text-sm font-normal text-gray-700 dark:text-gray-400 md:text-base ${!isExpanded ? 'line-clamp-3' : ''}`}>
          {overview}
        </p>
        <button 
          className="text-blue-500 hover:underline "
          onClick={handleToggle}
        >
          {isExpanded ? "Show Less" : "View More"}
        </button>
      </div>
    </div>
  );
}; 
