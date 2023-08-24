import styled from "styled-components"

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.RED_400};
    color: ${({theme}) => theme.COLORS.WHITE};
    height: 48px;
    border: 0;
    padding: 0 15px;
    border-radius: 5px;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 7px;

    &:disabled {
        opacity: 0.5;
    }
`