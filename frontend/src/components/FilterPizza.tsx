const FilterPizza: React.FC = () => {
	const arr = ["Все", "Мясные", "Фруктовые"];

	return (
		<div className="flex max-w-fit justify-between items-center">
			{arr.map((type: string, index: number) => (
				<div
					className="bg-gray-100 px-3 py-1 mr-2 rounded-xl font-extralight text-sm cursor-pointer hover:bg-gray-200"
					key={index}
				>
					{type}
				</div>
			))}
		</div>
	);
};

export default FilterPizza;
