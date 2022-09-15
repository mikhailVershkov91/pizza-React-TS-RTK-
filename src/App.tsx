import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="cart" element={<Cart />} />
			</Route>
		</Routes>
	);
};

export default App;
