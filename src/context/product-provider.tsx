import React, { createContext, Dispatch, PropsWithChildren, SetStateAction } from 'react';
import { Product } from './types';
import { useSessionStorage } from '../hooks/use-session-storage';

export const CURRENT_PRODUCT_KEY = 'currentProduct';

export const initialProductState: Product = {
  currentProduct: ''
};

type ProductContextType = {
  product: Product;
  setProduct: Dispatch<SetStateAction<Product>>;
};

export const ProductContext = createContext<ProductContextType>({
  product: initialProductState,
  setProduct: () => undefined
});

export const ProductProvider = ({ children }: PropsWithChildren<{}>) => {
  const [product, setProduct] = useSessionStorage(CURRENT_PRODUCT_KEY, initialProductState);

  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};