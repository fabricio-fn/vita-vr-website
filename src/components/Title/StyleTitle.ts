import { css, styled } from "styled-components"
import Title from "./Title"

export const StyleTitle = styled(Title)`
    color: ${({ theme }) => theme.colors.aditional};
    font-family: ${({theme}) => theme.font.fontFamily.secondary};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    line-height: 85px;
    
    ${({ fontSize }) => {
        switch (fontSize) {
            case "lg":
                return css`
                    font-size: 80px;
                    `
            case "md":
                return css`
                    font-size: 32px;
                `
            case "sm":
                return css`
                    font-size: 16px;
                `
        }
    }}

    @media (max-width: 1060px) {
        ${({ fontSize }) => {
            return css`
                font-size: 60px;
                line-height: 60px;
            `
        }
    }}

    @media (max-width: 420px) {
        ${({ fontSize }) => {
            return css`
                font-size: 40px;
                line-height: 45px;
            `
        }
    }}
`