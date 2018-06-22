import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../../../common/models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  getList() {
    return this.httpClient.get<Contact[]>('/api/contacts');
  }

  getById(id) {
    return this.httpClient.get<Contact>('/api/contacts/' + id);
  }

  create(contact) {
    return this.httpClient.post<Contact>('/api/contacts', contact);
  }
}
