import React from "react";
import { FooterStack } from "../Footer/styles";

import { FooterCopy, CopyWrapper, Copyright, FooterCopyAnchor } from "./styles";

export type propsType = {};

export default function index({}: propsType) {
  return (
    <FooterCopy>
      <CopyWrapper>
        <FooterStack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          <FooterCopyAnchor>Legal</FooterCopyAnchor>
          <FooterCopyAnchor>Cookies</FooterCopyAnchor>
          <FooterCopyAnchor>Announcements</FooterCopyAnchor>
          <FooterCopyAnchor>Advertising</FooterCopyAnchor>
          <FooterCopyAnchor>Princing</FooterCopyAnchor>
          <FooterCopyAnchor>Docs</FooterCopyAnchor>
          <FooterCopyAnchor>Site Map</FooterCopyAnchor>
          <FooterCopyAnchor>What is VMovies?</FooterCopyAnchor>
        </FooterStack>
        <Copyright>© 2022 VMovies</Copyright>
      </CopyWrapper>
    </FooterCopy>
  );
}
