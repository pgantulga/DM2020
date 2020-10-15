import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from "rxjs";
export interface Video {
  url: string;
  title: string;
  subtitle: string;
  category: string;
  subcategory: string;
  id: any;
  videoId: any;
  createdAt: any;
}

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  videosCollection = this.db.collection('videos', ref => ref.orderBy('subtitle', 'asc'));
  constructor(private db: AngularFirestore) { }
  addVideo(item): any {
    this.videosCollection.add({
      url: item.url,
      title: item.title,
      subtitle: item.subtitle,
      category: item.category,
      subcategory: item.subcategory
    })
      .then((res) => {
        return res.update({
          id: res.id
        });
      });
  }
  getAllVideos(): Observable<any> {
    return this.videosCollection.valueChanges();
  }
  getVideo(id): any {
    return this.videosCollection.doc(id).valueChanges();
  }
  update(item): any {
    if (item.image) {
      return this.videosCollection.doc(item.id).set(item, {merge: true});
    }
  }
}
