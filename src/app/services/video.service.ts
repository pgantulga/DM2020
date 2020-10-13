import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
export interface Video {
  url: string;
  title: string;
  subtitle: string;
  category: string;
  subcategory: string;
}

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  videosCollection = this.db.collection('videos');
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
}
