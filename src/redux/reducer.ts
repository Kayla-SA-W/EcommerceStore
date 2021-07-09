import { composeReducers, ofType, withDefault } from 'redux-compose';
import { UpdateProductAction, updateProductActionType } from './actions';
import { defaultProductState, ProductState } from "./state";

const updateProduct = (
  state: ProductState,
  { payload }: UpdateProductAction
): ProductState => ({
  ...state,
  ...payload
});

export const productReducer = composeReducers(
  withDefault(defaultProductState, ofType(updateProductActionType, updateProduct))
);