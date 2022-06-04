import styled from "@emotion/styled";
import { propsType } from "./index";

export const ContentWrapper = styled.div`
  width: 100%;
  padding-bottom: 3rem;
`;

export const PaddingProvider = styled.div<Pick<propsType, "page">>`
  transition: 0.2s ease;
  padding: 1.5rem 7rem 0rem 7rem;

  @media (min-width: 600px) {
    padding: ${(props) =>
      props.page === "details" ? "1.5rem 4rem 0 4rem" : "0 7rem 0 7rem"};
  }
  @media (max-width: 1200px) {
    padding: ${(props) =>
      props.page === "details" ? "1.5rem  3.5rem 0 3.5rem" : "0 5rem 0 5rem"};
  }
  @media (max-width: 850px) {
    padding: ${(props) =>
      props.page === "details" ? "1.5rem  1rem 0 1rem" : "0 3.5rem 0 3.5rem"};
  }
  @media (max-width: 600px) {
    padding: ${(props) =>
      props.page === "details" ? "1.5rem  1rem 0 1rem" : "0 2rem 0 2rem"};
  }
  @media (max-width: 300px) {
    padding: ${(props) =>
      props.page === "details" ? "1.5rem  1rem 0 1rem" : "0 .5rem 0 .5rem"};
  }
`;
