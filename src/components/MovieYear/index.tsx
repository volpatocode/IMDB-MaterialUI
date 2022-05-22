import * as React from "react";
import { MovieYear } from "./styles";

export type propsType = {
  year: any;
};

export default function index(props: propsType) {
  const { year } = props;
  return (
    <MovieYear {...props}>
      <p>{year}</p>
    </MovieYear>
  );
}
