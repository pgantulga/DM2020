import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {first} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  imagesCollection = this.db.collection<any>('images');
  constructor(private db: AngularFirestore) { }
  addImage(meta): any {
    console.log(meta);
    return this.db.collection('images').doc(meta.type + '_' + meta.detail).set({
      type: meta.type,
      detail: meta.detail,
      embedUrl: meta.embedUrl
    });
  }
   getImage(docId): Observable<any> {
    return this.imagesCollection.doc(docId).valueChanges();
  }
}
