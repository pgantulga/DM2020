import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  types = {
    forum: {
      price: 900000,
      unit: 'MNT',
      type: 'forum',
      memberPrice: 810000,
      count: 0
    },
    online: {
      price: 200,
      unit: 'USD',
      type: 'online',
      memberPrice: 180,
      count: 0
    },
  };
  items = [];
  constructor() {
  }

  addToCard(items): any {
    // @ts-ignore
    this.items = this.items.concat(items);
    // this.items.push(item);
  }

  getItems(): any {
    return this.items;
  }
  clearCart(): any {
    this.items = [];
  }
  getOrderSummary(): any {
    this.types.forum.count = 0;
    this.types.online.count = 0;
    console.log(this.items)

    for (const item of this.items) {
      console.log(item.selected)
      if (item.selected === 'forum') {
        this.types.forum.count ++;
      }
      if (item.selected === 'online') {
        this.types.online.count ++;
      }
    }
    return this.types;
  }
}
