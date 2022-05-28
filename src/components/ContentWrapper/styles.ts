import styled from "@emotion/styled";

export const ContentWrapper = styled.div`
  width: 100%;
`;

export const PaddingProvider = styled.div`
  padding: 0.5rem 2rem 0.5rem 2rem;
  transition: 0.2s ease;
  @media (max-width: 300px) {
    padding: 0 1rem 0 1rem;
  }
  @media (min-width: 600px) {
    padding: 0 2rem 0 2rem;
  }
  @media (min-width: 1200px) {
    padding: 1.5rem 7rem 0rem 7rem;
    transition: 0.2s ease;
  }
`;
