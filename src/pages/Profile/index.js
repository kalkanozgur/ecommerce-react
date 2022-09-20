import React from "react";
import { Text } from "@chakra-ui/react";

import { useAuth } from "./../../context/AuthContext";

function Profile() {
	const { user } = useAuth();
	return (
		<div>
			<Text fontSize={"22"}>
				<code>{JSON.stringify(user)}</code>
			</Text>
		</div>
	);
}

export default Profile;
