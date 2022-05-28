import React from "react";
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
  WrapperLogo,
  FooterLogo,
  SocialStack,
  FirstStack,
  SecondStack,
} from "./styles";

export type propsType = {};

export default function index({}: propsType) {
  return (
    <Footer>
      <PaddingProvider>
        <FooterContent>
          <WrapperLogo>
            <FooterLogo>{Logo}</FooterLogo>
          </WrapperLogo>
          <WrapperContent>
            <FirstStack>
              <FooterStack
              >
                <AnchorTitle>About Us</AnchorTitle>
                <FooterAnchor>Our Company</FooterAnchor>
                <FooterAnchor>Privacy Policy</FooterAnchor>
                <FooterAnchor>Terms of Use</FooterAnchor>
              </FooterStack>
              <FooterStack
              >
                <AnchorTitle>Social Media</AnchorTitle>
                <FooterAnchor>Investors</FooterAnchor>
                <FooterAnchor>Providers</FooterAnchor>
                <FooterAnchor>Blog</FooterAnchor>
                <FooterAnchor>Newsroom</FooterAnchor>
              </FooterStack>
            </FirstStack>
            <SecondStack>
              <FooterStack
              >
                <AnchorTitle>Links</AnchorTitle>
                <FooterAnchor>Support</FooterAnchor>
                <FooterAnchor>Web Player</FooterAnchor>
                <FooterAnchor>Our App</FooterAnchor>
              </FooterStack>
              <FooterStack
              >
                <AnchorTitle>VMovies Rewards</AnchorTitle>
                <FooterAnchor>TV Shows</FooterAnchor>
                <FooterAnchor>TV Movies</FooterAnchor>
                <FooterAnchor>Celebrities</FooterAnchor>
                <FooterAnchor>Companies</FooterAnchor>
                <FooterAnchor>Series Episodes</FooterAnchor>
              </FooterStack>
            </SecondStack>
          </WrapperContent>
          <SocialStack>
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
          </SocialStack>
        </FooterContent>
        <FooterCopy />
      </PaddingProvider>
    </Footer>
  );
}
