import styled from "styled-components/native";

export const WindowWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 20;
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
export const Window = styled.View`
  height: 90%;
  width: 80%;
  background-color: white;

  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const SeekModalBody = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  gap: 10px;
  padding: 20px;
`;
export const Button = styled.TouchableOpacity`
  position: absolute;
  right: 2%;
  top: 4%;
`;
export const SearchInput = styled.TextInput`
  background-color: #bbb;
  width: 80%;
  height: 40px;
`;
export const SearchSubmit = styled.TouchableOpacity`
  border-radius: 5px;
  height: 30px;
  background-color: #809caa;
`;

export const ErrorMessage = styled.Text`
  font-size: 12px;
  color: red;
`;
