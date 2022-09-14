const SortPizza: React.FC = () => {
	const arr = ["По цене", "По типу", "По популярности"];

	return (
		<div className="flex max-w-fit justify-between">
			<div className="font-bold text-sm mr-3">Сортировать по: </div>
			{arr.map((x: string) => (
				<div className="text-red-500 text-sm font-light underline underline-offset-1">
					{x}
				</div>
			))}
		</div>
	);
};

export default SortPizza;
