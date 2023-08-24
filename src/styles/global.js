import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
        color: ${({theme}) => theme.COLORS.WHITE};

        -webkit-font-smoothing: antialiased;
    }

    body.details-page {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    @media (min-width: 768px) {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    }
    }

    body, input, button, textarea {
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }
    
    button:hover, a:hover {
        filter: brightness(0.9);
    }
`