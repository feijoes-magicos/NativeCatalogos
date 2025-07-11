import { Dispatch, SetStateAction, useState } from "react";
import { SeekerHandler } from "../types";
import {
	ErrorMessage,
	SearchInput,
	SearchSubmit,
	SeekModalBody,
} from "../SeekModal.styles";
import { Button, Text, TextInput, TouchableOpacity } from "react-native";

type Props = {
	cursorState: (x: number) => void;
	enderecos: { id: number; ref: string }[];
	openStatusHandler: {
		seekModal: boolean;
		setSeekModal: Dispatch<SetStateAction<boolean>>;
	};
};

const seekHandler = (params: SeekerHandler) => {
	const { enderecos, refEncontrada } = params;
	const {
		cursorState,
		setRefEncontrada,
		setTentativaBusca,
		openStatusHandler,
		ref,
	} = params;
	enderecos.forEach((endereco) => {
		if (
			endereco.ref === ref &&
			typeof ref === "string" &&
			!["<", ">"].some((it) => ref.includes(it))
		) {
			cursorState(endereco.id);
			openStatusHandler.setSeekModal(!openStatusHandler.seekModal);
			setRefEncontrada(!refEncontrada);
		}
		return endereco;
	});
	setTentativaBusca(true);
};

const SeekForm = (props: Props) => {
	const { enderecos, cursorState, openStatusHandler } = props;
	const [refEncontrada, setRefEncontrada] = useState(false);
	const [tentativaBusca, setTentativaBusca] = useState(false);
	const [ref, setRef] = useState<string>("");

	return (
		<SeekModalBody>
			<SearchInput placeholder="00.00.000" onChangeText={setRef} value={ref} />
			{!refEncontrada && tentativaBusca && (
				<ErrorMessage>referência não encontrada</ErrorMessage>
			)}
			<SearchSubmit
				onPress={() => {
					seekHandler({
						refEncontrada,
						enderecos,
						openStatusHandler,
						ref,
						cursorState,
						setRefEncontrada,
						setTentativaBusca,
					});
				}}
			>
				<Text>Buscar</Text>
			</SearchSubmit>
		</SeekModalBody>
	);
};

export default SeekForm;
