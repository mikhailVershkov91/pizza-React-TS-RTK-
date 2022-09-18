import CardPizza from "../components/CardPizza";
import FilterPizza from "../components/FilterPizza";
import SortPizza from "../components/SortPizza";

const Home: React.FC = () => {
	return (
		<div className="h-88">
			<div className="flex justify-between items-center mb-7 px-3.5">
				<FilterPizza />
				<SortPizza />
			</div>
			<div className="mb-6 px-3.5 w-1/4">
				<input
					type="text"
					className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
					placeholder="Поиск пиццы..."
				/>
			</div>
			<div className="flex flex-wrap h-4/5 max-h-screen overflow-scroll">
				<CardPizza />
				<CardPizza />
				<CardPizza />
				<CardPizza />
				<CardPizza />
				<CardPizza />
			</div>
		</div>
	);
};

export default Home;
