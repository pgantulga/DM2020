import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {switchMap} from 'rxjs/operators';
import * as firebase from 'firebase';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  displayName: string;
  roles: Roles;
  uid: string;
}

export interface Roles {
  guest?: boolean;
  subscriber?: boolean;
  moderator?: boolean;
  admin?: boolean;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>;
  userCollection = this.db.collection<any>('users');
  constructor(public af: AngularFireAuth, private router: Router, private db: AngularFirestore) {
    this.user$ = this.af.authState.pipe(
      switchMap( user => {
        if (user) { return this.userCollection.doc<any>(user.uid).valueChanges(); }
        else {return of(null); }
      })
    );
  }
  async googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.af.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  // tslint:disable-next-line:typedef
  private updateUserData(user: any) {
    const ref = this.userCollection.doc(user.uid);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    };
    return ref.set(data, {merge: true});
  }

  // permission and roles
  checkAuth(user: User, allowedRoles: string[]): boolean {
    if (!user) { return false; }
    for (const role of allowedRoles) {
      if ( user.roles[role]) {
        return true;
      }
    }
  }
  canRead(user: User): boolean {
    const allowed = ['guest', 'subscriber', 'moderator', 'admin'];
    return this.checkAuth(user, allowed);
  }
  canCreate(user: User): boolean {
    const allowed = ['subscriber', 'moderator', 'admin'];
    return this.checkAuth(user, allowed);
  }
  canEdit(user: User): boolean {
    const allowed = ['moderator', 'admin'];
    return this.checkAuth(user, allowed);
  }
  canDelete(user: User): boolean {
    const allowed = ['admin'];
    return this.checkAuth(user, allowed);
  }
}
