import { NavLink } from "react-router-dom";

const Cart: React.FC = () => {
	return (
		<div className="h-88 flex items-center">
			{/* <EmptyCart /> */}
			<div className="w-65 h-90 mx-auto">
				<div className="flex justify-between items-center py-2 mb-2">
					<div className="flex items-center">
						<img
							src="./icons/shopping-cart-black.svg"
							width={40}
							height={40}
							alt="cart"
						/>
						<span className="font-bold text-2xl ml-4">Корзина</span>
					</div>
					<div className="flex items-center opacity-30 cursor-pointer hover:opacity-70">
						<img src="./icons/trash.svg" width={20} height={20} alt="trash" />
						<span className="font-light text-xs ml-2">Очистить корзину</span>
					</div>
				</div>
				<div className="border-b"></div>
				<div className="h-70 overflow-scroll mb-4">
					<CartItem />
					<CartItem />
					<CartItem />
					<CartItem />
					<CartItem />
					<CartItem />
					<CartItem />
					<CartItem />
					<CartItem />
					<CartItem />
				</div>
				<div className="flex justify-between items-center py-2">
					<div className="flex items-center">
						<span className="font-light text-md">Всего пицц:</span>
						<span className="font-bold ml-2">3 шт.</span>
					</div>
					<div className="flex items-center">
						<span className="font-light text-md">Сумма заказа:</span>
						<span className="font-bold ml-2 text-red-500">900 р.</span>
					</div>
				</div>
				<div className="flex justify-between items-center py-4">
					<NavLink to="/">
						<div className="w-32 p-1 text-center rounded-3xl bg-red-300 font-thin text-white cursor-pointer hover:bg-red-500 transition duration-150 ease-in">
							Назад
						</div>
					</NavLink>
					<div className="w-32 p-1 text-center rounded-3xl bg-red-500 font-thin text-white cursor-pointer hover:bg-red-300 transition duration-150 ease-in">
						Оплатить
					</div>
				</div>
			</div>
		</div>
	);
};

const CartItem: React.FC = () => {
	return (
		<>
			<div className="flex justify-between items-center py-8 hover:bg-red-100 transition duration-150 ease-in">
				<div className="flex items-center">
					<div className="mr-6">
						<img
							src="./icons/pizza-main.svg"
							width={40}
							height={40}
							alt="pizza"
						/>
					</div>
					<div className="leading-tight">
						<div className="font-bold">Сырная</div>
						<div className="font-thin text-xs">тонкое тесто, 26 см</div>
					</div>
				</div>
				<div className="flex items-center">
					<div className="cursor-pointer hover:scale-105 transition duration-150 ease-in">
						<img
							src="./icons/rounded-minus.svg"
							width={20}
							height={20}
							alt="minus"
						/>
					</div>
					<div className="px-3">1</div>
					<div className="cursor-pointer hover:scale-105 transition duration-150 ease-in">
						<img
							src="./icons/rounded-plus.svg"
							width={20}
							height={20}
							alt="plus"
						/>
					</div>
				</div>
				<div>770 р.</div>
				<div className="opacity-10 cursor-pointer hover:opacity-50 transition duration-150 ease-in">
					<img src="./icons/cancel.svg" width={23} height={23} alt="cancel" />
				</div>
			</div>
			<div className="border-b"></div>
		</>
	);
};

const EmptyCart = () => {
	return (
		<div className="mx-auto max-w-sm text-center">
			<div className="flex items-center justify-center mb-3">
				<span className="font-bold mr-3">Корзина пустая</span>
				<img src="./icons/sad.svg" width={30} height={30} alt="sad" />
			</div>
			<div className="font-thin mb-3">
				К сожалению, ни одной пиццы не было добавлено. Для того, чтобы сделать
				заказ, вернитесь на главную страницу
			</div>
			<div className="mb-8">
				<img
					src="./icons/empty-cart.png"
					width={400}
					height={400}
					alt="empty-cart"
				/>
			</div>
			<div className="flex justify-center">
				<NavLink to="/">
					<div className="w-32 p-1 text-center rounded-3xl bg-slate-900 font-thin text-white cursor-pointer hover:bg-slate-500 transition duration-150 ease-in">
						На главную
					</div>
				</NavLink>
			</div>
		</div>
	);
};

export default Cart;
