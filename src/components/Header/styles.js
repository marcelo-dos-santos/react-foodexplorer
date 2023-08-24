import styled from "styled-components"

export const Container = styled.div`
    grid-area: header;
    position: sticky;
    height: 100px;
    width: 100%;
    background: ${({theme}) => theme.COLORS.BACKGROUND_800};
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: flex-end;
    padding: 20px 39px;
    
    @media (min-width: 768px) {
      align-items: center;
    }


    .menu {
      display: flex;
      @media (min-width: 768px) {
        display: none;
      }
    }

    .search {
      display: none;
      @media (min-width: 768px) {
        width: 50%;
        display: flex;
        align-items: center;
      }
    }
    
    .logout {
      display: none;
      @media (min-width: 768px) {
        display: flex;
        cursor: pointer;
      }
    }

    .userReceipt {
      display: none;
      @media (min-width: 768px) {
        display: flex;
      }
    }

    .userReceiptMob {
      display: flex;
      @media (min-width: 768px) {
        display: none;
      }
    }

    > .logo {
        font-size: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;

        @media (min-width: 768px) {
          align-items: flex-start;
        }

        h1 {
            display: flex;
            align-items: center; 
            gap: 8px;

            @media (min-width: 768px) {
              gap: 0px;
              display: flex;
              align-items: flex-end;
              flex-direction: column;
            }
          }

        span {
            // colocar display flex pra mostrar pra admin
            display: none;
            color: ${({theme}) => theme.COLORS.BLUE};
            font-size: 10px;
        }
    }
`

export const CartCount = styled.div`
  position: absolute;
  top: 43px;
  right: 28px;
  border-radius: 50%;
  border: 1px solid ${({theme}) => theme.COLORS.RED_400};
  background-color: ${({theme}) => theme.COLORS.RED_400};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 12px;
  font-weight: bold;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; 
`;
