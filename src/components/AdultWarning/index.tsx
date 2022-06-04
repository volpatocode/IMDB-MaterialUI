import React from "react";
import { AdultWarning } from "./styles";

export type propsType = {
};

export default function AdultWarningC({}: propsType) {
  return (
    <AdultWarning>
      <p>18</p>
    </AdultWarning>
  );
}
