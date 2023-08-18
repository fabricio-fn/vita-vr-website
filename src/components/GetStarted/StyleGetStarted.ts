import { styled } from "styled-components";

export const StyleGetStarted = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    text-align: center;
    padding: 1rem 5%; 
    min-height: 100vh;
    
    .content {
        padding: 0 5%; 
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        height: 50vh;
        width: 100%;
        border-radius: 3rem;
        background: ${({ theme }) => theme.colors.primary};

        p {
            color: ${({ theme }) => theme.colors.secondary};
            width: 500px;
        }

        h2 {
            color: ${({ theme }) => theme.colors.secondary};
        }
    }

    @media (max-width: 1060px) {
        .content {
            h2 {
                font-size: 60px;
                line-height: 60px;
            }
        }
    }

    @media (max-width: 900px) {
        .content {
            h2 {
                font-size: 60px;
                line-height: 70px;
            }

            p {
                width: 100%;
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
    }
`