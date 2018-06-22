import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Contact } from '../../../../common/models/contact';

@Component({
  selector: 'ab-contacts-show',
  templateUrl: './contacts-show.component.html',
  styleUrls: ['./contacts-show.component.scss']
})
export class ContactsShowComponent implements OnInit {

  public contact: Contact;

  constructor(
    private contactService: ContactService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.pipe(
      map((params) => params.id),
      switchMap((id) => this.contactService.getById(id))
    )
    .subscribe((contact) => {
      this.contact = contact;
    });
  }

}
