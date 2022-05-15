import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

    ::-webkit-scrollbar{
    width: 8px;
  }

  ::-webkit-scrollbar-track{
    background: #262626;
  }

  ::-webkit-scrollbar-thumb{
    background-color: #969696;
    border-radius: 2px;
    :hover{
      background-color: grey;
    }
  }

  body{
    background-color: #262626;
    overflow-x: hidden;
  }
  
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
