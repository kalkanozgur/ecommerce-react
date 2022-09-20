import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../../api";

import ImageGallery from "react-image-gallery";
import { Box, Text, Button } from "@chakra-ui/react";
import moment from "moment";

import { useBasket } from "./../../context/BasketContext";

function ProductDetail() {
	const { product_id } = useParams();
	const { addToBasket, items } = useBasket();
	const { isLoading, error, data } = useQuery(["product", product_id], () => {
		return fetchProduct(product_id);
	});
	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}
	// console.log(data);
	const findBasketItem = items.find((item) => item._id === product_id);
	const images = data.photos.map((url) => ({ original: url }));

	return (
		<div>
			<Button
				colorScheme={findBasketItem ? "pink" : "green"}
				onClick={() => addToBasket(data, findBasketItem)}
			>
				{findBasketItem ? "Remove from basket" : "Add to basket"}
			</Button>
			<Text as={"h2"} fontSize={"2xl"}>
				{data.title}
			</Text>
			<Text>{moment(data.createdAt).format("DD/MM/YYYY")}</Text>
			<p>{data.description}</p>
			<Box margin={"10"}>
				<ImageGallery
					items={images}
					// showThumbnails={false}
					infinite={false}
				/>
			</Box>
		</div>
	);
}

export default ProductDetail;
