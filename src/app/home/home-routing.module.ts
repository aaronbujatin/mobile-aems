import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'events',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/events/events.module').then(m => m.EventsPageModule)
          }
        ]
      },
      {
        path: 'planner',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/planner/planner.module').then(m => m.PlannerPageModule)
          }
        ]
      },
      {
        path: 'vendor',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/vendor/vendor.module').then(m => m.VendorPageModule)
          }
        ]
      },
      {
        path: 'account',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/account/account.module').then(m => m.AccountPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo : '/tabs/account',
        pathMatch : 'full'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }
