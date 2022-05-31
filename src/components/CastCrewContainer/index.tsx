import * as React from "react";
import { CastCrewContainer, BoxSubtitle } from "./styles";

import {
  BoxContent,
  BoxTitle,
  BoxImage,
  MovieContainerImage,
} from "../../components/MovieSectionContainer/styles";

export type propsType = {
  name: string;
  src: string;
  info: any;
};

export default function index({ src, name, info }: propsType) {
  return (
    <CastCrewContainer>
      <BoxImage>
        <MovieContainerImage src={src} />
      </BoxImage>
      <BoxContent>
        <BoxTitle>
          <h3>{name}</h3>
        </BoxTitle>
        <BoxSubtitle>{info}</BoxSubtitle>
      </BoxContent>
    </CastCrewContainer>
  );
}
