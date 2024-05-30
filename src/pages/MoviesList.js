import { MovieCard } from "../components/MovieCard";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";
export const MoviesList = ({apiPath,title}) => {
  const { data: movies } = useFetch(apiPath);
  useEffect(()=>{
    document.title=`${title} / cimemate`
  })

  return (
    <main>
      <section className="max-w-7xl mx-auto py-4">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} /> 
          ))}
        </div>
      </section>
    </main>
  );
};
