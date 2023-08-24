import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    width: 100%;
    height: 100vh;
    grid-template-rows: 105px auto 85px;
    grid-template-areas:
    "header"
    "content"
    "footer"
    ;

    main {
        grid-area: content;
        margin: 36px 28px;

        > .adminNew {
            font-size: 24px;
            margin-top: 46px;
            color: ${({theme}) => theme.COLORS.WHITE};
            border-bottom-width: 1px;
            border-bottom-style: solid;
            border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
            padding-bottom: 10px;    
        }

        > .menuoptions {
            font-size: 24px;
            margin-top: 46px;
            color: ${({theme}) => theme.COLORS.WHITE};
            border-bottom-width: 1px;
            border-bottom-style: solid;
            border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
            padding-bottom: 10px;
        }
    }
`