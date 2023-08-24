import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-areas: 
    "header"
    "content"
    "footer"
    ;

    > main {
        overflow-y: auto;
        grid-area: content;

        padding: 0 32px;

        > div {
        margin-top: 10px;
        display: flex;
        align-items: center;
        }

        @media (min-width: 768px) {
          max-width: 100vw;
        }
    } 
    

`

export const Form = styled.form`
overflow-x: auto;


.upperSide {
      @media (min-width: 768px) {
        display: flex;
        gap: 32px;
        padding: 10px;
      }
    }

    .lowerSide {
      @media (min-width: 768px) {
        display: flex;
        gap: 32px;
        padding: 10px;
      }
    }


    h1 {
        margin-top: 24px;
    }
`

export const ProductImage = styled.div`
  margin-top: 20px;

  @media (min-width: 768px) {
    min-width: 229px;
  }

  > label {
    color: ${({theme}) => theme.COLORS.GRAY_300};
    display: block;
    margin-bottom: 16px;
  }

  .inputWrapper {
    display: flex;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
    margin-bottom: 8px;
    border-radius: 5px;
    height: 56px;
    padding: 19px 24px;

    .fileLabel {
      cursor: pointer;
      padding: 8px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      border-radius: 4px;
      transition: background-color 0.3s ease-in-out;
      display: flex;
      align-items: center;

      svg {
        margin-right: 6px;
      }
    }

    input[type="file"] {
      display: none;
    }
  }
`;

export const Name = styled.div`
    margin-top: 20px;

    @media (min-width: 768px) {
    min-width: 463px;
    }

    > label {
    color: ${({theme}) => theme.COLORS.GRAY_300};
    display: block;
    margin-bottom: 16px;
  }
`

export const Category = styled.div`
  margin-top: 20px;

  @media (min-width: 768px) {
    min-width: 364px;
  }

  > label {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    display: block;
    margin-bottom: 16px;
  }

  .inputWrapper {
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    margin-bottom: 8px;
    border-radius: 5px;
    height: 56px;
    padding: 19px 24px;
    position: relative;

    select {
      width: 100%;
      border: none;
      background: none;
      color: ${({ theme }) => theme.COLORS.WHITE};
      outline: none;
      appearance: none;
      font-size: 16px;
      cursor: pointer;
    }

    .selectArrow {
      position: absolute;
      right: 16px;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    /* Estilos para as opções do select */
    select:focus {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700}; /* Cor de fundo quando o select está aberto */
    }

    /* Estilos para as opções do select */
    option {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700}; /* Cor de fundo das opções */
      /* Define uma margem interna para evitar que as opções saiam da tela */
      padding: 8px;
    }

    /* Define a posição e o estilo do container das opções */
    select::-ms-expand {
      display: none;
    }

    select option {
      box-sizing: content-box;
    }
  }
`;

export const Ingredients = styled.div`
    margin-top: 20px;

    .ingredientRow {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 8px;

        @media (min-width: 768px) {
          max-width: 790px;
          background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
          padding: 10px;
        }
    }

    > label {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    display: block;
    margin-bottom: 16px;
  }
`

export const Price = styled.div`
    margin-top: 20px;

    @media (min-width: 768px) {
    min-width: 300px;
  }

    > label {
    color: ${({theme}) => theme.COLORS.GRAY_300};
    display: block;
    margin-bottom: 16px;
  }
`

export const Description = styled.div`
    margin-top: 20px;

    @media (min-width: 768px) {
      max-width: 1145px;
    }

    > label {
    color: ${({theme}) => theme.COLORS.GRAY_300};
    display: block;
    margin-bottom: 16px;
    }
`

export const Buttons = styled.div`
    margin-top: 20px;
    margin-bottom: 40px;
    gap: 10px;

    @media (min-width: 768px) {
      max-width: 1145px;
    }

  display: flex;
  justify-content: space-between;
  align-items: center;
`