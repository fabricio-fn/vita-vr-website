import { styled } from "styled-components";

export const StyleAccordion = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.aditional};
    
    .active {
        color: ${({ theme }) => theme.colors.secondary};
        background: ${({ theme }) => theme.colors.primary};
    }
    
    .active h3, p{
        color: ${({ theme }) => theme.colors.secondary};
    }
`