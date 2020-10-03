import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  agendaItemCollection = this.db.collection<any>('agendaItems', ref => ref.orderBy('start', 'desc'));
  constructor(public db: AngularFirestore) { }
  addItem(item): any {
    return this.agendaItemCollection.add({
      title: item.title,
      start: item.title,
      end: item.end,
      owner: item.owner,
      type: item.type,
      session: item.session,
      people: item.owner
    }).then(res => {
      return res.update({
        id: res.id
      });
    });
  }
  getItems(): any {
    return this.agendaItemCollection.valueChanges();
  }
}
