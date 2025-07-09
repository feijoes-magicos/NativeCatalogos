import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const ControlPanelContainer = styled(SafeAreaView)`
  background-color: white;
  height: 49%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-shadow: 0px -1px 0px #809caa;
`;

export const FirstRowFunctions = styled.View`
  flex: 1;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  margin-bottom: 5px;
`;

export const SecondRowFunctions = styled.View`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 5px;
`;

export const Icon = styled.TouchableOpacity`
  height: 50%;
`;

export const Sweep = styled(Icon)`
  background-color: #809caa;
  height: 50%;
  border-radius: 50%;
`;

export const IconInnerImg = styled.Image`
  height: 100%;
  aspect-ratio: 1;
`;

export const PicDisplay = styled.View`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

export const MiniPic = styled.TouchableOpacity`
  border: 1px solid #809caa;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70%;
  padding: 1px;
`;

export const Label = styled.Text`
  color: #809caa;
  font-size: 18px;
`;
export const Span = styled.Text`
  color: black;
`;
