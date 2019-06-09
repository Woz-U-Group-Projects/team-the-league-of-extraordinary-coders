import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Contacts } from '../models/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsDataService {

  contactsUrl = "http://localhost:8080/contacts";

  getContacts(): Observable<Contacts[]> {
    return this.http.get<Contacts[]>(this.contactsUrl);
  }

  getContact = (id: number): Observable<Contacts> => {
    return this.http.get<Contacts>(this.contactsUrl + "/" + id)
  }

  addContact(contacts: Contacts): Observable<Contacts> {
    return this.http.post<Contacts>(this.contactsUrl, contacts)
  }

  deleteContact(id: number): Observable<Contacts> {
    return this.http.delete<Contacts>(this.contactsUrl + "/" + id)
  }

  editContact(contacts: Contacts): Observable<Contacts> {
    return this.http.put<Contacts>(this.contactsUrl + "/" + contacts.id, contacts)
  }

  constructor(private http: HttpClient) { }
}