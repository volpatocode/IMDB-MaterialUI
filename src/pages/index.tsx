import * as React from "react";
import Appbar from "../components/Appbar";
import ContentWrapper from "../components/ContentWrapper";

type propsType = {};

export default function index({}: propsType) {
  return (
    <>
      <Appbar page="index" />
      <ContentWrapper />
    </>
  );
}
