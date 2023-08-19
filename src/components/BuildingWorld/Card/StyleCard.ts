import { styled } from "styled-components";

export const StyleCard = styled.ul`
    display: flex;
    width: 100%;
    gap: 1rem;
    flex-wrap: wrap;

    @media (max-width: 467px) {
        justify-content: center;
    }
`