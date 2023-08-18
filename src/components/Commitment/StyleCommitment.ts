import { styled } from "styled-components";

export const StyleCommitment = styled.section`
    display: flex;
    width: 100%;
    min-height: 110vh;
    align-items: center;
    justify-content: space-between;
    padding-right: 5%;
    padding-top: 1rem;
    gap: 1rem;

    .img {
        width: 500px;
        height: 500px;
        background: ${({ theme }) => theme.colors.primary};
        display: flex;
        align-items: end;
        justify-content: center;
        border-top-right-radius: 3rem;
        border-bottom-right-radius: 3rem;
        
        img {
            margin-left: 100px;
            width: 650px;
        }
    }

    .content {
        width: 600px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        z-index: 1;
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
            height: 450px;

            img {
                width: 550px;
            }
        }
    }

    @media (max-width: 900px) {
        flex-direction: column-reverse;
        justify-content: center;
        gap: 1rem;

        .content {
            width: 100%;
            padding-left: 5%;
        }

        .img {
            width: 100%;
            height: 350px;

            img {
                margin-left: 0;
                width: 440px;
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
            height: 250px;

            img {
                width: 265px;
            }
        }
    }
`