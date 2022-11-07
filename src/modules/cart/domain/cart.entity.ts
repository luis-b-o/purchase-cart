import { AggregateID } from '@src/libs/ddd';
import { AggregateRoot } from '@src/libs/ddd/aggregate-root.base';
import {
  CartProps,
  CreateCartProps,
} from '@src/modules/cart/domain/cart.types';
import { CartCreatedDomainEvent } from '@src/modules/cart/domain/events/cart-created.domain-event';
import { v4 } from 'uuid';

export class CartEntity extends AggregateRoot<CartProps> {
  protected readonly _id: AggregateID;

  static create(create: CreateCartProps): CartEntity {
    const id = v4();
    const props: CartProps = {
      ...create,
      cartItems: [],
      cartPrice: 0,
    };
    const cart = new CartEntity({ id, props });
    /* adding "CartCreatedDomainEvent" Domain Event that will be published
    eventually so an event handler somewhere may receive it and do an
    appropriate action. Multiple events can be added if needed. */
    cart.addEvent(
      new CartCreatedDomainEvent({
        aggregateId: id,
      }),
    );
    return cart;
  }

  validate(): void {
    // entity business rules validation to protect it's invariant before saving entity to a database
  }
}
