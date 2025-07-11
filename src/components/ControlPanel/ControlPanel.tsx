import { Props } from "./types";
import {
	ControlPanelContainer,
	FirstRowFunctions,
	Icon,
	IconInnerImg,
	Label,
	Line,
	PicDisplay,
	SecondRowFunctions,
	SoftWarning,
	Span,
	Sweep,
} from "./ControlPanel.styles";

import swap from "@assets/swap.png";
import seek from "@assets/seek.png";
import info from "@assets/info.png";
import shopCart from "@assets/shopCart.png";

import ImageSelector from "./subcomponents/ImageSelector";
import { Text, View } from "react-native";
import * as Clipboard from "expo-clipboard";

const ControlPanel = (props: Props) => {
	const { products, cursor, setPhotoCursor } = props;
	const { infoModal, setInfoModal } = props.infoModalHandler;
	const { seekModal, setSeekModal } = props.seekModalHandler;
	const { reversedPack, setReversedPack } = props.reversedPackHandler;
	return (
		<ControlPanelContainer>
			<FirstRowFunctions>
				<Icon
					onPress={() => {
						setInfoModal(!infoModal);
					}}
				>
					<IconInnerImg source={info} />
				</Icon>
				<Icon
					onPress={() => {
						setSeekModal(!seekModal);
					}}
				>
					<IconInnerImg source={seek} />
				</Icon>

				<PicDisplay>
					<ImageSelector
						setPhotoCursor={setPhotoCursor}
						images={products[cursor].images}
					/>
				</PicDisplay>
				<Icon>
					<IconInnerImg source={shopCart} />
				</Icon>
			</FirstRowFunctions>
			<SoftWarning >
				PREÇOS ILUSTRATIVOS
			</SoftWarning>
			<Line />
			<SecondRowFunctions>
				<Sweep
					onPress={() => {
						setReversedPack(!reversedPack);
					}}
				>
					<IconInnerImg source={swap} />
				</Sweep>
				<Label>{products[cursor].subcategories}</Label>
				<Label
					numberOfLines={1}
					ellipsizeMode="tail"
					onLongPress={() => {
						Clipboard.setStringAsync(products[cursor].reference);
					}}
				>
					Ref:
					<Span>{products[cursor].reference}</Span>
				</Label>
				<Label>
					R$:
					<Span>{products[cursor].skus[0].price}</Span>
				</Label>
			</SecondRowFunctions>
		</ControlPanelContainer>
	);
};

export default ControlPanel;
