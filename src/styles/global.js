import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        -webkit-font-smoothing: antialiased;
        font: 14px 'Roboto', sans-serif;
    }

    img {
        width: 100%;
    }
`;