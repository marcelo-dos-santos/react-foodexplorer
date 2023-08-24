import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  min-width: 100%;
  height: 100vh;
  grid-template-rows: 105px auto;
  grid-template-areas:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    "header"
    "content"
    "footer";
`;

export const Content = styled.div`
  min-width: 70px;
  margin: 16px;
  grid-area: content;

  @media (min-width: 768px) {
    max-width: 1122px;
    margin: 0 auto;
  }
`;

export const Banner = styled.div`
  display: flex;
  width: 376px;
  height: 115px;
  align-items: flex-end;
  margin: 25px auto;
  justify-content: space-between;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  .mobile {
    // Serve para mostrar a imagem do mobile, que é mais pequena
    display: none;
  }

  @media (min-width: 768px) {
    min-width: 1120px;
    min-height: 260px;
    margin: 100px auto;
  }

  > img {
    width: 50%;
  }
`;

export const TextContainer = styled.div`
  margin: -20px -10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 40px 10px;

  @media (min-width: 768px) {
    margin: 50px 30px;
  }

  h1 {
    width: fit-content;
    font-size: 18px;
    display: flex;
    flex-wrap: wrap;

    @media (min-width: 768px) {
      font-size: 48px;
    }
  }

  span {
    display: flex;
    margin-top: 5px;
    flex-wrap: wrap;
    width: fit-content;
    font-size: 12px;
  }
`;

export const Carousel = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 16px;
  white-space: nowrap;
`;

export const CarouselItem = styled.div`
  min-width: 210px;
  min-height: 292px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_1100};
  margin: 0px 16px;
`;
