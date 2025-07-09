import circle from "@assets/circle.png";
import {
  AmountDisplay,
  PackDisplay,
  PackDisplayText,
} from "../PackInfo.styles";
import { Image, Text } from "react-native";

interface Props {
  modelSize?: string;
  value: string | number;
}

const DisplayAmount = (props: Props) => {
  return (
    <AmountDisplay>
      {props.modelSize && (
        <PackDisplay>
          <Image source={circle} style={{ position: "absolute" }} />
          <PackDisplayText>{props.modelSize}</PackDisplayText>
        </PackDisplay>
      )}
      <Text>{props.value}</Text>
    </AmountDisplay>
  );
};

export default DisplayAmount;
