import React from "react";
import { BadgeGenre } from "./styles";

type propsType = {
  genre: string;
};

export default function BadgeGenreC({ genre }: propsType) {
  return <BadgeGenre>{genre}</BadgeGenre>;
}
