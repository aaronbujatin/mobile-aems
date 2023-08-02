import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InquiryDetailsComponent } from './components/inquiry-details/inquiry-details.component';
import { LoginComponent } from './components/login/login.component';
import { AccountComponent } from './components/account/account.component';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'inquiry', component: InquiryDetailsComponent },
  { path: 'account', component: AccountComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
