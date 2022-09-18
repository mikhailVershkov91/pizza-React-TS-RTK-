import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Pizza from "./pages/Pizza";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="cart" element={<Cart />} />
				<Route path="pizza" element={<Pizza />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
};

export default App;
