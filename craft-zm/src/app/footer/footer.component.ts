import { Component, OnInit } from '@angular/core';
import { ResponsiveBaseComponent, DEVICE_LIST } from '../responsive.component';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent extends ResponsiveBaseComponent implements OnInit {
  constructor(public breakpointObserver: BreakpointObserver) {
    super(breakpointObserver, [DEVICE_LIST.mobile]);
  }

  ngOnInit() {}
}
