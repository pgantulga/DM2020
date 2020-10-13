import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {AngularFireStorage} from "@angular/fire/storage";
import {finalize} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
  speakerCollection = this.db.collection('speakers');
  constructor(public db: AngularFirestore, private storage: AngularFireStorage) { }
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
  // uploadImage(file, user): any {
  //   const path = `speaker_images/${user.firstName}_${user.id}`;
  //   const ref = this.storage.ref(`speaker_images/${user.firstName}_${user.id}`);
  //   const task = this.storage.upload(path, file);
  //   const snapshot = task.snapshotChanges().pipe(
  //     finalize( async () => {
  //       const downloadUrl = await ref.getDownloadURL().toPromise();
  //       this.db.collection('speakers').doc(user.id).update({image: downloadUrl})
  //     })
  //   )
  // }
}
