import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 85vh;
    display: flex;
`

export const Logo = styled.div`
    width: 100%;
    font-size: clamp(24px, 5vw, 40px);
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    align-items: center;
    gap: 10px;

    @media(min-width: 768px) {
        width: 50%;
        padding: 10px;
    }

    > svg {
        color: ${({theme}) => theme.COLORS.BLUE_100};
        fill: ${({theme}) => theme.COLORS.BLUE_100};
    }
`

export const Form = styled.form`
    margin: 35px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .createAccount {
        margin-top: 32px;
        text-align: center;
    }

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        padding: 10px;
    }
`

export const Login = styled.div`
    margin-top: 50px;
    margin-bottom: 32px;

    > h1 {
        font-size: 16px;
        margin: 8px;
        color: ${({theme}) => theme.COLORS.GRAY_300};
    }
`

export const Password = styled.div`
    margin-bottom: 32px;

    > h1 {
        font-size: 16px;
        margin: 8px;
        color: ${({theme}) => theme.COLORS.GRAY_300};
    }
`

export const Inputs = styled.div`
    width: 100%;
    padding: 10px;
    max-width: 476px;
    margin: 0 auto;

    @media (min-width: 768px) {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        display: flex;
        flex-direction: column;
        padding: 50px;
        border-radius: 16px;
    }

    > h1 {
        display: none;
        @media (min-width: 768px) {
            display: flex;
            font-size: 30px;
            margin-bottom: 8px;
            color: #C4C4CC;
            align-items: baseline;
            justify-content: space-around;
        }
    }
`;
