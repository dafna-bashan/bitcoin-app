import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactResolverService } from './services/contactResolverService';
import { AuthGuard } from './guards/auth.guard';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { BitcoinAppComponent } from './pages/bitcoin-app/bitcoin-app.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path: 'contact', component: ContactPageComponent,
     children: [
      { path: 'add', component: ContactEditPageComponent },
    ]
  },
  {
    path: 'contact/:id', component: ContactDetailsPageComponent,
    resolve: { contact: ContactResolverService },
    canActivate: [AuthGuard],
    children: [
      { path: 'edit', component: ContactEditPageComponent, resolve: { contact: ContactResolverService } }
    ]
  },
  {
    path: 'signup', component: SignupComponent,
    
  },
  {
    path: '', component: BitcoinAppComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, paramsInheritanceStrategy: 'always' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }



