import MovieDetails from "@/app/components/MovieDetails";
interface MovieDetailsPageProps {
  params: {
    id: string;
  };
}

const getMovieDetails = async (id: string) => {
  const movieDetails = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
  );
  const movieDetaisJson = await movieDetails.json();
  return movieDetaisJson;
};

const MovieDetailsPage = async ({ params }: MovieDetailsPageProps) => {
  const { id } = params;
  const movieDetails = await getMovieDetails(id);
  console.log(movieDetails);

  return (
    <div>
      <h1>movie Details Page</h1>
      <MovieDetails
        posterPath={movieDetails.poster_path}
        title={movieDetails.title}
        description={movieDetails.overview}
        releaseDate={movieDetails.release_date}
        rating={movieDetails.vote_average}
      />
    </div>
  );
};
export default MovieDetailsPage;
