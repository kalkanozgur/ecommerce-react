import { Box, Image, Button } from "@chakra-ui/react";

import { Link } from "react-router-dom";

import React from "react";

function Card() {
	return (
		<div>
			<Box borderWidth="1px" borderRadius="lg" overflow="visible" p="3">
				<Link to={"#/"}>
					<Image src={"https://picsum.photos/400/200"} alt="product"></Image>
					<Box p={"6"}>
						<Box d="plex" alignItems="baseline">
							12/12/2021
						</Box>
						<Box mt={"1"} fontWeight={"semibold"} lineHeight={"tight"}>
							Mackbook Pro
						</Box>
						<Box>100 tl</Box>
					</Box>
				</Link>
				<Button colorScheme={"pink"}>Add to Basket</Button>
			</Box>
		</div>
	);
}

export default Card;
