import { DomainEvent, DomainEventProps } from '@src/libs/ddd/domain-event.base';

export class CartCreatedDomainEvent extends DomainEvent {
  constructor(props: DomainEventProps<CartCreatedDomainEvent>) {
    super(props);
  }
}
