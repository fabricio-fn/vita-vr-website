import { styled } from "styled-components";

export const StyleList = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: transparent;
    width: 130px;
    padding: 1rem;
    text-align: center;
    height: 150px;
    gap: .5rem;
    border-radius: 1rem;
    transition: .4s;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    
    span {
        background: ${({ theme }) => theme.colors.primary};
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 1rem;
        width: 50px;
        height: 50px;

        svg {
            color: ${({ theme }) => theme.colors.secondary};
            font-size: 30px;
        }
    }

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
        background: ${({ theme }) => theme.colors.primary};

        & span {
            background: ${({ theme }) => theme.colors.secondary};
            svg {
                color: ${({ theme }) => theme.colors.primary};
            }
        }

        & p {
            color: ${({ theme }) => theme.colors.secondary};
        }
    }

    @media (max-width: 467px) {
        justify-content: center;
    }
`