import { products } from "../data/products";

export const getProducts = () => products;

export const getProductById = (id) =>
  products.find((p) => p.id === parseInt(id));