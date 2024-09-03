import Image from "next/image";
import Link from "next/link";

interface MovieCardProps {
  posterPath: string;
  title: string;
  description: string;
  id: number;
}
const MovieCard = ({ posterPath, title, description, id }: MovieCardProps) => {
  return (
    <Link href={`/movie/${id}`}>
      <div>
        <Image
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt="title"
          width={300}
          height={220}
        />
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};
export default MovieCard;
