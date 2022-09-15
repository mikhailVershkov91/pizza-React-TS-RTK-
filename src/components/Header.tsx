import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
	return (
		<div className="flex justify-between items-center px-3.5 pt-3">
			<div className="flex items-center">
				<div className="mr-3 cursor-pointer hover:scale-105">
					<img
						src="./icons/pizza-main.svg"
						width={40}
						height={40}
						alt="main-pizza"
					/>
				</div>
				<div className="leading-tight">
					<div className="font-bold uppercase">React Pizza</div>
					<div className="font-thin text-xs">здесь самая вкусная пицца</div>
				</div>
			</div>
			<NavLink to="/cart">
				<div className="flex justify-between items-center w-28 p-2 rounded-3xl bg-red-500 cursor-pointer hover:scale-105 transition duration-150 ease-in">
					<div className="font-thin text-white pl-2">520 p</div>
					<div className="font-thin text-white">|</div>
					<div className="pr-2">
						<img
							src="./icons/shopping-cart-white.svg"
							width={20}
							height={20}
							alt="cart"
						/>
					</div>
				</div>
			</NavLink>
		</div>
	);
};

export default Header;
