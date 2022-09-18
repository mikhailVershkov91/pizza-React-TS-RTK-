import { Schema, model, Document } from "mongoose";

export interface IOption extends Document {
	type: number;
	size: number;
	price: number;
}

export interface IPizza extends Document {
	name: string;
	imageUrl: string;
	desc: string;
	pizzaOptions: IOption[];
	category: number;
	rating: number;
}

const pizza = new Schema<IPizza>(
	{
		name: { type: Schema.Types.String, required: true },
		imageUrl: { type: Schema.Types.String, required: true },
		desc: { type: Schema.Types.String, required: true },
		pizzaOptions: [
			{
				type: { type: Schema.Types.Number, required: true },
				size: { type: Schema.Types.Number, required: true },
				price: { type: Schema.Types.Number, required: true },
			},
		],
		category: { type: Schema.Types.Number, required: true },
		rating: { type: Schema.Types.Number, required: true },
	},
	{ collection: "pizzas" }
);

export const Pizza = model<IPizza>("Pizza", pizza);
