import { styled } from "styled-components";

export const StyleHome = styled.main`
    display: flex;
    width: 100%;
    min-height: 110vh;
    align-items: center;
    justify-content: space-between;
    padding-left: 5%;
    padding-top: 1rem;
    
    .content {
        width: 600px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        z-index: 1;

        .buttons {
            display: flex;
            gap: 1rem;
        }
    }

    .img {
        width: 500px;
        height: 500px;
        background: ${({ theme }) => theme.colors.primary};
        display: flex;
        align-items: end;
        justify-content: center;
        border-top-left-radius: 3rem;
        border-bottom-left-radius: 3rem;
        
        img {
            margin-right: 150px;
            width: 650px;
        }
    }

    @media (max-width: 1060px) {
        .content {
            width: 500px;

            h1 {
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
            padding-right: 5%;
            width: 100%;

            h1 {
                font-size: 60px;
                line-height: 70px;
            }
        }

        .img {
            width: 100%;
            height: auto;

            img {
                width: 550px;
            }
        }
    }

    @media (max-width: 420px) {
        .content {
            h1 {
                font-size: 40px;
                line-height: 45px;
            }
            
            .buttons {
                flex-direction: column;
            }
        }

        .img {
            img {
                width: 265px;
                margin-right: 0px;
            }
        }
    }
`