import { Props } from "./types";
import equal from "@assets/equal.png";
import DisplayAmount from "./subcomponents/DisplayAmount";
import { BottomContainer, DisplayAmountContainer, PackBuilder } from "./PackInfo.styles";
import { Image, View } from "react-native";

const PackInfo = (props: Props) => {
  const { cursor, packs } = props;
  return (
    <BottomContainer>
      <PackBuilder>
        {packs[cursor].packs.map((pack, indice) => (
          <DisplayAmountContainer key={indice} >
            <DisplayAmount
              modelSize={pack.size.toUpperCase()}
              value={pack.minQuantity}
            />
            {indice === packs[cursor].packs.length - 1 && (
              <>
                <Image source={equal} />
                <DisplayAmount
                  value={
                    packs[cursor].packs.reduce(
                      (acc, vlr) => vlr.minQuantity + acc,
                      0,
                    ) * packs[cursor].total
                  }
                />
              </>
            )}
          </DisplayAmountContainer>
        ))}
      </PackBuilder>
    </BottomContainer>
  );
};

export default PackInfo;
