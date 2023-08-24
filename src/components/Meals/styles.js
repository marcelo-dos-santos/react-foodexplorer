import { styled } from "styled-components";

export const Container = styled.div`
    min-width: 210px;
    min-height: 292px;
    background: ${({theme}) => theme.COLORS.BACKGROUND_1100};
    margin: 0px 16px;

    .adminEdit {
        // alterar o display pra flex para mostrar o edit
        display: none;
        position: relative;
        font-size: 24px;
        top: -300px;
    }

    > svg {
        display: flex;
        position: relative;
        font-size: 24px;
        top: -275px;
        left: 176px;
    }

    .center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

`

export const Quantity = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;
    gap: 14px;
    align-items: center;
    font-size: 18px;
`

export const BuyButton = styled.div`
    width: 70%;
    height: 37px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const MealDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    

    .details {
        
        >span {
        
        font-size: 12px;
        }
        
    } 

    .price {
        > span {
            font-size: 18px;
            color: ${({theme}) => theme.COLORS.BLUE};
        }
    }

    > h1 {
        display: flex;
        align-items: center;
        gap: 8px;
        color: ${({theme}) => theme.COLORS.WHITE};
        font-size: 18px;
        margin-bottom: 12px;
    }

    > img {
    margin-top: 24px;
    margin-bottom: 12px;
    width: 88px;
    height: 88px;
    }
`