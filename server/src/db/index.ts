import mongoose from "mongoose";
import { mongoUrl } from "..";

export const createConnection = async () => {
	try {
		const options = {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		} as mongoose.ConnectOptions;

		await mongoose.connect(mongoUrl || "", options);
	} catch (error) {
		console.error(error);
		throw "Connection to db failed!";
	}
};
