import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'location-modal',
  templateUrl: './location-modal.component.html',
  styleUrls: ['./location-modal.component.css']
})
export class LocationModalComponent implements OnInit {
  @Output() closePopup = new EventEmitter();

  constructor(public router: Router, @Inject(MAT_DIALOG_DATA) public data?) {}

  ngOnInit() {}

  close() {
    this.closePopup.emit();
  }
}
