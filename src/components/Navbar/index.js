import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

import { Button } from "@chakra-ui/react";

import { useAuth } from "./../../context/AuthContext";

function Navbar() {
	const { loggedIn } = useAuth();
	// console.log(loggedIn);
	return (
		<nav className={styles.nav}>
			<div className={styles.left}>
				<div className={styles.logo}>
					<Link to={"/"}>eCommerce</Link>
				</div>
				<ul className={styles.menu}>
					<li>
						<Link to={"/"}>Products</Link>
					</li>
				</ul>
			</div>
			{!loggedIn && (
				<>
					<div className={styles.right}>
						<Link to={"/signup"}>
							<Button colorScheme={"pink"}>Register</Button>
						</Link>
						<Link to={"/signin"}>
							<Button colorScheme={"pink"}>Login</Button>
						</Link>
					</div>
				</>
			)}
			{loggedIn && (
				<>
					<div className={styles.right}>
						<Link to={"/profile"}>
							<Button colorScheme={"pink"}>Profile</Button>
						</Link>
					</div>
				</>
			)}
		</nav>
	);
}

export default Navbar;
