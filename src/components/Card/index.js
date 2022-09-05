import { Box, Image, Button } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import moment from "moment";

import React from "react";

function Card({ item }) {
	return (
		<div>
			<Box borderWidth="1px" borderRadius="lg" overflow="visible" p="3">
				<Link to={"#/"}>
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
				<Button colorScheme={"pink"}>Add to Basket</Button>
			</Box>
		</div>
	);
}

export default Card;
