import styled from "styled-components"

export const Container = styled.div`
    position: relative;
    bottom: 0;
    grid-area: footer;
    height: 70px;
    margin-top: 15px;
    width: 100%;
    background: ${({theme}) => theme.COLORS.BACKGROUND_800};
    display: grid;
    align-items: center;
    font-size: 15px;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        margin: 29px 20px;
    }

    h1 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 15px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        gap: 6px;
        margin-left: 6px;
    }

    h2 {
        font-size: 12px;
        color: ${({theme}) => theme.COLORS.WHITE_200};
    }
`