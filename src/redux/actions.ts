import { Action, ActionCreator } from "redux";
import { ProductState } from "./state";

export const updateProductActionType = 'PRODUCT_UPDATE_ACTION' as const;

export interface UpdateProductAction extends Action {
    type: typeof updateProductActionType;
    payload: ProductState; 
}

export const updateProductActionCreator: ActionCreator<UpdateProductAction> = (
  { currentProduct }: ProductState
) => {
  console.log('action dispatched ' + currentProduct)
  return {
  type: updateProductActionType,
  payload: {
    currentProduct
  }
}};