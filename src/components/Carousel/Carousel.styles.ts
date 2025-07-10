import { ScrollView, Dimensions } from "react-native";
import styled from "styled-components/native";

const {width} = Dimensions.get("window")
export const CarouselContainer = styled.View`
  height: 50%;
  position: relative;
  width: 100%;
`;
export const DisplayCase = styled(ScrollView)`
  height: 100%;
  width: 100%;
  display: flex;

  overflow: hidden;
  position: relative;

  scroll-behavior: smooth;
  background-color: white;
`;
export const Button = styled.TouchableOpacity<{ $side: "left" | "right" }>`
  position: absolute;
  bottom: 5%;
  z-index: 10;
  ${(props) =>
		props.$side === "right"
			? "transform: scaleX(-1); right:25px"
			: "left:25px;"}
`;

export const ButtonInnerImage = styled.Image`
	height:35px;
	aspect-ratio: 1;
`

export const ImageDisplay = styled.Image`
  height: 100%;
`;

export const Item = styled.View`
  flex: none;
  height: 100%;
  width: ${width};
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;
