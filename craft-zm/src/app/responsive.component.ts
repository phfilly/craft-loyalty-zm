import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

export const enum DEVICE_LIST {
  web = 'WEB',
  mobile = 'MOBILE',
  tablet = 'TABLET'
}

export abstract class ResponsiveBaseComponent {
  public isWebView: boolean;
  public isTabletView: boolean;
  public isMobileView: boolean;

  private webSubscription: Subscription;
  private tabletSubscription: Subscription;
  private mobileSubscription: Subscription;

  constructor(
    public breakpointObserver: BreakpointObserver,
    public devices: Array<string>
  ) {
    if (this.devices.includes(DEVICE_LIST.web)) {
      this.webSubscription = this.breakpointObserver
        .observe([Breakpoints.Web, Breakpoints.TabletLandscape])
        .subscribe(result => {
          if (result.matches) {
            this.isWebView = true;
            this.isTabletView = false;
            this.isMobileView = false;
          } else {
            this.isWebView = false;
          }
        });
    }

    if (this.devices.includes(DEVICE_LIST.tablet)) {
      this.tabletSubscription = this.breakpointObserver
        .observe([Breakpoints.Tablet])
        .subscribe(result => {
          if (result.matches) {
            this.isTabletView = true;
            this.isWebView = false;
            this.isMobileView = false;
          } else {
            this.isTabletView = false;
          }
        });
    }

    if (this.devices.includes(DEVICE_LIST.mobile)) {
      this.mobileSubscription = breakpointObserver
        .observe([Breakpoints.Handset, Breakpoints.TabletPortrait])
        .subscribe(result => {
          if (result.matches) {
            this.isMobileView = true;
            this.isWebView = false;
            this.isTabletView = false;
          } else {
            this.isMobileView = false;
          }
        });
    }
  }

  manualDestroy() {
    if (this.webSubscription) {
      this.webSubscription.unsubscribe();
    }
    if (this.tabletSubscription) {
      this.tabletSubscription.unsubscribe();
    }
    if (this.mobileSubscription) {
      this.mobileSubscription.unsubscribe();
    }
  }
}
