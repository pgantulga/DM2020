import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {switchMap} from 'rxjs/operators';
import * as firebase from 'firebase';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SnackComponent} from '../layout/snack/snack.component';

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
  constructor(public af: AngularFireAuth, private router: Router, private db: AngularFirestore, public snackBar: MatSnackBar) {
    this.user$ = this.af.authState.pipe(
      switchMap( user => {
        if (user) { return this.userCollection.doc<any>(user.uid).valueChanges(); }
        else {return of(null); }
      })
    );
  }
  async googleLogin(): Promise<any> {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.af.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }
  private updateUserData(user: any): Promise<any> {
    const ref = this.userCollection.doc(user.uid);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      roles: {
        guest: true
      },
    };
    return ref.set(data, {merge: true});
  }
  async signOut(): Promise<any> {
    await this.af.signOut()
      .then(res => {
        console.log('Successfully signed out');
        this.snackBar.openFromComponent(SnackComponent, {
          data: 'Амжилттай гарлаа'
        });
      });
    return this.router.navigate(['/']);
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
