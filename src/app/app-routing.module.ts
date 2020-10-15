import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { PromotionsComponent } from './promotions/promotions.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/benefits/travel/flight-centre'
  },
  {
    path: 'benefits',
    children: [
      {
        path: '',
        component: PromotionsComponent
      },
      {
        path: 'travel',
        component: ContentComponent,
        children: [
          {
            path: ':sub-product',
            component: ContentComponent
          }
        ]
      },
      {
        path: 'dining',
        component: ContentComponent
      },
      {
        path: 'accommodation',
        component: ContentComponent
      }
    ]
  },
  { path: '**', component: PromotionsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
