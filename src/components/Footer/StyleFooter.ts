import { styled } from "styled-components";

export const StyleFooter = styled.footer`
    padding: 1rem 5%;

    h2 {
        color: ${({theme}) => theme.colors.primary};
    }

    .header {
        border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    }

    .header, .copyright, div{
        display: flex;
        gap: 2rem;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 0; 
    }
    
    @media(max-width: 432px) {
        .header, .copyright {
            flex-direction: column;

            h3, h2 { line-height: 30px; }
        }
    }  
`