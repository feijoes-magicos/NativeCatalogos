import { Props } from "./types";
import whiteCross from "@assets/cruz_branca.png";
import {
	BodyInfoModal,
	Header,
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
						<Text style={{ color: "white" }}>Informações</Text>
						<TouchableOpacity
							onPress={() => {setInfoModal(!infoModal)}}
							style={{ position: "absolute", right: "2%", top: "4%" }}
						>
							<Image source={whiteCross} />
						</TouchableOpacity>
					</Header>
					<Text style={{ fontSize: 14, alignSelf: "center" }}>Cores</Text>
					<BodyInfoModal>
						<Text>Nome do Produto: {props.info ? props.info.name : "..."}</Text>
						<Text>Referencia: {props.info ? props.info.reference : "..."}</Text>
						<Text>Marca: {props.info ? props.info.reference : "..."}</Text>
						<Text>Categoria: {props.info ? props.info.categories : "..."}</Text>
						<Text>Genero: {props.info ? props.info.gender : "..."}</Text>
					</BodyInfoModal>
				</Window>
			</WindowWrapper>
		</Modal>
	);
};

export default InfoModal;
