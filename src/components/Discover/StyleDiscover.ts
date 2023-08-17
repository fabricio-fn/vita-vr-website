import { styled } from "styled-components";

export const StyleDiscover = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
    padding: 1rem 5%;
    gap: 1rem;

    h2 {
        width: 585px;
    }

    @media (max-width: 768px) {
        h2 {
            width: 100%;
        }
    }
`