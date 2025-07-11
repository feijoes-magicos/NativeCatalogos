import { Dispatch, SetStateAction } from "react";
import { Product } from "src/RNTypes";

export interface Props {
	cursorState: (x: number) => void;
	openStatusHandler: {
		seekModal: boolean;
		setSeekModal: Dispatch<SetStateAction<boolean>>;
	};
	list: Array<Product>;
}

export interface SeekerHandler {
	enderecos: { id: number; ref: string }[];
	refEncontrada: boolean;
	ref: string;
	setTentativaBusca: Dispatch<SetStateAction<boolean>>;
	setRefEncontrada: Dispatch<SetStateAction<boolean>>;
	cursorState: (x: number) => void;
	openStatusHandler: {
		seekModal: boolean;
		setSeekModal: Dispatch<SetStateAction<boolean>>;
	};
}
