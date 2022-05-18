import * as React from "react";
import Link from "next/link";
import BadgeGenre from "../BadgeGenre";

import {
  StyledCardMedia,
  StyledCardContent,
  StyledCard,
  TitleTypography,
  GenresTypography,
} from "./styles";

type propsType = {
  title: string;
  vote_average: string;
  poster_path: string;
  id: string;
  movieReq: any;
};

export default function index({
  title,
  poster_path,
  id,
}: propsType) {
  const API_IMG = "https://image.tmdb.org/t/p/original/";
  const movieId = `${id}`;

  return (
    <>
      {poster_path && (
        <Link href={`/movies/movie?movie=${movieId}`}>
          <StyledCard>
            <StyledCardMedia
              component="img"
              alt={poster_path ? poster_path : "No poster provided"}
              image={poster_path ? API_IMG + poster_path : ""}
            />
            <StyledCardContent>
              <TitleTypography variant="h5" component="h5">
                {title ? title : "No title provided"}
              </TitleTypography>
              <GenresTypography variant="body2" color="text.secondary">
                {/* {movieReq?.genres?.map((genre) => (
                  <BadgeGenre key={genre.id} genre={genre.name} />
                ))} */}
              </GenresTypography>
            </StyledCardContent>
          </StyledCard>
        </Link>
      )}
    </>
  );
}
