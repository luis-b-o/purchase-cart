import { AggregateID } from '@src/libs/ddd';

export interface CartProps {
  cartItems: CartItemProps[];
  customerId: AggregateID;
  cartPrice: number;
}

export interface CreateCartProps {
  customerId: AggregateID;
}

export interface CartItemProps {
  id: AggregateID;
  price: number;
  quantity: number;
}
