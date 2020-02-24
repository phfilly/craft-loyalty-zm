import { Component, OnInit } from '@angular/core';
import { ResponsiveBaseComponent, DEVICE_LIST } from '../responsive.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent extends ResponsiveBaseComponent
  implements OnInit {
  constructor(
    public breakpointObserver: BreakpointObserver,
    public router: Router
  ) {
    super(breakpointObserver, [DEVICE_LIST.mobile]);
  }

  ngOnInit() {}

  routeTo(item: string) {
    this.router.navigate([`${item}`]);
  }
}
