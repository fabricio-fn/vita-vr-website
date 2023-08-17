import { css, styled } from "styled-components"

interface iParagraph {
    fontSize: "lg"  | "md" | "sm";
}

export const StyleParagraph = styled.p<iParagraph>`
    color: ${({ theme }) => theme.colors.aditional};
    font-family: ${({theme}) => theme.font.fontFamily.primary};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    line-height: 25px;
    
    ${({ fontSize }) => {
        switch (fontSize) {
            case "lg":
                return css`
                    font-size: 100px;
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
`