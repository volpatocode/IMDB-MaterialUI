import * as React from "react";
import {
  CastCrewContainer,
  MovieContainerImage,
  BoxContent,
  BoxTitle,
  BoxInfo,
} from "./styles";

export type propsType = {
  name: string;
  src: string;
  info: any;
};

export default function index({ src, name, info }: propsType) {
  return (
    <CastCrewContainer>
      <MovieContainerImage src={src} />
      <BoxContent>
        <BoxTitle>
          <h3>{name}</h3>
        </BoxTitle>
        <BoxInfo>{info}</BoxInfo>
      </BoxContent>
    </CastCrewContainer>
  );
}
