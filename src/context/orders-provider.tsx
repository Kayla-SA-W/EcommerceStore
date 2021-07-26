import React, { createContext, Dispatch, PropsWithChildren, SetStateAction } from 'react';
import { Orders } from './types';
import { useSessionStorage } from '../hooks/use-session-storage';

export const ORDERS_KEY = 'orders';

export const initialOrderState: Orders = {
  name: '',
  color: '',
  quantity: 0
};

type OrdersContextType = {
  orders: Orders;
  setOrders: Dispatch<SetStateAction<Orders>>;
};

export const OrdersContext = createContext<OrdersContextType>({
  orders: initialOrderState,
  setOrders: () => undefined
});

export const OrdersProvider = ({ children }: PropsWithChildren<{}>) => {
  const [orders, setOrders] = useSessionStorage(ORDERS_KEY, initialOrderState);

  return (
    <OrdersContext.Provider
      value={{
        orders,
        setOrders
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};