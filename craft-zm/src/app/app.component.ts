import { Component } from '@angular/core';
import { ResponsiveBaseComponent, DEVICE_LIST } from './responsive.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends ResponsiveBaseComponent {
  title = 'mastercard';
  sliderDetails = [{}];

  constructor(
    public breakpointObserver: BreakpointObserver,
    private modalDialog: MatDialog,
    private router: Router
  ) {
    super(breakpointObserver, [DEVICE_LIST.mobile]);
  }

  routeTo(item: string) {
    this.router.navigate([`/${item}`]);
  }
}
