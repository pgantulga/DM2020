import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from "rxjs";
// import {catchError, map} from 'rxjs/operators';
// const httpOptions = {
//   // headers: new HttpHeaders({ 'content-type': 'json'}),
// };


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  delegateCollection = this.db.collection<any>('delegates', ref => ref.orderBy('createdAt', 'desc'));
  orderCollection = this.db.collection<any>('orders', ref => ref.orderBy('createdAt', 'desc'));
  types = {
    forum: {
      price: 900000,
      unit: 'MNT',
      type: 'forum',
      memberPrice: 810000,
      count: 0,
      total: 0
    },
    online: {
      price: 200,
      unit: 'USD',
      type: 'online',
      memberPrice: 180,
      count: 0,
      total: 0
    },
  };
  items = [];
  constructor(private db: AngularFirestore) {
  }

  addToCard(items): any {
    // @ts-ignore
    this.items = this.items.concat(items);
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
    for (const item of this.items) {
      if (item.selected === 'forum') {
        this.types.forum.count ++;
      }
      if (item.selected === 'online') {
        this.types.online.count ++;
      }
    }
    return [
      {
        badge: 'Forum',
        price: this.types.forum.price,
        QTY: this.types.forum.count,
        subtotal: this.types.forum.count * this.types.forum.price,
        currency: 'MNT'
      },
      {
        badge: 'Online',
        price: this.types.online.price,
        QTY: this.types.online.count,
        subtotal: this.types.online.count * this.types.online.price,
        currency: 'USD'
      }
    ];
  }
   saveDelegates(id): Promise<any> {
    return new Promise<any> (async (resolve) =>  {
      if (this.items.length) {
        for ( const item of this.items ) {
          await this.saveDelegate(item, id);
        }
        resolve(true);
      }
    });
  }
  async saveDelegate(item, id): Promise<any> {
    await this.delegateCollection.add(item)
      .then(res => {
        return res.update({
          id: res.id,
          orderId: id,
          createdAt: new Date()
        });
      });
  }
  getTotalAmount(onlineOrder, forumOrder, rate): any {
    if (onlineOrder || forumOrder) {
      return  onlineOrder.subtotal * rate + forumOrder.subtotal;
    }
  }
  saveOrder(onlineOrder, forumOrder, paymentDetails, invoiceNum, totalAmount): Promise<any> {
    const obj = {
      companyName: paymentDetails.invoiceCompany,
      email: paymentDetails.invoiceEmail,
      paymentType: paymentDetails.paymentType,
      createdAt: new Date(),
      online_qty: onlineOrder.QTY,
      online_subtotal: onlineOrder.subtotal,
      online_currency: 'USD',
      forum_qty: forumOrder.QTY,
      forum_subtotal: forumOrder.subtotal,
      forum_currency: 'MNT',
      invoiceNumber: invoiceNum,
      total: totalAmount,
    };
    if (paymentDetails.paymentType === 'card') {
      obj.companyName = 'card payment:' + invoiceNum;
      obj.email = 'card payment:' + invoiceNum;
    }
    if (paymentDetails.paymentType === 'socialpay') {
      obj.companyName = 'SP payment:' + invoiceNum;
      obj.email = 'SP payment:' + invoiceNum;
      obj.total = totalAmount * 0.9;
    }
    return this.orderCollection.add(obj).then(res => {
      return this.saveDelegates(res.id).then((val) => {
        return res.update({
          id: res.id
        });
      });
    });
  }
  getDelegates(): Observable<any> {
    return this.delegateCollection.valueChanges();
  }
  getOrders(): Observable<any> {
    return this.orderCollection.valueChanges();
  }
  getLatestInvoice(): Observable<any> {
    return this.db.collection<any>('orders', ref => ref.orderBy('invoiceNumber', 'desc').limit(1)).valueChanges();
  }
  updateOrder(success, transnumber, errorDesc): any {
    let isPaid = false;
    let error = errorDesc;
    if (success === '0') {
      isPaid = true;
      error = null;
    }
    this.db.collection<any>('orders', ref => ref.where('invoiceNumber', '==', transnumber)).valueChanges()
      .subscribe(snapshot => {
        snapshot.forEach(item => {
          // console.log(item)
          this.orderCollection.doc(item.id).update({paid: isPaid,
            errorDesc: error}).then(() => {console.log('Order updated'); });
        });
      });
  }
  removeOrder(order): Promise<any> {
    return this.orderCollection.doc(order.id).delete();
  }

}

