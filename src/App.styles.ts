import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styled } from "styled-components/native";

const { height, width } = Dimensions.get("screen");

export const Screen = styled(SafeAreaView)`
  margin: 0;
  padding: 0;
  width: ${width};
  margin: auto;

  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid black;
  background-color: #809caa;
  position: relative;

  > * {
    width: 100%;
  }
`;

export const Footer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  height: 40%;
  width: 100%;
`;

export const PackDisplay = styled.View<{ $reversed?: boolean }>`
  height: 50%;
  display: flex;
  flex-direction: ${(props) => (props.$reversed ? "column-reverse" : "column")};
  position: relative;
`;
