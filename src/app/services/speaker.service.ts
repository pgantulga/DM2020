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
      displayName: item.displayName
    }).then(res => {
      return res.update({
        id: res.id
      });
    });
  }
  getSpeakers(): Observable<any> {
    return this.speakerCollection.valueChanges();
  }
  updateSpeaker(item): any {
    const data = {
      firstName: item.firstName,
      lastName: item.lastName,
      honor: item.honor,
      position: item.position,
      displayName: item.displayName
    };
    return this.speakerCollection.doc(item.id).set(data, {merge: true});
  }
}
