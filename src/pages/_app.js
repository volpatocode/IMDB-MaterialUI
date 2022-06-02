import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

    ::-webkit-scrollbar{
    width: 8px;
  }

  ::-webkit-scrollbar-track{
    background: #0f0f0f;
  }

  ::-webkit-scrollbar-thumb{
    background-color: #262626;
    border-radius: 2px;
    :hover{
      background-color: grey;
    }
  }

  body{
    background-color: #0f0f0f;
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
