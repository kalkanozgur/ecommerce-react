import Routess from "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ErrorPage from "./pages/errorPage";
import Products from "./pages/Products";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import ProductDetail from "./pages/ProductDetail";

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className={Routess}>
				<Routes>
					<Route path="/" element={<Products />} />
					<Route path="/product/:product_id" element={<ProductDetail />} />
					<Route path="/signin" element={<Signin />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
