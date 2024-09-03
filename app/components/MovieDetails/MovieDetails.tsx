import React from "react";
import Image from "next/image";
interface movieDetailsProps {
  posterPath: string;
  title: string;
  description: string;
  releaseDate: string;
  rating: number;
}
const MovieDetails = ({
  posterPath,
  title,
  description,
  releaseDate,
  rating,
}: movieDetailsProps) => {
  return (
    <div>
      MovieDetails
      <Image
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt="title"
        width={500}
        height={720}
      />
      <h1>{title}</h1>
      <p>{description}</p>
      <div>
        {releaseDate}
        {rating}
      </div>
    </div>
  );
};

export default MovieDetails;
