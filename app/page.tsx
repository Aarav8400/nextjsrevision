import Image from "next/image";
import MovieCard from "./components/MovieCard";

const apiKey = process.env.API_KEY;
const getMovies = async () => {
  const moviesList = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  );
  const movieListJson = await moviesList.json();
  return movieListJson;
};
export default async function Home() {
  const movieList = await getMovies();
  console.log(movieList);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to movie Database</h1>
      <div>
        {movieList.results.length > 0 &&
          movieList.results.map((movie: any) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              title={movie.title}
              description={movie.description}
              id={movie.id}
            />
          ))}
      </div>
    </main>
  );
}
