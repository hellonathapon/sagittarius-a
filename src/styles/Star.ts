import styled from 'styled-components';

type Props = {
    theme: string;
}

export const Star = styled.div<Props>`
    color: ${({ theme }) => theme === "light" ? "black" : "white"};
    font-size: 2rem;
    font-weight: bold;
`