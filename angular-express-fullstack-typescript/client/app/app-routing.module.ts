import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts/contacts.component';
import { ContactsCreateComponent } from './contacts/contacts-create/contacts-create.component';
import { ContactsShowComponent } from './contacts/contacts-show/contacts-show.component';

const routes: Routes = [
  {
    path: 'contacts', // http://localhost:4200/contacts
    component: ContactsComponent,
    children: [
      {
        path: 'create',
        component: ContactsCreateComponent,
      },
      {
        path: ':id',
        component: ContactsShowComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
