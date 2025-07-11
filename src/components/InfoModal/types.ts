import { Dispatch, SetStateAction } from "react";

interface InfoProduto {
	name: string;
	reference: string;
	brand: string;
	categories: string;
	gender: string;
}

export interface Props {
	info: InfoProduto;
	openStatusHandler: {infoModal:boolean, setInfoModal:Dispatch<SetStateAction<boolean>>}
}
