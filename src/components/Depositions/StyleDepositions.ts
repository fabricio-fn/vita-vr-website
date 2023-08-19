import { styled } from "styled-components";

export const StyleDepositions = styled.section`
    display: flex;
    width: 100%;
    min-height: 110vh;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 5%;
    gap: 1rem;
    
    .content {
        width: 530px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        z-index: 1;
    }

    .img {
        width: 500px;
        /* height: 500px; */
        background: ${({ theme }) => theme.colors.primary};
        display: flex;
        align-items: end;
        justify-content: center;
        border-radius: 3rem;
        
        img {
            border-radius: 3rem;
            width: 500px;
        }
    }

    @media (max-width: 1060px) {
        .content {
            width: 500px;

            h2 {
                font-size: 60px;
                line-height: 60px;
            }
        }

        .img {
            width: 450px;

            img {
                width: 450px;
            }
        }
    }

    @media (max-width: 900px) {
        flex-direction: column;
        justify-content: center;

        .content {
            padding-right: 5%;
            width: 100%;

            h2 {
                font-size: 60px;
                line-height: 70px;
            }
        }

        .img {
            width: 100%;

            img {
                border-radius: 0;
                width: 350px;
            }
        }
    }

    @media (max-width: 420px) {
        .content {
            h2 {
                font-size: 40px;
                line-height: 45px;
            }
        }

        .img {
            img {
                /* border-radius: 2.4rem; */
                width: 210px;
            }
        }
    }
`