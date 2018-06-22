import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Observable } from 'rxjs';
import { Contact } from '../../../../common/models/contact';

@Component({
  selector: 'ab-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  contacts$: Observable<Contact[]>;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contacts$ = this.contactService.getList();
  }

}
