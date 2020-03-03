import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { LocationModalComponent } from '../location-modal/location-modal.component';

@Component({
  selector: 'basic-modal',
  templateUrl: './basic-modal.component.html',
  styleUrls: ['./basic-modal.component.css']
})
export class BasicModalComponent implements OnInit {
  @Output() closePopup = new EventEmitter();

  constructor(
    public router: Router,
    private modalDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data?
  ) {}

  ngOnInit() {}

  close() {
    this.closePopup.emit();
  }

  view() {
    window.open(this.data.url, '_self');
  }

  openLocationModal() {
    const dialogRef = this.modalDialog.open(LocationModalComponent, {
      disableClose: false,
      hasBackdrop: true,
      autoFocus: true,
      data: {
        headingText: '',
        logo: this.data.logo,
        link: this.data.link,
        buttonText: 'Close'
      }
    });

    dialogRef.componentInstance.closePopup.subscribe(() => {
      dialogRef.close();
    });
  }
}
