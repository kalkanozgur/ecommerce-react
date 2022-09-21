import React from "react";
import { useNavigate } from "react-router-dom";

import { Text, Button } from "@chakra-ui/react";

import { useAuth } from "./../../context/AuthContext";

function Profile() {
	const { user, logout } = useAuth();
	let navigate = useNavigate();
	const handleLogout = async () => {
		logout(() => {
			navigate("../");
		});
	};

	return (
		<div>
			<Text fontSize={"22"}>
				<code>{JSON.stringify(user)}</code>
			</Text>
			<br />
			<br />
			<Button colorScheme={"pink"} variant="solid" onClick={handleLogout}>
				Logout
			</Button>
		</div>
	);
}

export default Profile;
