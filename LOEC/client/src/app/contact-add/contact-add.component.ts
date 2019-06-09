import { Component, OnInit } from '@angular/core';
import { Contacts } from '../models/contacts';
import { ContactsDataService } from '../services/contacts-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {

  newContact: Contacts = new Contacts();

  addContact() {
    this.contactsData.addContact(this.newContact).subscribe(
      c =>
        this.router.navigate(["contactsList"]));
  }

  constructor(private contactsData: ContactsDataService, private router: Router) { }

  ngOnInit() {
  }

}
