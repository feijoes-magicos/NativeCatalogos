import styled from "styled-components/native";

export const BottomContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50%;
`;

export const PackBuilder = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  width: 50%;

  justify-self: center;
  align-self: center;

  gap: 10px;
`;

export const AmountDisplay = styled.View`
  background-color: white;

  width: 40px;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  position: relative;
`;
export const DisplayAmountContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
export const PackDisplay = styled.View`
  position: relative;
  display: flex;
  left: 50%;
  align-items: center;
  justify-content: center;
`;

export const PackDisplayImage = styled.Image`
  position: absolute;
`;

export const PackDisplayText = styled.Text`
  position: absolute;
  color: #fff;
  font-size: 12px;
`;
