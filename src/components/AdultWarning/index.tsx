import * as React from "react";
import { AdultWarning} from "./styles";

export type propsType = {
};

export default function index({}: propsType) {
  return (
    <AdultWarning>
      <p>18</p>
    </AdultWarning>
  );
}
