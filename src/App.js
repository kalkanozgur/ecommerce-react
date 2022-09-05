import Routess from "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ErrorPage from "./pages/errorPage";
import Products from "./pages/Products";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";

function App() {
	return (
		<div className="App">
			<Navbar />
			{console.log(Routess)}
			<div className={Routess}>
				<Routes>
					<Route path="/" element={<Products />} />
					<Route path="/signin" element={<Signin />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
