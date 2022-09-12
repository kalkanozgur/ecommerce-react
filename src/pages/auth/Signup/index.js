import React from "react";
import {
	Flex,
	Box,
	Heading,
	FormControl,
	FormLabel,
	Input,
	Button,
} from "@chakra-ui/react";
import { useFormik } from "formik";

function Signup() {
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			passwordConfirm: "",
		},
	});
	return (
		<div>
			<Flex align={"center"} width={"full"} justifyContent={"center"}>
				<Box pt={10}>
					<Box textAlign={"center"}>
						<Heading>Sign Up</Heading>
					</Box>
					<Box my={5} textAlign={"left"}>
						<form action="" onSubmit={() => {}}>
							<FormControl>
								<FormLabel>E-mail</FormLabel>
								<Input name="email" />
							</FormControl>
							<FormControl mt={4}>
								<FormLabel>Password</FormLabel>
								<Input name="password" type={"password"} />
							</FormControl>
							<FormControl mt={4}>
								<FormLabel>Password Confirm</FormLabel>
								<Input name="password" type={"password"} />
							</FormControl>
							<Button mt={4} width={"full"} type={"submit"}>
								Sign Up
							</Button>
						</form>
					</Box>
				</Box>
			</Flex>
		</div>
	);
}

export default Signup;
