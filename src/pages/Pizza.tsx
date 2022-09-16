import { NavLink } from "react-router-dom";

const Pizza: React.FC = () => {
	return (
		<div className="h-88 w-80 mx-auto">
			<div className="h-90 flex justify-between items-center">
				<div className="flex flex-col justify-start items-center w-40">
					<div className="mb-5">
						<img
							src="./icons/pizza-main.svg"
							width={400}
							height={400}
							alt="pizza-img"
						/>
					</div>
					<div className="mb-3">
						<span className="font-bold text-3xl">Сырная</span>
					</div>
					<div className="mb-5">
						<span className="font-light text-md">традиционная, 30 см</span>
					</div>
					<div className="flex w-65 justify-between items-center">
						<div className="font-bold text-md">365 руб/шт.</div>
						<div className="flex">
							<span className="font-light text-md">В корзине:</span>
							<span className="font-bold text-md ml-3">3 шт</span>
						</div>
					</div>
				</div>
				<div className="h-90 flex flex-col justify-start items-center w-40 relative">
					<div className="p-3 mb-3 font-light text-md indent-5 text-justify leading-tight">
						Тонкое хрустящее тесто и различные виды сыров делают эту пиццу одной
						из самых любимых у наших клиентов
					</div>
					<div className="font-bold text-xl mb-5">Ингридиенты:</div>
					<div className="h-70 mx-auto mb-3 overflow-scroll">
						<ul>
							<li className="flex mb-3">
								<img src="./icons/tick.svg" width={20} height={20} alt="tick" />
								<span className="font-light text-md tracking-wider ml-4">
									Тонкое тесто
								</span>
							</li>
							<li className="flex mb-3">
								<img src="./icons/tick.svg" width={20} height={20} alt="tick" />
								<span className="font-light text-md tracking-wider ml-4">
									Томатная основа
								</span>
							</li>
							<li className="flex mb-3">
								<img src="./icons/tick.svg" width={20} height={20} alt="tick" />
								<span className="font-light text-md tracking-wider ml-4">
									Сыр гауда
								</span>
							</li>
							<li className="flex mb-3">
								<img src="./icons/tick.svg" width={20} height={20} alt="tick" />
								<span className="font-light text-md tracking-wider ml-4">
									Сыр моцарелла
								</span>
							</li>
							<li className="flex mb-3">
								<img src="./icons/tick.svg" width={20} height={20} alt="tick" />
								<span className="font-light text-md tracking-wider ml-4">
									Сыр пармезан
								</span>
							</li>
							<li className="flex mb-3">
								<img src="./icons/tick.svg" width={20} height={20} alt="tick" />
								<span className="font-light text-md tracking-wider ml-4">
									Маслины
								</span>
							</li>
							<li className="flex mb-3">
								<img src="./icons/tick.svg" width={20} height={20} alt="tick" />
								<span className="font-light text-md tracking-wider ml-4">
									Оливки
								</span>
							</li>
							<li className="flex mb-3">
								<img src="./icons/tick.svg" width={20} height={20} alt="tick" />
								<span className="font-light text-md tracking-wider ml-4">
									Зелень
								</span>
							</li>
						</ul>
					</div>
					<NavLink to="/">
						<div className="absolute bottom-0 w-32 p-1 text-center rounded-3xl bg-red-500 font-thin text-white cursor-pointer hover:bg-red-300 transition duration-150 ease-in">
							На главную
						</div>
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Pizza;
