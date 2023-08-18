import { styled } from "styled-components";

export const StyleAccordionItem = styled.li`
    border: 1px solid ${({ theme }) => theme.colors.primary};
    display: flex;
    gap: 1rem;
    border-radius: .5rem;
    flex-direction: column;
    padding: 1rem;
    width: 100%;

    .question {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h3 {
            font-size: 24px;
            line-height: 0;
        }
    }
`