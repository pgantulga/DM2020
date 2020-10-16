import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SponsorService {
  constructor(private db: AngularFirestore) { };
  getCompanies(type): Observable<any> {
    return this.db.collection('companies', ref => ref.orderBy('rank', 'asc')
      .where('type', '==', type)).valueChanges();
  }
}
