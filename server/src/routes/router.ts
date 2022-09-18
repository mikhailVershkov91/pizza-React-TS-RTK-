import express from "express";
import * as PizzaRouter from "./pizza";

const router = express.Router();

router.post("/pizza", PizzaRouter.createPizza);
router.get("/pizza", PizzaRouter.getAllPizzas);
router.put("/pizza/:id", PizzaRouter.updatePizza);
router.delete("/pizza/:id", PizzaRouter.deletePizza);

export default router;
