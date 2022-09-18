import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout: React.FC = () => {
	return (
		<div className="bg-yellow-300 w-screen h-screen p-3">
			<div className="w-full h-full bg-white mx-auto rounded-lg px-3.5">
				<Header />
				<div className="border-b my-4 mx-3"></div>
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
