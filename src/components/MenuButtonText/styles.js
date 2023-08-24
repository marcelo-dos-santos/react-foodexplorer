import styled from "styled-components";

export const Container = styled.button`
    background: none;
    color: ${({theme}) => theme.COLORS.WHITE};
    border: none;
    font-size: 24px;
    margin-bottom: 16px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    padding-bottom: 10px;
    width: 100%;
    display: flex;
    align-items: flex-start;
`