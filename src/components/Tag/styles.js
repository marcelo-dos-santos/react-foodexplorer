import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px 16px;
  gap: 8px;
  height: 30px;
  background: ${({theme}) => theme.COLORS.BACKGROUND_1000};
  color: ${({theme}) => theme.COLORS.white};
  border-radius: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
  align-items: center;
  text-align: center;
  font-size: 12px;
`;