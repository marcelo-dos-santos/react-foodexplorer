import { styled } from "styled-components";

export const Container = styled.div`
    display: grid;
    width: 100%;
    height: 100vh;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content"
    "footer"
    ;
`

export const Content = styled.div`
    grid-area: content;
    padding: 16px 56px;
    margin-bottom: 50px;
    overflow-x: auto;

    .adminEdit {
      // Colocar display flex pra aparecer o botão de editar do admin
      display: flex;
      margin-top: 40px;

      @media (min-width: 768px) {
        width: 30%;
      }
    }

    > span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    gap: 8px;

    > div {
      display: flex;
      align-items: center;
    }
}
`

export const ProductDetails = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    padding: 15px;

  > span {
    text-align: center;
}

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 48px;
  }
`;

export const Ingredients = styled.div`
    width: fit-content;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 40px;
    align-items: center;
    margin-left: 15px;

    @media (min-width: 768px) {
    margin-left: 0px;
  }
`

export const ProductSale = styled.div`
    // colocar display none pra aparecer o admin
    display: none;
    align-items: center;
    gap: 8px;
    margin-top: 47px;
    margin-bottom: 10px;

    > span {
        font-size: 27px;
    }

    .orderButton {
        width: fit-content;
    }
`

export const ProductImage = styled.div`
    display: flex;
    justify-content: space-around;

img {
    margin-top: 16px;
    width: 264px;
    height: 264px;
    object-fit: cover;
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    > img {
      width: 390px;
      height: 390px;
    }
  }
`

export const AllDetails = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    margin-top: 60px;
  }
`

export const ProductName = styled.div`
  text-align: center;
  margin-top: 10px;

  h2 {
    font-size: 24px;
    margin-top: 16px;
    margin-bottom: 24px;
    color: ${({theme}) => theme.COLORS.WHITE};
  }

  p {
    font-size: 16px;
    margin-top: 8px;
    color: ${({theme}) => theme.COLORS.GRAY_200};
  }

  @media (min-width: 768px) {
    text-align: left;

     h2 {
      font-size: 36px;
    }

    p {
      font-size: 24px;
      max-width: 687px;
    }
  }
`