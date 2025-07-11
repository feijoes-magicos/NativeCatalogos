import { Props } from "./types";

import whiteCross from "@assets/cruz_branca.png";
import SeekForm from "./subcomponents/SeekForm";
import { Button, Header, Window, WindowWrapper } from "./SeekModal.styles";
import { Image, Modal, Text } from "react-native";

const SeekModal = (props: Props) => {
	const { cursorState, list } = props;
	const { seekModal, setSeekModal } = props.openStatusHandler;

	const enderecos = list.map((produto, index) => {
		return { id: index, ref: produto?.reference };
	});

	return (
		<Modal
			visible={seekModal}
			onRequestClose={() => {
				setSeekModal(!seekModal);
			}}
			transparent
		>
			<WindowWrapper>
				<Window style={{ boxShadow: "0px 0px 5px #00000077" }}>
					<Header>
						<Text style={{ color: "white" }}>Buscar referência</Text>
						<Button
							onPress={() => {
								setSeekModal(!seekModal);
							}}
						>
							<Image source={whiteCross} />
						</Button>
					</Header>
					<SeekForm
						cursorState={cursorState}
						openStatusHandler={props.openStatusHandler}
						enderecos={enderecos}
					/>
				</Window>
			</WindowWrapper>
		</Modal>
	);
};

export default SeekModal;
