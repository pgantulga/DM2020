import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
  speakerCollection = this.db.collection('speakers');
  constructor(public db: AngularFirestore) { }
  addSpeaker(item): any {
    return this.speakerCollection.add({
      firstName: item.firstName,
      lastName: item.lastName,
      honor: item.honor,
      position: item.position,
    }).then(res => {
      return res.update({
        id: res.id
      });
    });
  }
  getSpeakers(): Observable<any> {
    return this.speakerCollection.valueChanges();
  }
}
