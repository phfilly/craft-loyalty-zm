import { Component, OnInit } from '@angular/core';
import { ResponsiveBaseComponent, DEVICE_LIST } from '../responsive.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material';
import { BasicModalComponent } from '../util/basic-modal/basic-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent extends ResponsiveBaseComponent
  implements OnInit {
  data = [
    {
      option: 'travel',
      icon: 'plane.png',
      image: 'offset_347410-min.jpg',
      text:
        'Visiting to that spot you have always dreamed of has just become possible'
    },
    {
      option: 'lifestyle',
      icon: 'restaurant.png',
      image: 'pool.jpg',
      text: 'Relax! Take control of your life & time and spend it in style'
    },
    {
      option: 'retail',
      icon: 'shopping-cart.png',
      image: 'shopping-cover.jpg',
      text:
        'Treat yourself to something that will make you look or feel fabulous'
    }
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
      disableClose: false,
      hasBackdrop: true,
      autoFocus: true,
      data: {
        headingText: 'Example',
        bodyText: 'Example Text',
        buttonText: 'Close'
      }
    });

    dialogRef.componentInstance.closePopup.subscribe(() => {
      dialogRef.close();
    });
  }
}
