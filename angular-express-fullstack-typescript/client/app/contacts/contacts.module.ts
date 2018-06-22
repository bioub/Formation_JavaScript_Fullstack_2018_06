import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsShowComponent } from './contacts-show/contacts-show.component';
import { ContactsCreateComponent } from './contacts-create/contacts-create.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    ContactsListComponent,
    ContactsShowComponent,
    ContactsCreateComponent,
    ContactsComponent
  ]
})
export class ContactsModule { }
