import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsShowComponent } from './contacts-show/contacts-show.component';
import { ContactsCreateComponent } from './contacts-create/contacts-create.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RouterModule } from '@angular/router';
import { ContactService } from './contact.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [
    ContactsListComponent,
    ContactsShowComponent,
    ContactsCreateComponent,
    ContactsComponent
  ],
  providers: [
    // {provide: ContactService, useClass: ContactService}
    ContactService,
  ]
})
export class ContactsModule { }
