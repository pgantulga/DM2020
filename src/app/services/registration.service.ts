import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AngularFirestore} from '@angular/fire/firestore';
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
  // saveDelegates(id): any {
  //   if(this.items.length) {
  //     for await(const item of this.item ) {
  //
  //     }
      // for (const item of this.items) {
      //   this.delegateCollection.add(item)
      //     .then()
      //
      // }
    // }
  // }
  saveOrder(onlineOrder, forumOrder, paymentDetails): Promise<any> {
    return this.orderCollection.add({
      companyName: paymentDetails.invoiceCompany,
      email: paymentDetails.invoiceEmail,
      createdAt: new Date(),
      online_qty: onlineOrder.QTY,
      online_subtotal: onlineOrder.subtotal,
      online_currency: 'USD',
      forum_qty: forumOrder.QTY,
      forum_subtotal: forumOrder.subtotal,
      forum_currency: 'MNT',
      // total: forumOrder.subtotal + onlineOrder.subtotal,
    }).then(res => {
      // this.saveDelegates(res.id);
      return res.update({
        id: res.id
      });
    });
  }
  // private handleError(error: HttpErrorResponse): any {
  //   if (error.error instanceof ErrorEvent) {
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     console.error(
  //       `Backend returned code ${error.status}, ` + `body was: ${error}`
  //     );
  //   }
  //   return throwError(error);
  // }
  // private extractData(res: Response): any {
  //   const body = res;
  //   return body || {};
  // }

  // getRate(): Observable<any> {
  //   return this.http.get(url, httpOptions).pipe(
  //     map(this.extractData),
  //     catchError(this.handleError)
  //   );
    // return this.http.get<any>(url, {responseType: 'json'});
  // }
}

