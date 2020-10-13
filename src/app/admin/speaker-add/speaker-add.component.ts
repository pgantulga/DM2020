import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AgendaItem} from '../agenda-item-add/agenda-item-add.component';
import {SpeakerService} from "../../services/speaker.service";
import {finalize} from "rxjs/operators";
import {AngularFireStorage, AngularFireUploadTask} from "@angular/fire/storage";
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";

@Component({
  selector: 'app-speaker-add',
  templateUrl: './speaker-add.component.html',
  styleUrls: ['./speaker-add.component.scss']
})
export class SpeakerAddComponent implements OnInit {
  update = false;
  fileToUpload: File = null;
  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadUrl: string;
  constructor( private storage: AngularFireStorage,
               private db: AngularFirestore,
               private speakerService: SpeakerService,
               public dialogRef: MatDialogRef<SpeakerAddComponent>,
               @Inject(MAT_DIALOG_DATA) public data
              ) { }

  ngOnInit(): void {
    if (!this.data) {
      this.data = {
        firstName: '',
        lastName: '',
        bio: '',
        position: null,
        honor: '',
      };
    } else {
      this.update = true;
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onFileSelected(files: any): void {
    this.fileToUpload = files.item(0);
  }
  upload(): void {
    const path = `speaker_images/${this.data.firstName}_${this.data.id}`;
    const ref = this.storage.ref(`speaker_images/${this.data.firstName}_${this.data.id}`);
    this.task = this.storage.upload(path, this.fileToUpload);
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
      finalize( async () => {
        const downloadUrl = await ref.getDownloadURL().toPromise();
        this.db.collection('speakers').doc(this.data.id).update({image: downloadUrl});
      })
    );
    // this.speakerService.uploadImage(this.fileToUpload, this.data);
  }
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

}
