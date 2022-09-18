import { Request, Response } from "express";
import { Pizza } from "../db/models/Pizza";

export const createPizza = async (req: Request, res: Response) => {
	try {
		const newPizza = new Pizza({
			name: req.body.name,
			imageUrl: req.body.imageUrl,
			desc: req.body.desc,
			pizzaOptions: req.body.pizzaOptions,
			category: req.body.category,
			rating: req.body.rating,
		});

		await newPizza.save();

		return res.json({ message: `Pizza ${req.body.name} was created` });
	} catch (e) {
		console.log(e);
		res.send({ message: "Server error. Pizza didn't created" });
	}
};

export const getAllPizzas = async (req: Request, res: Response) => {
	try {
		return res.json({
			pizzas: await Pizza.find(),
		});
	} catch (e) {
		console.log(e);
		res.send({ message: "Server error. Couldn't get all pizzas" });
	}
};

export const updatePizza = async (req: Request, res: Response) => {
	try {
		await Pizza.updateOne(
			{ _id: req.params.id },
			{
				name: req.body.name,
				imageUrl: req.body.imageUrl,
				desc: req.body.desc,
				pizzaOptions: req.body.pizzaOptions,
				category: req.body.category,
				rating: req.body.rating,
			}
		);
		return res.sendStatus(200);
	} catch (e) {
		console.log(e);
		res.send({ message: "Server error. Couldn't get all pizzas" });
	}
};

export async function deletePizza(req: Request, res: Response) {
	try {
		await Pizza.deleteOne({ _id: req.params.id });
		return res.sendStatus(200);
	} catch (e) {
		console.log(e);
		res.send({ message: "Server error. Couldn't get all pizzas" });
	}
}
