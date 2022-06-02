import React from "react";
import { BadgeGenre } from "./styles";

type propsType = {
  genre: string;
};

export default function index({ genre }: propsType) {
  return <BadgeGenre>{genre}</BadgeGenre>;
}
