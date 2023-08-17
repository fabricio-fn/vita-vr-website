import { css, styled } from "styled-components";

interface iButtonProps {
    buttonStyle: "solid" | "outline" | "transparent"
    buttonSize?: "lg" | "md"
}

export const StyleButton = styled.button<iButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    border-radius: .5rem;
    font-weight: ${({theme}) => theme.font.weight.bold};
    font-family: ${({theme}) => theme.font.fontFamily.primary};
    font-size: 16px;

    ${({ buttonSize }) => {
        switch (buttonSize) {
            case "lg":
                return css`
                    padding: .5rem 2.5rem;
                    `
            case "md":
                return css`
                    padding: .5rem 2rem;
                `
        }
    }}

    ${({ buttonStyle, theme }) => {
        switch (buttonStyle) {
            case "solid":
                return css`
                    background: ${theme.colors.primary};
                    color: ${theme.colors.secondary};
                `
            case "transparent":
                return css`
                    color: ${theme.colors.aditional};
                    padding-top: 5px;

                    &:hover {
                        background: ${theme.colors.primary};
                        color: ${theme.colors.secondary};
                    }

                `
            case "outline":
                return css`
                    border: 1px solid ${theme.colors.primary};
                    background: transparent;
                    color: ${theme.colors.primary};
                
                    &:hover {
                        background: ${theme.colors.primary};
                        color: ${theme.colors.secondary};
                    }
                `
        }
    }}
`