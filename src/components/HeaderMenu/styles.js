import styled from "styled-components"

export const Container = styled.div`
    grid-area: header;
    height: 115px;
    width: 100%;
    background: ${({theme}) => theme.COLORS.BACKGROUND_800};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 80px;
    font-size: 21px;

    h1 {
        display: flex;
        align-items: center;
        font-size: 21px;
        justify-content: space-between;
        gap: 13px;
        margin: 60px 20px 29px -62px;
    }
`
