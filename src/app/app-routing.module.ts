import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InquiryDetailsComponent } from './components/inquiry-details/inquiry-details.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  { path: '', redirectTo: 'tabs/events', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'inquiry', component : InquiryDetailsComponent },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
