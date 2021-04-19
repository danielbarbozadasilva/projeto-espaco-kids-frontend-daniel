import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
    }

    h1 {
        font-family: 'Lato', sans-serif;
        text-align: center;
        margin: 25px 0;
    }

    #root {
        display: flex;
        flex-direction: column;
        height: 100vh;    
    }
`

export default GlobalStyle;