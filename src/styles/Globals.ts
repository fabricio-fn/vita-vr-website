import { createGlobalStyle } from "styled-components";

export const Globals = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.colors.secondary};
    }

    button {
        cursor: pointer;
        background: transparent;
        border: none;
        transition: .4s;

        &:hover {
            filter: brightness(1.1);
            box-shadow: 0px 4px 25px rgba(255, 249, 249, 0.25);
        }
    }

    strong {
        color: ${({ theme }) => theme.colors.primary};
    }

    a { text-decoration: none; }

    ul, ol, li {
        margin: 0;
        padding: 0;
        list-style: none;
    }
`