import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "./../context/AuthContext";

function ProtectedRoute({ element }) {
	const { loggedIn } = useAuth();
	return loggedIn ? <Outlet /> : <Navigate to="/signin" />;
}

export default ProtectedRoute;
