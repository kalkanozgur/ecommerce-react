import React from "react";

import { fetchProductList } from "../../api";
import { useInfiniteQuery } from "@tanstack/react-query";

import { Grid, Box, Flex, Button } from "@chakra-ui/react";

import Card from "../../components/Card";
function Products() {
	const {
		data,
		error,
		fetchNextPage,
		isFetching,
		isFetchingNextPage,
		status,
		hasNextPage,
	} = useInfiniteQuery(["products"], fetchProductList, {
		getNextPageParam: (lastGroup, allGroups) => {
			const morePagesExist = lastGroup.length === 12;

			if (!morePagesExist) {
				return;
			}
			return allGroups.length + 1;
		},
	});

	if (status === "loading") return "Loading...";

	if (status === "error") return "An error has occurred: " + error.message;

	return (
		<div>
			<Grid templateColumns="repeat(3, 1fr)" gap={6}>
				{/* {data.map((item, key) => (
					<Card key={key} item={item} />
				))} */}

				{data.pages.map((group, i) => (
					<React.Fragment key={i}>
						{group.map((item) => (
							<Box w="100%" key={item._id}>
								<Card item={item} />
							</Box>
						))}
					</React.Fragment>
				))}
			</Grid>
			<Flex mt="10" justifyContent="center">
				<Button
					isLoading={isFetchingNextPage}
					onClick={() => {
						fetchNextPage();
					}}
					disabled={!hasNextPage || isFetchingNextPage}
				>
					{isFetchingNextPage
						? "Loading more..."
						: hasNextPage
						? "Load More"
						: "Nothing more to load"}
				</Button>
				<div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
			</Flex>
		</div>
	);
}

export default Products;
