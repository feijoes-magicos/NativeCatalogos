import { Product } from "src/RNTypes";

import imageUndefined from "@assets/image-undefined.png";
import { ImageDisplay, DisplayCase, Item } from "../Carousel.styles";
import { useState } from "react";
import { ScrollView } from "react-native";

type Props = {
	photoCursor: number;
	products: Array<Product>;
	ref: React.RefObject<ScrollView>;
};

const CarouselImages = (props: Props) => {
	const { photoCursor, products, ref } = props;
	const [error, setError] = useState(false);
	const smartImage = () => {
		setError(!error);
	};
	return (
		<DisplayCase
			horizontal
			pagingEnabled
			ref={ref}
			scrollEnabled={false}
			showsHorizontalScrollIndicator={false}
		>
			{products.map((product, index) => {
				const paths = product.images.map((image) => image.path);
				return (
					<Item key={index}>
						<ImageDisplay
							source={error ? imageUndefined : { uri: paths[photoCursor] }}
							onError={smartImage}
						/>
					</Item>
				);
			})}
		</DisplayCase>
	);
};
export default CarouselImages;
