import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: #3a3a3a;
  }

  a {
    color: #6e6efe;
    text-decoration: none;
    font-weight: bold;
  }
`

function App ({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App