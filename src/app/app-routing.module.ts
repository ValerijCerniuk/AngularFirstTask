import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './component/contact/contact.component';
import { GreetingComponent } from './component/greeting/greeting.component';
import { UserListComponent } from './component/user-list/user-list.component';

const routes: Routes = [
  { path: 'greeting', component: GreetingComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'user-list', component: UserListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
