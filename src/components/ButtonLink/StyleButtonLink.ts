import { styled } from "styled-components";

export const StyleButtonLink = styled.a`
    color: ${({ theme }) => theme.colors.secondary};
    font-family: ${({ theme }) => theme.font.fontFamily.primary};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    
    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`