import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { MatDialog } from '@angular/material';
import { BasicModalComponent } from '../util/basic-modal/basic-modal.component';
import { ResponsiveBaseComponent, DEVICE_LIST } from '../responsive.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { getBodyText } from './PopupText';
import { DATA } from './clientData';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent extends ResponsiveBaseComponent
  implements OnInit {
  public titleName: string;
  public background: string;
  public isSubProduct = false;
  public text: string;

  clientData = [];
  data = DATA;

  constructor(
    public breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute,
    private modalDialog: MatDialog,
    private router: Router
  ) {
    super(breakpointObserver, [DEVICE_LIST.mobile]);
    this.titleName = this.route.snapshot.routeConfig.path;
    this.background = this.data.find(items => items.key === this.titleName)[
      'background'
    ];

    this.router.events.subscribe(route => {
      if (route instanceof NavigationEnd) {
        this.clientData = this.filter();
        this.isSubProduct = false;
        this.text = 'partners';
      }
    });
  }

  ngOnInit() {}

  routeTo(item: string) {
    this.router.navigate([`${item}`]);
  }

  filter() {
    return this.data.filter(item => item['key'] === this.titleName)[0][
      'clients'
    ];
  }

  filterSubProduct() {
    return this.data.filter(item => item['key'] === this.titleName)[1][
      'clients'
    ];
  }

  open(client) {
    if (client.route) {
      this.router.navigate([client.route]);
    } else if (client.pdf) {
      window.open(client.pdf, '_blank');
    } else {
      const dialogRef = this.modalDialog.open(BasicModalComponent, {
        disableClose: false,
        hasBackdrop: true,
        autoFocus: true,
        data: {
          headingText: '',
          link: client['link'],
          logo: client['logo'],
          name: client['name'],
          url: client['url'],
          bodyText: getBodyText(client['name']),
          buttonText: 'Close'
        }
      });

      dialogRef.componentInstance.closePopup.subscribe(() => {
        dialogRef.close();
      });
    }
  }
}
