import styled from "styled-components"

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.RED_400};
    color: ${({theme}) => theme.COLORS.WHITE};
    height: 48px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 11px;
    border: 0;
    padding: 0 30px;
    border-radius: 5px;
    font-weight: 400;

    &.deleteButton {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    &:disabled {
        opacity: 0.5;
    }
`