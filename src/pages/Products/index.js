import React from "react";

import { fetchProductList } from "../../api";
import { useQuery } from "@tanstack/react-query";

import { Grid } from "@chakra-ui/react";

import Card from "../../components/Card";
function Products() {
	const { isLoading, error, data } = useQuery(["products"], fetchProductList);

	if (isLoading) return "Loading...";

	if (error) return "An error has occurred: " + error.message;

	return (
		<div>
			<Grid templateColumns="repeat(3, 1fr)" gap={6}>
				{data.map((item, key) => (
					<Card key={key} item={item} />
				))}
			</Grid>
		</div>
	);
}

export default Products;
