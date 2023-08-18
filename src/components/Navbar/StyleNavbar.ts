import { styled } from "styled-components";

export const StyleNavbar = styled.nav`
    display: flex;
    align-items: center;
    gap: 2rem;
    z-index: 1;
    background: ${({theme}) => theme.colors.secondary};
    
    a {
        color: ${({theme}) => theme.colors.aditional};
    }
    
    div {
        display: flex;
        gap: .5rem;
        border: 1px solid ${({theme}) => theme.colors.primary};
        padding: .5rem;
        border-radius: .5rem;

        input {
            color: ${({theme}) => theme.colors.primary};
        }
        
        button {
            svg {
                fill: ${({theme}) => theme.colors.primary};
            }
        }
    }

    @media(max-width: 768px) {
        position: absolute;
        left: 0;
        margin-top: 230px;
        padding: 1rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        border-bottom: 1px solid ${({theme}) => theme.colors.primary};
    }
`