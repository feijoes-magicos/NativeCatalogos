import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const WindowWrapper = styled(SafeAreaView)`
  flex: 1;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  height: 10%;
  background-color: #809caa;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 5px 5px 0px 0px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HeaderTitle = styled.Text`
  color: white;
`;

export const Window = styled.View`
  position: absolute;
  background-color: white;
  width: 80%;
  height: 90%;

  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const ModalExit = styled.TouchableOpacity`
  position: absolute;
  right: 2%;
  top: 4%;
`;

export const BodyInfoModal = styled.View`
  text-indent: 15px;
`;
export const BodyTitle = styled.Text`
  font-size: 14px;
  align-self: center;
`;
