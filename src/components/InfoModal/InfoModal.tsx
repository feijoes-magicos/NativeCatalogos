import { Props } from "./types";
import whiteCross from "@assets/cruz_branca.png";
import {
	BodyInfoModal,
	BodyTitle,
	Header,
	HeaderTitle,
	ModalExit,
	Window,
	WindowWrapper,
} from "./InfoModal.styles";
import { Image, Modal, Text, TouchableOpacity } from "react-native";

const InfoModal = (props: Props) => {
	const { infoModal, setInfoModal } = props.openStatusHandler;
	return (
		<Modal
			visible={infoModal}
			animationType="fade"
			onRequestClose={() => {
				setInfoModal(!infoModal);
			}}
			transparent
		>
			<WindowWrapper
			>
				<Window 
				style={{boxShadow:"0px 0px 5px #00000077"}}
				>
					<Header>
						<HeaderTitle>Informações</HeaderTitle>
						<ModalExit
							onPress={() => {setInfoModal(!infoModal)}}
						>
							<Image source={whiteCross} />
						</ModalExit>
					</Header>
					<BodyTitle>Cores</BodyTitle>
					<BodyInfoModal>
						<Text>Nome do Produto: {props.info.name ? props.info.name : "..."}</Text>
						<Text>Referencia: {props.info.reference ? props.info.reference : "..."}</Text>
						<Text>Marca: {props.info.brand ? props.info.brand : "..."}</Text>
						<Text>Categoria: {props.info.categories ? props.info.categories : "..."}</Text>
						<Text>Genero: {props.info.gender ? props.info.gender : "..."}</Text>
					</BodyInfoModal>
				</Window>
			</WindowWrapper>
		</Modal>
	);
};

export default InfoModal;
