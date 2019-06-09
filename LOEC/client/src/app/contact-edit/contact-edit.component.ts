import { Component, OnInit } from '@angular/core';
import { Contacts } from '../models/contacts';
import { ContactsDataService } from '../services/contacts-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  editContact: Contacts = new Contacts();

  saveContact() {
    this.contactsData.editContact(this.editContact).subscribe(c =>
      this.router.navigate(["contactsList"]));
  }

  constructor(private contactsData: ContactsDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.contactsData
        .getContact(+param["id"])
        .subscribe(c => (this.editContact = c));
    });
  }
}