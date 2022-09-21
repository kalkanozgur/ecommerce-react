import { Box } from "@chakra-ui/react";
import React from "react";
import { Navigate, Outlet, Link } from "react-router-dom";

import { useAuth } from "./../../context/AuthContext";
import "./styles.css";

function ProtectedRoute() {
	const { user } = useAuth();
	return (
		<>
			{user?.role !== "admin" && <Navigate to={"/"} replace={true} />}
			<nav>
				<ul className="admin-menu">
					<li>
						<Link to={"/admin"}>Home</Link>
					</li>
					<li>
						<Link to={"/admin/orders"}>Orders</Link>
					</li>
					<li>
						<Link to={"/admin/products"}>Products</Link>
					</li>
				</ul>
			</nav>
			<Box mt={10}>
				<Outlet />
			</Box>
		</>
	);
}

export default ProtectedRoute;
