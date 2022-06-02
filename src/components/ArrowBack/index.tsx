import React from "react";
import { ArrowBack } from "./styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";

type propsType = {};

export default function index({}: propsType) {
  return (
    <Link href="/">
      <ArrowBack>
        <ArrowBackIcon fontSize="small" />
        Main menu
      </ArrowBack>
    </Link>
  );
}
