import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articleCollection = this.db.collection<any>('article', ref => ref.orderBy('createdAt', 'desc'));
  constructor(private db: AngularFirestore) { }
  createArticle(formData, user) {
    return  this.articleCollection.add({
      title: formData.title,
      content: formData.content,
      createdAt: new Date(),
      updatedAt: new Date(),
      uid: user.uid,
      author: {
        displayName: user.displayName,
        uid: user.uid,
      },
    }).then((res) => {
      return res.update({
        id: res.id
      });
    })
      .catch(error => {
        console.log('something happened' + error);
      });
  }
  saveArticle(formData, user, tagsArray, oldValue) {
    return this.articleCollection.doc(oldValue.id).set({
      title: formData.title,
      content: formData.content,
      updatedAt: new Date()
    }, {merge: true});
  }
}
