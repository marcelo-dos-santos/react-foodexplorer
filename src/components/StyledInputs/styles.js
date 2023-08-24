import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    color: ${({theme}) => theme.COLORS.GRAY_300};
    margin-bottom: 8px;
    border-radius: 5px;

    @media (min-width: 768px) {
    border: 2px solid white;
    border-radius: 8px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

    > input {
        height: 56px;
        width: 100%;
        padding: 19px 24px;
        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;
        border: 0;

        &:placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_300};
        }

        &[type="number"]::-webkit-inner-spin-button,
        &[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
        }

        input[type="number"] {
        -moz-appearance: textfield;
        }
    }

    > svg {
        margin-left: 16px;
    }
`