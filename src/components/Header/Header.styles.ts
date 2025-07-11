import styled from "styled-components/native";

export const HeaderDisplay = styled.View`
  width: 100%;
  height: 10%;

  background-color: #809caa;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const HeaderContainer = styled.View`
  width: 100%;
  display: flex;
  align-self: center;
  justify-content: space-evenly;
  flex-direction: row;
  height: 70%;
`;

export const Button = styled.View<{ $side?: "left" | "right" }>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => (props.$side === "left" ? "transform: scaleX(-1)" : null)}
`;
export const FunctionButton = styled(Button)`
  color: #809caa;
  background-color: white;
  aspect-ratio: 1;
  border-radius: 50px;
  width: 35px;
  height: 35px;
  align-self: center;
`;
export const CategoryBox = styled.View`
  background-color: white;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 4px;
  width: 150px;
`;
export const ButtonInnerImage = styled.Image`
  height: 50%;
  aspect-ratio: 1;
`;

export const CategoryBoxText = styled.Text`
  color: #809caa;
  font-weight: 900;
`;
