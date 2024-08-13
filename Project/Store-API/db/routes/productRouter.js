import express from "express";
import { getAllProducts, getAllProductsStatic } from "../controllers/productController.js"

const productRouter = express.Router();
productRouter.route("/").get(getAllProducts);
productRouter.route("/static").get(getAllProductsStatic);

export default productRouter;