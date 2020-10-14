import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Video} from '../../services/video.service';
import {finalize} from "rxjs/operators";
import {AngularFireStorage, AngularFireUploadTask} from "@angular/fire/storage";
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/firestore";

@Component({
  selector: 'app-video-add',
  templateUrl: './video-add.component.html',
  styleUrls: ['./video-add.component.scss']
})
export class VideoAddComponent  {
  update = false;
  fileToUpload: File = null;
  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  constructor(public dialogRef: MatDialogRef<any>,
              @Inject(MAT_DIALOG_DATA) public data: Video,
              private storage: AngularFireStorage,
              private db: AngularFirestore) { }
  cancel(): void {
    this.dialogRef.close();
    if (!this.data) {
      this.data = {
        category: '',
        subcategory: '',
        title: '',
        subtitle: '',
        url: '',
        id: ''
      };
    } else {
      this.update = true;
    }
  }
  onFileSelected(files: any): void {
    this.fileToUpload = files.item(0);
  }
  upload(): void {
    const path = `video_images/${this.data.category}_${this.data.subcategory}`;
    const ref = this.storage.ref(`video_images/${this.data.category}_${this.data.subcategory}`);
    this.task = this.storage.upload(path, this.fileToUpload);
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
      finalize( async () => {
        const downloadUrl = await ref.getDownloadURL().toPromise();
        this.db.collection('videos').doc(this.data.id).update({image: downloadUrl});
      })
    );
    // this.speakerService.uploadImage(this.fileToUpload, this.data);
  }
}
