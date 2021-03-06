import { Component, OnInit } from '@angular/core';
import { ResponsiveBaseComponent, DEVICE_LIST } from '../responsive.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material';
import { BasicModalComponent } from '../util/basic-modal/basic-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css'],
})
export class PromotionsComponent extends ResponsiveBaseComponent
  implements OnInit {
  data = [
    {
      option: 'travel',
      icon: 'plane.png',
      image: 'travel-option.jpg',
      text:
        'Visiting to that spot you have always dreamed of has just become possible',
    },
    {
      option: 'accommodation',
      icon: 'house.png',
      image: 'accommodation-option.jpg',
      text: 'Relax! Take control of your life & time and spend it in style',
    },
    {
      option: 'dining',
      icon: 'restaurant.png',
      image: 'dining-option.jpg',
      text:
        'Treat yourself or someone who enjoys great quality food and experiences',
    },
  ];
  constructor(
    public breakpointObserver: BreakpointObserver,
    private modalDialog: MatDialog,
    public router: Router
  ) {
    super(breakpointObserver, [DEVICE_LIST.mobile]);
  }

  ngOnInit() {}

  routeTo(item: string) {
    this.router.navigate([`benefits/${item}`]);
  }

  open() {
    const dialogRef = this.modalDialog.open(BasicModalComponent, {
      width: '600px',
      disableClose: false,
      hasBackdrop: true,
      autoFocus: true,
      data: {
        headingText: 'Example',
        bodyText: 'Example Text',
        buttonText: 'Close',
      },
    });

    dialogRef.componentInstance.closePopup.subscribe(() => {
      dialogRef.close();
    });
  }
}
