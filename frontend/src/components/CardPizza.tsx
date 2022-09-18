import { NavLink } from "react-router-dom";

const CardPizza: React.FC = () => {
	return (
		<div className="w-1/4 box-border mb-4 px-4">
			<NavLink to="/pizza">
				<div className="flex flex-col items-center border rounded-xl py-1 cursor-pointer hover:bg-gray-100 transition duration-150 ease-in">
					<div className="mb-4">
						<img
							src="./icons/pizza-main.svg"
							width={170}
							height={170}
							alt="pizza-img"
						/>
					</div>
					<div className="mb-3">
						<span className="font-bold text-md">Сырная</span>
					</div>
					<div className="bg-gray-100 mb-3 w-3/4 rounded-xl">
						<div className="flex p-1 justify-evenly items-center">
							<span className="font-light text-xs">тонкое</span>
							<span className="font-light text-xs">традиционное</span>
						</div>
						<div className="flex p-1 justify-evenly items-center">
							<span className="font-light text-xs">26 см</span>
							<span className="font-light text-xs">30 см</span>
							<span className="font-light text-xs">40 см</span>
						</div>
					</div>
					<div className="flex items-center justify-between w-3/4 mb-2">
						<div className="font-bold text-md">от 365 руб.</div>
						<div className="flex items-center justify-evenly w-32 border rounded-3xl py-1 px-2 cursor-pointer hover:scale-105">
							<div>
								<img src="./icons/plus.svg" width={10} height={10} alt="plus" />
							</div>
							<div className="font-light text-xs">Добавить</div>
							<div className="px-2 py-1 rounded-full bg-red-500 font-light text-xs text-white">
								2
							</div>
						</div>
					</div>
				</div>
			</NavLink>
		</div>
	);
};

export default CardPizza;
