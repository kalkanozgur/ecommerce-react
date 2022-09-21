import { Box, Image, Button } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import moment from "moment";

import React from "react";

import { useBasket } from "./../../context/BasketContext";

function Card({ item }) {
	const { addToBasket, items } = useBasket();

	const findBasketItem = items.find(
		(basket_item) => basket_item._id === item._id
	);

	return (
		<div>
			<Box borderWidth="1px" borderRadius="lg" overflow="visible" p="3">
				<Link to={`/product/${item._id}`}>
					<Image src={item.photos[0]} alt="product" loading="lazy"></Image>
					<Box p={"6"}>
						<Box d="plex" alignItems="baseline">
							{moment(item.createdAt).format("DD/MM/YYYY")}
						</Box>
						<Box mt={"1"} fontWeight={"semibold"} lineHeight={"tight"}>
							{item.title}
						</Box>
						<Box>{item.price}</Box>
					</Box>
				</Link>
				<Button
					colorScheme={findBasketItem ? "pink" : "green"}
					onClick={() => addToBasket(item, findBasketItem)}
				>
					{findBasketItem ? "Remove from basket" : "Add to basket"}
				</Button>
			</Box>
		</div>
	);
}

export default Card;
