import { css, styled } from "styled-components";

interface iLinks {
    linkStyle: "normal" | "shine"
}

export const StyleButtonLink = styled.a<iLinks>`
    font-family: ${({ theme }) => theme.font.fontFamily.primary};
    font-weight: ${({ theme }) => theme.font.weight.bold};

    ${({ linkStyle }) => {
        switch (linkStyle) {
            case "normal":
                return css`
                    color: ${({ theme }) => theme.colors.aditional};

                    &:hover {
                        color: ${({ theme }) => theme.colors.primary};
                    }
                    `
            case "shine":
                return css`
                    color: ${({ theme }) => theme.colors.primary};

                    &:hover {
                        color: ${({ theme }) => theme.colors.aditional};
                    }
                `
        }
    }}
`