import styled from "@emotion/styled";

export const AdultWarning = styled.div`
  background-color: rgba(0, 0, 0, 1);
  :hover {
    background-color: rgba(0, 0, 0, 0.85);
    transition: 100ms ease-in-out;
  }
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  font-weight: 600;
  p {
    color: #fff;
  }
  width: fit-content;
  margin-top: 1.6rem;
`;
