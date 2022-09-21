import Routess from "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import ProtectedRoute from "./pages/ProtectedRoute";
import ProtectedAdmin from "./pages/Admin/ProtectedAdmin";

import ErrorPage from "./pages/errorPage";
import Products from "./pages/Products";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import Profile from "./pages/Profile";
import AdminHome from "./pages/Admin/Home";
import Orders from "./pages/Admin/Orders";
import AdminProducts from "./pages/Admin/Products";
import AdminProductsDetail from "./pages/Admin/ProductDetail";
import Basket from "./pages/Basket";
import ProductDetail from "./pages/ProductDetail";
import NewProduct from "./pages/Admin/Products/new";

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className={Routess}>
				<Routes>
					<Route index path="/" element={<Products />} />
					<Route path="/product/:product_id" element={<ProductDetail />} />
					<Route path="/signin" element={<Signin />} />
					<Route path="/signup" element={<Signup />} />
					Basket
					<Route path="/basket" element={<Basket />} />
					{/* react-router-dom v6 */}
					<Route element={<ProtectedRoute />}>
						<Route path="/profile" element={<Profile />} />
					</Route>
					<Route element={<ProtectedAdmin />}>
						{/* https://www.robinwieruch.de/react-router-nested-routes/ */}
						<Route index path="/admin" element={<AdminHome />} />
						<Route path="/admin/orders" element={<Orders />} />
						<Route path="/admin/products" element={<AdminProducts />} />
						<Route
							path="/admin/products/:product_id"
							element={<AdminProductsDetail />}
						/>
						<Route path="/admin/products/new" element={<NewProduct />} />
					</Route>
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
