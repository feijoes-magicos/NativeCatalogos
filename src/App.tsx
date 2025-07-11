import { useEffect, useMemo, useRef, useState } from "react";
import { Footer, PackDisplay, Screen } from "./App.styles";
import { Packs, Product } from "./RNTypes";
import { Text, View } from "react-native";

import { PRODUCTS_LOCATION } from "@env";

import Header from "@components/Header";
import ControlPanel from "@components/ControlPanel";
import PriceControlPanel from "@components/PriceControlPanel";
import PackInfo from "@components/PackInfo";
import Carousel from "@components/Carousel";
import InfoModal from "@components/InfoModal";
import SeekModal from "@components/SeekModal";

const sizeOrder = ["PP", "P", "M", "G", "GG"];
const fetchProducts = async () => {
	const data = await fetch(PRODUCTS_LOCATION);
	if (!data.ok) {
		return new Error(`Falha na requisição por parte da rede:${data.status}`);
	}
	return data.json();
};

function App() {
	const [maybeProducts, setMaybeProducts] = useState<Array<Product> | Error>(
		[],
	);
	const categories = useMemo(() => {
		if (Array.isArray(maybeProducts) && maybeProducts[0]) {
			return [...new Set(maybeProducts.map((product) => product.categories))];
		}
		return [];
	}, [maybeProducts]);

	const [cursor, setCursor] = useState<number>(0);
	const [photoCursor, setPhotoCursor] = useState<number>(0);
	const [packs, setPacks] = useState<Packs[]>([]);

	const [reversedPack, setReversedPack] = useState<boolean>(false);

	const [infoModal, setInfoModal] = useState(false);
	const [seekModal, setSeekModal] = useState(false);

	useEffect(() => {
		fetchProducts()
			.then((data) => {
				if (Array.isArray(data) && data[0]) {
					const products:Array<Product> = data
					setMaybeProducts(products.sort((a,b) => a.categories.localeCompare(b.categories)));
				}
			})
			.catch((e) => {
				setMaybeProducts(e);
			});
	}, []);

	useEffect(() => {
		if (maybeProducts instanceof Error || !maybeProducts[0]) {
			return;
		}
		const incrementedPacks = maybeProducts.map((product, indice) => {
			return {
				packs: product.skus.sort(
					(a, b) => sizeOrder.indexOf(a.size) - sizeOrder.indexOf(b.size),
				),
				total: 0,
				id: indice,
				price: product.skus[0].price,
			};
		});
		setPacks(incrementedPacks);
	}, [maybeProducts]);

	if (maybeProducts instanceof Error) {
		return (
			<Screen>
				<Text style={{ width: "80%", textAlign: "center" }}>
					Algo deu terrívelmente errado e alguém com toda certeza vai ter muita
					dor de cabeça com isso :p
				</Text>
				<Text style={{ color: "red" }}>{maybeProducts.message}</Text>
			</Screen>
		);
	}

	if ((!maybeProducts[0] || !packs[0]) && !(maybeProducts instanceof Error)) {
		return (
			<Screen>
				<Text>Carregando...</Text>
			</Screen>
		);
	}

	return (
		<>
			<InfoModal
				info={{ ...maybeProducts[cursor] }}
				openStatusHandler={{ infoModal, setInfoModal }}
			/>
			<SeekModal
				list={maybeProducts}
				openStatusHandler={{ seekModal, setSeekModal }}
				cursorState={(x: number) => {
					setCursor(x);
				}}
			/>
			<Screen>
				<Header
					products={maybeProducts}
					setCursor={setCursor}
					categories={categories}
					currentCategory={maybeProducts[cursor].categories}
				/>
				<Carousel
					products={maybeProducts}
					photoCursor={photoCursor}
					cursorHandler={{ cursor, setCursor }}
				/>
				<Footer>
					<ControlPanel
						cursor={cursor}
						products={maybeProducts}
						setPhotoCursor={setPhotoCursor}
						infoModalHandler={{ infoModal, setInfoModal }}
						seekModalHandler={{ seekModal, setSeekModal }}
						reversedPackHandler={{ reversedPack, setReversedPack }}
					/>
					<PackDisplay $reversed={reversedPack}>
						<PriceControlPanel
							cursor={cursor}
							packsHandler={{ packs, setPacks }}
						/>
						<PackInfo cursor={cursor} packs={packs} />
					</PackDisplay>
				</Footer>
			</Screen>
		</>
	);
}

export default App;
