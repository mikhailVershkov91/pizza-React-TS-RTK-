import express from "express";
import "dotenv/config";
import router from "./routes/router";
import cors from "cors";
import { createConnection } from "./db";

export const PORT = process.env.PORT;
export const mongoUrl = process.env.MONGO_URL;
export const defaultFilePath = process.env.FILE_PATH;
export const baseUrl = "/api";

const app = express();

(async () => {
	try {
		await createConnection();

		app.use(express.json());
		app.use(baseUrl, router);
		app.use(cors);

		app.listen(PORT, () => {
			console.info(`Server is running on http://localhost:${PORT}`);
		});
	} catch (e) {
		console.log(e);
	}
})();
