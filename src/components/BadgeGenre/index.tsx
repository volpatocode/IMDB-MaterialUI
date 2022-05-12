import * as React from "react";
import * as S from "./styles";

type propsType = {
  genre: string;
};

export default function index({ genre }: propsType) {
  return <S.BadgeGenre>{genre}</S.BadgeGenre>;
}
