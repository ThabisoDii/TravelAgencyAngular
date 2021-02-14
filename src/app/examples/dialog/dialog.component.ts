import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData, StandardProfileComponent } from '../standard-profile/standard-profile.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<StandardProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
