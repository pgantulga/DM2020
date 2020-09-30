import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articleCollection = this.db.collection<any>('articles' +
    '', ref => ref.orderBy('createdAt', 'desc'));
  constructor(private db: AngularFirestore) { }
  getAllArticles(): any {
    return this.db.collection('articles', ref => ref.orderBy('createdAt', 'desc' )).valueChanges();
  }
  createArticle(formData, user): any {
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
  saveArticle(formData, user, oldValue): any {
    return this.articleCollection.doc(oldValue.id).set({
      title: formData.title,
      content: formData.content,
      updatedAt: new Date()
    }, {merge: true});
  }
  getArticle(id): any {
    return this.articleCollection.doc(id).valueChanges();
  }
  getArticleByTitle(title): any {
    return this.db.collection('articles', ref => ref.orderBy('createAt', 'desc')
      .where('title', '==', title)).valueChanges();
  }
}
