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
        text-align: center;
    }

    @media (max-width: 1060px) {
        h2 {
            font-size: 60px;
            line-height: 60px;
        }
    }

    @media (max-width: 900px) {
        justify-content: center;
        gap: 1rem;

        h2 {
            font-size: 60px;
            line-height: 70px;
            width: 100%;
        }
    }

    @media (max-width: 420px) {
        h2 {
            font-size: 40px;
            line-height: 45px;
        }
    }
`