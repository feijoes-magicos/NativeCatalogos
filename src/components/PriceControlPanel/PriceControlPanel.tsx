import { PacksHandler, Props } from "./types";

import minus from "@assets/minus.png";
import plus from "@assets/plus.png";
import { Icon, PackPriceContainer, Tab, TabTitle } from "./PriceControlPanel.styles";
import { Image, Text, View } from "react-native";

const handlePurchaseDraft = (
  cursor: number,
  packsHandler: PacksHandler,
  operation: "increment" | "decrement",
) => {
  const { packs, setPacks } = packsHandler;
  setPacks(
    packs.map((pack) => {
      if (pack.id === cursor) {
        if (operation === "increment") {
          return {
            ...pack,
            total: pack.total + 1,
          };
        } else {
          return {
            ...pack,
            total: pack.total > 0 ? pack.total - 1 : pack.total,
          };
        }
      }
      return pack;
    }),
  );
};

const PriceControlPanel = (props: Props) => {
  const { cursor, packsHandler } = props;
  const currentPackPrice = packsHandler.packs[cursor].packs.reduce(
    (acc, pack) => Number.parseFloat(pack.price) + acc,
    0,
  );
  return (
    <PackPriceContainer>
      <Tab>
        <TabTitle>Atual</TabTitle>
        <Text>
          R$:
          {packsHandler.packs
            ? (packsHandler.packs[cursor].total * currentPackPrice).toFixed(2)
            : (0).toFixed(2)}
        </Text>
      </Tab>
      <Icon
        onPress={() => {
          handlePurchaseDraft(cursor, packsHandler, "decrement");
        }}
      >
        <View>
          <Image source={minus} />
        </View>
      </Icon>
      <Icon>
        <Text>{packsHandler.packs ? packsHandler.packs[cursor].total : "..."}</Text>
      </Icon>
      <Icon
        onPress={() => {
          handlePurchaseDraft(cursor, props.packsHandler, "increment");
        }}
      >
        <View>
          <Image source={plus} />
        </View>
      </Icon>
      <Tab>
        <TabTitle>Acumulado</TabTitle>
        <Text>
          R$:
          {packsHandler.packs
            .reduce(
              (acc, packs) =>
                acc +
                packs.packs.reduce(
                  (acc, pack) =>
                    acc + Number.parseFloat(pack.price) * packs.total,
                  0,
                ),
              0,
            )
            .toFixed(2)}
        </Text>
      </Tab>
    </PackPriceContainer>
  );
};

export default PriceControlPanel;
