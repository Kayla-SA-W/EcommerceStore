import React, { PropsWithChildren } from 'react';
import { OrdersProvider } from './orders-provider';
import { ProductProvider } from './product-provider';

export const ContextProviders = ({ children }: PropsWithChildren<{}>) => (
    <OrdersProvider>
        <ProductProvider>{children}</ProductProvider>
    </OrdersProvider>
);