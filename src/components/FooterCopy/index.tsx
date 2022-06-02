import React from "react";

import {
  FooterCopy,
  CopyWrapper,
  Copyright,
  FooterCopyAnchor,
  CopyStack,
  HalfStack,
} from "./styles";

export type propsType = {};

export default function index({}: propsType) {
  return (
    <FooterCopy>
      <CopyWrapper>
        <CopyStack>
          <HalfStack>
            <FooterCopyAnchor>Legal</FooterCopyAnchor>
            <FooterCopyAnchor>Cookies</FooterCopyAnchor>
            <FooterCopyAnchor>Announcements</FooterCopyAnchor>
            <FooterCopyAnchor>Advertising</FooterCopyAnchor>
          </HalfStack>
          <HalfStack>
            <FooterCopyAnchor>Princing</FooterCopyAnchor>
            <FooterCopyAnchor>Docs</FooterCopyAnchor>
            <FooterCopyAnchor>Site Map</FooterCopyAnchor>
            <FooterCopyAnchor>What is VMovies?</FooterCopyAnchor>
          </HalfStack>
        </CopyStack>
        <Copyright>© 2022 VMovies</Copyright>
      </CopyWrapper>
    </FooterCopy>
  );
}
