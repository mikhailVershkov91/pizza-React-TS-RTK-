import { NavLink } from "react-router-dom";

const NotFound: React.FC = () => {
	return (
		<div className="w-full h-88">
			<div className="w-full h-90 flex flex-col justify-center mx-auto items-center">
				<div className="font-normal text-xl text-zinc-500 mb-5">
					Страница не найдена, вернитесь на главную
				</div>
				<div>
					<img src="./icons/404.png" width={400} height={400} alt="not found" />
				</div>
				<NavLink to="/">
					<div className="w-32 p-1 text-center rounded-3xl bg-red-500 font-thin text-white cursor-pointer hover:bg-red-300 transition duration-150 ease-in">
						На главную
					</div>
				</NavLink>
			</div>
		</div>
	);
};

export default NotFound;
