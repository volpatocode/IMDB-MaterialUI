import React from "react";
import { StyledLogo } from "../Appbar/styles";
import { Logo } from "../Appbar";
import { PaddingProvider } from "../ContentWrapper/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedinIcon from "@mui/icons-material/Linkedin";
import FooterCopy from "../FooterCopy";
import {
  Footer,
  FooterContent,
  FooterAnchor,
  FooterStack,
  AnchorTitle,
  WrapperContent,
} from "./styles";

export type propsType = {};

export default function index({}: propsType) {
  return (
    <Footer>
      <PaddingProvider>
        <FooterContent>
          <WrapperContent>
            <StyledLogo>{Logo}</StyledLogo>
            <FooterStack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={2}
            >
              <AnchorTitle>About Us</AnchorTitle>
              <FooterAnchor>Our Company</FooterAnchor>
              <FooterAnchor>Privacy Policy</FooterAnchor>
              <FooterAnchor>Terms of Use</FooterAnchor>
            </FooterStack>
            <FooterStack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={2}
            >
              <AnchorTitle>Social Media</AnchorTitle>
              <FooterAnchor>Investors</FooterAnchor>
              <FooterAnchor>Providers</FooterAnchor>
              <FooterAnchor>Blog</FooterAnchor>
              <FooterAnchor>Newsroom</FooterAnchor>
            </FooterStack>
            <FooterStack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={2}
            >
              <AnchorTitle>Links</AnchorTitle>
              <FooterAnchor>Support</FooterAnchor>
              <FooterAnchor>Web Player</FooterAnchor>
              <FooterAnchor>Our App</FooterAnchor>
            </FooterStack>
            <FooterStack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={2}
            >
              <AnchorTitle>About me</AnchorTitle>
              <FooterAnchor>Linkedin</FooterAnchor>
              <FooterAnchor>Github</FooterAnchor>
            </FooterStack>
            <FooterStack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={2}
            >
              <AnchorTitle>VMovies Rewards</AnchorTitle>
              <FooterAnchor>TV Shows</FooterAnchor>
              <FooterAnchor>TV Movies</FooterAnchor>
              <FooterAnchor>Celebrities</FooterAnchor>
              <FooterAnchor>Companies</FooterAnchor>
              <FooterAnchor>Series Episodes</FooterAnchor>
            </FooterStack>
          </WrapperContent>
          <FooterStack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={4}
          >
            <TwitterIcon
              sx={{ color: "#f80000", cursor: "pointer" }}
              fontSize="large"
            />
            <InstagramIcon
              sx={{ color: "#f80000", cursor: "pointer" }}
              fontSize="large"
            />
            <LinkedinIcon
              sx={{ color: "#f80000", cursor: "pointer" }}
              fontSize="large"
            />
          </FooterStack>
        </FooterContent>
        <FooterCopy />
      </PaddingProvider>
    </Footer>
  );
}
