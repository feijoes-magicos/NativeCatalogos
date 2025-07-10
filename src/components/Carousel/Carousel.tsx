import React, { useEffect, useRef } from "react";

import { CursorHandler, Props } from "./types";
import { Button, ButtonInnerImage, CarouselContainer } from "./Carousel.styles";

import arrow from "@assets/arrow.png";
import CarouselImages from "./subcomponents/CarouselImages";
import { Dimensions, Image, ScrollView } from "react-native";

const { width } = Dimensions.get("screen");

const Carousel = (props: Props) => {
	const { products, photoCursor } = props;
	const { cursor, setCursor } = props.cursorHandler;

	const carouselRef = useRef<ScrollView>(null);

	useEffect(() => {
		if (carouselRef.current) {
			carouselRef.current?.scrollTo({ x: width * cursor });
		}
	}, [cursor]);

	return (
		<CarouselContainer>
			<Button
				$side="left"
				onPress={() => {
					if (cursor > 0) {
						setCursor(cursor - 1);
					} else {
						setCursor(products.length - 1);
					}
				}}
			>
				<ButtonInnerImage source={arrow} />
			</Button>
			<CarouselImages
				photoCursor={photoCursor}
				products={products}
				ref={carouselRef}
			/>
			<Button
				$side="right"
				onPress={() => {
					if (cursor < products.length - 1) {
						setCursor(cursor + 1);
					} else {
						setCursor(0);
					}
				}}
			>
				<ButtonInnerImage source={arrow} />
			</Button>
		</CarouselContainer>
	);
};

export default Carousel;
