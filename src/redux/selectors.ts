import { ProductState } from "./state";

export const currentProductSelector = ({ currentProduct }: ProductState) =>
currentProduct;