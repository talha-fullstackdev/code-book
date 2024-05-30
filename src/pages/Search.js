import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
// import { useTitle } from "../hooks/useTitle";
import { MovieCard } from "../components/MovieCard";
export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);

  // useTitle(`Search result for ${queryTerm}`);

  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">{ movies.length === 0 ? `No result found for '${queryTerm}'` : `Result for '${queryTerm}'` }</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">       
          { movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          )) }          
        </div>
      </section>
    </main>
  )
}
//////////////////////////////////////////////
// import { useSearchParams } from "react-router-dom";
// import { useFetchs } from "../hooks/useFetchs";
// // import { useTitle } from "../hooks/useTitle";
// import { MovieCard } from "../components/MovieCard";

// export const Search = ({ apiPath }) => {
//   const [searchParams] = useSearchParams();
//   const queryTerm = searchParams.get("q");

//   const { data: movies } = useFetchs(`${apiPath}&query=${queryTerm}`);

//   // useTitle(`Search result for ${queryTerm}`);

//   return (
//     <main>
//       <section className="py-7">
//         <p className="text-3xl text-gray-700 dark:text-white">{movies.length === 0 ? `No result found for '${queryTerm}'` : `Result for '${queryTerm}'`}</p>
//       </section>
//       <section className="max-w-7xl mx-auto py-7">
//         <div className="flex justify-start flex-wrap">       
//           {movies.map((movie) => (
//             <MovieCard key={movie.id} movie={movie} />
//           ))}          
//         </div>
//       </section>
//     </main>
//   );
// };
