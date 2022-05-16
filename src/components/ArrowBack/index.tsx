import * as React from "react";
import * as S from "./styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";

type propsType = {};

export default function index({}: propsType) {
  return (
      <Link href="/">
        <S.ArrowBack>
          <ArrowBackIcon fontSize="small" />
          Main menu
        </S.ArrowBack>
      </Link>
  );
}
