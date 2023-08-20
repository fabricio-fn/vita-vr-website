import { styled } from "styled-components";

export const StyleSlideCard = styled.ul`
    border: 1px solid ${({ theme }) => theme.colors.primary};
    padding: 1rem;
    border-radius: 1rem;
    display: flex;
    gap: 1rem;
    
    .swiper {
        width: 100%;

        li {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            
            h3 {
                line-height: initial;
            }
        }
    }
`