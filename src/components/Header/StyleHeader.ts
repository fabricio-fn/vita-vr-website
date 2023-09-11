import { styled } from "styled-components";

export const StyledHeader = styled.header`
    padding: 0rem 5%; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1920px;
    position: fixed;
    z-index: 2;
    height: 70px;
    background-color: ${({theme}) => theme.colors.secondary};
    border-bottom: 1px solid ${({theme}) => theme.colors.primary};

    h2 {
        color: ${({theme}) => theme.colors.primary};
    }

    .btnMenu {
        color: ${({theme}) => theme.colors.primary};
        display: none;

        &:hover { color: ${({theme}) => theme.colors.secondary}; }
    }

    @media(max-width: 768px) { 
        .btnMenu {
            display: block;
        }
    }
`