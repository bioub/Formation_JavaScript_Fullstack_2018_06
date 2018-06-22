import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../../common/models/contact';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ab-contacts-create',
  templateUrl: './contacts-create.component.html',
  styleUrls: ['./contacts-create.component.scss']
})
export class ContactsCreateComponent implements OnInit {

  public contact = new Contact();

  constructor(
    private contactService: ContactService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.contactService.create(this.contact).subscribe((contact) => {
      this.router.navigate(['contacts', contact._id]);
    });
  }
}
