import { styled } from "styled-components";

export const StyleList = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: transparent;
    width: 220px;
    height: 250px;
    gap: .5rem;
    border-radius: 1rem;
    transition: .4s;
    
    span {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 1rem;
        background: ${({ theme }) => theme.colors.primary};
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
        scale: 1.3;

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

    @media (max-width: 768px) {
        width: 180px;
        height: 200px;

        p { font-size: 13px; }
    }
`