import { useState, createContext, useEffect, useContext } from "react";
import { fetchMe } from "../api";
import { Flex, Spinner } from "@chakra-ui/react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loggedIn, setLoggedIn] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		//
		//useEffect içinde async fonksiyon çalıştırabilmek için => (async () => {})()
		(async () => {
			try {
				const me = await fetchMe();
				// console.log("me", me);
				setLoggedIn(true);
				setUser(me);
				setLoading(false);
			} catch (error) {
				console.log(error);
				setLoading(true);
			}
		})();
	}, []);

	const login = (data) => {
		setLoggedIn(true);
		setUser(data.user);
		localStorage.setItem("access-token", data.accessToken);
		localStorage.setItem("refresh-token", data.refreshToken);
	};
	if (loading) {
		return (
			<Flex justifyContent={"center"} alignItems={"center"} height={"100vh"}>
				<Spinner
					thickness="4px"
					speed="0,65s"
					emptyColor="gray.200"
					size={"xl"}
					color={"red.500"}
				/>
			</Flex>
		);
	}

	const values = {
		user,
		loggedIn,
		login,
	};
	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
