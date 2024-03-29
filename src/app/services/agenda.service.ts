import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  agendaItemCollection = this.db.collection<any>('agendaItems', ref => ref.orderBy('start', 'asc'));
  sessionCollection = this.db.collection<any>('sessionItems', ref => ref.orderBy('number', 'asc'));
  constructor(public db: AngularFirestore) { }
  addItem(item): any {
    return this.agendaItemCollection.add({
      title: item.title,
      start: item.start,
      end: item.end,
      owner: item.owner,
      kind: item.kind,
      session: item.session,
      people: item.owner
    }).then(res => {
      return res.update({
        id: res.id
      });
    });
  }
  addSession(item): any {
    return this.sessionCollection.add({
      title: item.title,
      start: item.start,
      end: item.end,
      chair: item.chair,
      number: item.number,
    }).then(res => {
      return res.update({
        id: res.id
      });
    });
  }
  getItems(): any {
    return this.agendaItemCollection.valueChanges();
  }
  getSessions(): Observable<any> {
    return this.sessionCollection.valueChanges();
  }
  update(item): any {
    return this.agendaItemCollection.doc(item.id).set(item, {merge: true});
  }
  updateSession(item): any {
    return this.sessionCollection.doc(item.id).set(item, {merge: true});
  }
}
