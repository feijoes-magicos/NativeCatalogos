import { Props } from "./types";
import {
	ControlPanelContainer,
	FirstRowFunctions,
	Icon,
	IconInnerImg,
	Label,
	PicDisplay,
	SecondRowFunctions,
	Span,
	Sweep,
} from "./ControlPanel.styles";

import swap from "@assets/swap.png";
import seek from "@assets/seek.png";
import info from "@assets/info.png";
import shopCart from "@assets/shopCart.png";

import ImageSelector from "./subcomponents/ImageSelector";
import { Text, TouchableOpacity, View } from "react-native";

const ControlPanel = (props: Props) => {
	const { products, cursor, setPhotoCursor } = props;
	const { infoModal, setInfoModal } = props.infoModalHandler;
	const { seekModal, setSeekModal } = props.seekModalHandler;
	const { reversedPack, setReversedPack } = props.reversedPackHandler;
	return (
		<ControlPanelContainer>
			<FirstRowFunctions>
				<TouchableOpacity
					onPress={(e) => {
						e.preventDefault();
						setInfoModal(!infoModal);
					}}
				>
					<Icon>
						<IconInnerImg source={info} />
					</Icon>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={(e) => {
						e.preventDefault();
						setSeekModal(!seekModal);
					}}
				>
					<Icon>
						<IconInnerImg source={seek} />
					</Icon>
				</TouchableOpacity>

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
			<Text style={{ color: "#888888", fontSize: 10 }}>PREÇOS ILUSTRATIVOS</Text>
			<View style={{ width: "90%", backgroundColor: "#CCD0CF", height:1 }} />
			<SecondRowFunctions>
				<Sweep
					onClick={() => {
						setReversedPack(!reversedPack);
					}}
				>
					<IconInnerImg source={swap} />
				</Sweep>
				<Label>{products[cursor].subcategories}</Label>
				<Label numberOfLines={1} ellipsizeMode="tail">
					Ref:
					<Text style={{ color: "black" }}>{products[cursor].reference}</Text>
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
