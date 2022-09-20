import React, { useState, useRef } from "react";

import {
	Alert,
	Box,
	Button,
	Image,
	Text,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	FormControl,
	FormLabel,
	Textarea,
} from "@chakra-ui/react";

import { useBasket } from "./../../context/BasketContext";
import { Link } from "react-router-dom";

function Basket() {
	const { items, removeFromBasket } = useBasket();
	const total = items.reduce((acc, obj) => acc + obj.price, 0);

	const { isOpen, onOpen, onClose } = useDisclosure();
	const initialRef = useRef();
	const [adress, setAdress] = useState();
	const handleSubmit = async () => {
		const itemIds = items.map((item) => item._id);
	};

	return (
		<Box p={5}>
			{items.length < 1 && (
				<Alert status="warning">You have not any items in your basket.</Alert>
			)}
			{items.length > 0 && (
				<>
					<ul style={{ listStyleType: "decimal" }}>
						{items.map((item) => (
							<li key={item._id} style={{ marginBottom: 15 }}>
								<Link to={`/product/${item._id}`}>
									<Text fontSize={18}>
										{item.title} -{item.price} TL
									</Text>
									<Image
										htmlWidth={200}
										src={item.photos[0]}
										alt={"basket item"}
										loading={"lazy"}
									/>
								</Link>
								<Button
									mt={"2"}
									size={"sm"}
									colorScheme={"pink"}
									onClick={() => {
										removeFromBasket(item._id);
									}}
								>
									Remove from basket
								</Button>
							</li>
						))}
					</ul>
					<Box mt={10}>
						<Text fontSize={22}>Total: {total} TL</Text>
					</Box>

					<Button mt={2} size={"sm"} colorScheme={"green"} onClick={onOpen}>
						Order
					</Button>
					<Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
						<ModalOverlay />
						<ModalContent>
							<ModalHeader>Order</ModalHeader>
							<ModalCloseButton />
							<ModalBody pb={6}>
								<FormControl>
									<FormLabel>Adress</FormLabel>
									<Textarea
										ref={initialRef}
										placeholder="Adress"
										value={adress}
										onChange={(e) => setAdress(e.target.value)}
									/>
								</FormControl>
							</ModalBody>

							<ModalFooter>
								<Button colorScheme="blue" mr={3} onClick={handleSubmit}>
									Save
								</Button>
								<Button onClick={onClose}>Cancel</Button>
							</ModalFooter>
						</ModalContent>
					</Modal>
				</>
			)}
		</Box>
	);
}

export default Basket;