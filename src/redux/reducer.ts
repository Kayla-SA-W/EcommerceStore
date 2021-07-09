import { composeReducers, ofType, withDefault } from 'redux-compose';
import { UpdateProductAction, updateProductActionType } from './actions';
import { defaultProductState, ProductState } from "./state";

const updateProduct = (
  _: ProductState,
  { payload }: UpdateProductAction
): ProductState => ({
  ...payload
});

export const productReducer = composeReducers(
  withDefault(defaultProductState, ofType(updateProductActionType, updateProduct))
);