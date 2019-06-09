import { Component, OnInit } from '@angular/core';
import { Contacts } from '../models/contacts';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactsDataService } from '../services/contacts-data.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contactsList: Contacts[];

  getContacts(): void {
    this.contactsData.getContacts().subscribe(
      c => (this.contactsList = c)
    );
  }

  deleteContact(id: number): void {
    this.contactsData.deleteContact(id).subscribe(
      c => this.getContacts());
  }

  constructor(private contactsData: ContactsDataService, private router: Router, private route: ActivatedRoute) {
    this.contactsData.getContacts().subscribe(c => (this.contactsList = c));
  }

  ngOnInit() {
  }

}
