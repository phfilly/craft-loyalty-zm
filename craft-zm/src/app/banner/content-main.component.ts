import { Component, OnInit, Input } from '@angular/core';
import { ResponsiveBaseComponent, DEVICE_LIST } from '../responsive.component';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-content-main',
  templateUrl: './content-main.component.html',
  styleUrls: ['./content-main.component.css']
})
export class ContentMainComponent extends ResponsiveBaseComponent
  implements OnInit {
  bgUrl: string;

  @Input() title: string;
  @Input() slogan: string;
  @Input() background: string;
  @Input() class: string;
  @Input() extraClass: string;

  constructor(public breakpointObserver: BreakpointObserver) {
    super(breakpointObserver, [DEVICE_LIST.mobile]);
  }

  ngOnInit() {
    this.bgUrl = `../../assets/${this.background}`;
  }
}
